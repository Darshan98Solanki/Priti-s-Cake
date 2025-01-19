import Header from "../components/Header";
import TopBar from "../components/TopBar";
import banner from "../assets/images/banner.jpg"
import Headings from "../components/Headings";
import Products from "../components/Products";
import Button from "../components/Button";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import Banner from "../components/Banner";

export default function Home() {

    return <div className="bg-[#FFF6E4] min-h-screen">
        <TopBar />
        <Header />
        <section className="relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${banner})` }}>
            <div className="absolute inset-0 bg-gray-900/50 from-gray-900 to-gray-900/10 ltr:bg-gradient-to-r rtl:bg-gradient-to-l"></div>

            <div className="mx-auto px h-60 sm:px-6 lg:flex lg:h-[32rem] flex items-center justify-center lg:px-8">
                <div className="z-10">
                    <h1 className="text-6xl font-bold font-leckerli text-[#EAC696]">Priti's</h1>
                    <h2 className="text-4xl text-center font-semibold font-MarkoOne text-white">Cake</h2>
                    <button className="mt-4 px-6 py-2 border-[.5px] border-[#E0E1E4] text-lg font-medium text-white bg-white/20 rounded-md hover:bg-white/30">
                        View Products
                    </button>
                </div>
            </div>
        </section>
        <main className="min:h-screen">
            <Headings 
                heading="Our Newest Home Bakery Products"
                subheading="Indulge in the divine flavors of our newest, best bakery creation"
            />
            <Products/>
            <Button title="See All Products"/>
            <Testimonials/>
            <Services/>
            <Banner/>
        </main>
    </div>

}