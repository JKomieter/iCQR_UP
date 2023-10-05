import { Image } from "@nextui-org/react"
import PickTime from "./PickTime"
import { Checkbox } from "@mui/material";

const Tablet = ({
    tabletTime,
    setTabletTime,
    checkTablet,
    setCheckTablet,
}: {
    tabletTime: Date;
    setTabletTime: React.Dispatch<React.SetStateAction<Date>>;
    checkTablet: boolean;
    setCheckTablet: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

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
                        defaultChecked
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
                {/* <Available /> */}
            </div>
        </div>
    )
}

export default Tablet