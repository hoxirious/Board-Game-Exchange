"use client"
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { SearchIcon, FilterIcon, X } from "lucide-react";
import { BlankState } from '@/components/blankState'

import { PostCover } from "@/components/postCover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { BGEAdvancedSearchComponent, initialQuery } from "@/components/bge-advanced-search";
import { cn, domain } from "@/lib/utils";

import Cookies from 'js-cookie'


import useSWR  from 'swr'
import { fetcher } from '@/lib/utils'

const page = () => {
    const [query, setQuery] = useState(initialQuery);
    const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

    const { data, error, isLoading } = useSWR(`${domain}/posts/search?${(new URLSearchParams(query)).toString()}`, fetcher);

    useEffect(() => {
        console.log(JSON.stringify(query));
    }, [query]);

    if(error) {
        if(error.status === 404) {
            return (
                <BlankState variant="404" title="We could not find this post." body={
                    <Button asChild>
                        <Link href="/posts">Look for other posts</Link>
                    </Button>
                }></BlankState>
            );
        }

        return (
            <BlankState variant="error" title="Oopsie Daisy..." body="Something went really wrong. Please try again later. Or, contact us."></BlankState>
        )
    }

    function handleSearchInput(e) {
        setQuery(query => ({...query, title: e.target.value}));
    }

    const userId = Cookies.get('userId');
    console.log(userId);

    return (
        <section className="flex flex-col items-center relative">
            <div className="sticky inset-0 top-12 bg-page_background flex flex-wrap w-full py-8 px-4 z-20">
                <div className="md:max-w-screen-md lg:max-w-screen-lg w-full mx-auto">
                    <div className="flex w-full">
                        <SearchIcon className="w-5 h-5 absolute ml-1.5 mt-2.5 text-primary-200"/>
                        <Input value={query.title || ''} type="search" placeholder="Search for a post..." className="pr-3 pl-8 mr-2 w-full" onChange={(e) => handleSearchInput(e)}/>
                        <Label htmlFor="searchToggle" className={cn(buttonVariants({ variant: 'outline', size: 'default', className: "text-primary-300 hover:text-primary-400" }))} onClick={() => setShowAdvancedSearch((show) => !show)}>
                            <FilterIcon />
                        </Label>
                    </div>
                    <div className="relative w-full">
                        <input type="checkbox" id="searchToggle" className="peer hidden" readOnly checked={showAdvancedSearch}/>
                        <section className="w-full fixed md:absolute top-0 left-0 peer-checked:visible invisible">
                            <BGEAdvancedSearchComponent onSearch={(query) => {
                                console.log(query);
                                // sending too much params...
                                // didnt want to rename the old properties so just added the actual ones on to the query :)
                                setQuery(oldQuery => ({...query, title: query.board_games, category: query.board_game_category}))
                                setShowAdvancedSearch(() => false)
                            }} closeButton={
                                <Label htmlFor="searchToggle" onClick={() => setShowAdvancedSearch((show) => !show)}>
                                    <X />
                                </Label>
                            }/>
                        </section>
                    </div>
                </div>
            </div>
            <div className="pb-32 z-10">
                {isLoading ? (
                    <BlankState variant="loading" title="Loading..." body=""></BlankState>
                ) : null}
                {!isLoading && data && data.length === 0 ? (
                    <BlankState variant="404" title="We could not match your query with any posts." body=""></BlankState>
                ): null}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 px-4">
                    {!isLoading && data.map((post) => (
                        <PostCover
                        key={post._id}
                        post={post}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default page;