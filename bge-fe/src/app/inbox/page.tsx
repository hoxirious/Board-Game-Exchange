'use client';
import ChatListPage from "@/components/Inbox/ChatListPage";
import ChatPage from "@/components/Inbox/ChatPage";
import { getUserMessages } from "@/endpoints/inbox.endpoint";
import { useEffect, useState } from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getUser } from "@/endpoints/user.endpoint";
import Cookies from 'js-cookie';

export default function page() {
    const queryClient = useQueryClient();
    const [userId, setUserId] = useState<string>(Cookies.get('userId') ?? '');
    const [firstPostId, setFirstPostId] = useState<string>('');
    const [externalUserIds, setExternalUserIds] = useState<string[]>([]);
    const [externalUsers, setExternalUsers] = useState<any[]>([]);
    const [postIds, setPostIds] = useState<string[]>([]);
    const [firstExternalUserId, setFirstExternalUserId] = useState<string>('')


    const fetchItems = async () => {
        const res = await getUserMessages(userId);
        if (res) {
            setFirstPostId(Object.keys(res[0])[0]);
            setFirstExternalUserId(Object.keys(res[0][Object.keys(res[0])[0]])[0]);

            const fetchPostIds: string[] = [];
            const fetchExternalUserIds: string[] = [];
            const latestMessages: { text: string | undefined, isUnread: boolean | undefined }[] = [];

            for (let i = 0; i < res.length; i++) {
                const postRef = Object.keys(res[i])[0];
                const externalUserRef = Object.keys(res[i][Object.keys(res[i])[0]])[0];

                fetchPostIds.push(postRef);
                fetchExternalUserIds.push(externalUserRef);

                latestMessages.push({
                    text: res[i][postRef][externalUserRef][0].text,
                    isUnread: res[i][postRef][externalUserRef][0].hasReceiverSeen
                })
            }

            setPostIds(fetchPostIds);
            setExternalUserIds(fetchExternalUserIds);
            console.log("External user ids are: ", fetchExternalUserIds)

            const externalUsers = await Promise.all(fetchExternalUserIds.map(async (userId, index) => {
                const user = await getUser(userId);
                console.log({
                    ...user,
                    ...latestMessages[index]
                })
                return {
                    ...user,
                    ...latestMessages[index]
                };
            }))

            setExternalUsers(externalUsers);
        }
        return res;
    }

    const { isLoading, data, error } = useQuery(
        {
            queryKey: ['postMessages', userId],
            queryFn: fetchItems,
        }
    );

    if (isLoading && firstPostId == '' && firstExternalUserId == '') return <p>Loading...</p>
    return (
        <div className="grid grid-cols-6  divide-x gap-2 overflow-hidden">
            <div className="col-span-2">
                <ChatListPage receivers={externalUsers} />
            </div>
            <div className="col-span-4">
                {externalUsers.length > 0 &&
                    <ChatPage
                        receiverName={"John Doe"}
                        postId={firstPostId}
                        receiverId={firstExternalUserId}
                        location={"New York"}
                        boardGameName={"Chess"}
                        messages={data![0][firstPostId][firstExternalUserId]} />
                }
            </div>
        </div>
    )
}

