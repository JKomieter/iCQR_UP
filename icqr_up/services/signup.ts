import { db } from "@/firebase/config";
import { timeStampType } from "@/types";
import axios from "axios";
import { addDoc, collection, CollectionReference, DocumentData } from "firebase/firestore";
import { toast } from "react-toastify";

const checkAndAddSignUp = async (
    collectionRef: CollectionReference<DocumentData, DocumentData>,
    email: string,
    fullName: string,
    studentId: string,
    requestTime: Date,
    latestTime: timeStampType,
    deviceReturnTime: Date,
    agreed: Boolean,
) => {
    if (new Date(latestTime.seconds * 1000 + latestTime.nanoseconds / 1000000) < requestTime) {
        await addDoc(collectionRef, {
            email,
            full_name: fullName,
            student_id: studentId,
            time: requestTime, 
            created_at: latestTime,
            return_time: deviceReturnTime,
            agree: agreed,
        });
    }
};

export const SignUp = async (
    email: string,
    fullName: string,
    studentId: string,
    checkTablet: boolean,
    checkVr: boolean,
    tabletTime: Date,
    vrTime: Date,
    latestTabletTime: timeStampType,
    latestVRTime: timeStampType,
    tabletReturnTime: Date,
    vrReturnTime: Date,
    agreedToTerms: boolean
) => {
    try {
        const tabletSignUpsCollectionRef = collection(db, "tablet_sign_ups");
        const vrSignUpsCollectionRef = collection(db, "vr_sign_ups");

        if (checkTablet) {
            await checkAndAddSignUp(
                tabletSignUpsCollectionRef,
                email,
                fullName,
                studentId,
                tabletTime,
                latestTabletTime,
                tabletReturnTime,
                agreedToTerms
            );
        }

        if (checkVr) {
            await checkAndAddSignUp(
                vrSignUpsCollectionRef, 
                email, 
                fullName, 
                studentId, 
                vrTime, 
                latestVRTime, 
                vrReturnTime,
                agreedToTerms
            );
        }

        await axios.post("/api/signup", {
            email,
            fullName,
            studentId,
            checkTablet,
            checkVr,
            tabletTime,
            vrTime,
            latestTabletTime,
            latestVRTime,
            agreedToTerms,
        });

        toast.success("Successfully signed up");
        setTimeout(() => {
            toast.dismiss();
        }, 3000);
    } catch (error) {
        console.error(error);
        toast.error("Error signing up");
    }
};
