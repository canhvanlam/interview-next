import { NextResponse } from 'next/server'
import {STORAGE_KEY} from "@/constants/application.constant"
import {useSelector} from 'react-redux';
import { useRouter } from 'next/navigation'
const protectedRoutes = ["/"]
export function middleware(request, context) {
    const accessToken = false;
    let url = request.url
    if(!accessToken && protectedRoutes.includes(request.nextUrl.pathname)){
        const absoluteURL = new URL("/login", request.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
}