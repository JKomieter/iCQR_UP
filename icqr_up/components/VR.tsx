import { Image } from "@nextui-org/react";
import PickTime from "./PickTime";
import { Checkbox } from "@mui/material";
import { useMemo } from "react";
import { timeStampType } from "@/types";



const VR = ({
    vrTime,
    setVrTime,
    checkVr,
    setCheckVr,
    latestVRTime,
}: {
    vrTime: Date;
    setVrTime: React.Dispatch<React.SetStateAction<Date>>;
    checkVr: boolean;
    setCheckVr: React.Dispatch<React.SetStateAction<boolean>>;
    latestVRTime: timeStampType;
}) => {
    const IsAvailable = useMemo(() => {
        if (checkVr) {
            if (new Date(latestVRTime.seconds * 1000 + latestVRTime.nanoseconds / 1000000) < vrTime) {
                return <p className="text-xs md:text-sm text-green-600">VR is available</p>
            } else {
                return <p className="text-xs md:text-sm text-red-600">VR is not available</p>
            }
        }
    }, [checkVr, latestVRTime, vrTime]);

    return (
        <div
            className="bg-white p-3 w-full rounded-lg shadow-md flex flex-row items-start gap-3"
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
            <div className="flex flex-col gap-2 w-full items-start">
                <div className="flex flex-row items-center justify-between w-full">
                    <h4 className="text-base font-semibold w-full text-left uppercase text-neutral-700">VR</h4>
                    <Checkbox
                        value={checkVr}
                        onChange={(e) => setCheckVr(e.target.checked)}
                        defaultChecked={false}
                        color="primary"
                    />
                </div>
                <div className="text-xs md:text-sm text-neutral-600">
                    <p>Choose time you want VR</p>
                </div>
                <PickTime
                deviceTime={vrTime}
                setDeviceTime={setVrTime}
                />
                {IsAvailable}
            </div>
        </div>
    )
}

export default VR;