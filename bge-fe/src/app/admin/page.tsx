'use client'

import { BlankState } from '@/components/blankState';
import { Button } from '@/components/ui/button';
import { deletePost, getAllPosts } from '@/endpoints/post.endpoint';
import { deleteUser, getAllUsers } from '@/endpoints/user.endpoint';
import { useQuery, useMutation } from "@tanstack/react-query";


const page = () => {

    const fetchAllUsers = async () => {
        const res = await getAllUsers();
        return res;
    }

    const fetchAllPosts = async () => {
        const res = await getAllPosts();
        return res;
    }

    const { isLoading: userIsLoading, data: userData, error: userError } = useQuery(
        {
            queryKey: ['allUsers'],
            queryFn: fetchAllUsers,
        }
    );

    const { isLoading: postIsLoading, data: postData, error: postError } = useQuery(
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
        }
        catch (error) {
            console.log(error)
        }
    }

    const deleteUserHandler = async (userId: string) => {
        try {
            await mutateAsyncUser({ userId: userId })
        }
        catch (error) {
            console.log(error)
        }
    }

    { userIsLoading && <BlankState variant="loading" title="Loading Users" body="It shouldn't take too long..."></BlankState> }
    { postIsLoading && <BlankState variant="loading" title="Loading Posts" body="It shouldn't take too long..."></BlankState> }
    { userError && <BlankState variant="error" title="Error Loading Users" body="Please try again later"></BlankState> }
    { postError && <BlankState variant="error" title="Error Loading Posts" body="Please try again later"></BlankState> }
    { deletePostError && <BlankState variant="error" title="Error Deleting Post" body="Please try again later"></BlankState> }
    { deleteUserError && <BlankState variant="error" title="Error Deleting User" body="Please try again later"></BlankState> }

    return (
        <div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Date Created</th>
                    <th>Location</th>
                    <th>Full Name</th>
                    <th>Profile Picture Url</th>
                    <th>Is Admin</th>
                    <th></th>
                </tr>
                {userData?.map((user: any) => {
                    return (
                        <tr>
                            <td>{user._id}</td>
                            <td>{user.email}</td>
                            <td>{user.dateCreated.toString()}</td>
                            <td>{user.location}</td>
                            <td>{user.fullName}</td>
                            <td>{user.profilePictureUrl}</td>
                            <td>{user.isAdmin.toString()}</td>
                            {
                                user.isAdmin == false &&
                                <td><Button onClick={() => deleteUserHandler(user._id)}>Delete</Button></td>
                            }
                        </tr>
                    )
                })}
            </table>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Posts Picture Url</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Condition</th>
                    <th>Category</th>
                    <th>Owner Id</th>
                    <th>Date Created</th>
                    <th></th>
                </tr>

                {postData?.map((post: any) => {
                    return (
                        <tr>
                            <td>{post._id}</td>
                            <td>{post.postsPictureUrl}</td>
                            <td>{post.title}</td>
                            <td>{post.description}</td>
                            <td>{post.condition}</td>
                            <td>{post.category}</td>
                            <td>{post.ownerUserID}</td>
                            <td>{post.dateCreated}</td>
                            <td><Button onClick={() => deletePostHandler(post._id)}>Delete</Button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}


export default page;
