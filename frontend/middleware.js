import { cookies } from "next/headers";
import Checkout from "./app/checkout/[id]/page";
const { NextResponse } = require("next/server");

export async function middleware (req,res) {
    const cookieStore = cookies();
    const token = cookieStore.get('token') || '';
    console.log(token);
    if (token) {
        return NextResponse.redirect(new URL('/login',req.url))
    }
    else {
        return NextResponse.next();
    }
    
}

export const config = {
    matcher: ['/checkout/:path']
}