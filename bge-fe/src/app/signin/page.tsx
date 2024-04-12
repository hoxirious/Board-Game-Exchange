"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
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
import bgeIcon from "../../../public/bgeIcon.svg"
import stopIcon from "../../../public/stop.svg"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import Cookies from "js-cookie"
import { PasswordInput } from "@/components/ui/password-input"

const formSchema = z.object({
    email: z.string().email({ message: "Please enter your email address" }),
    password: z.string().min(8, { message: "Your password must be at least 8 characters" }).max(50)
})

const page = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    useEffect(() => {
        const userId = Cookies.get('userId');
        if (userId) {
            router.push('/home');
        }
    }, []);

    const [visible, setVisible] = useState(false)
    const [isShow, setShow] = useState(false)

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
        await axios.post('http://localhost:8080/users/login', {
            "email": values.email,
            "password": values.password
        })
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    Cookies.set('userId', response.data.userId, { expires: Date.now() + (24 * 60 * 60 * 1000) });
                    router.push('/home')
                }
            })
            .catch(error => {
                if (error.response.status === 400 || error.response.status === 404) {
                    setShow(true)
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
            {isShow && (
                <div>
                    <Alert variant="destructive" className="flex flex-row gap-4 bg-danger-100 text-black-100">
                        <div>
                            <Image src={stopIcon} alt="Error" />
                        </div>
                        <div>
                            <AlertTitle>Incorrect Credentials</AlertTitle>
                            <AlertDescription>
                                Please check your email and password
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
                                        <Input placeholder="Email" {...field} />
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
                                        <PasswordInput type={visible ? "text" : "password"} placeholder="Password" {...field}
                                            suffix={
                                                <div onClick={() => setVisible(!visible)}>
                                                    {visible ? <EyeOffIcon /> : <EyeIcon />}
                                                </div>}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full bg-primary-400">Log In</Button>
                    </form>
                </Form>
            </div>

            <div className="flex flex-col items-center">
                <Link href="/recovery" style={{ textDecoration: "underline" }}>Forgot Password?</Link>
            </div>
            <div className="flex flex-col items-center">
                <p>Don't have an account?</p>
                <Link href="/signup">
                    <Button variant="outline">Sign Up Here</Button>
                </Link>
            </div>
        </section>

    );
}

export default page;
