import { useCallback, useEffect, useState } from "react"
import SignInRightContent from "./SignInRightContent";
import { db } from "@/firebase/config";
import { tablet_sign_outs, timeStampType, vr_sign_outs } from "@/types";
import { collection, query, limit, getDocs, orderBy } from "firebase/firestore";
import { toast } from "react-toastify";
import SignOutRightContent from "./SignOutRightContent";
import { CheckOut } from "@/services/checkout";
import { SignUp } from "@/services/signup";

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
    const [latestTabletTime, setLatestTabletTime] = useState<timeStampType>({ seconds: 0, nanoseconds: 0 });
    const [latestVRTime, setLatestVRTime] = useState<timeStampType>({ seconds: 0, nanoseconds: 0 });
    const tabletSIgnOutsCollectionRef = collection(db, "tablet_sign_outs");
    const vrSignOutsCollectionRef = collection(db, "vr_sign_outs");


    useEffect(() => {
        const getLatestSignOut = async () => {
            const tabletSignOutQuery = query(tabletSIgnOutsCollectionRef, limit(1), orderBy("created_at", "desc"));
            const vrSignOutQuery = query(vrSignOutsCollectionRef, limit(1), orderBy("created_at", "desc"));
            const tabletQuerySnapshot = await getDocs(tabletSignOutQuery);
            const vrQuerySnapshot = await getDocs(vrSignOutQuery);
            
            const tabletData = tabletQuerySnapshot.docs[0].data() as tablet_sign_outs;
            const vrData = vrQuerySnapshot.docs[0].data() as vr_sign_outs;

            const tabletSignOutTime = tabletData.time;
            const vrSignOutTime = vrData.time;

            setLatestTabletTime(tabletSignOutTime);
            setLatestVRTime(vrSignOutTime);
        }

        getLatestSignOut();
    }, [tabletTime, vrTime, checkTablet, checkVr]);


    const handleSignOut = useCallback(async () => {
        // first check if devices are available
        if (email.length === 0 || fullName.length === 0 || studentId.length !== 6 || (!signOutTablet && !signOutVR)) {
            toast.error("Please fill in all the fields correctly");
            return;
        }

        toast.loading("Signing out for devices");
        await CheckOut(
            email,
            fullName,
            studentId,
            signOutTablet,
            signOutVR,
        );
    }, [email, fullName, studentId]);



    const handleSignUp = useCallback(async () => {
        // first check if devices are available
        if (!checked || email.length === 0 || fullName.length === 0 || studentId.length !== 6 || (!checkTablet && !checkVr)) {
            toast.error("Please fill in all the fields");
            return;
        }
        toast.loading("Siging up for device");
        await SignUp(
            email,
            fullName,
            studentId,
            checkTablet,
            checkVr,
            tabletTime,
            vrTime,
            latestTabletTime,
            latestVRTime,
            checked,
        )

    }, [email, fullName, studentId, checked, checkTablet, checkVr, tabletTime, vrTime]);


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
            latestTabletTime={latestTabletTime}
            latestVRTime={latestVRTime}
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
            className="h-full w-full flex flex-col py-5 gap-10 justify-center items-center md:px-8 px-4 overflow-y-scroll transition-all duration-500 ">
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