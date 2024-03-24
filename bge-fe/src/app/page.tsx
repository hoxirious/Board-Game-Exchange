
import { Button } from "@/components/ui/button"
import Image from "next/image"
import bgeLogo from "@/../../public/bgeIcon.svg"
export default function Home() {
    return (
         <main className="h-screen bg-white flex flex-col">
            <div className="grid grid-cols-1 grid-rows-4 mt-10 gap-4 grow bg-black p-4 md:grid-cols-2 md:px-32 md:relative md:grid-rows-2" >
                <div className="flex flex-col justify-center items-center gap-y-4 row-span-1 md:items-start md:justify-start md:pt-10">
                    <p className="text-white text-xl font-bold md:text-4xl md:max-w-56">
                        Sharing is Caring!
                    </p>
                    <p className="text-white text-sm max-w-56 w-[80%] mx-auto text-center md:max-w-56 md:text-left md:mx-0">
                        Share and gain new experiences from others by trading your old games at Board Game Exchange.
                    </p>
                </div>
                <div className="bg-white w-full row-span-3 md:h-full">
                    Something here
                </div>
                <Button className="w-36 row-span-1 place-self-center md:place-self-start" variant="default" size="sm">Start Trading Now!</Button>
            </div>
            <div className="h-[12%] flex justify-center md:h-[12%]">
                <Image
                    priority
                    src={bgeLogo}
                    alt="Board Game Exchange"
                    width={140}
                    className="m-auto"
                />
            </div>
        </main>
    );
}
