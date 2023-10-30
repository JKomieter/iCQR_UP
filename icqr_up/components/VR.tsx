import { Image } from "@nextui-org/react";
import PickTime from "./PickTime";
import { Checkbox } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { timeStampType } from "@/types";
import { toast } from "react-toastify";



const VR = ({
    vrTime,
    setVrTime,
    checkVr,
    setCheckVr,
    latestVRTime,
    vrReturnTime,
    setVrReturnTime,
    setAllow,
}: {
    vrTime: Date;
    setVrTime: React.Dispatch<React.SetStateAction<Date>>;
    checkVr: boolean;
    setCheckVr: React.Dispatch<React.SetStateAction<boolean>>;
    latestVRTime: timeStampType;
    vrReturnTime: Date;
    setVrReturnTime: React.Dispatch<React.SetStateAction<Date>>;
    setAllow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

    const IsAvailable = useMemo(() => {
        if (checkVr) {
            if (new Date(latestVRTime?.seconds * 1000 + latestVRTime?.nanoseconds / 1000000) < vrTime) {
                setAllow(true);
                return <p className="text-base md:text-lg font-semibold text-green-600 uppercase">VR is available</p>
            }
            setAllow(false);
            return <p className="text-base font-semibold text-purple-600 uppercase">
                VR is unavailable for the selected time. Join the waitlist or select the next available date, {new Date(latestVRTime?.seconds * 1000 + latestVRTime?.nanoseconds / 1000000).toLocaleString()}
            </p>
        }
    }, [vrTime, checkVr]);


    return (
        <div
            className="bg-white p-3 w-full rounded-lg shadow-md flex flex-row items-start gap-3 border-2 border-neutral-200"
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
                        onChange={(e) => {
                            setCheckVr(e.target.checked)
                        }}
                        defaultChecked={false}
                        color="primary"
                    />
                </div>
                <div className="text-xs md:text-sm text-neutral-600">
                    <p>Choose time you want VR</p>
                </div>
                <PickTime
                    label="Request time"
                    deviceTime={vrTime}
                    setDeviceTime={setVrTime}
                />
                {IsAvailable}
                <div className="text-xs md:text-sm text-neutral-600">
                    <p>Choose time you return VR</p>
                </div>
                <PickTime
                    label="Return time"
                    deviceTime={vrReturnTime}
                    setDeviceTime={setVrReturnTime}
                />
            </div>
        </div>
    )
}

export default VR;