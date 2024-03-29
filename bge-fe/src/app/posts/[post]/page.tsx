import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import RootLayout from "@/app/layout";
import { Button } from "@/components/ui/button";

import "./post.css"

const page = ({ params }: { params: { accountID: string } }) => {
    return (
        <main className="post">
            <section className="post-carousel">
                {/* TODO: Customize Carousel */}
                {/* 75% width for carousel is what seems to work best */}
                <Carousel className="w-[75%] mx-auto">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <section className="post-user-details">
                    <div>
                        <Avatar className="inline-block align-middle">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="inline-block p-2">Username</span>
                    </div>
                    <span>Posted 2 Days ago</span>
                </section>
            </section>
            <section className="post-details">
                <dl className="space-y-1.5">
                    <div>
                        <dt>
                            <h2 className="text-2xl font-bold">Title Of The Post</h2>
                        </dt>
                        <dd>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar varius leo, quis gravida arcu. Pellentesque a semper felis, nec bibendum nulla. In hac habitasse platea dictumst. Etiam pharetra dolor nec risus viverra efficitur. Mauris elementum fringilla ultrices.
                        </dd>
                    </div>
                    <div>
                        <dt><h3 className="font-bold">Category</h3></dt>
                        <dd>Economic</dd>
                    </div>

                    <div>
                        <dt><h3 className="font-bold">Condition</h3></dt>
                        <dd>Used - Like New</dd>
                    </div>

                    <div>
                        <dt><h3 className="font-bold">Location</h3></dt>
                        <dd>Calgary</dd>
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