import { Clock, Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";

export default function TopBar() {

    return <div className="hidden md:flex min-w-full justify-between py-2 bg-[#65451F] text-white ">
        <div className="flex ms-5 md:ms-20">
            <div className="flex items-center">
                <Phone size={16} />
                <span className="text-sm ms-2">+91 635346 66496</span>
                <div className="mx-5 font-bold mb-1 flex items-center">|</div>
            </div>
            <div className="flex items-center">
                <Clock size={16} />
                <span className="text-sm ms-2">Mon-Sun: 10:00-20:00</span>
                <div className="mx-5 font-bold mb-1 flex items-center">|</div>
            </div>
            <div className="flex items-center">
                <Mail size={16} />
                <span className="text-sm ms-2">abc@gmail.com</span>
            </div>
        </div>
        <div className="flex me-5 md:me-20">
            <section className="flex justify-center items-center space-x-3">
                <a className="group flex justify-center p-1 text-white font-semibold transition-transform ease-in-out duration-500 hover:scale-110">
                    <Instagram />
                </a>
                <a className="group flex justify-center p-1 text-white font-semibold transition-transform ease-in-out duration-500 hover:scale-110">
                    <Facebook />
                </a>
                <a className="group flex justify-center p-1 text-white font-semibold transition-transform ease-in-out duration-500 hover:scale-110">
                    <Youtube />
                </a>

            </section>


        </div>
    </div>

}