import { Image } from "@nextui-org/react";
import PickTime from "./PickTime";
import { Checkbox } from "@mui/material";



const VR = ({
    vrTime,
    setVrTime,
    checkVr,
    setCheckVr,
}: {
    vrTime: Date;
    setVrTime: React.Dispatch<React.SetStateAction<Date>>;
    checkVr: boolean;
    setCheckVr: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
                        defaultChecked
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
                {/* <Available /> */}
            </div>
        </div>
    )
}

export default VR;