'use client'

import { BlankState } from '@/components/blankState';
import { Button } from '@/components/ui/button';
import { deletePost, getAllPosts } from '@/endpoints/post.endpoint';
import { deleteUser, getAllUsers, getUser } from '@/endpoints/user.endpoint';
import { useQuery, useMutation } from "@tanstack/react-query";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { useState } from 'react';
import Cookies from 'js-cookie';
import { User } from '@/app/schema/user'


const page = () => {

    const [userId, setUserId] = useState<string>(Cookies.get('userId') ?? '');
    const [userTableData, setUserTableData] = useState<User[]>([]);

    const fetchAllUsers = async () => {
        const res = await getAllUsers();
        return res;
    }

    const fetchAllPosts = async () => {
        const res = await getAllPosts();
        return res;
    }

    const getAdmin = async () => {
        const res = await getUser(userId);
        return res;
    }

    const { isLoading: adminIsLoading, data: adminData, error: adminError } = useQuery(
        {
            queryKey: ['getUser'],
            queryFn: getAdmin,
        }
    );

    const { isLoading: userIsLoading, data: userData, error: userError, refetch: userRefetch } = useQuery(
        {
            queryKey: ['allUsers'],
            queryFn: fetchAllUsers,
        }
    );

    const { isLoading: postIsLoading, data: postData, error: postError, refetch: postRefetch } = useQuery(
        {
            queryKey: ['allPosts'],
            queryFn: fetchAllPosts,
        }
    );

    const { mutateAsync: mutateAsyncPost, error: deletePostError } = useMutation({ mutationKey: ["deletePost"], mutationFn: deletePost })
    const { mutateAsync: mutateAsyncUser, error: deleteUserError } = useMutation({ mutationKey: ["deleteUser"], mutationFn: deleteUser })
    const deletePostHandler = async (postId: string) => {
        try {
            await mutateAsyncPost({ postId: postId })
            postRefetch();
        }
        catch (error) {
            console.log(error)
        }
    }

    const deleteUserHandler = async (userId: string) => {
        try {
            await mutateAsyncUser({ userId: userId })
            userRefetch();
            postRefetch()
        }
        catch (error) {
            console.log(error)
        }
    }
    if (adminIsLoading) {
        return <BlankState variant="loading" title="Authorizing" body="It shouldn't take too long..."></BlankState>
    }
    if (adminError) {
        return <BlankState variant="error" title="Error Authorizing" body="Please try again later"></BlankState>
    }
    if (adminData?.isAdmin == false) {
        return <BlankState variant="error" title="Unauthorized" body="You are not authorized to view this page"></BlankState>
    }

    { userIsLoading && <BlankState variant="loading" title="Loading Users" body="It shouldn't take too long..."></BlankState> }
    { postIsLoading && <BlankState variant="loading" title="Loading Posts" body="It shouldn't take too long..."></BlankState> }
    { userError && <BlankState variant="error" title="Error Loading Users" body="Please try again later"></BlankState> }
    { postError && <BlankState variant="error" title="Error Loading Posts" body="Please try again later"></BlankState> }
    { deletePostError && <BlankState variant="error" title="Error Deleting Post" body="Please try again later"></BlankState> }
    { deleteUserError && <BlankState variant="error" title="Error Deleting User" body="Please try again later"></BlankState> }

    const userRows: User[] = userData!;

    return (
        <div className="flex flex-col items-start">
            <h1 className='text-2xl font-bold mt-12 mb-4 m-auto'>Users Information</h1>
            <table className='border-solid border-2 w-4/5 m-auto'>
                <tr>
                    <th className='border-solid border-2 px-1'>Id</th>
                    <th className='border-solid border-2 px-1'>Email</th>
                    <th className='border-solid border-2 px-1'>Date Created</th>
                    <th className='border-solid border-2 px-1'>Location</th>
                    <th className='border-solid border-2 px-1'>Full Name</th>
                    <th className='border-solid border-2 px-1'>Profile Picture Url</th>
                    <th className='border-solid border-2 px-1'>Is Admin</th>
                    <th className='border-solid border-2 px-1'></th>
                </tr>
                {userData?.map((user: any) => {
                    return (
                        <tr>
                            <td className='border-solid border-2 px-1'>{user._id}</td>
                            <td className='border-solid border-2 px-1'>{user.email}</td>
                            <td className='border-solid border-2 px-1'>{user.dateCreated.toString()}</td>
                            <td className='border-solid border-2 px-1'>{user.location}</td>
                            <td className='border-solid border-2 px-1'>{user.fullName}</td>
                            <td className='border-solid border-2 px-1'>{user.profilePictureUrl}</td>
                            <td className='border-solid border-2 px-1'>{user.isAdmin.toString()}</td>
                            {
                                user.isAdmin == false &&
                                <td className='border-solid border-2 px-1'><Button onClick={() => deleteUserHandler(user._id)}>Delete</Button></td>
                            }
                        </tr>
                    )
                })}
            </table>
            <h1 className='text-2xl font-bold mt-12 mb-4 m-auto'>Posts Information</h1>
            <table className='border-solid border-2 w-4/5 m-auto'>
                <tr>
                    <th className='border-solid border-2 px-1 '>Id</th>
                    <th className='border-solid border-2 px-1 '>Title</th>
                    <th className='border-solid border-2 px-1 '>Description</th>
                    <th className='border-solid border-2 px-1 '>Condition</th>
                    <th className='border-solid border-2 px-1 '>Category</th>
                    <th className='border-solid border-2 px-1 '>Owner Id</th>
                    <th className='border-solid border-2 px-1 '>Date Created</th>
                    <th className='border-solid border-2 px-1 '></th>
                </tr>

                {postData?.map((post: any) => {
                    return (
                        <tr className="w-[20rem]">
                            <td className='border-solid border-2 px-1'>{post._id}</td>
                            <td className='border-solid border-2 px-1'>{post.title}</td>
                            <td className='border-solid border-2 px-1'>
                                <p title={post.description} className="px-1 truncate w-32 hover:text-clip"> {post.description} </p>
                            </td>
                            <td className='border-solid border-2 px-1'>{post.condition}</td>
                            <td className='border-solid border-2 px-1'>{post.category}</td>
                            <td className='border-solid border-2 px-1'>{post.ownerUserID}</td>
                            <td className='border-solid border-2 px-1'>{post.dateCreated}</td>
                            <td className='border-solid border-2 px-1'><Button onClick={() => deletePostHandler(post._id)}>Delete</Button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}


export default page;
