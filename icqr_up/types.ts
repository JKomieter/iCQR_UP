

export type SignUpType = {
    email: string;
    full_name: string;
    student_id: string;
    tablet: boolean;
    vr: boolean;
    tablet_start_time: Date;
    vr_start_time: Date;
    agree: boolean;
}


export type SignOutType = {
    email: string;
    full_name: string;
    student_id: string;
    tablet: boolean;
    vr: boolean;
    tablet_stop_time: Date;
    vr_stop_time: Date;
    agree: boolean;
}