"use client";
import { db } from "@/firebase/config";
import { useEffect, useState } from "react";
import Latest from "./Latest";
import { CollectionReference, DocumentData, collection, getDocs, orderBy, query } from "firebase/firestore";
import { tablet_sign_outs, tablet_sign_ups, vr_sign_outs, vr_sign_ups } from "@/types";


const fetchAllData = async (
    collectionRef: CollectionReference<DocumentData, DocumentData>
) => {
    const latestQuery = query(collectionRef, orderBy("created_at", "desc"));
    const latestQuerySnapshot = await getDocs(latestQuery);
    const latestQueryData = latestQuerySnapshot.docs.map((doc) => doc.data());

    return latestQueryData;
}


const Dashboard = () => {
    const latestTabletSignUpCollectionRef = collection(db, "tablet_sign_ups");
    const vrSignUpCollectionRef = collection(db, "vr_sign_ups");
    const latestTabletSignOutCollectionRef = collection(db, "tablet_sign_outs");
    const vrSignOutCollectionRef = collection(db, "vr_sign_outs");

    const [tabletSignUps, setTabletSignUps] = useState<tablet_sign_ups[]>([]);
    const [vrSignUps, setVrSignUps] = useState<vr_sign_ups[]>([]);
    const [tabletSignOuts, setTabletSignOuts] = useState<tablet_sign_outs[]>([]);
    const [vrSignOuts, setVrSignOuts] = useState<vr_sign_outs[]>([]);

    useEffect(() => {
        // fetch the latest from each collection
        const fetchAll = async () => {
            const tabletSignUpQuery = await fetchAllData(latestTabletSignUpCollectionRef) as tablet_sign_ups[];
            const vrSignUpQueryQuery = await fetchAllData(vrSignUpCollectionRef) as vr_sign_ups[];
            const tabletSignOutQuery = await fetchAllData(latestTabletSignOutCollectionRef) as tablet_sign_outs[];
            const vrSignOutQuery = await fetchAllData(vrSignOutCollectionRef) as vr_sign_outs[];

            setTabletSignUps(tabletSignUpQuery);
            setVrSignUps(vrSignUpQueryQuery);
            setTabletSignOuts(tabletSignOutQuery);
            setVrSignOuts(vrSignOutQuery);
        };

        fetchAll();
    }, []);

    return (
        <div className="w-full h-full">
            <Latest
                latestTabletSignUp={tabletSignUps}
                latestVrSignUp={vrSignUps}
                latestTabletSignOut={tabletSignOuts}
                latestVrSignOut={vrSignOuts}
            />
        </div>
    )
};

export default Dashboard;