import { timeStampType } from "@/types";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination } from "@nextui-org/react";

const columns = [
    {
        key: "name",
        label: "NAME",
    },
    {
        key: "email",
        label: "EMAIL",
    },
    {
        key: "student_id",
        label: "STUDENT ID",
    },
    {
        key: "request_time",
        label: "REQUESTED TIME",
    },
];

const TableData = ({
    title,
    rows
}: {
    title: string,
    rows: {
        full_name: string;
        email: string;
        student_id: string;
        time: timeStampType;
    }[]
}) => {
    const convertToReadableTime = (time: timeStampType) => {
        const date = new Date(time?.seconds * 1000 + time?.nanoseconds / 1000000)
        return date.toLocaleString();
    };


    return (
        <div className="px-4 py-5 bg-slate-200 flex flex-col gap-1 overflow-y-scroll">
            <h3 className="md:text-lg text-base font-semibold">
                {title}
            </h3>
            <div className="">
                <Table aria-label="Example table with dynamic content">
                    <TableHeader columns={columns}>
                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={rows}>
                        {(item) => (
                            <TableRow key={convertToReadableTime(item.time)}>
                                <TableCell>{item.full_name}</TableCell>
                                <TableCell className="text-blue-500">{item.email}</TableCell>
                                <TableCell>{item.student_id}</TableCell>
                                <TableCell>{convertToReadableTime(item.time)}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="py-2 bg-blue-200">
                <Pagination loop showControls color="success" total={5} initialPage={1} />
            </div>
        </div>
    )
}


export default TableData;