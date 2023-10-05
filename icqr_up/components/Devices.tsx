import VR from "./VR";
import Tablet from "./Tablet";
import { timeStampType } from "@/types";

const Devices = ({
    vrTime,
    tabletTime,
    setVrTime,
    setTabletTime,
    checkTablet,
    setCheckTablet,
    checkVr,
    setCheckVr,
    latestTabletTime,
    latestVRTime,
}: {
    vrTime: Date;
    tabletTime: Date;
    setVrTime: React.Dispatch<React.SetStateAction<Date>>;
    setTabletTime: React.Dispatch<React.SetStateAction<Date>>;
    checkTablet: boolean;
    setCheckTablet: React.Dispatch<React.SetStateAction<boolean>>;
    checkVr: boolean;
    setCheckVr: React.Dispatch<React.SetStateAction<boolean>>;
    latestTabletTime: timeStampType;
    latestVRTime: timeStampType;
}) => {

    return (
        <div className="flex md:flex-row flex-col w-full items-center justify-center gap-5">
            <VR 
            vrTime={vrTime} 
            setVrTime={setVrTime}
            checkVr={checkVr}
            setCheckVr={setCheckVr}
            latestVRTime={latestVRTime}
            />
            <Tablet 
            tabletTime={tabletTime} 
            setTabletTime={setTabletTime}
            checkTablet={checkTablet}
            setCheckTablet={setCheckTablet}
            latestTabletTIme={latestTabletTime}
            />
        </div>
    )
};

export default Devices;