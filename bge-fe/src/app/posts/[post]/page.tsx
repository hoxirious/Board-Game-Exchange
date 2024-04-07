"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'
import { HeartCrack, RectangleEllipsis } from 'lucide-react'

import UserInfo from './UserInfo'

import useSWR  from 'swr'
import { fetcher } from '@/lib/utils'

import "./post.css"
import { timeAgoHumanReadable } from "@/lib/utils"

const page = ({ params }: { params: { post: string } }) => {

    const { data, error, isLoading } = useSWR(`http://localhost:8080/posts/${params.post}`, fetcher)

    if(isLoading) return (
        <div className="text-center mt-16">
            <RectangleEllipsis strokeWidth={1} size={150} className="block w-fit mx-auto" />
            <h1 className="text-3xl mb-4">Loading this post...</h1>
        </div>
    )

    if(error) {
        if(error.status === 404) {
            return (
                <div className="text-center mt-16">
                    <HeartCrack strokeWidth={1} size={150} className="block w-fit mx-auto" />
                    <h1 className="text-3xl mb-4">We could not find this post.</h1>
                    <Button asChild>
                        <Link href="/posts">Look for other posts</Link>
                    </Button>
                </div>
            );
        }

        return (
            <div>{error.toString()}</div>
        )
    }

    return (
        <main className="post">
            <section className="post-carousel">
                {/* TODO: Customize Carousel */}
                {/* 75% width for carousel is what seems to work best */}
                <Carousel className="w-[75%] mx-auto">
                    <CarouselContent>
                        {data.postsPictureUrl.map((pictureUrl, index) => (
                            <CarouselItem key={index}>
                                <Card>
                                    <CardContent className="relative aspect-square overflow-hidden">
                                        <Image 
                                        className="object-contain"
                                        src={pictureUrl}
                                        fill={true}
                                        priority={true}
                                        sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw, 33vw"
                                        alt="board game picture"></Image>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <section className="post-user-details">
                    <div>
                        <UserInfo userID={data.ownerUserID} />
                    </div>
                    <span>Posted {timeAgoHumanReadable(data.dateCreated)} ago</span>
                </section>
            </section>
            <section className="post-details">
                <dl className="space-y-1.5">
                    <div>
                        <dt>
                            <h2 className="text-2xl font-bold">{data.title}</h2>
                        </dt>
                        <dd>{data.description}</dd>
                    </div>
                    <div>
                        <dt><h3 className="font-bold">Category</h3></dt>
                        <dd>{data.category}</dd>
                    </div>

                    <div>
                        <dt><h3 className="font-bold">Condition</h3></dt>
                        <dd>{data.condition}</dd>
                    </div>

                    <div>
                        <dt><h3 className="font-bold">Location</h3></dt>
                        <dd>{data.location}</dd>
                        <dd>
                            <iframe className="w-full aspect-square" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Calgary+(Calgary)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </dd>
                    </div>
                </dl>
            </section>
            <form method="POST" className="post-contact-form">
                <label htmlFor="contact_message">
                    <h2 className="text-lg font-bold">Contact the poster</h2>
                </label>
                <textarea 
                    id="contact_message"
                    placeholder="Type your message to the trader here."
                    className="border rounded w-full p-4 h-64 resize-none"></textarea>
                <Button type="submit" className="w-full md:w-fit">Start Chat</Button>
            </form>
        </main>
    );
}

export default page;