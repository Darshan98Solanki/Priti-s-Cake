import Footer from "../components/Footer";
import GalleryCard from "../components/GalleryCard";
import Header from "../components/Header";
import Headings from "../components/Headings";
import TopBar from "../components/TopBar";

export default function Gallery() {

    return <div className="bg-[#FFF6E4] min-h-screen">
        <TopBar />
        <Header />
        <Headings heading="Discover Our Sweet Creations"
            subheading="From elegant wedding tiers to playful birthday treats, explore our wide range of cakes crafted for every occasion and taste" />
        <div className="flex justify-center">
            <div className="grid md:grid-cols-3 md:gap-4 grid-cols-1 gap-12 md:space-x-5 mx-5 md:mx-20 my-5 text-center">
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
            </div>
        </div>
        <Headings heading="A Flavor for Every Moment"
            subheading="Delight your taste buds with our diverse range of cakes, crafted to make every celebration unforgettable" />
        <div className="flex justify-center">
            <div className="grid md:grid-cols-3 md:gap-4 grid-cols-1 gap-12 md:space-x-5 mx-5 md:mx-20 my-5 text-center">
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
            </div>
        </div>
        <div className="mt-10">
        <Footer/>
        </div>
    </div>


}