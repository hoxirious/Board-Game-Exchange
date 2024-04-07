import { Button } from "../ui/button"
import { X } from "lucide-react"

const SideMenu = ({ isOpen, setIsOpen }: { isOpen: Boolean, setIsOpen: Function }) => {
    return (
        <aside className={`fixed z-[999] w-full h-full bg-[#ffffff] grid items-center left-0 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 top-0' : 'opacity-0 top-[-100%]'}`}>
            <Button size="icon" onClick={() => setIsOpen(false)} className="absolute top-5 right-6 bg-transparent text-2xl cursor-pointer outline-none">
                <X className="text-[#1F292E]"/>
            </Button>
            <div className="sidebar-wrapper">
                <div className="sidebar-menu flex flex-col text-xl">
                    <Button variant="link" size='lg' className="text-xl text-[#1F292E]">
                        Home
                    </Button>
                    <Button variant="link" size='lg' className="text-xl text-[#1F292E]">
                        Your Account
                    </Button>
                    <Button variant="link" size='lg' className="text-xl text-[#1F292E]">
                        Messages
                    </Button>
                </div>
                <div className="sidebar-btn mt-8 mx-auto flex">
                    <Button className="mx-auto mt-24" size="lg">
                        Log out
                    </Button>
                </div>
            </div>
        </aside>
    )
}

export default SideMenu;