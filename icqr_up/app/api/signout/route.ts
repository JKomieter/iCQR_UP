import { SignOut, SignUp } from "@/utils/mailer";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: Request) {
    try {
        const { email, fullName, signOutTablet, signOutVR, } = await request.json() as {
            email: string,
            fullName: string,
            signOutTablet: Boolean,
            signOutVR: Boolean
        };

        await SignOut(email, fullName, signOutTablet, signOutVR);

        return NextResponse.json({ message: "success" });
    } catch (error) {
        return NextResponse.json({ message: "error" });
    }
}