
import { NextResponse } from 'next/server'
import {STORAGE_KEY} from "@/constants/application.constant"
const protectedRoutes = ["/"]
export function middleware(request, context) {
    let verify = request.cookies.getAll();
    const accessToken = request.cookies.get(STORAGE_KEY.ACCESS_TOKEN) ;
    let url = request.url
    if(!accessToken && protectedRoutes.includes(request.nextUrl.pathname)){
        const absoluteURL = new URL("/login", request.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
    if(accessToken && (request.nextUrl.pathname.includes("login")|| request.nextUrl.pathname.includes("sign-up"))){
        const absoluteURL = new URL("/", request.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
}