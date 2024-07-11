import Appbar from "../components/Appbar"
import BackImage from "../assets/upi-image.jpg"
import DashCard from "../components/DashCard"


export default function Dashboard(){

    return <div className="flex flex-col min-h-screen break-after-column brightness-20 fixed top-0 left-0 right-0 overflow-auto md:overflow-scroll bg-cover bg-center">
        <Appbar></Appbar>
        <div className="relative">
            <img src={BackImage} alt="Landing"  className="bg-opacity-75 bg-cover"/>
            <div className="absolute top-12 left-3/2 px-4 min-w-full mb-8">
                <DashCard />
            </div>
        </div>
    </div>
}