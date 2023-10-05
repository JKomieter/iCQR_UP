import UserInfo from "./UserInfo";
import DevicesOut from "./DevicesOut";


const SignOutRightContent = ({
    email,
    setEmail,
    fullName,
    setFullName,
    studentId,
    setStudentId,
    signOutVR,
    setSignOutVR,
    signOutTablet,
    setSignOutTablet,
}: {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    fullName: string;
    setFullName: React.Dispatch<React.SetStateAction<string>>;
    studentId: string;
    setStudentId: React.Dispatch<React.SetStateAction<string>>;
    signOutVR: Boolean;
    setSignOutVR: React.Dispatch<React.SetStateAction<Boolean>>;
    signOutTablet: Boolean;
    setSignOutTablet: React.Dispatch<React.SetStateAction<Boolean>>;
}) => {
    return (
        <>
            <h2 className="font-bold text-3xl text-red-700">
                Sign Out for Devices
            </h2>
            <UserInfo
                email={email}
                setEmail={setEmail}
                fullName={fullName}
                setFullName={setFullName}
                studentId={studentId}
                setStudentId={setStudentId}
            />
            <DevicesOut
                signOutVR={signOutVR}
                setSignOutVR={setSignOutVR}
                signOutTablet={signOutTablet}
                setSignOutTablet={setSignOutTablet}
            />
        </>
    )
};

export default SignOutRightContent;