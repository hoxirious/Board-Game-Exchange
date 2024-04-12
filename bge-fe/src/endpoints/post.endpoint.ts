import { Post } from "@/app/schema/Post";
import { FetchAxios, RequestMethod } from "./lib";

export async function getPost(postId: string): Promise<Post | undefined> {

    const result = FetchAxios<Post>(`posts/${postId}`, RequestMethod.GET);
    return result;

}

export async function getAllPosts(): Promise<Post[] | undefined> {

    const result = FetchAxios<Post[]>(`posts`, RequestMethod.GET);
    return result;

}

export async function deletePost({postId}: {postId: string}): Promise<Post | undefined> {

    const result = FetchAxios<Post>(`posts/${postId}`, RequestMethod.DELETE);
    return result;
}
