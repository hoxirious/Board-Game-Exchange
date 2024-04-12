"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
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
import { toast, useToast } from "@/components/ui/use-toast";
import { BlankState } from "@/components/blankState";
import { debounce } from "@/lib/utils";

import { PostCover } from "@/components/postCover";

const API = "http://localhost:8080";
  

import NavBar from "@/components/NavBar/NavBar";
import AccountInfo from "./components/AccountInfo/AccountInfo";


const getUserPosts = async (accountID: string) => {
    const res = await fetch(`${API}/posts/get/${accountID}`);
    const data = await res.json();
    return data;
}

const page = ({ params }: { params: { accountID: string } }) => {
    const { toast } = useToast();
    const [userData, setUserData] = useState({});
    const [listOfGames, setListOfGames] = useState([]);
    const [searchedGames, setSearchedGames] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [updatedUserData, setUpdatedUserData] = useState({});

    const getUserData = async (accountID: string) => {
        const res = await fetch(`${API}/users/${accountID}`);
        const data = await res.json();
        setUserData(data);
    }

    useEffect(() => {
        getUserData(params.accountID).then(() => {
            setLoading(false);
        });
        getUserPosts(params.accountID).then((data) => {
            setListOfGames(data);
            console.log(data);
        });
    }, []);

    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const openSheetAndClearData = () => {
        setIsSheetOpen(true);
        setUpdatedUserData({});
    }

    const validateEmail = (email: string) => {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const test = re.test(String(email).toLowerCase());
        console.log(test);
        return test;
    }

    const isReadyToSave = updatedUserData.fullName !== "" &&
        updatedUserData.username !== "" &&
        updatedUserData.location !== "" &&
        (updatedUserData.email === undefined || validateEmail(updatedUserData.email)) &&
        (updatedUserData.password === undefined || updatedUserData.password.length >= 8);

    const updateUserData = async (accountID: string, updatedUserData: object) => {
        const res = await fetch(`${API}/users/${accountID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUserData)
        });
        const data = await res.json();
        if (data.username) {
            toast({
                title: "Success",
                description: "User data updated successfully",
            });
            setIsSheetOpen(false);
            getUserData(params.accountID);
        }
        return data;
    }

    const searchForGame = async () => {
        const tokens = searchQuery.toLowerCase().split(' ');

        let gamesWithMatchCount = listOfGames.map((game) => {
            let matchCount = 0;
            const gameStr = [game.title, game.description, game.category, game.location].join(' ').toLowerCase();
        
            tokens.forEach((token) => {
                if (gameStr.includes(token)) {
                    matchCount++;
                }
            });
        
            return { game, matchCount };
        });

        gamesWithMatchCount = gamesWithMatchCount.filter(({ matchCount }) => matchCount > 0);

        gamesWithMatchCount.sort((a, b) => b.matchCount - a.matchCount);

        const sortedGames = gamesWithMatchCount.map(({ game }) => game);

        setSearchedGames(sortedGames);
    }

    const debouncedSearchForGame = debounce(searchForGame, 500);

    // Removed feature. Might do it later.
    // const privateMode = (
    //     <div className="account-settings-private-mode mt-12 flex items-center justify-between mx-4">
    //         <div className="account-settings-private-mode-text">
    //             <div className="font-semibold text-black text-lg">
    //                 Private Mode
    //             </div>
    //             <div className="font-thin text-black">
    //                 Set listings only viewable by your friends
    //             </div>
    //         </div>
    //         <Switch />
    //     </div>
    // )

    const locationInput = (
        <div className="account-settings-location mt-4 items-center justify-between mx-4">
            <div className="account-settings-location-title font-semibold text-black text-lg">
                Location
            </div>
            <Input className="mt-2" placeholder="Enter your location" 
                value={updatedUserData.location != null ? updatedUserData.location : userData.location}
                onChange={(e) => {
                    setUpdatedUserData({...updatedUserData, location: e.target.value});
                }}
            />
            {
                updatedUserData.location === "" && (
                    <div className="account-settings-location-warning font-thin text-red-500">
                        Please enter a valid location
                    </div>
                )
            }
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
            <Input className="mt-2" placeholder="Enter your name"
                value={updatedUserData.fullName != null ? updatedUserData.fullName : userData.fullName}
                onChange={(e) => {
                    setUpdatedUserData({...updatedUserData, fullName: e.target.value});
                }}
            />
            {
                updatedUserData.fullName === "" && (
                    <div className="account-settings-name-warning font-thin text-red-500">
                        Please enter a valid name
                    </div>
                )
            }
        </div>
    )

    const userNameInput = (
        <div className="account-settings-username mt-4 items-center justify-between mx-4">
            <div className="account-settings-username-title font-semibold text-black text-lg">
                User Name
            </div>
            <Input className="mt-2" placeholder="Enter your username"
                value={updatedUserData.username != null ? updatedUserData.username : userData.username}
                onChange={(e) => {
                    setUpdatedUserData({...updatedUserData, username: e.target.value});
                }}
            />
            {
                updatedUserData.username === "" && (
                    <div className="account-settings-username-warning font-thin text-red-500">
                        Please enter a valid username
                    </div>
                )
            }
        </div>
    )

    const emailInput = (
        <div className="account-settings-email mt-4 items-center justify-between mx-4">
            <div className="account-settings-email-title font-semibold text-black text-lg">
                Email
            </div>
            <Input className="mt-2" placeholder="Enter your email" type="email"
                value={updatedUserData.email != null ? updatedUserData.email : userData.email}
                onChange={(e) => {
                    setUpdatedUserData({...updatedUserData, email: e.target.value});
                }}
            />
            {
                updatedUserData.email != null && 
                (updatedUserData.email === "" || !validateEmail(updatedUserData.email)) && (
                    <div className="account-settings-email-warning font-thin text-red-500">
                        Please enter a valid email
                    </div>
                )
            }
        </div>
    )

    const passwordInput = (
        <div className="account-settings-password mt-4 items-center justify-between mx-4">
            <div className="account-settings-password-title font-semibold text-black text-lg">
                Password
            </div>
            <Input className="mt-2" placeholder="Enter your new password" type="password"
                value={updatedUserData.password}
                onChange={(e) => {
                    setUpdatedUserData({...updatedUserData, password: e.target.value});
                }}
            />
            {
                (updatedUserData.password === "" || (updatedUserData.password != null && updatedUserData.password.length < 8)) && (
                    <div className="account-settings-password-warning font-thin text-red-500">
                        Please enter a valid password
                    </div>
                )
            }
        </div>
    )

    const settingsModal = (
        <div className="account-settings-container m-4">
            <div className="account-settings-title font-bold text-black text-3xl">
                Settings
            </div>
            {/* {privateMode} */}
            {locationInput}
            {editProfileDesc}
            {nameInput}
            {userNameInput}
            {emailInput}
            {passwordInput}
            <div className="account-settings-save-btn my-8 w-full flex justify-end">
                <Button className="bg-primary text-white mr-4" onClick={() => {
                    updateUserData(params.accountID, updatedUserData).then((data) => {
                        console.log(data);
                    });
                }}
                disabled={!isReadyToSave}
                >Save Changes</Button>
            </div>
        </div>
    )

    const renderGames = searchQuery ? searchedGames : listOfGames;

    if(!userData._id && !loading) {
        return (
            <BlankState variant="404" title="We could not find this account." body={
                <Button asChild>
                    <Link href="/home">Return to home</Link>
                </Button>
            }></BlankState>
        );
    }

    return (
        loading ? <BlankState variant="loading" title="Loading..." body=""></BlankState> : (
        <div className="flex flex-col h-screen">
            <div>
                <AccountInfo accountID={params.accountID} userData={userData} setIsSheetOpen={openSheetAndClearData}
                    searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchForGames={debouncedSearchForGame}
                    activeListings={listOfGames.length}
                />
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
                    {renderGames.map((game) => (
                        <PostCover
                            key={game.title}
                            post={game}
                            postNameClassName="text-center"
                            postLocationClassName="text-center"
                        />
                    ))}
                </div>
            </ScrollArea>
        </div>
        )
    )
}

export default page;