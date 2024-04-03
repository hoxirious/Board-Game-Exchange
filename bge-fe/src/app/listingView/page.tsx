"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, FilterIcon } from "lucide-react";

import { GameCover } from "@/components/gameCover";
import { listOfGames } from "./data/games";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { BGEAdvancedSearchComponent } from "@/components/bge-advanced-search";
import { 
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";

const page = () => {

    return (
        <section className="flex flex-col items-center bg-gray-100">
            <div className="flex w-full space-x-2 p-8 md:px-96">
                <SearchIcon className="w-5 h-5 absolute ml-3.5 mt-2.5 text-primary-200"/>
                <Input type="search" placeholder="Type a command or search..." className="pr-3 pl-8"/>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button type="submit" variant="outline" className="text-primary-300 hover:text-primary-400">
                            <FilterIcon />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-screen">
                        <ScrollArea className="h-[30rem]">
                            <BGEAdvancedSearchComponent />
                        </ScrollArea>
                    </PopoverContent>
                </Popover>
            </div>
            <ScrollArea className="h-[32.9rem]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 px-4">
                    {listOfGames.map((game) => (
                        <GameCover
                        key={game.name}
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