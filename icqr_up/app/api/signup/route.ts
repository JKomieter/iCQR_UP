import { SignOut, SignUp } from "@/utils/mailer";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: Request) {
    try {
        const { email, fullName, checkTablet, checkVr, } = await request.json() as {
            email: string,
            fullName: string,
            checkTablet: Boolean,
            checkVr: Boolean
        };

        await SignUp(email, fullName, checkTablet, checkVr);

        return NextResponse.json({ message: "success" });
    } catch (error) {
        return NextResponse.json({ message: "error" });
    }
}