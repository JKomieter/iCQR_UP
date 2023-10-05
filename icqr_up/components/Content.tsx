import LeftContent from "./LeftContent";
import MainContent from "./MainContent";


const Content = () => {

    return (
        <div
            style={{ backgroundImage: "linear-gradient(to right, #fcfcf5, #f2f9fe)", height: "100%" }}
            className="w-full h-full flex flex-row items-center">
            <LeftContent />
            <MainContent />
        </div>
    )
}

export default Content;