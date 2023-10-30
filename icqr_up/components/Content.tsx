import MainContent from "./MainContent";


const Content = () => {

    return (
        <div
            style={{ 
                backgroundImage: "url(https://images.pexels.com/photos/3761137/pexels-photo-3761137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)", 
                height: "100%", 
                backgroundAttachment: "fixed",
                backgroundBlendMode: "multiply",
            }}
            className="w-full h-full flex flex-row items-center overflow-y-hidden bg-no-repeat bg-cover bg-center">
            <MainContent />
        </div>
    )
}

export default Content;