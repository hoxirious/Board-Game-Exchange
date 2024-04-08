import { Message, PostMessage } from "@/app/schema/message";
import { FetchAxios, RequestMethod } from "./lib";

export async function getUserMessages(userId: string): Promise<PostMessage[]| undefined> {

    const result = FetchAxios<PostMessage[]>(`messages/${userId}`, RequestMethod.GET);
    return result;

}
