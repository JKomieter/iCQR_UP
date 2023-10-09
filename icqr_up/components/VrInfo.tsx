import { vr_sign_ups, vr_sign_outs } from "@/types"
import TableData from "./TableData";




const VrInfo = ({
    latestVrSignUp,
    latestVrSignOut,
}: {
    latestVrSignUp: vr_sign_ups[],
    latestVrSignOut: vr_sign_outs[],
}) => {
    return (
        <div className="flex flex-col gap-2">
            <TableData title="VR Sign up Information" rows={latestVrSignUp} />
            <TableData title="VR Sign out Information" rows={latestVrSignOut} />
        </div>
    )
}


export default VrInfo;