'use client';
import { SearchIcon } from "lucide-react";
import ChatItem, { ChatItemProps } from "./components/ChatItem";
import { Input } from "../ui/input";
import { useQuery } from "@tanstack/react-query";
import { PostMessage } from "@/app/schema/message";
import { User } from "@/app/schema/user";

function SearchInputWithIcon() {
    return (
        <div className="flex flex-row items-center ">
            <div className="bg-gray-300 w-10 h-10 rounded-sm flex justify-center items-center">
                <SearchIcon />
            </div>
            <Input className="w-full" placeholder="Search inbox" />
        </div>
    )
}

interface ChatListPageProps {
    receivers: (User & { text: string, isUnread: boolean })[]
}

export default function ChatListPage({ receivers }: ChatListPageProps) {

    return (
        <div className="px-4 h-full">
            <div className="border-b-2 h-[15dvh]">
                <h1 className="text-5xl font-bold m-4">Inbox</h1>
                <div className="pb-2">
                    <SearchInputWithIcon />
                </div>
            </div>
            <div className="overflow-y-auto h-[85dvh]">
                {receivers && receivers.map((item, index) => {
                    return (
                        <ChatItem key={`${index}_${new Date().getTime()}`} userSentTo={{
                            name: item.fullName,
                            location: item.location == "" ? "New York" : item.location
                        }} latestMessage={item.text} isUnread={item.isUnread} />
                    )
                })}
            </div>
        </div>
    )

}
