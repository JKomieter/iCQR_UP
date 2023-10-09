import { tablet_sign_ups, vr_sign_ups, tablet_sign_outs, vr_sign_outs } from "@/types";
import TabletInfo from "./TabletInfo";
import VrInfo from "./VrInfo";
import { useState } from "react";


const Latest = ({
    latestTabletSignUp,
    latestVrSignUp,
    latestTabletSignOut,
    latestVrSignOut
}:{
    latestTabletSignUp: tablet_sign_ups[],
    latestVrSignUp: vr_sign_ups[],
    latestTabletSignOut: tablet_sign_outs[],
    latestVrSignOut: vr_sign_outs[],
}) => {
    const [mode, setMode] = useState<"tablet" | "vr">("tablet");

    const modes = {
        tablet: <TabletInfo latestTabletSignUp={latestTabletSignUp} latestTabletSignOut={latestTabletSignOut} />,
        vr: <VrInfo latestVrSignUp={latestVrSignUp} latestVrSignOut={latestVrSignOut} />
    }

    return (
        <div className="lg:px-24 px-4 flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                <h2 className="text-xl font-bold">
                    {mode === "tablet" ? "Tablet Information" : "VR Information"}
                </h2>
                <button
                    className="text-white bg-blue-600 px-5 py-2 rounded-md font-semibold"
                    onClick={() => setMode(mode === "tablet" ? "vr" : "tablet")}
                >
                    {mode === "tablet" ? "VR" : "Tablet"}
                </button>
            </div>
            {modes[mode]}
        </div>
    )
}


export default Latest;