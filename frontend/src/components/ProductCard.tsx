import { Cake } from "../pages/Products"

export default function ProductCard({ cake, orderNow = false }: { cake: Cake, orderNow?: boolean }) {
    return <div className="group relative block overflow-hidden rounded-md">
        <img
            src={cake.Image}
            alt=""
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative border border-gray-100 bg-white p-6">

            <h3 className="mt-4 text-lg font-medium text-gray-900">{cake.name}</h3>
            {
                orderNow && <>
                    <div className="flex flex-row space-x-5">
                        <p className="mt-1.5 text-sm text-gray-700">Half Kg : {cake.halfKgPrice + " ₹"}</p>
                        <p className="mt-1.5 text-sm text-gray-700">One Kg : {cake.OneKgPrice + " ₹"}</p>
                    </div>
                    <button className="block mt-4 w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
                        Order Now
                    </button>
                </>
            }
        </div>
    </div>
}