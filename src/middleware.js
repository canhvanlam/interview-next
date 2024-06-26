
import { NextResponse } from 'next/server'
import {STORAGE_KEY} from "@/constants/application.constant"
import ROUTES from './constants/routes';
export function middleware(request, context) {
    let verify = request.cookies.getAll();
    const accessToken = request.cookies.get(STORAGE_KEY.ACCESS_TOKEN) ;
    let url = request.url
    if(!accessToken && ROUTES.HOME.includes(request.nextUrl.pathname)){
        const absoluteURL = new URL(ROUTES.LOGIN, request.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
    if(accessToken && (request.nextUrl.pathname.includes(ROUTES.LOGIN)|| request.nextUrl.pathname.includes(ROUTES.SIGNUP))){
        const absoluteURL = new URL(ROUTES.HOME, request.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
}