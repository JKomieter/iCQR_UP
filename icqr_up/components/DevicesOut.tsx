import { Image } from "@nextui-org/react";
import { HiLogout } from "react-icons/hi";


const DevicesOut = ({
    signOutVR,
    setSignOutVR,
    signOutTablet,
    setSignOutTablet,
}: {
    signOutVR: Boolean;
    setSignOutVR: React.Dispatch<React.SetStateAction<Boolean>>;
    signOutTablet: Boolean;
    setSignOutTablet: React.Dispatch<React.SetStateAction<Boolean>>;
}) => {
    return (
        <div className="w-full flex flex-col gap-4">
            <h4 className="text-neutral-700 font-semibold w-full">
                Select which devices you want to sign out
            </h4>
            <div className="flex md:flex-row flex-col w-full items-center justify-center gap-5">
                <div
                    className="bg-white p-3 w-full rounded-lg shadow-md flex flex-row items-center gap-3"
                >
                    <div className="h-full">
                        <Image
                            src="https://images.pexels.com/photos/4144152/pexels-photo-4144152.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt=""
                            width={100}
                            height={200}
                            className="rounded-xl"
                        />
                    </div>
                    <div className="w-full">
                        <div 
                        onClick={() => setSignOutVR(!signOutVR)}
                            className={`p-4 rounded-2xl ${signOutVR ? "bg-red-200" : "bg-blue-200"} cursor-pointer w-full flex flex-row gap-2 items-center duration-200 transition-all`}>
                            <HiLogout size={35} />
                            <p className="text-sm font-semibold text-neutral-600">Click to sign out VR</p>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-white p-3 w-full rounded-lg shadow-md flex flex-row items-center gap-3"
                >
                    <div className=" h-full">
                        <Image
                            src="https://images.pexels.com/photos/3825567/pexels-photo-3825567.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt=""
                            width={100}
                            height={300}
                            className="rounded-xl"
                        />
                    </div>
                    <div className="w-full">
                        <div 
                        onClick={() => setSignOutTablet(!signOutTablet)}
                            className={`p-4 rounded-2xl ${signOutTablet ? "bg-red-200" : "bg-blue-200"} cursor-pointer w-full flex flex-row gap-2 items-center duration-200 transition-all`}>
                            <HiLogout size={35} />
                            <p className="text-sm font-semibold text-neutral-600">Click to sign out Tablet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DevicesOut;