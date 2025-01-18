import { Dessert } from "lucide-react";

export default function DecorativeDevider() {


    return <span className="flex items-center mx-3 py-1">
        <span className="h-px flex-1 bg-black"></span>
        <span className="shrink-0 px-6"><Dessert /></span>
        <span className="h-px flex-1 bg-black"></span>
    </span>

}