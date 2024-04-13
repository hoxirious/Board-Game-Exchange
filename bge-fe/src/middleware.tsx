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

const domain = "https://924c-2604-3d09-280-f20-7c1c-843f-e32d-5fc9.ngrok-free.app/";

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
