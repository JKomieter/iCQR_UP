"use client";
import LeftContent from "@/components/LeftContent";
import SignInForm from "@/components/SignInForm";

export default function AdminPage() { 
    return (
        <div 
        className="w-full h-full flex flex-row bg-slate-700 overflow-hidden">
            <LeftContent backgroound="https://images.pexels.com/photos/3785868/pexels-photo-3785868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <SignInForm />
        </div>
    )
}