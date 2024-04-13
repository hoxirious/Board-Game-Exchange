import ChatItem from "./components/ChatItem";
import { User } from "@/app/schema/user";
import { ChatObj } from "@/app/inbox/page";
import { Post } from "@/app/schema/Post";

interface ChatListPageProps {
    chatObjs: ChatObj[],
    externalUsers: Map<string, User>,
    posts: Map<string, Post>,
    setExternalUser: (externalUser: ChatObj) => void
}

export default function ChatListPage({ chatObjs, externalUsers, posts, setExternalUser }: ChatListPageProps) {
    return (
        <div className="h-full">
            <div className="border-b-2 p-4">
                <h1 className="text-5xl font-bold m-4">Inbox</h1>
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
