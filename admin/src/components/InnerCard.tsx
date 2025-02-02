import { useNavigate } from "react-router-dom";
import { Cake } from "../atoms/cakeAtoms";
import axios, { isAxiosError } from 'axios'
import { toast } from "react-toastify";
import { useState } from "react";

export default function InnerCard({ data }: { data: Cake }) {

    const navigator = useNavigate()
    const [disable, setDisable] = useState(false)

    async function handleDelete() {

        try {
            setDisable(true)
            await axios.delete(`https://priti-s-cake-5q8l.vercel.app/cake?id=${data.id}&publicId=${data.publicId}`,
                {
                    headers: {
                        Authorization: localStorage.getItem('authorization')
                    }
                }
            )

            navigator(0);

        } catch (err) {
            if (isAxiosError(err) && err.response)
                toast.error(err.response.data.message)
        } finally {

        }

        console.log(data.id, data.publicId)
    }

    return <>
        <div className="group relative block overflow-hidden">
            <img src={data.Image} alt="error" className="h-64 rounded-2xl w-full object-cover sm:h-72" />

            <div className="relative p-6">

                <h3 className="text-lg font-medium text-white">{data.name}</h3>
                <p className="text-white mt-1.5 space-x-5">
                    <span>
                        <b>Price</b> :- <b>₹</b> {data.halfKgPrice} (.5 kg)
                    </span>
                    <span>
                        <b>₹</b> {data.OneKgPrice} (1 kg)
                    </span>
                </p>

                <form className="mt-4 flex gap-4">
                    <button className="block w-full rounded bg-green-400 hover:bg-green-500 px-4 py-3 text-sm font-bold text-gray-900 transition hover:scale-105"
                        onClick= {()=>{
                            navigator(`../cake/update/${data.id}`)
                        }}
                    >
                        Update
                    </button>

                    <button type="button" disabled={disable} className="block w-full font-bold rounded bg-red-500 hover:bg-red-600 px-4 py-3 text-sm text-white transition hover:scale-105"
                        onClick={handleDelete}
                    >
                        {(disable)?"Deleting...":"Delete"}
                    </button>
                </form>
            </div>
        </div>
    </>

}