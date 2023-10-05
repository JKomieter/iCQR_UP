"use client";
import Content from "@/components/Content";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


export default function Home() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="w-full h-full ">
        <Content />
      </div>
    </LocalizationProvider>
  )
}
