'use client';
import { SearchIcon } from "lucide-react";
import ChatItem, { ChatItemProps } from "./components/ChatItem";
import { Input } from "../ui/input";
import { getUserMessages } from "@/endpoints/inbox.endpoint";
import { useEffect } from "react";

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
export default function ChatListPage() {
    const items: ChatItemProps[] = [{
        userSentTo: {
            name: "John Doe",
            id: "1",
            location: "New York"
        },
        latestMessage: "Hello, how are you?",
        isUnread: true
    }, {
        userSentTo: {
            name: "Jane Doe",
            id: "2",
            location: "Los Angeles"
        },
        latestMessage: "I'm doing well, thank you.",
        isUnread: false
    }, {
        userSentTo: {
            name: "Jane Doe",
            id: "2",
            location: "Los Angeles"
        },
        latestMessage: "I'm doing well, thank you.",
        isUnread: false
    }, {
        userSentTo: {
            name: "Jane Doe",
            id: "2",
            location: "Los Angeles"
        },
        latestMessage: "I'm doing well, thank you.",
        isUnread: false
    }, {
        userSentTo: {
            name: "Jane Doe",
            id: "2",
            location: "Los Angeles"
        },
        latestMessage: "I'm doing well, thank you.",
        isUnread: false
    }, {
        userSentTo: {
            name: "Jane Doe",
            id: "2",
            location: "Los Angeles"
        },
        latestMessage: "I'm doing well, thank you.",
        isUnread: false
    },
    ]

    return (
        <div className="px-4 h-full">
            <div className="border-b-2 h-[15dvh]">
                <h1 className="text-5xl font-bold m-4">Inbox</h1>
                <div className="pb-2">
                    <SearchInputWithIcon />
                </div>
            </div>
            <div className="overflow-y-auto h-[85dvh]">
                {items.map((item, index) => {
                    return (
                        <ChatItem key={`${JSON.stringify(item)}_${index}_${new Date().getTime()}`} userSentTo={item.userSentTo} latestMessage={item.latestMessage} isUnread={item.isUnread} />
                    )
                })}
            </div>
        </div>
    )

}
