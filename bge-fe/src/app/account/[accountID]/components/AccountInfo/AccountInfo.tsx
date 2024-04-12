"use client"
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MailCheck } from "lucide-react";
import { Filter, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import useSWR  from 'swr'
import { domain, fetcher } from '@/lib/utils'

import { sendMessage } from '@/app/actions/post'

import "./AccountInfo.scss";

const API = domain;

const AccountInfo = ({ accountID, setIsSheetOpen, userData, searchQuery, setSearchQuery, searchForGames, activeListings }:
    { accountID: string, setIsSheetOpen: Function, userData: object, searchQuery: string, setSearchQuery: Function, searchForGames: Function, activeListings: number }) => {
    const router = useRouter();
    const userId = Cookies.get('userId');
    const { data, error, isLoading } = useSWR(`${API}/users/${accountID}`, fetcher)

    const [message, setMessage] = useState("");
    const [messageSent, setMessageSent] = useState(false);
    const [showMessageForm, setShowMessageForm] = useState(false);

    const actionButtonsSelf =  (
        <div className="account-action-btns flex gap-4 mx-4">
            <Button className="bg-primary text-white basis-5/6" onClick={() => {
                router.push("/posts/create");
            }}>Create a Listing</Button>
            <Button className="bg-gray-100 basis-1/6" variant="outline" size="icon" onClick={() => setIsSheetOpen(true)}>
                <Settings className="h-4 w-4" />
            </Button>
        </div>
    );

    const actionButtonsOther = (
        <div className="account-action-btns flex gap-4 mx-4">
            <Button className="bg-primary min-w-40 flex-grow"
                onClick={() => {
                    setShowMessageForm(!showMessageForm);
                }}
            >{showMessageForm ? "Close message" : "Message"}</Button>
        </div>
    );

    const self = userId ? accountID === userId : false;
    const actionButtons = self ? actionButtonsSelf : actionButtonsOther;

    async function onSubmit(form) {
        form.preventDefault();
        const response = await sendMessage({
            text: message,
            postId: accountID,
            senderUserID: Cookies.get('userId'),
            receiverUserID: data._id,
            hasReceiverSeen: false,
            timestamp: (new Date(Date.now())),
            senderStatus: "SUCCESS"
        });

        if(response.ok) {
            setMessageSent(true);
        }
    }

    const messageForm = () => {
        if(!messageSent) {
            return (
                <form onSubmit={onSubmit} method="POST" className="post-contact-form">
                    <label htmlFor="contact_message">
                        <h2 className="text-lg font-bold">Contact the poster</h2>
                    </label>
                    <textarea 
                        id="contact_message"
                        placeholder="Type your message to the trader here."
                        onChange={(e) => {setMessage(e.target.value)}}
                        className="border rounded w-full p-4 h-64 resize-none"></textarea>
                    <Button type="submit" className="w-full md:w-fit">Start Chat</Button>
                </form>
            )
        }

        return (
            <Alert className="h-fit">
                <MailCheck className="h-4 w-4"/>
                <AlertTitle>Message sent!</AlertTitle>
                <AlertDescription>
                    You can see your messages in the <Button variant="link" className="m-0 p-0"><Link href="/inbox">inbox</Link></Button>.
                </AlertDescription>
            </Alert>
        );
    }
    
    return (
        <div className="max-w-screen-md m-auto">
            <div className="account-info-container">
                <div className="account-info-section">
                    <div className="account-avatar-container">
                        <Avatar className="account-avatar">
                            <AvatarImage src={userData.profilePictureUrl}/>
                            <AvatarFallback>
                                {userData.fullName[0]}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="account-info-details">
                        <div className="account-info-name font-bold text-lg">{userData.fullName}</div>
                        <div className="account-info-joined-date font-thin">Joined in {userData.dateCreated.substr(0,4)}</div>
                        <div className="account-info-listings-count font-thin">{activeListings} active listings</div>
                    </div>
                </div>
                {userId ? (actionButtons) : null}
                <div className="mx-4 mt-4">
                    {showMessageForm && messageForm()}
                </div>             
                
            </div>
            <div className="search-container mx-4 my-4 flex justify-evenly gap-x-4">
                <Input placeholder="Search listings"
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value)
                        searchForGames()
                    }}
                />
                {/* Removing advanced search in accounts page in favor of token search */}
                {/* {
                    !self && (
                        <Button className="bg-gray-100 w-14" variant="outline" size="icon">
                            <Filter className="h-4 w-4" />
                        </Button>
                    )
                } */}
            </div>
        </div>
    );
}

export default AccountInfo;   