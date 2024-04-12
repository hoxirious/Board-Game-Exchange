import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
    matcher: [
        '/posts/(.*)/edit',
        '/posts/create',
        '/inbox',
        '/logout',
        '/admin'
    ],
}

const domain = "http://localhost:3000";

export async function middleware(request: NextRequest) {
    const currentUser = request.cookies.get("userId")?.value;
    console.log(request.cookies.get("userId"));
    console.log(currentUser);

    if(!currentUser) {
        const response = NextResponse.redirect(new URL(`${domain}/signin`), request.url);
        return response;
    }

    if(request.nextUrl.pathname === '/logout') {
        request.cookies.delete("userId");
        const response = NextResponse.redirect(new URL(`${domain}/signin`), request.url);
        response.cookies.delete("userId");
        return response;
    }
}