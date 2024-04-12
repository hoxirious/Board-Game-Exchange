import { User } from "@/app/schema/user";
import { FetchAxios, RequestMethod } from "./lib";

export async function getUser(userId: string): Promise<User | undefined> {

    const result = FetchAxios<User>(`users/${userId}`, RequestMethod.GET);
    return result;

}

export async function getAllUsers(): Promise<User[] | undefined> {

    const result = FetchAxios<User[]>(`users`, RequestMethod.GET);
    return result;

}

export async function deleteUser({ userId }: { userId: string }): Promise<User | undefined> {

    const result = FetchAxios<User>(`users/${userId}`, RequestMethod.DELETE);
    return result;
}
