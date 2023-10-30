import { Image } from "@nextui-org/react"
import PickTime from "./PickTime"
import { Checkbox } from "@mui/material";
import { timeStampType } from "@/types";
import { useMemo } from "react";
import { toast } from "react-toastify";

const Tablet = ({
    tabletTime,
    setTabletTime,
    checkTablet,
    setCheckTablet,
    latestTabletTIme,
    tabletReturnTime,
    setTabletReturnTime,
    setAllow,
}: {
    tabletTime: Date;
    setTabletTime: React.Dispatch<React.SetStateAction<Date>>;
    checkTablet: boolean;
    setCheckTablet: React.Dispatch<React.SetStateAction<boolean>>;
    latestTabletTIme: timeStampType;
    tabletReturnTime: Date;
    setTabletReturnTime: React.Dispatch<React.SetStateAction<Date>>;
    setAllow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const IsAvailable = useMemo(() => {
        if (checkTablet) {
            if (new Date(latestTabletTIme.seconds * 1000 + latestTabletTIme.nanoseconds / 1000000) < tabletTime) {
                setAllow(true);
                return <p className="text-base md:text-lg font-semibold text-green-600 uppercase">Tablet is available</p>
            }
            setAllow(false);
            return <p className="text-base font-semibold text-purple-600 uppercase">
                Tablet is unavailable. Join the waitlist or select the next available date, {new Date(latestTabletTIme.seconds * 1000 + latestTabletTIme.nanoseconds / 1000000).toLocaleString()}
            </p>
        }
    }, [checkTablet, latestTabletTIme, tabletTime,]);


    return (
        <div
            className="bg-white p-3 w-full rounded-lg shadow-md flex flex-row items-start gap-3 border-2 border-neutral-200"
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
            <div className="flex flex-col gap-2 w-full items-start">
                <div className="flex flex-row items-center justify-between w-full">
                    <h4 className="text-base font-semibold w-full text-left uppercase text-neutral-700">Tablet</h4>
                    <Checkbox
                        value={checkTablet}
                        onChange={(e) => setCheckTablet(e.target.checked)}
                        defaultChecked={false}
                        color="primary"
                    />
                </div>
                <div className="text-xs md:text-sm text-neutral-600">
                    <p>Choose time you want Tablet</p>
                </div>
                <PickTime
                    label="Request time"
                    deviceTime={tabletTime}
                    setDeviceTime={setTabletTime}
                 />
                {IsAvailable}
                <div className="text-xs md:text-sm text-neutral-600">
                    <p>Choose time you return Tablet</p>
                </div>
                <PickTime
                    label="Return time"
                    deviceTime={tabletReturnTime}
                    setDeviceTime={setTabletReturnTime}
                />
            </div>
        </div>
    )
}

export default Tablet