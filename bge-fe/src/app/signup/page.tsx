"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import axios from "axios"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Image from "next/image"
import bgeIcon from "../../../public/bge.svg"
import stopIcon from "../../../public/stop.svg"
import "../style.css"

const formSchema = z.object({
    username: z.string().min(2, {message: "Please choose a username"}).max(50),
    password: z.string().min(8, {message: "Please choose a password"}).max(50),
    email: z.string().email({message: "Please enter your email address"}),
    dateCreated: z.string(),
    location: z.string(),
    fullName: z.string().min(2, {message: "Please enter your full name"}),
    profilePictureUrl: z.string(),
    isAdmin: z.boolean()
})



const page = () => {
    const router = useRouter();
    var today = new Date()
    var todayISO = today.toISOString()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
            email: "",
            dateCreated: todayISO,
            location: "",
            fullName: "",
            profilePictureUrl: "",
            isAdmin: false
        }
    })
    const [visible, setVisible] = useState(false)
    const [isShow, setShow] = useState(false)

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
        await axios.post('http://localhost:8080/users/signup', {
            "username":values.username,
            "password" : values.password,
            "email": values.email,
            "dateCreated": values.dateCreated,
            "location": values.location,
            "fullName": values.fullName,
            "profilePictureUrl": values.profilePictureUrl,
            "isAdmin": values.isAdmin
        }).then(response => {
            if(response.status === 201) {
                router.push('/signin')
            }
        })
        .catch(error => {
            if (error.response.status === 400) {
                setShow(true);
            }
        })
    }

    return (
        <section className="flex min-h-screen flex-col justify-between p-8 md:items-center">
            <div className="flex flex-col items-center">
                <Image
                    priority
                    src={bgeIcon}
                    alt="Board Game Exchange"
                />
            </div>
            <div className="flex flex-col md:items-center">
                <h1 className="mb-2 text-3xl font-extrabold w-2/3">Start Trading</h1>
                <p className="w-2/3">Type in your email and choose a password and you're good to go.</p>
            </div>
            {isShow && (
                <div>
                    <Alert variant="destructive" className="flex flex-row gap-4 bg-danger-100 text-black-100">
                        <div>
                            <Image src={stopIcon} alt="Error"/>
                        </div>
                        <div>
                            <AlertTitle>Email already exists</AlertTitle>
                            <AlertDescription>
                                Recover your account <Link href="/recovery" className="underline">here</Link>
                            </AlertDescription>
                        </div>
                    </Alert>
            </div>
            )}
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-lg w-full space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email:</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name:</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Full Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username:</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Username" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password:</FormLabel>
                                    <FormControl>
                                        <Input type={visible ? "text" : "password"} placeholder="Password" {...field}
                                        suffix={
                                            <div onClick={() => setVisible(!visible)}>
                                                {visible ? <EyeOffIcon/> : <EyeIcon/>}
                                            </div>}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full bg-primary-400 hover:bg-primary-500">Sign Up</Button>
                    </form>
                </Form>
            </div>

            <div className="flex flex-col items-center">
                <Link href="/signin" className="underline">I already have an account</Link>
            </div>
        </section>

    );

}
export default page;
