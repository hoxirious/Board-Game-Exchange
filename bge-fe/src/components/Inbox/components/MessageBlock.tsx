
export type MessageType = "left" | "right";
export interface Message {
    content: string;
    time: string;
    senderName: string;
    senderId: string;
}

export interface MessageBlockProps {
    messageType: MessageType;
    message: Message;
}

export default function MessageBlock({ messageType, message }: MessageBlockProps) {
    return (
        <>
            {
                messageType == "right" &&
                <div className="inline-block justify-self-end bg-primary text-white rounded-xl p-3 mb-2 h-fit min-w-20 max-w-[70%]">
                    <p className="text-right inline-block">
                    {message.content}
                    </p>
                </div>
            }
            {
                messageType == "left" &&
                <div className="inline-block justify-self-start bg-gray-300 text-black rounded-xl p-3 mb-2 min-w-20 h-fit  max-w-[70%]">
                    {message.content}
                </div>
            }
        </>
    )
}
