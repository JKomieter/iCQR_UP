


const UserInfo = ({
    email,
    setEmail,
    fullName,
    setFullName,
    studentId,
    setStudentId,
}: {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    fullName: string;
    setFullName: React.Dispatch<React.SetStateAction<string>>;
    studentId: string;
    setStudentId: React.Dispatch<React.SetStateAction<string>>;
}) => {
    return (
        <form className="flex flex-col gap-3 w-full">
            <div className="w-full flex flex-col">
                <label className="font-semibold text-base text-neutral-600">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md p-3 shadow-md border-2 border-neutral-200 bg-white"
                    placeholder="Enter your email"
                    required
                />
            </div>
            <div className="w-full flex flex-col">
                <label className="font-semibold text-base text-neutral-600">Full name</label>
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-md p-3 shadow-md border-2 border-neutral-200 bg-white"
                    placeholder="Enter your full name"
                    required
                />
            </div>
            <div className="w-full flex flex-col">
                <label className="font-semibold text-base text-neutral-600">Student ID</label>
                <input
                    type="text"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="w-full rounded-md p-3 shadow-md border-2 border-neutral-200 bg-white"
                    placeholder="Enter your student ID"
                    required
                />
            </div>
        </form>
    )
}


export default UserInfo;