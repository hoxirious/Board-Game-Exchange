import { Post } from "@/app/schema/Post";
import { FetchAxios, RequestMethod } from "./lib";

export async function getPost(postId: string): Promise<Post| undefined> {

    const result = FetchAxios<Post>(`posts/${postId}`, RequestMethod.GET);
    return result;

}
