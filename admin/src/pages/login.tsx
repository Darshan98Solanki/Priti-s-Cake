import { useEffect, useState } from "react";
import Button from "../components/Button"
import InputField from "../components/InputField"
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loader, setLoader] = useState(false)
    const navigator = useNavigate()

    useEffect(() => {
        setLoader(true)
        axios.get("https://priti-s-cake-5q8l.vercel.app/me", {
            headers:{
                Authorization: localStorage.getItem("authorization"),
            }
        }).then(response => {
            if(response.data.message === "done")
                navigator("/home")
        }).catch(() => {
            setLoader(false)
        })
    },[])

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        
        event.preventDefault()
        
        try{
            setLoader(true)
            const response = await axios.post("https://priti-s-cake-5q8l.vercel.app/signin",{
                username:email,
                password
            })  

            if(response.data.token){
                localStorage.setItem("authorization",`Bearer ${response.data.token}`)
                navigator("/home")
            }   
        }catch(error){
            if(axios.isAxiosError(error) && error.response)
                toast.error(error.response?.data.message)
        }finally{
            setLoader(false)
        }

    }

    return <div>
        <Loader show={loader}/>
        <div className="h-screen flex items-center justify-center">
            <div className="relative">
                <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse"></div>
                <form id="form-container" onSubmit={handleSubmit} className="bg-white p-16 rounded-lg shadow-2xl w-80 md:w-md relative z-10 transform transition duration-500 ease-in-out">
                    <h2 id="form-title" className="text-center text-3xl font-bold mb-10 text-gray-800">Login</h2>
                    <div className="space-y-5">
                        <InputField placeholder="Email" type="email"
                            onChange={(e)=>{
                                setEmail(e.target.value.toLowerCase().trim());
                                console.log(email)
                            }}
                            value={email}
                        />
                        <InputField placeholder="Password" type="password"
                            onChange={(e)=>{
                                setPassword(e.target.value);
                            }}
                        />
                        <Button text="Sign In"/>
                    </div>
                </form>
            </div>
        </div>
    </div >

}