import { Image } from "@nextui-org/react"
import PickTime from "./PickTime"
import { Checkbox } from "@mui/material";
import { useMemo } from "react";
import { timeStampType } from "@/types";

const Tablet = ({
    tabletTime,
    setTabletTime,
    checkTablet,
    setCheckTablet,
    latestTabletTIme,
}: {
    tabletTime: Date;
    setTabletTime: React.Dispatch<React.SetStateAction<Date>>;
    checkTablet: boolean;
    setCheckTablet: React.Dispatch<React.SetStateAction<boolean>>;
    latestTabletTIme: timeStampType;
}) => {
    const IsAvailable = () => {
        if (checkTablet) {
            if (new Date(latestTabletTIme.seconds * 1000 + latestTabletTIme.nanoseconds / 1000000) < tabletTime) {
                return <p className="text-xs md:text-sm text-green-600">Tablet is available</p>
            } else {
                return <p className="text-xs md:text-sm text-red-600">Tablet is not available</p>
            }
        }
    };


    return (
        <div
            className="bg-white p-3 w-full rounded-lg shadow-md flex flex-row items-start gap-3"
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
                    deviceTime={tabletTime}
                    setDeviceTime={setTabletTime}
                 />
                <IsAvailable />
            </div>
        </div>
    )
}

export default Tablet