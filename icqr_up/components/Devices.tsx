import VR from "./VR";
import Tablet from "./Tablet";

const Devices = ({
    vrTime,
    tabletTime,
    setVrTime,
    setTabletTime,
    checkTablet,
    setCheckTablet,
    checkVr,
    setCheckVr,
}: {
    vrTime: Date;
    tabletTime: Date;
    setVrTime: React.Dispatch<React.SetStateAction<Date>>;
    setTabletTime: React.Dispatch<React.SetStateAction<Date>>;
    checkTablet: boolean;
    setCheckTablet: React.Dispatch<React.SetStateAction<boolean>>;
    checkVr: boolean;
    setCheckVr: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <div className="flex md:flex-row flex-col w-full items-center justify-center gap-5">
            <VR 
            vrTime={vrTime} 
            setVrTime={setVrTime}
            checkVr={checkVr}
            setCheckVr={setCheckVr}
            />
            <Tablet 
            tabletTime={tabletTime} 
            setTabletTime={setTabletTime}
            checkTablet={checkTablet}
            setCheckTablet={setCheckTablet}
            />
        </div>
    )
};

export default Devices;