import { Clock, Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function TopBar() {
    return <header className="hidden md:block">
        <nav className="bg-[#65451F] border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-center md:justify-between items-center mx-auto max-w-screen-xl">
                <div className="flex items-center lg:order-2 space-x-4 text-white">

                    <Instagram/>
                    <Facebook/>
                </div>
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li className="flex text-white">
                            <Phone className="flex flex-col mt-3" size={20}/>
                            <span className="block py-2 pr-4 pl-3">+91 123456789</span>
                        </li>
                        <li className="flex text-white">
                            <Clock className="flex flex-col mt-3" size={20}/>
                            <span className="block py-2 pr-4 pl-3">Mon-Sun: 9:00am-10:00pm</span>
                        </li>
                        <li className="flex text-white">
                            <Mail className="flex flex-col mt-3" size={20}/>
                            <span className="block py-2 pr-4 pl-3">abc@gnail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
}