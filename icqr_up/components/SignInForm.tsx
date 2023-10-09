"use strict";
import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useCallback } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";

const SignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const router = useRouter();

    const onSubmit = useCallback(async (data: FieldValues) => {
        // setLoading(true);
        const { email, password } = data;
        // check against firebase auth
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/dashboard")
        } catch (error) {
            setLoading(false);
            console.log(error);
            setInvalid(true);
        }
    }, []);

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center py-20 gap-10 overflow-hidden">
            <h1 className="text-4xl font-bold text-neutral-100">Admin Sign In</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full md:w-[70%] flex flex-col py-5 gap-7 justify-center items-center md:px-8 px-4 overflow-y-scroll transition-all duration-500 "
            >
                <div className="w-full">
                    <label className="font-semibold text-base text-neutral-200">Email</label>
                    <input
                        type="email"
                        className="w-full rounded-md p-3 shadow-md border-2 border-neutral-200 bg-white focus:outline-none"
                        placeholder="Enter your email"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="w-full">
                    <label className="font-semibold text-base text-neutral-200">Password</label>
                    <input
                        type="password"
                        className="w-full rounded-md p-3 shadow-md border-2 border-neutral-200 bg-white focus:outline-none"
                        placeholder="Enter your password"
                        {...register("password", { required: true })}
                    />
                    {errors.password && (
                        <span className="text-red-500">This field is required</span>
                    )}
                </div>
                {
                    invalid && (
                        <span className="text-red-500">Invalid Email or Password</span>
                    )
                }
                <div className="w-full flex items-center justify-center">
                    <button
                        disabled={loading}
                        type="submit"
                        className="px-6 py-2 font-semibold rounded-md bg-blue-700 text-white hover:bg-blue-800 shadow-md"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;