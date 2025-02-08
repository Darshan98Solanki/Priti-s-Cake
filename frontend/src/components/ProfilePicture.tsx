import ownerAvtar from "../assets/images/Priti Image.png"

export default function ProfilePicture() {

    return <>
        <header className="px-2 py-4 mt-16 flex flex-col justify-center items-center text-center">
            <img className="inline-flex object-cover border-4 border-[#C2A87E] rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-[#C2A87E] bg-[#C2A87E] text-indigo-600 h-24 w-24 lg:h-48 lg:w-48" src={ownerAvtar} alt="" />
            <h1 className="text-2xl font-bold mt-2">
                Priti Mali
            </h1>
            <h2 className="text-base md:text-xl text-gray-500 font-bold">
                Artisan Cake Baker
            </h2>
        </header>
    </>

}