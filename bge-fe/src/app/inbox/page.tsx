'use client';
import ChatListPage from "@/components/Inbox/ChatListPage";
import ChatPage from "@/components/Inbox/ChatPage";

export default function page() {
    return (
        <div className="grid grid-cols-6  divide-x gap-2 overflow-hidden">
            <div className="col-span-2">
                <ChatListPage />
            </div>
            <div className="col-span-4">
                <ChatPage receiverName={"John Doe"} receiverId={"1"} location={"New York"} boardGameName={"Chess"} />
            </div>
        </div>
    )
}

