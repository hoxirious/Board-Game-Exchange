"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CirclePlus, Search, Menu, User, ChevronLeft, MessageSquare } from "lucide-react";
import NavBarButton from "./components/NavBarButton";
import bgeIcon from "../../../public/bgeIcon.svg";

import "./NavBar.scss";
import SideMenu from "../SideMenu/SideMenu";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";

const NavBar = () => {
    const userId = Cookies.get('userId');
    const homeNavBarList: {
        left: { icon: JSX.Element; link: string }[];
        middle: { icon: JSX.Element; link: string }[];
        right: { icon: JSX.Element; link: string }[];
    } = {
        left: [
            {
                icon: <Image src={bgeIcon} alt="Logo" className="navbar-logo"/>,
                link: "/",
            },
            {
                icon: <NavBarButton text="For you"/>,
                link: "/home",
            }
        ],
        middle: [],
        right: [
            {
                icon: <CirclePlus/>,
                link: "/posts/create",
            },
            {
                icon: <Search/>,
                link: "/home",
            },
            // {
            //     icon: <Menu/>,
            //     link: `/account/${userId}`,
            // },
        ],
    }

    const nonUserNavBarList: {
        left: { icon: JSX.Element; link: string }[];
        middle: { icon: JSX.Element; link: string }[];
        right: { icon: JSX.Element; link: string }[];
    } = {
        left: [
            {
                icon: <Image src={bgeIcon} alt="Logo" className="navbar-logo"/>,
                link: "/",
            },
            {
                icon: <NavBarButton text="Explore"/>,
                link: "/home",
            }
        ],
        middle: [],
        right: [
            {
                icon: <span>Sign up</span>,
                link: "/signup",
            },
            {
                icon: <Search/>,
                link: "/home",
            },
        ],
    }

    const backNavBarList: {
        left: { icon: JSX.Element; link: string }[];
        middle: { icon: JSX.Element; link: string }[];
        right: { icon: JSX.Element; link: string }[];
    } = {
        left: [
            {
                icon: <ChevronLeft/>,
                link: "/home",
            },
        ],
        middle: [
            {
                icon: <Image src={bgeIcon} alt="Logo" className="navbar-logo"/>,
                link: "/",
            },
        ],
        right: [
            {
                icon: <Search/>,
                link: "/home",
            },
        ],
    }

    const backNavBarExtendedList: {
        left: { icon: JSX.Element; link: string }[];
        middle: { icon: JSX.Element; link: string }[];
        right: { icon: JSX.Element; link: string }[];
    } = {
        left: [
            {
                icon: <ChevronLeft/>,
                link: "/home",
            },
        ],
        middle: [
            {
                icon: <Image src={bgeIcon} alt="Logo" className="navbar-logo"/>,
                link: "/",
            },
        ],
        right: [
            {
                icon: <CirclePlus/>,
                link: "/posts/create",
            },
            {
                icon: <Search/>,
                link: "/home",
            },
            {
                icon: <Menu/>,
                link: `/account/${userId}`,
            },
        ],
    }

    const desktopDefaultNavBarList: {
        left: { icon: JSX.Element; link: string }[];
        middle: { icon: JSX.Element; link: string }[];
        right: { icon: JSX.Element; link: string }[];
    } = {
        left: [
            {
                icon: <Image src={bgeIcon} alt="Logo" className="navbar-logo"/>,
                link: "/",
            },
            {
                icon: <NavBarButton text="For you"/>,
                link: "/home",
            }
        ],
        middle: [],
        right: [
            {
                icon: <span>Sign out</span>,
                link: "/logout",
            },
            {
                icon: <MessageSquare/>,
                link: "/inbox"
            },
            {
                icon: <CirclePlus/>,
                link: "/posts/create",
            },
            {
                icon: <Search/>,
                link: "/home",
            },
            {
                icon: <User/>,
                link: `/account/${userId}`,
            },
        ],
    }

    const desktopNonUserNavBarList: {
        left: { icon: JSX.Element; link: string }[];
        middle: { icon: JSX.Element; link: string }[];
        right: { icon: JSX.Element; link: string }[];
    } = {
        left: [
            {
                icon: <Image src={bgeIcon} alt="Logo" className="navbar-logo"/>,
                link: "/",
            },
            {
                icon: <NavBarButton text="Explore"/>,
                link: "/home",
            }
        ],
        middle: [],
        right: [
            {
                icon: <span>Sign In</span>,
                link: "/signin",
            },
            {
                icon: <span>Sign up</span>,
                link: "/signup",
            },
            {
                icon: <Search/>,
                link: "/home",
            },
        ],
    }

    const desktopBackNavBarListExtended: {
        left: { icon: JSX.Element; link: string }[];
        middle: { icon: JSX.Element; link: string }[];
        right: { icon: JSX.Element; link: string }[];
    } = {
        left: [
            {
                icon: <ChevronLeft/>,
                link: "/home",
            },
        ],
        middle: [
            {
                icon: <Image src={bgeIcon} alt="Logo" className="navbar-logo"/>,
                link: "/",
            },
        ],
        right: [
            {
                icon: <span>Sign out</span>,
                link: "/logout",
            },
            {
                icon: <MessageSquare/>,
                link: "/inbox"
            },
            {
                icon: <CirclePlus/>,
                link: "/posts/create",
            },
            {
                icon: <Search/>,
                link: "/home",
            },
            {
                icon: <User/>,
                link: `/account/${userId}`,
            },
        ],
    }

    const desktopBackNavBarList: {
        left: { icon: JSX.Element; link: string }[];
        middle: { icon: JSX.Element; link: string }[];
        right: { icon: JSX.Element; link: string }[];
    } = {
        left: [
            {
                icon: <ChevronLeft/>,
                link: "/home",
            },
        ],
        middle: [
            {
                icon: <Image src={bgeIcon} alt="Logo" className="navbar-logo"/>,
                link: "/",
            },
        ],
        right: [
            {
                icon: <Search/>,
                link: "/home",
            },
        ],
    }

    let navBarVariant = homeNavBarList;

    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const pathName = usePathname();
    if (pathName === "/signup" || pathName === "/signin" || pathName === "/recovery") {
        return;
    } else if (pathName.includes("/posts") || pathName.includes('*/account')) {
        if (isMobileView) {
            navBarVariant = userId ? backNavBarExtendedList : backNavBarList;
        } else {
            navBarVariant = userId ? desktopBackNavBarListExtended : desktopBackNavBarList;
        }
    } else {
        if (isMobileView) {
            navBarVariant = userId ? homeNavBarList : nonUserNavBarList;
        } else {
            navBarVariant = userId ? desktopDefaultNavBarList : desktopNonUserNavBarList;
        }

    }

    return (
        <div className="navbar">
            <div className="navbar-item navbar-left">
                {navBarVariant.left.map((item, index) => (
                    <Link key={index} href={item.link}>
                        {item.icon}
                    </Link>
                ))}
            </div>
            <div className="navbar-item navbar-middle">
                {navBarVariant.middle.map((item, index) => (
                    <Link key={index} href={item.link}>
                        {item.icon}
                    </Link>
                ))}
            </div>
            <div className="navbar-item navbar-right">
                {navBarVariant.right.map((item, index) => (
                    <Link key={index} href={item.link} className="px-1">
                        {item.icon}
                    </Link>
                ))}
                <label htmlFor="side-menu-toggle" className="md:hidden block px-1">
                    <Menu/>
                </label>
                <input id="side-menu-toggle" type="checkbox" className="peer hidden"></input>
                <SideMenu className="fixed z-20 w-full h-full bg-[#ffffff] grid items-center inset-0 w-full h-screen peer-checked:visible peer-checked:opacity-85 opacity-0 invisible transition-opacity transition-visibility duration-300 ease-in-out">
                </SideMenu>
            </div>

            <div className="navbar-item navbar-right">
                {/* Test side menu toggle */}
            </div>
        </div>
    )
}

export default NavBar;

