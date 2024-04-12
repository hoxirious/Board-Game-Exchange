"use client"

import { boardGameCategories, boardGameConditions } from "@/app/schema/boardGame"

import { Button } from "@/components/ui/button"
import { PackageSearch, LayoutGrid } from 'lucide-react'

import PhotosSelector from '../[post]/PhotosSelector'

import { useRouter } from 'next/navigation'

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

import { formRules, formSchema, create, postDefaultValues } from "@/app/actions/post"
import Cookies from 'js-cookie'
import { SearchInput, useSuggestionsMutation } from "@/components/bge-advanced-search"

const page = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            ...postDefaultValues
        }
    })

    const owner = Cookies.get('userId');

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const post = {
            ...form.getValues(),
            ownerUserID: owner,
            dateCreated: (new Date(Date.now())).toJSON()
        }

        // TODO: change second argument to actual current user.
        const response = await create(post);

        if(response.status === 201) {
            const data = await response.json();
            router.push(`/posts/${data._id}`);
        }
    }

    return (
        <main className="p-4">
            <h1 className="border-b-2 font-semibold text-4xl mb-8">Create a New Post</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1.5">
                    <div className="lg:max-w-screen-lg md:max-w-screen-md md:mx-auto md:grid md:grid-cols-2 md:gap-4">
                        <section>
                            <FormField
                                control={form.control}
                                name="postsPictureUrl"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <PhotosSelector onChange={field.onChange}/>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </section>
                        <section className="post-details">
                            <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex justify-between items-end">
                                        <h2 className="text-xl font-semibold">Title</h2>
                                        <span>
                                            {form.getValues().title.length}/
                                            { formRules.title.max }
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
                                            { formRules.description.max }
                                        </span>
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea className="h-48 resize-none"placeholder="Type your description here" {...field} />
                                    </FormControl>
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
                                                {boardGameConditions.map((condition, index) => (
                                                    <SelectItem key={index} value={condition.name}>{condition.name}</SelectItem>
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

                            <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xl font-semibold">Location</FormLabel>
                                    <FormControl>
                                        <div className="w-full relative">
                                            <SearchInput
                                                placeholder="Search a location" 
                                                givenValue={field.value}
                                                onSave={field.onChange}
                                                suggestionsMutation={useSuggestionsMutation(`/location-suggestions`)} />
                                        </div>
                                    </FormControl>
                                    <FormDescription>
                                        <iframe className="w-full aspect-square" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Edmonton+(Edmonton)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                            
                            <div className="flex justify-between py-4">
                                {/* TODO: implement cancel */}
                                <Button variant="outline" type="button" className="px-12">Cancel</Button>
                                <Button type="submit" className="px-12">Post</Button>
                            </div>
                        </section>
                    </div>
                </form>
            </Form>
        </main>
    );
}

export default page;