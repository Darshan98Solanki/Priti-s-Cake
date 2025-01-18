import ProductCard from "./ProductCard";

export default function Products() {

    return <div className="grid md:grid-cols-3 md:gap-4 grid-cols-1 gap-12 md:space-x-5 md:mx-20 mx-5 py-20 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>

}