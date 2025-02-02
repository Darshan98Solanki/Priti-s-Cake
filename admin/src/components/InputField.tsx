import { ChangeEvent } from "react";

export default function InputField({placeholder, theme, value, type, onChange}:{value?:string, placeholder:string,theme?:string, type:string, onChange:(e:ChangeEvent<HTMLInputElement>)=>void}) {

    return <>
       <input className={`w-full h-10 border ${theme=="dark"?`border-white text-white`:`border-gray-800`} px-3 rounded-lg`} placeholder={placeholder} name="" type={type} value={value} onChange={onChange}/>
    </>
}

export function NumberInput({placeholder,theme="dark", value, onChange}:{placeholder:string, value:string,theme:"dark" | "light", onChange:(e:React.ChangeEvent<HTMLElement>)=>void}){

    return <input type="text" name="text" className={`input w-full h-10 border ${(theme=="dark")?'text-white border-white':"text-black"} px-3 rounded-lg`} pattern="\d+" placeholder={placeholder} value={value} onChange={onChange}></input>

}