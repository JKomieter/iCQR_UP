import LeftContent from "./LeftContent";
import MainContent from "./MainContent";


const Content = () => {

    return (
        <div
            style={{ backgroundImage: "linear-gradient(to right, #fcfcf5, #f2f9fe)", height: "100%" }}
            className="w-full h-full flex flex-row items-center">
            <LeftContent backgroound="https://images.pexels.com/photos/3761137/pexels-photo-3761137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <MainContent />
        </div>
    )
}

export default Content;