"use client";
import Devices from "./Devices";
import { Checkbox } from "@mui/material";
import { timeStampType } from "@/types";
import UserInfo from "./UserInfo";
import 'react-toastify/dist/ReactToastify.css';



const SignInRightContent = ({
    email,
    setEmail,
    fullName,
    setFullName,
    studentId,
    setStudentId,
    tabletTime,
    setTabletTime,
    vrTime,
    setVrTime,
    checkTablet,
    setCheckTablet,
    checkVr,
    setCheckVr,
    checked,
    setChecked,
    latestTabletTime,
    latestVRTime,
    tabletReturnTime,
    setTabletReturnTime,
    vrReturnTime,
    setVrReturnTime,
    setAllow,
}: {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    fullName: string;
    setFullName: React.Dispatch<React.SetStateAction<string>>;
    studentId: string;
    setStudentId: React.Dispatch<React.SetStateAction<string>>;
    tabletTime: Date;
    setTabletTime: React.Dispatch<React.SetStateAction<Date>>;
    vrTime: Date;
    setVrTime: React.Dispatch<React.SetStateAction<Date>>;
    checkTablet: boolean;
    setCheckTablet: React.Dispatch<React.SetStateAction<boolean>>;
    checkVr: boolean;
    setCheckVr: React.Dispatch<React.SetStateAction<boolean>>;
    checked: boolean;
    setChecked: React.Dispatch<React.SetStateAction<boolean>>;
    latestTabletTime: timeStampType;
    latestVRTime: timeStampType;
    tabletReturnTime: Date;
    setTabletReturnTime: React.Dispatch<React.SetStateAction<Date>>;
    vrReturnTime: Date;
    setVrReturnTime: React.Dispatch<React.SetStateAction<Date>>;
    setAllow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    

    return (
        <>
            <h2 className="font-bold text-3xl text-blue-700">
                Sign Up for Devices
            </h2>
            <UserInfo
                email={email}
                setEmail={setEmail}
                fullName={fullName}
                setFullName={setFullName}
                studentId={studentId}
                setStudentId={setStudentId}
            />
            <Devices
                vrTime={vrTime}
                tabletTime={tabletTime}
                setVrTime={setVrTime}
                setTabletTime={setTabletTime}
                checkTablet={checkTablet}
                setCheckTablet={setCheckTablet}
                checkVr={checkVr}
                setCheckVr={setCheckVr}
                latestTabletTime={latestTabletTime}
                latestVRTime={latestVRTime}
                tabletReturnTime={tabletReturnTime}
                setTabletReturnTime={setTabletReturnTime}
                vrReturnTime={vrReturnTime}
                setVrReturnTime={setVrReturnTime}
                setAllow={setAllow}
            />
            <div className="w-full text-xs md:text-sm">
                <Checkbox
                    defaultChecked={false}
                    color="primary"
                    value={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                />
                By checking this you agree to take full responsibility for the care and safekeeping of the device during the borrowing period.
            </div>
        </>
    )
};

export default SignInRightContent;