export default function ProductCardSkeleton({ orderNow = false }: { orderNow?: boolean }) {
    return <div className="group relative block overflow-hidden rounded-md animate-pulse">
        <div className="grid bg-gray-300  place-items-center rounded-lgh-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72">
            <div className="loader bg-gray-300"></div>
        </div>

        <div className="relative border border-gray-100 bg-white p-6">
            {/* <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span> */}
            <div className="h-4 bg-gray-300 rounded-full w-28 px-3 py-1.5"></div>

            {
                orderNow && <>
                    <div className="flex flex-row space-x-5">
                        <div className="h-3 mt-2.5 bg-gray-300 rounded-full w-28 px-3 py-1.5"></div>
                        <div className="h-3 mt-2.5 bg-gray-300 rounded-full w-28 px-3 py-1.5"></div>
                        {/* <p className="mt-1.5 text-sm text-gray-700">Half Kg : {cake.halfKgPrice + " ₹"}</p>
                        <p className="mt-1.5 text-sm text-gray-700">One Kg : {cake.OneKgPrice + " ₹"}</p> */}
                    </div>
                    <button disabled={true} tabIndex={-1}
                        className="align-middle mt-4 w-full p-4 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-12 bg-gray-300 shadow-none hover:shadow-none"
                        type="button">
                        &nbsp;
                    </button>
                </>
            }
        </div>
    </div>
}