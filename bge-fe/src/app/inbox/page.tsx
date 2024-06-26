'use client';
import ChatListPage from "@/components/Inbox/ChatListPage";
import ChatPage from "@/components/Inbox/ChatPage";
import { getUserMessages } from "@/endpoints/inbox.endpoint";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/endpoints/user.endpoint";
import Cookies from 'js-cookie';
import { getPost } from "@/endpoints/post.endpoint";
import { User } from "../schema/user";
import { Post } from "../schema/Post";
import { BlankState } from "@/components/blankState";

export interface ChatObj {
    postId: string,
    externalUserId: string,
    messsages: any[]
}


export default function page() {
    const [userId, setUserId] = useState<string>(Cookies.get('userId') ?? '');
    const [externalUsers, setExternalUsers] = useState<Map<string, User>>(new Map());
    const [posts, setPosts] = useState<Map<string, Post>>(new Map());
    const [allChatObjs, setAllChatObjs] = useState<ChatObj[]>([]);
    const [selectedExternalUser, setSelectedExternalUser] = useState<ChatObj>(allChatObjs[0]);

    const setChatPage = (chatObj: ChatObj) => {
        messagesRefetch();
        setSelectedExternalUser(chatObj);
    };

    const fetchItems = async () => {
        const res = await getUserMessages(userId);
        if (res) {

            let uniqueExternalUserIds = new Set<string>();
            let uniquePostIds = new Set<string>();
            let _allChatObjs: ChatObj[] = [];
            let postMap = new Map<string, Post>();
            let userMap = new Map<string, User>();

            console.log("Res is: ", res)

            for (let i = 0; i < res.length; i++) {
                uniquePostIds.add(res[i][0]);
                res[i][1].forEach(([userId, messages]: [string, any[]]) => {
                    uniqueExternalUserIds.add(userId);
                    _allChatObjs.push({
                        postId: res[i][0],
                        externalUserId: userId,
                        messsages: messages
                    })
                })
            }

            console.log("Unique external user ids are: ", uniqueExternalUserIds)
            console.log("Unique post ids are: ", uniquePostIds)
            console.log("All chat objs are: ", _allChatObjs)

            const posts = await Promise.all(Array.from(uniquePostIds).map(async (postId) => {
                const post = await getPost(postId);
                if (post) {
                    postMap.set(postId, post);
                }
                return post;
            }))

            const externalUsers = await Promise.all(Array.from(uniqueExternalUserIds).map(async (userId) => {
                const user = await getUser(userId);
                if (user) {
                    userMap.set(userId, user);
                }
                return user;
            }))

            setExternalUsers(userMap);
            setPosts(postMap);
            setAllChatObjs(_allChatObjs);
        }
        return res;
    }

    const { isLoading, data, error, refetch: messagesRefetch } = useQuery(
        {
            queryKey: ['postMessages', userId],
            queryFn: fetchItems,
        }
    );

    if (isLoading && selectedExternalUser) {
        <BlankState variant="loading" title="Loading messages" body="It shouldn't take too long..."></BlankState>
    }

    return (
        <div>
            <div className="md:hidden grid dont-overflow-body grid-cols-6 divide-x gap-2 overflow-hidden">
                {selectedExternalUser ? (
                    <div className="col-span-6 bg-background_page">
                        {allChatObjs.length > 0 && selectedExternalUser &&
                            <ChatPage
                                onBack={() => {
                                    setSelectedExternalUser(null)
                                }}
                                selectedChatObj={selectedExternalUser}
                                externalUsers={externalUsers}
                                posts={posts} />
                        }
                        {allChatObjs.length == 0 && !selectedExternalUser &&
                            allChatObjs.length == 0 &&
                            <div className="h-full w-full flex items-center justify-center">
                                <BlankState variant="empty" title="No messages" body="You don't have any messages yet."></BlankState>
                            </div>
                        }
                    </div>
                ) : (
                    <div className="col-span-6">
                        <ChatListPage setExternalUser={setChatPage} chatObjs={allChatObjs} posts={posts} externalUsers={externalUsers} />
                    </div>
                )}
            </div>
            <div className="md:grid hidden dont-overflow-body grid-cols-6 divide-x overflow-hidden">
                <div className="col-span-2">
                    <ChatListPage setExternalUser={setChatPage} chatObjs={allChatObjs} posts={posts} externalUsers={externalUsers} />
                </div>
                <div className="col-span-4 bg-background_page">
                    {allChatObjs.length > 0 && selectedExternalUser &&
                        <ChatPage
                            onBack={() => {
                                setSelectedExternalUser(null)
                            }}
                            selectedChatObj={selectedExternalUser}
                            externalUsers={externalUsers}
                            posts={posts} />
                    }
                    {allChatObjs.length == 0 && !selectedExternalUser &&
                        allChatObjs.length == 0 &&
                        <div className="h-full w-full flex items-center justify-center">
                            <BlankState variant="empty" title="No messages" body="You don't have any messages yet."></BlankState>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

