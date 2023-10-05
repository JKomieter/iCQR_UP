import { useState } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const PickTime = ({
    deviceTime,
    setDeviceTime,
}: {
    deviceTime: Date;
    setDeviceTime: React.Dispatch<React.SetStateAction<Date>>;
}) => {

    return (
        <div className="w-full flex ">
            <DateTimePicker
                label="Pick time"
                value={deviceTime}
                onChange={(newValue) => setDeviceTime(newValue as Date)}
            />
        </div>
    );
};

export default PickTime;
