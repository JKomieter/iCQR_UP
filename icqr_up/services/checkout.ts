import { db } from "@/firebase/config";
import { tablet_sign_outs, tablet_sign_ups, vr_sign_ups } from "@/types";
import axios from "axios";
import { query, where, limit, getDocs, orderBy, addDoc, collection, CollectionReference, DocumentData } from "firebase/firestore";
import { toast } from "react-toastify";

// Function to check if a user has signed up for a specific service
const checkServiceSignUp = async (
    serviceCollectionRef: CollectionReference<DocumentData, DocumentData>, 
    email: string, 
    fullName: string, 
    studentId: string,
) => {
    const serviceQ = query(serviceCollectionRef, limit(1), orderBy("created_at", "desc"));
    const querySnapshot = await getDocs(serviceQ);

    if (querySnapshot.empty) {
        toast.error(`You have not signed up for this service`);
        return false;
    }

    const doc = querySnapshot.docs[0];
    const data = doc.data() as tablet_sign_ups;

    if (data.email !== email || data.full_name !== fullName || data.student_id !== studentId) {
        toast.error(`You have not signed up for this service`);
        return false;
    }

    return true;
};

export const CheckOut = async (
    email: string,
    fullName: string,
    studentId: string,
    signOutTablet: Boolean,
    signOutVR: Boolean
) => {
    try {
        const tabletSignOutsCollectionRef = collection(db, "tablet_sign_outs");
        const vrSignOutsCollectionRef = collection(db, "vr_sign_outs");
        const tabletSignUpsCollectionRef = collection(db, "tablet_sign_ups");
        const vrSignUpsCollectionRef = collection(db, "vr_sign_ups");

        if (signOutTablet) {
            const signedUpForTablet = await checkServiceSignUp(tabletSignUpsCollectionRef, email, fullName, studentId);
            if (!signedUpForTablet) {
                return;
            }
            await addDoc(tabletSignOutsCollectionRef, {
                email,
                full_name: fullName,
                student_id: studentId,
                time: new Date(),
                created_at: new Date(),
            });
        }

        if (signOutVR) {
            const signedUpForVR = await checkServiceSignUp(vrSignUpsCollectionRef, email, fullName, studentId);
            if (!signedUpForVR) {
                return;
            }
            await addDoc(vrSignOutsCollectionRef, {
                email,
                full_name: fullName,
                student_id: studentId,
                time: new Date(),
                created_at: new Date(),
            });
        }

        await axios.post("/api/checkout", {
            email,
            fullName,
            studentId,
            signOutTablet,
            signOutVR,
        });

        toast.success("Successfully signed out");
        setTimeout(() => {
            toast.dismiss();    
        }, 3000);
    } catch (error) {
        console.error(error);
        toast.error("Error signing out");
    }
};
