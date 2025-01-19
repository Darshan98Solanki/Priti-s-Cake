import { useState } from "react"
import logo from '../assets/images/logo.png'
import { Link } from "react-router-dom"
export default function Header() {

    const [open, setOpen] = useState(false)

    return <header className="py-5">
        <div className="mx-auto flex md:justify-center px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 w-full md:w-auto items-center  md:justify-between">
                <div className="flex-1 md:flex md:items-center md:gap-12">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-10 text-sm">
                            <li>
                                <Link className="text-black uppercase font-bold transition hover:text-[#65451F] border-[#65451F] hover:border-b-2" to="/"> Home </Link>
                            </li>

                            <li>
                                <Link className="text-black uppercase font-bold transition hover:text-[#65451F] border-[#65451F] hover:border-b-2" to="/products"> Products </Link>
                            </li>
                            <a className="block" href="#">
                                <img src={logo} className="w-12 h-12 md:w-32 md:h-32" />
                            </a>
                            <li>
                                <a className="text-black uppercase font-bold transition hover:text-[#65451F] border-[#65451F] hover:border-b-2" href="#"> Gallery </a>
                            </li>

                            <li>
                                <a className="text-black uppercase font-bold transition hover:text-[#65451F] border-[#65451F] hover:border-b-2" href="#"> Blog </a>
                            </li>
                        </ul>
                    </nav>
                    <a className="block md:hidden float-left" href="#">
                        <img src={logo} className="w-24 h-24 md:w-32 md:h-32" />
                    </a>
                </div>
                <div className="md:flex md:gap-12">
                    <div className={`block align-middle float-right md:hidden`}>
                        <label>
                            <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
                                <input className="hidden peer" type="checkbox" onClick={() => {
                                    setOpen((c) => !c);
                                }} />
                                <div className="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
                                <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
                                <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
                            </div>
                        </label>
                        {open && (
                            <div className="absolute end-0 z-20 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg" role="menu">
                                <div className="p-2">
                                    <Link to="/" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700" role="menuitem">
                                        Home
                                    </Link>
                                    <Link to="/products" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700" role="menuitem">
                                        Products
                                    </Link>
                                    <a href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700" role="menuitem">
                                        Gallery
                                    </a>
                                    <a href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700" role="menuitem">
                                        Blogs
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </header>
}