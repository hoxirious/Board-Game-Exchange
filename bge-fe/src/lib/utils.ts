import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import humanizeDuration from 'humanize-duration'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function debounce(callback, delay) {
    let timer = null;
    return function() {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback();
        }, delay)
    }
}

export function timeAgoHumanReadable(fromDateTime) {
    return humanizeDuration(
        // not really 'time ago' cuz of math.abs
        Math.abs((new Date(fromDateTime)) - (new Date())),
        {
            largest: 1,
            round: true
        });
}

export const fetcher = async (url: string) => {
    const r = await fetch(url, {
        headers: new Headers({
            "ngrok-skip-browser-warning": "69420",
        })
    });

    if (!r.ok) {
        const error = new Error('An error occurred while fetching the data.')
        // Attach extra info to the error object.
        error.status = r.status;
        throw error
    }

    // returning json here since 200 response body is json anyway.
    return r.json()
}


export const generateRoomId = (userId1: string, userId2: string, postId: string) => {
    if (userId1 > userId2) {
        return userId1 + userId2 + postId;
    } else {
        return userId2 + userId1 + postId;
    }
}

export const domain = 'https://ed79-2001-56a-7423-1d00-1d05-3c80-aa07-206.ngrok-free.app';
