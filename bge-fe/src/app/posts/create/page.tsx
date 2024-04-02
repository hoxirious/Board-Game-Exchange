"use client"

import { boardGameCategories, boardGameConditions } from "@/app/schema/boardGame"

import { Button } from "@/components/ui/button"
import { ImagePlus, PackageSearch, LayoutGrid } from 'lucide-react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


const rules = {
    title : {
        min: 2,
        max: 128
    }, 
    description: {
        max: 512
    }
};
const formSchema = z.object({
    title: z.string()
        .min(1, { message: "Please enter a post title." })
        .min(rules.title.min, { message: "Title must be at least 2 characters." })
        .max(rules.title.max, { message: "Title cannot be more than 128 characters." }),
    description: z.string()
        .max(rules.description.max, { message: "Description cannot be more than 512 characters." }),
    condition: z.string()
        .min(1, { message: "Please select a condition." }),
    category: z.string()
        .min(1, { message: "Please select a category." })
});

const page = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            // TODO: location: user's default location setting
            location: "",
            condition: "",
            category: ""
        }
    })
     
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        // TODO: submit!
        console.log(values)
    }

    return (
        <main className="p-4">
            <h1 className="border-b-2 font-semibold text-4xl mb-8">Create a New Post</h1>
            <div className="lg:max-w-screen-lg md:max-w-screen-md md:mx-auto md:grid md:grid-cols-2 md:gap-4">
                <section>
                    <div className="flex justify-between items-end">
                        <h2 className="text-xl font-semibold">Photos</h2>
                        <span className="text-sm">0/10</span>
                    </div>
                    {/* Photo uploader */}
                    {/* TODO: implement this :) */}
                    <div className="grid content-center bg-white w-full p-8 text-center rounded border border-black border-dashed md:aspect-square">
                        <ImagePlus className="w-16 h-16 mb-4 mx-auto" />
                        <div>
                            <Button>Browse Photos</Button>
                        </div>
                    </div>
                </section>
                <section className="post-details">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1.5">
                            <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex justify-between items-end">
                                        <h2 className="text-xl font-semibold">Title</h2>
                                        <span>
                                            {form.getValues().title.length}/
                                            { rules.title.max }
                                        </span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Type your title here" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex justify-between items-end">
                                        <h2 className="text-xl font-semibold">Description</h2>
                                        <span>
                                            {form.getValues().description.length}/
                                            { rules.description.max }
                                        </span>
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea className="h-48 resize-none"placeholder="Type your description here" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xl font-semibold">Location</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Search a location" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        <iframe className="w-full aspect-square" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Edmonton+(Edmonton)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                            <h2 className="text-xl font-semibold">Additional Details</h2>
                            <div>
                                <FormField
                                control={form.control}
                                name="condition"
                                render={({ field }) => (
                                    <FormItem className="flex flex-wrap justify-between">
                                        <FormLabel className="flex items-center pt-2 space-x-2 mr-2">
                                            <PackageSearch />
                                            <span>Condition</span>
                                        </FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <div className="flex-grow">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a Condition" />
                                                    </SelectTrigger>
                                                </div>
                                            </FormControl>
                                            <SelectContent>
                                                {boardGameConditions.map((condition) => (
                                                    <SelectItem value={condition.name}>{condition.name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className="basis-full" />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                        <FormItem className="flex flex-wrap justify-between">
                                            <FormLabel className="flex items-center pt-2 space-x-2 mr-2">
                                                <LayoutGrid/>
                                                <span>Category</span>
                                            </FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <div className="flex-grow">
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select a Category" />
                                                        </SelectTrigger>
                                                    </div>
                                                </FormControl>
                                                <SelectContent>
                                                    {boardGameCategories.map((category) => (
                                                        <SelectItem value={category.name} key={category.name}>{category.name}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage className="w-full" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex justify-between py-4">
                                {/* TODO: implement cancel */}
                                <Button variant="outline" type="button" className="px-12">Cancel</Button>
                                <Button type="submit" className="px-12">Post</Button>
                            </div>
                        </form>
                    </Form>
                </section>
            </div>    
        </main>
    );
}

export default page;