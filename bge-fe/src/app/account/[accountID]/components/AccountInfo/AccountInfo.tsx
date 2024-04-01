"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Filter, Settings } from "lucide-react";

import "./AccountInfo.scss";

const AccountInfo = ({ accountID }: { accountID: string }) => {
    const actionButtonsSelf =  (
        <div className="account-action-btns flex gap-4 mx-4">
            <Button className="bg-primary text-white basis-5/6" >Create a Listing</Button>
            <Button className="bg-gray-100 basis-1/6" variant="outline" size="icon">
                <Settings className="h-4 w-4" />
            </Button>
        </div>
    );

    const actionButtonsOther = (
        <div className="account-action-btns flex gap-4 mx-4">
            <Button className="bg-primary text-white basis-1/2" variant="default">Follow</Button>
            <Button className="bg-gray-100 min-w-40 basis-1/2" variant="secondary">Message</Button>
        </div>
    );

    const self = localStorage.getItem("accountID") ? accountID === localStorage.getItem("accountID") : true;
    const actionButtons = self ? actionButtonsSelf : actionButtonsOther;
    
    return (
        <div className="max-w-screen-md m-auto">
            <div className="account-info-container">
                <div className="account-info-section">
                    <div className="account-avatar-container">
                        <Avatar className="account-avatar">
                            <AvatarImage />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="account-info-details">
                        <div className="account-info-name font-bold text-lg">John Doe</div>
                        <div className="account-info-joined-date font-thin">Joined in 2024</div>
                        <div className="account-info-listings-count font-thin">6 active listings</div>
                    </div>
                </div>
                {actionButtons}
                
            </div>
            <div className="search-container mx-4 my-4 flex justify-evenly gap-x-4">
                <Input placeholder="Search listings" />
                {
                    !self && (
                        <Button className="bg-gray-100 w-14" variant="outline" size="icon">
                            <Filter className="h-4 w-4" />
                        </Button>
                    )
                }
            </div>
        </div>
    );
}

export default AccountInfo;   