"use client"

import { useState } from "react";

import { listOfGames } from "@/app/listingView/data/games";

import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Credenza,
    CredenzaBody,
    CredenzaClose,
    CredenzaContent,
    CredenzaDescription,
    CredenzaFooter,
    CredenzaHeader,
    CredenzaTitle,
    CredenzaTrigger,
  } from "@/components/Credenza/credenza";

import { GameCover } from "@/components/gameCover";
  

import NavBar from "@/components/NavBar/NavBar";
import AccountInfo from "./components/AccountInfo/AccountInfo";

const page = ({ params }: { params: { accountID: string } }) => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const privateMode = (
        <div className="account-settings-private-mode mt-12 flex items-center justify-between mx-4">
            <div className="account-settings-private-mode-text">
                <div className="font-semibold text-black text-lg">
                    Private Mode
                </div>
                <div className="font-thin text-black">
                    Set listings only viewable by your friends
                </div>
            </div>
            <Switch />
        </div>
    )

    const locationInput = (
        <div className="account-settings-location mt-4 items-center justify-between mx-4">
            <div className="account-settings-location-title font-semibold text-black text-lg">
                Location
            </div>
            <Input className="mt-2" placeholder="Enter your location" />
        </div>
    )

    const editProfileDesc = (
        <div className="account-settings-private-mode mt-8 items-center justify-between mx-4">
            <div className="account-settings-private-mode-text">
                <div className="font-semibold text-black text-lg">
                    Edit Profile
                </div>
                <div className="font-thin text-black">
                    Make changes to your profile here. Click save when you're done.
                </div>
            </div>
        </div>
    )

    const nameInput = (
        <div className="account-settings-name mt-4 items-center justify-between mx-4">
            <div className="account-settings-name-title font-semibold text-black text-lg">
                Name
            </div>
            <Input className="mt-2" placeholder="Enter your name" />
        </div>
    )

    const userNameInput = (
        <div className="account-settings-username mt-4 items-center justify-between mx-4">
            <div className="account-settings-username-title font-semibold text-black text-lg">
                User Name
            </div>
            <Input className="mt-2" placeholder="Enter your username" />
        </div>
    )

    const emailInput = (
        <div className="account-settings-email mt-4 items-center justify-between mx-4">
            <div className="account-settings-email-title font-semibold text-black text-lg">
                Email
            </div>
            <Input className="mt-2" placeholder="Enter your email" type="email"/>
        </div>
    )

    const passwordInput = (
        <div className="account-settings-password mt-4 items-center justify-between mx-4">
            <div className="account-settings-password-title font-semibold text-black text-lg">
                Password
            </div>
            <Input className="mt-2" placeholder="Enter your password" type="password"/>
        </div>
    )

    const settingsModal = (
        <div className="account-settings-container m-4">
            <div className="account-settings-title font-bold text-black text-3xl">
                Settings
            </div>
            {privateMode}
            {locationInput}
            {editProfileDesc}
            {nameInput}
            {userNameInput}
            {emailInput}
            {passwordInput}
            <div className="account-settings-save-btn my-8 w-full flex justify-end">
                <Button className="bg-primary text-white mr-4">Save Changes</Button>
            </div>
        </div>
    )

    return (
        <div className="flex flex-col h-screen">
            <div>
                <AccountInfo accountID={params.accountID} setIsSheetOpen={setIsSheetOpen}/>
                <div>
                    <Credenza open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                      <CredenzaContent>
                        <CredenzaBody>
                          {settingsModal}
                        </CredenzaBody>
                      </CredenzaContent>
                    </Credenza>
                </div>
            </div>
            <ScrollArea className="flex-grow mt-4 max-w-screen-md m-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 px-4">
                    {listOfGames.map((game) => (
                        <GameCover
                        key={game.name}
                        game={game}
                        className=""
                        />
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}

export default page;