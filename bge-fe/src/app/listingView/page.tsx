"use client"
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { CircleSlash2, SearchIcon, FilterIcon, X } from "lucide-react";

import { GameCover } from "@/components/gameCover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { BGEAdvancedSearchComponent, initialQuery } from "@/components/bge-advanced-search";
import { cn } from "@/lib/utils";


import useSWR  from 'swr'
import { fetcher } from '@/lib/utils'

const page = () => {
    const [query, setQuery] = useState(initialQuery);
    const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

    const { data, error, isLoading } = useSWR(`http://localhost:8080/posts/search?${(new URLSearchParams(query)).toString()}`, fetcher);

    useEffect(() => {
        console.log(JSON.stringify(query));
    }, [query]);

    function handleSearchInput(e) {
        setQuery(query => ({...query, title: e.target.value}));
    }

    return (
        <section className="flex flex-col items-center relative">
            <div className="flex flex-wrap w-full md:max-w-screen-md py-8 px-4 z-20">
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
                        {/* TODO: map bge query to actual query (query.board_games to title and what not) */}
                        <BGEAdvancedSearchComponent onSearch={(query) => {
                            console.log(query);
                            // sending too much params...
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
            <ScrollArea className="h-[32.9rem] z-10">
                {!isLoading && data && data.length === 0 ? (
                    <div className="text-center mt-16 w-full">
                        <CircleSlash2 strokeWidth={1} size={100} className="block w-fit mx-auto" />
                        <h1 className="text-3xl mb-4">We're sorry but we couldn't find any posts matching your query.</h1>
                    </div>
                ): null}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 px-4">
                    {!isLoading && data.map((game) => (
                        <GameCover
                        key={game._id}
                        game={game}
                        className=""
                        />
                    ))}
                </div>
            </ScrollArea>
        </section>
    )
}

export default page;