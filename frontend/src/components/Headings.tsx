import DecorativeDevider from "./DecorativeDevider"

export default function Headings({heading, subheading}:{heading:string, subheading:string}){

    return <div className="w-full text-center my-12">
        <div className="uppercase font-bold font-leckerli">
            {heading}    
        </div>
        <DecorativeDevider/>
        <div className="text-[#65451F] mx-4 md:mx-0">
            {subheading}
        </div>

    </div>

}