import { SearchIcon } from "lucide-react";
import ChatItem, { ChatItemProps } from "./components/ChatItem";
import { Input } from "../ui/input";
import { useQuery } from "@tanstack/react-query";
import { PostMessage } from "@/app/schema/message";
import { User } from "@/app/schema/user";
import { ChatObj } from "@/app/inbox/page";
import { Post } from "@/app/schema/Post";

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
    chatObjs: ChatObj[],
    externalUsers: Map<string, User>,
    posts: Map<string, Post>,
    setExternalUser: (externalUser: ChatObj) => void
}

export default function ChatListPage({ chatObjs, externalUsers, posts, setExternalUser }: ChatListPageProps) {
    return (
        <div className="px-4 h-full">
            <div className="border-b-2 h-[15dvh]">
                <h1 className="text-5xl font-bold m-4">Inbox</h1>
                <div className="pb-2">
                    <SearchInputWithIcon />
                </div>
            </div>
            <div className="overflow-y-auto h-[85dvh]">
                {chatObjs && chatObjs.map((item, index) => {
                    return (
                        <div className="hover:bg-gray-200" onClick={() => setExternalUser(item)}>
                            <ChatItem key={`${index}_${new Date().getTime()}`} userSentTo={{
                                name: externalUsers.get(item.externalUserId)?.fullName ?? "Not available",
                                location: externalUsers.get(item.externalUserId)?.location ?? "Not available",
                            }} isUnread={false} boardGame={posts.get(item.postId)?.title ?? "Not available"} />
                        </div>
                    )
                })}
            </div>
        </div>
    )

}
