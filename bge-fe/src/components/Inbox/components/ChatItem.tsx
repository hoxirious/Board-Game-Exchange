import bgeIcon from '@/../public/bgeIcon.svg';
import Image from 'next/image';

interface ChatUser {
    name: string;
    location: string;
}
export interface ChatItemProps {
    userSentTo: ChatUser;
    latestMessage: string;
    isUnread: boolean;
}

export default function ChatItem(item: ChatItemProps) {
    return (
        <div className="grid grid-cols-5 border-b-2 first:border-t-2 gap-4 p-4 border-gray-100">
            <Image src={bgeIcon} alt="avatar" width={200} className="col-span-1" />

            <div className="col-span-3 text-left">
                <div className="pb-2">
                    <div className="text-sm font-bold">{item.userSentTo.name}</div>
                    <div className="text-lg">{item.userSentTo.location}</div>
                    <div className="">{item.userSentTo.location}</div>
                </div>
                <p className="text-lg font-bold truncate">{item.latestMessage}</p>
            </div>
            {
                item.isUnread &&
                <div className="col-span-1 rounded-full w-5 h-5 bg-black my-auto justify-self-end bg-primary" />
            }
        </div>
    )
}
