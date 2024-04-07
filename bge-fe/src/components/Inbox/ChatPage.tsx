'use client';
import MessageBlock, { Message, MessageBlockProps } from "./components/MessageBlock";
import Image from "next/image";
import bgeIcon from "@/../public/bgeIcon.svg";
import { Input } from "../ui/input";
import { ArrowLeft, ArrowLeftIcon, ChevronLeft, SendHorizontal, StepBackIcon } from "lucide-react";


interface ChatPageProps {
    receiverName: string,
    receiverId: string,
    location: string,
    boardGameName: string,
}

export default function ChatPage({ receiverName, receiverId, location, boardGameName }: ChatPageProps) {

    const messages: MessageBlockProps[] = [
        {
            message: {
                content: "Hello",
                time: "12:00",
                senderName: "John Doe",
                senderId: "1"
            },
            messageType: "receiver"
        }, {
            message: {

                content: "Hello",
                time: "12:00",
                senderName: "John Doe",
                senderId: "1"
            },
            messageType: "sender"
        }, {
            message: {

                content: "Hello",
                time: "12:00",
                senderName: "John Doe",
                senderId: "1"
            },
            messageType: "sender"
        }, {
            message: {

                content: "Hello",
                time: "12:00",
                senderName: "John Doe",
                senderId: "1"
            },
            messageType: "receiver"
        }, {
            message: {

                content: "Hello",
                time: "12:00",
                senderName: "John Doe",
                senderId: "1"
            },
            messageType: "sender"
        }, {
            message: {

                content: "Hello",
                time: "12:00",
                senderName: "John Doe",
                senderId: "1"
            },
            messageType: "receiver"
        }, {
            message: {

                content: "Hello",
                time: "12:00",
                senderName: "John Doe",
                senderId: "1"
            },
            messageType: "sender"
        }, {
            message: {

                content: "Hello",
                time: "12:00",
                senderName: "John Doe",
                senderId: "1"
            },
            messageType: "receiver"
        }, {
            message: {

                content: "Hello",
                time: "12:00",
                senderName: "John Doe",
                senderId: "1"
            },
            messageType: "sender"
        }, {
            message: {

                content: "Hello",
                time: "12:00",
                senderName: "John Doe",
                senderId: "1"
            },
            messageType: "receiver"
        },
        {
            message: {

                content: "Hello I am a very long text. If you see this, this mean it works. but if you dont see this it does mean it doesnt work ok?",
                time: "12:00",
                senderName: "John Doe",
                senderId: "1"
            },
            messageType: "sender"
        }, {
            message: {

                content: "Hello",
                time: "12:00",
                senderName: "John Doe",
                senderId: "1"
            },
            messageType: "receiver"
        }, {
            message: {

                content: "Hello",
                time: "12:00",
                senderName: "John Doe",
                senderId: "1"
            },
            messageType: "sender"
        }, {
            message: {

                content: "Hello",
                time: "12:00",
                senderName: "John Doe",
                senderId: "1"
            },
            messageType: "receiver"
        }, {
            message: {

                content: "Hello Imagine this is a very long text. If you see this, this mean it works. but if you dont see this it does mean it doesnt work ok?",
                time: "12:00",
                senderName: "John Doe",
                senderId: "1"
            },
            messageType: "receiver"
        }, {
            message: {

                content: "Hello Imagine this is a very long text. If you see this, this mean it works. but if you dont see this it does mean it doesnt work ok?",
                time: "12:00",
                senderName: "John Doe",
                senderId: "1"
            },
            messageType: "sender"
        }, {
            message: {

                content: "Hello",
                time: "12:00",
                senderName: "John Doe",
                senderId: "1"
            },
            messageType: "receiver"
        },]

    return (
        <div className="h-full w-full">
            <div className="h[15dvh] border-b-2">
                <div className="grid grid-cols-4 md:grid-cols-3 border-b-2 items-center first:border-t-2 p-2 gap-4 border-gray-100">
                    <ChevronLeft className="block col-span-1 md:hidden"/>
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
                    messages.map((message) => {
                        return (
                            <MessageBlock messageType={message.messageType} message={message.message} />
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

