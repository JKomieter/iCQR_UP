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
    tabletReturnTime,
    setTabletReturnTime,
    vrReturnTime,
    setVrReturnTime,
    setAllow,
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
    tabletReturnTime: Date;
    setTabletReturnTime: React.Dispatch<React.SetStateAction<Date>>;
    vrReturnTime: Date;
    setVrReturnTime: React.Dispatch<React.SetStateAction<Date>>;
    setAllow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

    return (
        <div className="flex md:flex-row flex-col w-full items-center justify-center gap-5">
            <VR 
            vrTime={vrTime} 
            setVrTime={setVrTime}
            checkVr={checkVr}
            setCheckVr={setCheckVr}
            latestVRTime={latestVRTime}
            vrReturnTime={vrReturnTime}
            setVrReturnTime={setVrReturnTime}
            setAllow={setAllow}
            />
            <Tablet 
            tabletTime={tabletTime} 
            setTabletTime={setTabletTime}
            checkTablet={checkTablet}
            setCheckTablet={setCheckTablet}
            latestTabletTIme={latestTabletTime}
            tabletReturnTime={tabletReturnTime}
            setTabletReturnTime={setTabletReturnTime}
            setAllow={setAllow}
            />
        </div>
    )
};

export default Devices;