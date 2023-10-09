"use client";
import { Image } from "@nextui-org/react";


const LeftContent = ({
    backgroound,
}: {
    backgroound?: string;
}) => {
    return (
        <div 
            style={{ backgroundImage: `url(${backgroound})`, backgroundSize: "cover", backgroundPosition: "center"}}
            className="md:w-full h-[100vh] md:basis-1/2 hidden md:flex shadow-2xl">
            
        </div>
    )
};


export default LeftContent;