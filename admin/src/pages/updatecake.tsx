import { CakeSchema } from "@darshan98solanki/pritis-cake";
import { useEffect, useState } from "react"
import axios, { isAxiosError } from 'axios'
import InputField, { NumberInput } from "../components/InputField";
import Loader from "../components/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function UpdateCake() {

    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(true)
    const [imageURL, setImageURL] = useState("")
    const id = useParams().id
    const [publicId, setPublicId] = useState("")
    const [cake, setCake] = useState<CakeSchema>({
        name: "",
        halfKgPrice: "",
        oneKgPrice: "",
    })
    const [disable, setDisable] = useState(false)
    const navigator = useNavigate()

    useEffect(() => {
        setLoading(true)
        axios.get("https://priti-s-cake-5q8l.vercel.app/me", {
            headers: {
                Authorization: localStorage.getItem("authorization"),
            }
        }).then(response => {
            if (response.data.message !== "done")
                navigator("../")

        }).catch(() => {
            navigator("../")
        })
    }, [])

    useEffect(() => {
        axios.get(`https://priti-s-cake-5q8l.vercel.app/cake/${id}`, {
            headers: {
                Authorization: localStorage.getItem('authorization'),
            }
        }).then(response => {
            const res = response.data.data[0]
            setCake({
                name: res.name,
                halfKgPrice: res.halfKgPrice,
                oneKgPrice: res.OneKgPrice
            })
            setPublicId(res.publicId)
            setImageURL(res.Image)
            setLoading(false)
        }).catch(error => {
            toast.error(error.message)
            setLoading(false)
        })

    }, [id])

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files != null) {
            setFile(event.target.files[0])

            const previewURL = URL.createObjectURL(event.target.files[0])
            setImageURL(previewURL)
        }
    };

    const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true)
        const formData = new FormData()

        formData.append('name', cake.name)
        formData.append('halfKgPrice', cake.halfKgPrice)
        formData.append('oneKgPrice', cake.oneKgPrice)
        formData.append('id', id as string)
        formData.append('publicId', publicId)
        formData.append('invalidate', "true")

        if (file)
            formData.append('image', file)
        try {

            await axios.put("https://priti-s-cake-5q8l.vercel.app/cake", formData, {
                headers: {
                    authorization: localStorage.getItem("authorization"),
                    "Content-Type": "multipart/form-data",
                }
            })
            navigator("../home")
        } catch (err) {
            if (isAxiosError(err) && err.response)
                toast.error(err.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    return <section className="relative flex flex-wrap lg:h-screen lg:items-center" >
        <Loader show={loading} />
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="group relative block overflow-hidden">
                <form className="mt-4" onSubmit={handleUpdate}>
                    <div className="flex flex-col my-5 w-full space-y-4">
                        <InputField theme="light" placeholder="Cake Name" type="text" value={cake.name} onChange={(e) => {
                            setCake(c => ({
                                ...c,
                                name: e.target.value
                            }))
                        }} />
                        <NumberInput theme="light" placeholder="Half Kg Cake Price" value={cake.halfKgPrice} onChange={(e) => {
                            setCake(c => ({
                                ...c,
                                halfKgPrice: (e.target as HTMLInputElement).value
                            }))
                        }} />
                        <NumberInput theme="light" placeholder="One Kg Cake Price" value={cake.oneKgPrice} onChange={(e) => {
                            setCake(c => ({
                                ...c,
                                oneKgPrice: (e.target as HTMLInputElement).value
                            }))
                        }} />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <label htmlFor="file" className="custum-file-upload mb-5">
                            <div className="icon">
                                <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path> </g></svg>
                            </div>
                            <div className="text">
                                <span>{file ? file.name : "Upload image here"}</span>
                            </div>
                            <input id="file" name="image" type="file" onChange={handleFileChange} />
                        </label>
                    </div>
                    <div className="flex flex-row gap-4">
                        <button
                            type="submit"
                            disabled={disable}
                            className="w-1/2 font-bold rounded border bg-green-500 hover:bg-green-600 px-4 py-3 text-sm text-white"
                        >
                            {disable ? "Updating..." : "Update"}
                        </button>
                        <button
                            type="button" // Changed to prevent accidental form submission
                            onClick={() => navigator("../home")} // Example action, change as needed
                            className="w-1/2 font-bold rounded border bg-red-500 hover:bg-red-600 px-4 py-3 text-sm text-white"
                        >
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
            <img
                alt=""
                src={imageURL}
                className="absolute inset-0 h-full w-full object-cover"
            />
        </div>
    </section >

}