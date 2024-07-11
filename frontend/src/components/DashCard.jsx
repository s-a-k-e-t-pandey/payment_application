import { useState } from "react";
import { BiRupee } from "react-icons/bi";

const [users, setUsers] = useState([{
    firstName: "Saket",
    lastName: "Pandey",
    _id: 1
}])

const DashCard = () => {
    return (
        <div className="bg-slate-300 p-4 rounded-lg shadow-lg px-8">
            <div className="flex flex-row font-bold text-2xl">
                Your Balance: 
                <div className="flex flex-row pl-2 font-extrabold">
                    <BiRupee className="mt-1 "/>95000
                </div>
            </div>
            <div className="font-bold text-2xl pt-6">
                Users
            </div>
            <div className="mt-4 min-w-full">
                <input type="text" placeholder="search users..." className="min-w-full bg-slate-200 px-2 py-2 mt-2 rounded-lg"/>
            </div>
            <div className="min-h-full mb-10 pb-96">
                {/* {users.map(user => <User user={user}/>)} */}
            </div>
        </div>
    );
};

export default DashCard;


function User({user}){

    return <div className="flex justify-center">
        <div className="flex">
            <div className="rounded-full text-slate-900 bg-blue-500">
                {user.firstName[0]}
            </div>
        </div>
    </div>
}