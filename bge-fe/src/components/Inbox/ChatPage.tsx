'use client';
import MessageBlock from "./components/MessageBlock";
import Image from "next/image";
import bgeIcon from "@/../public/bgeIcon.svg";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Message } from "@/app/schema/message";
import Cookies from 'js-cookie';
import io from 'socket.io-client';
import { generateRoomId, wsDomain } from "@/lib/utils";
import './ChatPage.scss'
import { ChatObj } from "@/app/inbox/page";
import { Post } from "@/app/schema/Post";
import { User } from "@/app/schema/user";


interface ChatPageProps {
    selectedChatObj: ChatObj,
    externalUsers: Map<string, User>,
    posts: Map<string, Post>
}

export default function ChatPage({ selectedChatObj, externalUsers, posts, onBack }: ChatPageProps) {

    const [userId, setUserId] = useState<string>(Cookies.get('userId') ?? '');
    const [messages, setMessages] = useState<Message[]>(selectedChatObj.messsages);;
    const [input, setInput] = useState<string>('');
    const [roomId, setRoomId] = useState<string>(generateRoomId(userId, selectedChatObj.externalUserId, selectedChatObj.postId));
    const [ws, setWs] = useState<any>(null);

    const sendMessage = () => {
        ws.emit('message',
            {
                timestamp: new Date(),
                text: input,
                postId: selectedChatObj.postId,
                senderUserID: userId,
                receiverUserID: selectedChatObj.externalUserId,
                hasReceiverSeen: false,
            },
            roomId
        )
        setInput('');
    }

    useEffect(() => {
        const socket = io(`${wsDomain}`, { transports: ['websocket'] });

        setWs(socket);
        const newRoomId = generateRoomId(userId, selectedChatObj.externalUserId, selectedChatObj.postId);
        setRoomId(newRoomId);
        socket.on('connect', () => {
            console.log('connected');
        });
        socket.emit('join-room', newRoomId);

        socket.on('message', (msg: Message) => {
            console.log("Received Message: ", msg);
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        socket.on("connect_error", (err) => {
            // the reason of the error, for example "xhr poll error"
            console.log(err.message);

            console.log(err.cause);
        });

        socket.on("disconnect", (reason) => {
            // the reason of the disconnection (voluntary or not)
            console.log(reason);
        });

        setMessages(selectedChatObj.messsages);

        return () => {
            socket.off('message', (msg: Message) => {
                console.log("Received Message: ", msg);
                setMessages((prevMessages) => [...prevMessages, msg]);
            });

            socket.off("connect_error", (err) => {
                // the reason of the error, for example "xhr poll error"
                console.log(err.message);

                console.log(err.cause);
            });

            socket.off("disconnect", (reason) => {
                // the reason of the disconnection (voluntary or not)
                console.log(reason);
            });

            socket.disconnect();
        }

    }, [selectedChatObj, userId])

    const handleKeyUp = (e: any) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    }

    return (
        <div className="h-full w-full">
            <div className="h-[15dvh] border-b-2">
                <div className="flex border-b-2 items-center first:border-t-2 p-2 gap-4 border-gray-100">
                    <Button variant="ghost" onClick={onBack}>
                        <ChevronLeft />
                    </Button>
                    <Image src={bgeIcon} alt="avatar" width={200} className="col-span-1" />
                    <div className="col-span-2 text-left">
                        <div className="text-black">
                            <div className="text-sm font-bold text-black">{externalUsers.get(selectedChatObj.externalUserId)?.fullName}</div>
                            <div className="text-sm text-black">{posts.get(selectedChatObj.postId)?.title}</div>
                            <div className="text-sm text-black">{externalUsers.get(selectedChatObj.externalUserId)?.location}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid h-[70dvh] overflow-y-auto px-2 pt-2" id="scroller">
                {
                    messages && messages.length > 0 && messages.map((message, index) => {
                        return (
                            <MessageBlock key={`${index}_${message.timestamp}`}
                                messageType={message.senderUserID == userId ? "right" : "left"}
                                message={{
                                    content: message.text.trimEnd(),
                                    time: message.timestamp.toString(),
                                    senderName: message.senderUserID,
                                    senderId: message.senderUserID
                                }} />
                        )
                    })
                }
                <div id="anchor"></div>
            </div>

            <div className="w-full bg-page_background flex flex-row justify-start gap-5 items-center bottom-[4rem] mt-[-0.5rem] right-0 p-2">
                <Input onKeyUp={handleKeyUp} className="w-full" placeholder="Type a message" onChange={(e) => setInput(e.target.value)} value={input} />
            </div>

        </div>
    )
}

