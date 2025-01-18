import DecorativeDevider from "./DecorativeDevider"

export default function Headings({heading, subheading}:{heading:string, subheading:string}){

    return <div className="w-full text-center my-10">
        <div className="uppercase font-bold font-leckerli">
            {heading}    
        </div>
        <DecorativeDevider/>
        <div className="text-[#65451F]">
            {subheading}
        </div>

    </div>

}