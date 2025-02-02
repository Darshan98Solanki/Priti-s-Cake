import { FormEvent } from "react";

export default function Button({ text, onClick }: { text: string, onClick?: (event: FormEvent<HTMLButtonElement>) => void}) {

    return <button type="submit" className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={onClick}>
        {text}
    </button>

}