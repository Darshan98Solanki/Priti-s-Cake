import { Cake, CakeSlice, Cookie, Croissant } from "lucide-react";
import Headings from "./Headings";
import { ReactNode } from "react";

export default function Services() {

    return <div>
        <Headings
            heading="Services we provide"
            subheading="From our kitchen to your heart, homemade happiness in every bite"
        />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-3 mx-5 md:mx-20 pb-10 ">
            <FeatureCard icon={<CakeSlice size={70}/>} title="cakes" description="something..." />
            <FeatureCard icon={<Croissant size={70}/>} title="croissant" description="something..." />
            <FeatureCard icon={<Cookie size={70}/>} title="Cookie" description="something..." />
            <FeatureCard icon={<Cake size={70}/>} title="cakes" description="something..." />
        </div>

    </div>

}


function FeatureCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {

    return <div className="group relative block h-64 sm:h-80 lg:h-96">
        <span className="absolute inset-0 border-2 border-dashed border-black"></span>
        <div className="relative flex text-center h-full w-full items-center justify-center border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                <div className="flex justify-center items-center mt-5 md:mt-10">
                    {icon}
                </div>
                <h2 className="mt-4 text-xl uppercase font-Aclonica font-bold sm:text-2xl">{title}</h2>
            </div>

            <div
                className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
            >
                <h3 className="mt-4 text-xl uppercase font-Aclonica font-bold sm:text-2xl text-center">{title}</h3>

                <p className="mt-4 text-sm sm:text-base text-center">
                    {description}
                </p>
            </div>
        </div>
    </div>
}