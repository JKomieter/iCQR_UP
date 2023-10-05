import { transporter } from "@/utils/nodemail";


export const SignOut = async (
    email: string, 
    full_name: string,
    signOutTablet: Boolean,
    signOutVR: Boolean
) => {
    try {
        await transporter.sendMail({
            from: email,
            to: process.env.NEXT_PUBLIC_MAIL_USER,
            subject: "ICQR Sign Out Info",
            text: "Sign out for devices",
            html: `<p>${full_name}, ${email} has signed out for ${signOutTablet ? "Tablet" : ""} ${signOutVR ? "and the VR" : ""} at ${new Date().toLocaleString()}}</p>`,
        })

        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_MAIL_USER,
            to: email,
            subject: "ICQR Sign Out Confirmation",
            text: "This is a confirmation email",
            html: `<p>You have successfully signed out for ${signOutTablet ? "Tablet" : ""} ${signOutVR ? "and the VR" : ""} at ${new Date().toLocaleString()}}. If you have any questions, please contact ${process.env.NEXT_PUBLIC_MAIL}</p>`
        })
    } catch (error) {
        console.log(error);
    }
}

export const SignUp = async (
    email:string, 
    full_name: string,
    signUpTablet: Boolean,
    signUpVR: Boolean
) => {
    try {
        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_MAIL_USER,
            to: email,
            subject: "ICQR Sign Up Confirmation",
            text: "This is a confirmation email",
            html: `<p>You have successfully signed up for ${signUpTablet ? "Tablet" : ""} ${signUpVR ? "and the VR" : ""} at ${new Date().toLocaleString()}}. Please come to the lab or contact iCQR member for it. If you have any questions, please contact ${process.env.NEXT_PUBLIC_MAIL}</p>`
        })

        await transporter.sendMail({
            from: email,
            to: process.env.NEXT_PUBLIC_MAIL_USER,
            subject: "ICQR Sign Up Info",
            text: "Sign up for devices",
            html: `<p>${full_name} ${email} has signed up for ${signUpTablet ? "Tablet" : ""} ${signUpVR ? "and the VR" : ""} at ${new Date().toLocaleString()}</p>`,
        })
    } catch (error) {
        console.log(error);
    }
}