import { useEffect, useState } from "react";
import { Cake } from "../pages/Products";
import ProductCard from "./ProductCard";
import axios from "axios";
import ProductCardSkeleton from "./ProductCardSkeleton";

export default function Products() {

    const [cakes, setCakes] = useState<Cake[]>([])

    useEffect(() => {
        const time = setTimeout(() => {
            axios.get("https://priti-s-cake-5q8l.vercel.app/cakes").then(response => {
                setCakes(response.data)
            }).finally(() => {
                console.log(cakes)
            })
        }, 500)
        return () => {
            clearTimeout(time)
        }
    }, [])

    return <div className="grid md:grid-cols-3 md:gap-4 grid-cols-1 gap-12 md:space-x-5 md:mx-20 mx-5">
        {cakes.length > 0 ? (
            (() => {
                // Shuffle and get first 3 unique cakes
                const shuffledCakes = [...cakes].sort(() => Math.random() - 0.5).slice(0, 3);
                return (
                    <>
                        {shuffledCakes.map((cake,id) => (
                            <ProductCard key={id} cake={cake} />
                        ))}
                    </>
                );
            })()
        ) : (
        <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
        </>
        )}

    </div>

}