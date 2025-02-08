import { ChangeEvent, useEffect, useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Headings from "../components/Headings";
import ProductCard from "../components/ProductCard";
import TopBar from "../components/TopBar";
import axios from "axios";
import ProductCardSkeleton from "../components/ProductCardSkeleton";

export type Cake = {
    id: string,
    name: string,
    halfKgPrice: number,
    OneKgPrice: number,
    publicId: string,
    Image: string
}

export default function Products() {

    const [filter, setFilter] = useState("")
    const [cakes, setCakes] = useState<Cake[]>([])

    useEffect(() => {
        const time = setTimeout(() => {
            axios.get("https://priti-s-cake-5q8l.vercel.app/cakes", {
                params: {
                    filter
                }
            }).then(response => {
                setCakes(response.data)
            }).finally(() => {
                console.log(cakes)
            })
        }, 500)
        return ()=>{
            clearTimeout(time)
        }
    }, [filter])

    return <div className="bg-[#FFF6E4] min-h-screen">
        <TopBar />
        <Header />
        <Headings heading="Our Products" subheading="Best cakes ever" />
        <SearchBar onChange={(e) => {
            setFilter(e.target.value);
        }} />
        <div className="grid md:grid-cols-3 md:gap-4 grid-cols-1 gap-12 md:space-x-5 md:mx-20 mx-5 my-10">
            {cakes.length === 0 ? Array(10).fill(0).map((_,id)=><ProductCardSkeleton key={id} orderNow={true}/>) 
                : cakes.length !== 0 && cakes.map((cake: Cake, id) =>
                <ProductCard cake={cake} orderNow={true} key={id} />
            )}
        </div>
        <Banner />
        <Footer />
    </div>

}

function SearchBar({ onChange }: { onChange: (e: ChangeEvent<HTMLInputElement>) => void }) {

    return <div className="w-full md:flex md:justify-end">

        <div className="relative mx-5 md:mx-20 md:w-1/3">
            <input
                className="appearance-none border-b-2 pl-10 bg-transparent border-b-gray-300 hover:border-gray-400 transition-colors w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Find your favourite cake..."
                onChange={onChange}
            />
            <div className="absolute right-0 inset-y-0 flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>

            <div className="absolute left-0 inset-y-0 flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
        </div>
    </div>

}