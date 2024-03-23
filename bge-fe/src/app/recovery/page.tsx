"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import "../style.css"

const formSchema = z.object({
    email: z.string().email({message: "Please enter your email address"})
})

const page = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""
        }
    })

    return (
        <section className="flex min-h-screen flex-col justify-between p-8 md:items-center bg-gray-50">
            <div className="flex flex-col items-center">
                <Image
                    priority
                    src={bgeIcon}
                    alt="Board Game Exchange"
                />
            </div>
            <div className="flex flex-col md:items-center">
                <h1 className="mb-2 text-3xl font-extrabold w-2/3">Reset Your Password</h1>
                <p className="w-2/3">Enter your email and we will send you a link to reset your password.</p>
            </div>
            <div>
                <Alert variant="destructive" className="flex flex-row gap-4 bg-danger-100 text-black-100">
                    <div>
                        <Image src={stopIcon} alt="Error"/>
                    </div>
                    <div>
                        <AlertTitle>Cannot Find Account</AlertTitle>
                        <AlertDescription>
                            Please enter an existing email
                        </AlertDescription>
                    </div>
                </Alert>
            </div>
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
                        <Button type="submit" className="w-full bg-primary-400 hover:bg-primary-500">Reset Your Password</Button>
                    </form>
                </Form>
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

function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
}

export default page;