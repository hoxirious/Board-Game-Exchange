'use client';
import ChatListPage from "@/components/Inbox/ChatListPage";
import ChatPage from "@/components/Inbox/ChatPage";
import { getUserMessages } from "@/endpoints/inbox.endpoint";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export default function page() {
    const [userId, setUserId] = useState<string>('661222f06e33e2de2ddb83b0');
    const [postId, setPostId] = useState<string>('');
    const [externalUserId, setExternalUserId] = useState<string>('')


    const fetchItems = async () => {
        const res = await getUserMessages(userId);
        if (res) {
            setPostId(Object.keys(res)[0]);
            setExternalUserId(Object.keys(res[Object.keys(res)[0]])[0]);
        }
    }

    const { loading, data, error } = useQuery('postMessages', fetchItems);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div className="grid grid-cols-6  divide-x gap-2 overflow-hidden">
            <div className="col-span-2">
                <ChatListPage />
            </div>
            <div className="col-span-4">
                <ChatPage receiverName={"John Doe"} receiverId={externalUserId} location={"New York"} boardGameName={"Chess"} />
            </div>
        </div>
    )
}

