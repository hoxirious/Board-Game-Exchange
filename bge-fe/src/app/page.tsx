import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import bgeLogo from "@/../../public/bgeIcon.svg"
import { PostCover } from "@/components/postCover"
import axios from "axios";
import { domain } from "@/lib/utils"

export default async function Home() {

    const response = await axios.get(`${domain}/posts/`)
    const postsList = response.data

    return (
         <main className="h-[93dvh] bg-white flex flex-col">
            <div className="grid grid-cols-1 grid-rows-4 mt-10 gap-4 grow bg-black p-4 md:grid-cols-2 md:px-32 md:relative md:grid-rows-2" >
                <div className="flex flex-col justify-center items-center gap-y-4 row-span-1 md:items-start md:justify-start md:pt-10">
                    <p className="text-white text-xl font-bold md:text-4xl md:max-w-56">
                        Sharing is Caring!
                    </p>
                    <p className="text-white text-sm max-w-56 w-[80%] mx-auto text-center md:max-w-56 md:text-left md:mx-0">
                        Share and gain new experiences from others by trading your old games at Board Game Exchange.
                    </p>
                </div>
                    <div className="row-span-3 grid content-center">
                        <div className="hidden lg:w-full lg:row-span-3 lg:grid lg:grid-cols-3 lg:gap-x-4">
                            {postsList.map((post, index) => {
                                return (
                                    index < 9 &&
                                    <PostCover
                                        key={post.title}
                                        post={post}
                                        postNameClassName="text-white text-center"
                                        postLocationClassName="text-white text-center"
                                    />
                                )
                            }
                            )}
                        </div>
                        <div className="hidden md:w-full md:row-span-3 md:grid md:grid-cols-2 md:gap-x-4 lg:hidden">
                            {postsList.map((post, index) => {
                                return (
                                    index < 6 &&
                                    <PostCover
                                        key={post.title}
                                        post={post}
                                        className=""
                                        postNameClassName="text-white text-center"
                                        postLocationClassName="text-white text-center"
                                    />
                                )
                            }
                            )}
                        </div>
                        <div className="w-full row-span-1 grid grid-cols-2 gap-x-4 md:hidden lg:hidden">
                            {postsList.map((post, index) => {
                                return (
                                    index < 4 &&
                                    <PostCover
                                        key={post.title}
                                        post={post}
                                        className=""
                                        postNameClassName="text-white text-center"
                                        postLocationClassName="text-white text-center"
                                    />
                                )
                            }
                            )}
                        </div>
                    </div>
                    <Link href="/signin">
                        <Button className="w-36 row-span-1 place-self-center md:place-self-start" variant="default" size="sm">
                            Start Trading Now!
                        </Button>
                    </Link>
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
