export default function Button({ title, onClick}: { title: string, onClick:()=>void}) {

    return <div>
        <div className="flex items-center justify-center my-5">
            <button
                onClick={onClick}
                className="px-8 z-30 py-2 border-[1px] border-[black] bg-white/20 rounded-md text-black relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-500 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-500 transition-all duration-200 hover:border-gray-300 hover:text-white">
                {title}
            </button>

        </div>

    </div>

}