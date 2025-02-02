import { atom, selector } from "recoil"
import axios from "axios"

export type Cake = {

    id: string,
    name:string,
    halfKgPrice:number,
    OneKgPrice:number,
    publicId:string,
    Image:string

}

export const cakeState = atom<Cake[]>({
    key:"cakeState",
    default:[]
})

export const cakeSelector = selector<Cake[]>({
    key:"cakeSelector",
    get: async()=>{
        try{
            const response = await axios.get("https://priti-s-cake-5q8l.vercel.app/cakes", {
                headers:{
                    Authorization:localStorage.getItem("authorization")
                }
            })

            return response.data

        }catch{
            return []
        }
    },
})