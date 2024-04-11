'use client';
import MessageBlock from "./components/MessageBlock";
import Image from "next/image";
import bgeIcon from "@/../public/bgeIcon.svg";
import { Input } from "../ui/input";
import { ChevronLeft, SendHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { Message, PostMessage } from "@/app/schema/message";
import Cookies from 'js-cookie';
import io from 'socket.io-client';
import { generateRoomId } from "@/lib/utils";
import './ChatPage.scss'


interface ChatPageProps {
    postId: string,
    receiverName: string,
    receiverId: string,
    location: string,
    boardGameName: string,
    messages: Message[];

}

const socket = io('ws://localhost:8000', { transports: ['websocket'] });
export default function ChatPage({ postId, receiverName, receiverId, location, boardGameName, messages: cxtMessages }: ChatPageProps) {

    const [userId, setUserId] = useState<string>(Cookies.get('userId') ?? '');
    const [messages, setMessages] = useState<Message[]>(cxtMessages);;
    const [input, setInput] = useState<string>('');
    const [roomId, setRoomId] = useState<string>(generateRoomId(userId, receiverId, postId));

    const sendMessage = () => {
        socket.emit('message',
            {
                timestamp: new Date(),
                text: input,
                postId: postId,
                senderUserID: userId,
                receiverUserID: receiverId,
                hasReceiverSeen: false,
            },
            roomId
        )
        setInput('');
    }



    useEffect(() => {
        setRoomId(generateRoomId(userId, receiverId, postId));
        socket.on('connect', () => {
            console.log('connected');
        });
        socket.emit('join-room', roomId);

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
            //
            console.log(reason);
        });

        return () => {
        }

    }, [receiverId, userId, postId])

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
            <div className="grid h-[80dvh] overflow-y-auto px-2" id="scroller">
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

            <div className="w-full flex flex-row justify-start gap-5 items-center h-[5dvh]  absolute bottom-0 px-2">
                <Input className="w-3/5" placeholder="Type a message" onChange={(e) => setInput(e.target.value)} value={input} />
                <SendHorizontal onClick={() => sendMessage()} />
            </div>

        </div>
    )
}

