'use client';
import MessageBlock, { MessageBlockProps } from "./components/MessageBlock";
import Image from "next/image";
import bgeIcon from "@/../public/bgeIcon.svg";
import { Input } from "../ui/input";
import { ArrowLeft, ArrowLeftIcon, ChevronLeft, SendHorizontal, StepBackIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { getUserMessages } from "@/endpoints/inbox.endpoint";
import { Message, PostMessage } from "@/app/schema/message";


interface ChatPageProps {
    receiverName: string,
    receiverId: string,
    location: string,
    boardGameName: string,
}

export default function ChatPage({ receiverName, receiverId, location, boardGameName }: ChatPageProps) {

    const [messages, setMessages] = useState<Message[]>([]);
    const [userId, setUserId] = useState<string>('661222f06e33e2de2ddb83b0');
    const [postId, setPostId] = useState<string>('661222f06e33e2de2ddb83b2');
    const [externalUserId, setExternalUserId] = useState<string>('661222f06e33e2de2ddb83b1')

    useEffect(() => {
        const fetchItems = async () => {
            const res = await getUserMessages('661222f06e33e2de2ddb83b0');
            if (res) {
                setMessages(res[postId][externalUserId]);
            }
        }
        fetchItems();
    }, []);

    return (
        <div className="h-full w-full">
            <div className="h[15dvh] border-b-2">
                <div className="grid grid-cols-4 md:grid-cols-3 border-b-2 items-center first:border-t-2 p-2 gap-4 border-gray-100">
                    <ChevronLeft className="block col-span-1 md:hidden" />
                    <Image src={bgeIcon} alt="avatar" width={200} className="col-span-1" />
                    <div className="col-span-2 text-left">
                        <div className="text-black">
                            <div className="text-sm font-bold text-black">{receiverName}</div>
                            <div className="text-sm text-black">{boardGameName}</div>
                            <div className="text-sm text-black">{location}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid h-[80dvh] overflow-y-auto px-2">
                {
                    messages && messages.length > 0 && messages.map((message, index) => {

                        console.log(messages);
                        return (
                            <MessageBlock key={`${JSON.stringify(message)}_${index}_${message.timestamp}`}
                                messageType={message.senderUserID == userId ? 'sender' : 'receiver'}
                                message={{
                                    content: message.text,
                                    time: message.timestamp.toString(),
                                    senderName: message.senderUserID,
                                    senderId: message.senderUserID
                                }} />
                        )
                    })
                }
            </div>

            <div className="w-full flex flex-row justify-start gap-5 items-center h-[5dvh]  absolute bottom-0 px-2">
                <Input className="w-3/5" placeholder="Type a message" />
                <SendHorizontal />
            </div>

        </div>
    )
}

