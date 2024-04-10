'use server'
import { cookies } from 'next/headers';


interface Cookies {
    key: string,
    value: string,
    options: {}
}

export async function setCookies(prop: Cookies) {
    cookies().set(prop.key, prop.value, prop.options);
}

export async function getCookies(key: string) {
    let cookie =  cookies().get(key);
    return cookie?.value
}
