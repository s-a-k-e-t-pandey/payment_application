import { Link } from "react-router-dom"


export default function AuthBox({type}){

    return <div className="rounded-lg flex flex-col bg-blue-300 h-screen justify-center">
        <div className="flex justify-center">
            <div className="rounded-lg text-center bg-slate-200 w-min px-12 pb-10">
                <Heading label={type == "signin" ? "Already have an Account" : "Create a new Account"}/>
                <div className="flex justify-center">
                    <SubHeading label={type == "signin" ? "Don't have an account?" : "Already have an account."}/>
                    <Link className="px-2 mt-2 underline" to={type == "signin" ? "/signup" : "/signin"}>
                            {type === "signin" ? "Signup" : "Signin"}
                    </Link>
                </div>
                {type == "signup" ? <LabelInput label={"Full Name"}/> : null}
                <LabelInput label={"Username"}/>
                <LabelInput label={"Password"}/>
                <div className="flex justify-center">
                    <Button label={type == "signin" ? "Signin" : "Signup"}></Button>
                </div>
            </div>
        </div>
    </div>
}


export function Heading({label}){

    return <div className="font-bold text-2xl pt-6">
        {label}
    </div>
}

export function SubHeading({label}){

    return <div className="text-slate-500 text-md pt-2 pb-4">
        {label}
    </div>
}

function LabelInput({label, placeholder}){

    return <div>
        <div className="font-semibold text-md font-medium text-left py-2">
            {label}
        </div>
        <input placeholder={placeholder} className="bg-gray-900 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    </div>
}

function Button({label}){

    return <button className="rounded-lg font-bold bg-slate-900 text-slate-100 py-2 px-28 mt-12 text-xl flex justify center">
        {label}
    </button>
}