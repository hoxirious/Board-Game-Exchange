import { User } from "@/app/schema/user";
import { FetchAxios, RequestMethod } from "./lib";

export async function getUser(userId: string): Promise<User| undefined> {

    const result = FetchAxios<User>(`users/${userId}`, RequestMethod.GET);
    return result;

}
