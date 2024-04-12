"use client"
import { useRouter } from 'next/navigation'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'
import { MailCheck } from 'lucide-react'
import { BlankState } from '@/components/blankState'

import UserInfo from './UserInfo'

import useSWR  from 'swr'
import { useState } from 'react'
import { domain, fetcher } from '@/lib/utils'

import "./post.css"
import { timeAgoHumanReadable } from "@/lib/utils"

import Cookies from 'js-cookie'
import { destroy, sendMessage } from '@/app/actions/post'

const page = ({ params }: { params: { post: string } }) => {
    const router = useRouter()
    const { data, error, isLoading } = useSWR(`${domain}/posts/${params.post}`, fetcher)

    const [message, setMessage] = useState("");
    const [messageSent, setMessageSent] = useState(false);

    if(isLoading) return (
        <BlankState variant="loading" title="Loading this post" body="It shouldn't take too long..."></BlankState>
    )

    if(error) {
        if(error.status === 404) {
            return (
                <BlankState variant="404" title="We could not find this post." body={
                    <Button asChild>
                        <Link href="/posts">Look for other posts</Link>
                    </Button>
                }></BlankState>
            );
        }

        return (
            <BlankState variant="error" title="Oopsie Daisy..." body="Something went really wrong. Please try again later. Or, contact us."></BlankState>
        )
    }

    async function handleDelete() {
        const response = await destroy(params.post);
        router.push(`/home`);
    }

    async function onSubmit(form) {
        form.preventDefault();
        const response = await sendMessage({
            text: message,
            postId: params.post,
            senderUserID: Cookies.get('userId'),
            receiverUserID: data.ownerUserID,
            hasReceiverSeen: false,
            timestamp: (new Date(Date.now())),
            senderStatus: "SUCCESS"
        });

        if(response.ok) {
            setMessageSent(true);
        }
    }

    function messageForm() {
        if(!messageSent) {
            return (
                <form onSubmit={onSubmit} method="POST" className="post-contact-form">
                    <label htmlFor="contact_message">
                        <h2 className="text-lg font-bold">Contact the poster</h2>
                    </label>
                    <textarea 
                        id="contact_message"
                        placeholder="Type your message to the trader here."
                        onChange={(e) => {setMessage(e.target.value)}}
                        className="border rounded w-full p-4 h-64 resize-none"></textarea>
                    <Button type="submit" className="w-full md:w-fit">Start Chat</Button>
                </form>
            )
        }

        return (
            <Alert className="h-fit">
                <MailCheck className="h-4 w-4"/>
                <AlertTitle>Message sent!</AlertTitle>
                <AlertDescription>
                    You can see your messages in the <Button variant="link" className="m-0 p-0"><Link href="/inbox">inbox</Link></Button>.
                </AlertDescription>
            </Alert>
        );
    }

    return (
        <main className="post">
            <section className="post-carousel">
                {/* TODO: Customize Carousel */}
                {/* 75% width for carousel is what seems to work best */}
                { data && data.postsPictureUrl && data.postsPictureUrl.length > 0 ?
                    (<Carousel className="w-[75%] mx-auto">
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
                        </Carousel>)
                : (
                    <Card className="py-16 mb-4 text-center">
                        <CardContent>
                            This post has no photos...
                        </CardContent>
                    </Card>
                )}
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
                        <div className="flex justify-between items-center">
                            <dt>
                                <h2 className="text-2xl font-bold">{data.title}</h2>
                            </dt>
                            {Cookies.get('userId') === data.ownerUserID ? (
                            <div className="space-x-2 text-right">
                                <Button variant="ghost"><Link href={`/posts/${params.post}/edit`}>Edit</Link></Button>
                                <Button variant="destructive" onClick={handleDelete}>Delete</Button>
                            </div>) : null}
                        </div>
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
            {Cookies.get('userId') && Cookies.get('userId') !== data.ownerUserID ? (messageForm()) : null}
        </main>
    );
}

export default page;