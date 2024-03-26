"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CirclePlus, Search, Menu, User, ChevronLeft } from "lucide-react";
import NavBarButton from "./components/NavBarButton";
import bgeIcon from "../../../public/bgeIcon.svg";

import "./NavBar.scss";

const NavBar = () => {
    const homeNavBarList: {
        left: { icon: JSX.Element; link: string }[];
        middle: { icon: JSX.Element; link: string }[];
        right: { icon: JSX.Element; link: string }[];
    } = {
        left: [
            {
                icon: <Image src={bgeIcon} alt="Logo" className="navbar-logo" />,
                link: "/home",
            },
            {
                icon: <NavBarButton text="For you" />,
                link: "/home",
            }
        ],
        middle: [],
        right: [
            {
                icon: <CirclePlus />,
                link: "/newListing",    
            },
            {
                icon: <Search />,
                link: "/search",
            },
            {
                icon: <Menu />,
                link: "/account/1",
            },
        ],
    }

    const nonUserNavBarList: {
        left: { icon: JSX.Element; link: string }[];
        middle: { icon: JSX.Element; link: string }[];
        right: { icon: JSX.Element; link: string }[];
    } = {
        left: [
            {
                icon: <Image src={bgeIcon} alt="Logo" className="navbar-logo" />,
                link: "/home",
            },
            {
                icon: <NavBarButton text="Explore" />,
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
                icon: <Search />,
                link: "/search",
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
                icon: <ChevronLeft />,
                link: "/home",
            },
        ],
        middle: [
            {
                icon: <Image src={bgeIcon} alt="Logo" className="navbar-logo" />,
                link: "/home",
            },
        ],
        right: [
            {
                icon: <Search />,
                link: "/search",
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
                icon: <ChevronLeft />,
                link: "/home",
            },
        ],
        middle: [
            {
                icon: <Image src={bgeIcon} alt="Logo" className="navbar-logo" />,
                link: "/home",
            },
        ],
        right: [
            {
                icon: <CirclePlus />,
                link: "/newListing",    
            },
            {
                icon: <Search />,
                link: "/search",
            },
            {
                icon: <Menu />,
                link: "/account/1",
            },
        ],
    }

    let navBarVariant = homeNavBarList;
    // TODO: Implement navBarVariant based on user authentication status
    const pathName = usePathname();
    if (pathName === "/home") {
        navBarVariant = homeNavBarList;
    } else if (pathName && pathName.includes("/item")) {
        navBarVariant = backNavBarExtendedList;
    } else if (pathName && pathName.includes("/account")) {
        navBarVariant = backNavBarList;
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
                    <Link key={index} href={item.link}>
                        {item.icon}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default NavBar;

