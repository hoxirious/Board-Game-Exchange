'use client';
import { SearchInputWithIcon } from "../bge-advanced-search";
import ChatItem, { ChatItemProps } from "./components/ChatItem";

export default function ChatListPage() {

    const items: ChatItemProps[] = [{
        userSentTo: {
            name: "John Doe",
            id: "1",
            location: "New York"
        },
        latestMessage: "Hello, how are you?",
        isUnread: true
    } as ChatItemProps, {
        userSentTo: {
            name: "Jane Doe",
            id: "2",
            location: "Los Angeles"
        },
        latestMessage: "I'm doing well, thank you.",
        isUnread: false
    } as ChatItemProps, {
        userSentTo: {
            name: "Jane Doe",
            id: "2",
            location: "Los Angeles"
        },
        latestMessage: "I'm doing well, thank you.",
        isUnread: false
    } as ChatItemProps, {
        userSentTo: {
            name: "Jane Doe",
            id: "2",
            location: "Los Angeles"
        },
        latestMessage: "I'm doing well, thank you.",
        isUnread: false
    } as ChatItemProps, {
        userSentTo: {
            name: "Jane Doe",
            id: "2",
            location: "Los Angeles"
        },
        latestMessage: "I'm doing well, thank you.",
        isUnread: false
    } as ChatItemProps, {
        userSentTo: {
            name: "Jane Doe",
            id: "2",
            location: "Los Angeles"
        },
        latestMessage: "I'm doing well, thank you.",
        isUnread: false
    } as ChatItemProps,
    ]

    return (
        <div className="px-4 h-full">
            <div className="bg-white h-[15dvh]">
                <h1 className="text-5xl font-bold m-4">Inbox</h1>
                <div className="pb-2">
                    <SearchInputWithIcon />
                </div>
            </div>
            <div className="overflow-y-auto h-[85dvh]">
                {items.map((item) => {
                    return (
                        <ChatItem userSentTo={item.userSentTo} latestMessage={item.latestMessage} isUnread={item.isUnread} />
                    )
                })}
            </div>
        </div>
    )

}
