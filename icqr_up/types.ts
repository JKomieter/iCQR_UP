

export type timeStampType = {
    seconds: number;
    nanoseconds: number;
};

export type tablet_sign_ups = {
    id?: string;
    email: string;
    full_name: string;
    student_id: string;
    time: timeStampType;
    return_time: timeStampType;
    created_at: timeStampType;
    agree: boolean;
}

export type vr_sign_ups = {
    id?: string;
    email: string;
    full_name: string;
    student_id: string;
    time: timeStampType;
    return_time: timeStampType;
    created_at: timeStampType;
    agree: boolean;
}

export type tablet_sign_outs = {
    id?: string;
    email: string;
    full_name: string;
    student_id: string;
    time: timeStampType;
    created_at: timeStampType;
}

export type vr_sign_outs = {
    id?: string;
    email: string;
    full_name: string;
    student_id: string;
    time: timeStampType;
    created_at: timeStampType;
}

export type tablet_waitlist = {
    id?: string;
    email: string;
    full_name: string;
    student_id: string;
    time: timeStampType;
    created_at: timeStampType;
}