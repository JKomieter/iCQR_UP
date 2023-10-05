import { useCallback, useState } from "react"
import SignInRightContent from "./SignInRightContent";
import { db } from "@/firebase/config";
import { SignOutType, SignUpType } from "@/types";
import { collection, query, limit, getDocs, addDoc, where } from "firebase/firestore";
import { toast } from "react-toastify";
import SignOutRightContent from "./SignOutRightContent";
import axios from "axios";

const MainContent = () => {
    const [mode, setMode] = useState<"sign-out" | "sign-up">("sign-up");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [studentId, setStudentId] = useState<string>("");
    const [tabletTime, setTabletTime] = useState<Date>(new Date());
    const [vrTime, setVrTime] = useState<Date>(new Date());
    const [checked, setChecked] = useState(false);
    const [checkTablet, setCheckTablet] = useState(false);
    const [checkVr, setCheckVr] = useState(false);
    const [signOutVR, setSignOutVR] = useState<Boolean>(false);
    const [signOutTablet, setSignOutTablet] = useState<Boolean>(false);
    const signOutCollectionRef = collection(db, "sign_outs");
    const signUpCollectionRef = collection(db, "sign_ups");


    const handleSignOut = useCallback(async () => {
        // first check if devices are available
        if (email.length === 0 || fullName.length === 0 || studentId.length === 0) {
            toast.error("Please fill in all the fields");
            return;
        }

        toast.loading("Signing out for devices");

        await checkOut();
    }, [email, fullName, studentId]);


    const checkOut = async () => {
        try {
            const querySignUps = query(signUpCollectionRef, where("email", "==", email), limit(1));
            const querySnapshot = await getDocs(querySignUps);
            if (querySnapshot.docs.length === 0) {
                toast.error("You haven't signed up for devices yet");
                return;
            }
            const latestSignOutDoc = querySnapshot.docs[0].data() as SignOutType;

            const { tablet, vr } = latestSignOutDoc;

            if (tablet !== signOutTablet) {
                toast.error("You have not signed out for tablet");
            }
            if (vr !== signOutVR) {
                toast.error("You have not signed out for VR");
            }

            const sign_out_data = {
                email,
                full_name: fullName,
                student_id: studentId,
                tablet: signOutTablet,
                vr: signOutVR,
                tablet_stop_time: new Date(),
                vr_stop_time: new Date(),
                agree: true,
            } as SignOutType;

            await addDoc(signOutCollectionRef, sign_out_data);
            toast.done("Successfully signed out for devices. Check your email for confirmation");

            await axios.post("/api/signout", {
                email,
                fullName,
                signOutTablet,
                signOutVR,
            })
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        } finally {
            setTimeout(() => {
                toast.dismiss();
            }, 3000);
        }
    };


    const handleSignUp = useCallback(async () => {
        // first check if devices are available
        if (email.length === 0 || fullName.length === 0 || studentId.length === 0 || (!checkTablet && !checkVr)) {
            toast.error("Please fill in all the fields");
            return;
        }
        toast.loading("Siging up for device");
        await checkIfAvailable();

    }, [email, fullName, studentId, checked, checkTablet, checkVr, tabletTime, vrTime]);


    const checkIfAvailable = async () => {
        try {
            const q = query(signOutCollectionRef, limit(1));
            const querySnapshot = await getDocs(q);
            const latestSignOutDoc = querySnapshot.docs[0].data() as SignOutType;

            const { vr_stop_time: latestVrTime, tablet_stop_time: latestTabletTime } = latestSignOutDoc;
            // if the latest signout time is less than the requested signup time, then the device is available

            const sign_up_data = {
                email,
                full_name: fullName,
                student_id: studentId,
                tablet: checkTablet,
                vr: checkVr,
                tablet_start_time: checkTablet ? tabletTime : null,
                vr_start_time: checkVr ? vrTime : null,
                agree: checked,
            } as SignUpType;

            let postItCount = 0;

            if (checkTablet) {
                if (latestTabletTime < tabletTime) {
                    postItCount += 1;
                } else {
                    toast.error("Tablet is not available at this time");
                }
            }

            if (checkVr) {
                if (latestVrTime < vrTime) {
                    postItCount += 1;
                } else {
                    toast.error("VR is not available at this time");
                }
            }

            if (postItCount > 0) {
                await addDoc(signUpCollectionRef, sign_up_data)
                toast.done("Successfully signed up for devices. Check your email for confirmation");
                await axios.post("/api/signup", {
                    email,
                    fullName,
                    checkTablet,
                    checkVr,
                })
            } else toast.error("Devices are not available at this time");

        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
        } finally {
            setTimeout(() => {
                toast.dismiss();
            }, 3000);
        }
    }

    const modes = {
        "sign-up": <SignInRightContent
            email={email}
            setEmail={setEmail}
            fullName={fullName}
            setFullName={setFullName}
            studentId={studentId}
            setStudentId={setStudentId}
            tabletTime={tabletTime}
            setTabletTime={setTabletTime}
            vrTime={vrTime}
            setVrTime={setVrTime}
            checkTablet={checkTablet}
            setCheckTablet={setCheckTablet}
            checkVr={checkVr}
            setCheckVr={setCheckVr}
            checked={checked}
            setChecked={setChecked}
        />,
        "sign-out": <SignOutRightContent
            email={email}
            setEmail={setEmail}
            fullName={fullName}
            setFullName={setFullName}
            studentId={studentId}
            setStudentId={setStudentId}
            signOutVR={signOutVR}
            setSignOutVR={setSignOutVR}
            signOutTablet={signOutTablet}
            setSignOutTablet={setSignOutTablet}
        />,
    } as Record<typeof mode, JSX.Element>;

    return (
        <div
            className="h-full w-full flex flex-col py-5 gap-10 justify-center items-center md:px-8 px-4 overflow-y-scroll transition-all duration-200">
            {modes[mode]}
            <div className="w-full flex flex-row gap-3">
                <button
                    type="submit"
                    onClick={() => {
                        if (mode === "sign-up") handleSignUp();
                        else setMode("sign-up");
                    }}
                    className="px-4 py-2 font-semibold rounded-md bg-blue-700 text-white hover:bg-blue-800 shadow-md"
                >
                    Submit
                </button>
                <button
                    type="submit"
                    onClick={() => {
                        if (mode === "sign-out") handleSignOut();
                        else setMode("sign-out");
                    }}
                    className="px-4 py-2 font-semibold rounded-md bg-red-700 text-white hover:bg-red-800 shadow-md"
                >
                    Sign out
                </button>
            </div>
        </div>
    )
}


export default MainContent;