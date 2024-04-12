import { Button } from "../ui/button"
import { X } from "lucide-react"
import Cookies from 'js-cookie'
import Link from "next/link";

const SideMenu = ({ className }: { className: String }) => {
    return (
        <aside className={className}>
            {/* Close button.. could be a slot? since `side-menu-toggle` refers to checkbox in*/}
            <label htmlFor="side-menu-toggle" className="absolute top-5 right-6 bg-transparent text-2xl cursor-pointer outline-none">
                <X className="text-[#1F292E]"/>
            </label>
            <div className="sidebar-wrapper">
                <div className="sidebar-menu flex flex-col text-xl">
                    <Button variant="link" size='lg' className="text-xl text-[#1F292E]">
                        <Link href="/home">Home</Link>
                    </Button>
                    <Button variant="link" size='lg' className="text-xl text-[#1F292E]">
                        <Link href={`/account/${Cookies.get('userId')}`}>Your Account</Link>
                    </Button>
                    <Button variant="link" size='lg' className="text-xl text-[#1F292E]">
                        <label htmlFor="side-menu-toggle">
                            <Link href="/inbox">Messages</Link>
                        </label>
                    </Button>
                </div>
                <div className="sidebar-btn mt-8 mx-auto flex">
                    <Button className="mx-auto mt-24" size="lg">
                        <Link href="/logout">Log out</Link>
                    </Button>
                </div>
            </div>
        </aside>
    )
}

export default SideMenu;