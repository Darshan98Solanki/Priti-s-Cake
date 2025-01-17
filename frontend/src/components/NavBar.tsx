import { useEffect, useState } from "react";
import logo from "../images/logo.png"
export default function NavBar() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <header className={`sticky top-0 z-50 w-full transition-all duration-100 ${isScrolled ? 'bg-white shadow-md' : 'bg-[#FDF6EC]'
        }`}>
        <div className="max-w-7xl mx-auto px-4">
            <nav className="flex space-x-3 md:space-x-10 items-center justify-center h-32">
                {/* Left Navigation */}
                <div className="space-x-2 md:space-x-16">
                    <a href="" className="text-amber-800 hover:text-amber-600 transition-colors">
                        HOME
                    </a>
                    <a href="#" className="text-amber-800 hover:text-amber-600 transition-colors">
                        PRODUCTS
                    </a>
                </div>
                <div className="w-20 h-20 rounded-full flex items-center justify-center">
                    <img src={logo} alt="Lol" className="w-30 h-30 object-contain" />
                </div>
                <div className="space-x-2 md:space-x-16">
                    <a href="#" className="text-amber-800 hover:text-amber-600 transition-colors">
                        GALLERY
                    </a>
                    <a href="#" className="text-amber-800 hover:text-amber-600 transition-colors">
                        BLOG
                    </a>
                </div>
            </nav>
        </div>
    </header>
}