import { Message, PostMessage } from "@/app/schema/message";
import { FetchAxios, RequestMethod } from "./lib";

// type MessageResponse = (string | (string | any[])[][])[][];

export async function getUserMessages(userId: string): Promise<(any | undefined)> {

    const result = FetchAxios<any>(`messages/${userId}`, RequestMethod.GET);
    return result;

}
