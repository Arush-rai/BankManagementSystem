import { cookies } from "next/headers";
const { NextResponse } = require("next/server");

export async function middleware (req,res) {
    const cookieStore = cookies();
    const token = cookieStore.get('token') || '';
    console.log('token', token);
    if (!token) {
        return NextResponse.redirect(new URL('/login',req.url))
    }
    else {
        return NextResponse.next();
    }
    
}

export const config = {
    matcher: ['/saving-deposit', '/fixed-deposit','/demand-deposit','/recurring-deposit','/view-deposit']
}