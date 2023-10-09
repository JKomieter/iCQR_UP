import { tablet_sign_ups, tablet_sign_outs } from "@/types";
import TableData from "./TableData";


const TabletInfo = ({
    latestTabletSignUp,
    latestTabletSignOut
}: {
    latestTabletSignUp: tablet_sign_ups[],
    latestTabletSignOut: tablet_sign_outs[]
}) => {
    

    return (
        <div className="flex flex-col gap-2">
            <TableData title="Tablet Sign up Information" rows={latestTabletSignUp} />
            <TableData title="Tablet Sign out Information" rows={latestTabletSignOut} />
        </div>
    )
}

export default TabletInfo;