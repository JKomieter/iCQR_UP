"use client";
import Dashboard from "@/components/Dashboard"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/firebase/config"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
    const [user] = useAuthState(auth);
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/admin")
        }
    }, []);

    return (
        <div className="w-full h-full py-5 bg-white">
            <Dashboard />
        </div>
    )
};