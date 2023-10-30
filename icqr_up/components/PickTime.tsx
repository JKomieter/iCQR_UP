import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const PickTime = ({
    deviceTime,
    setDeviceTime,
    label,
}: {
    deviceTime: Date;
    setDeviceTime: React.Dispatch<React.SetStateAction<Date>>;
    label: string;
}) => {

    return (
        <div className="w-full flex ">
            <DateTimePicker
                label={label}
                value={deviceTime}
                onChange={(newValue) => setDeviceTime(newValue as Date)}
            />
        </div>
    );
};

export default PickTime;
