import CenterImage from "../assets/images/cake-decorations.jpg"
import eggLess from "../assets/images/eggless.jpg"
import homeMade from "../assets/images/homeMade-removebg-preview.png"
import Natural from "../assets/images/100netural.jpg"

export default function About() {
    return <div className="w-full lg:h-screen h-full m-auto flex items-center justify-cetner py-20">
        <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
            <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
                <div className="relative">
                    {/* <!-- Side Img 1 --> */}
                    <img className="absolute z-20 lg:left-[2rem] -top-4 left-[1rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src={eggLess} alt="Side Image" />

                    {/* <!-- Side Img 2 --> */}
                    <img className="absolute z-20 lg:top-[12rem] sm:top-[11rem] top-[5rem] sm:-left-[3rem] -left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src={Natural} alt="Side Image 2" />

                    {/* <!-- Side Img 3 --> */}
                    <img className="absolute z-20 lg:top-[23rem] sm:top-[20.5rem] top-[9.5rem] left-[0rem] lg:w-[8rem] lg:h-[8rem] sm:w-[8.5rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src={homeMade} alt="Side Image 3" />

                    {/* <!-- Main Img --> */}
                    <img
                        className="rounded-full relative object-cover right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-red-400"
                        src={CenterImage} alt="About us" />
                </div>
                {/* <!--  --> */}
                <div className="lg:w-[60%] p-4 w-full h-full shadow-lg shadow-red-400/100 flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
                    <h2 className="text-4xl text-center text-green-600 dark:text-green-400 font-bold px-4 py-1 md:mt-0 mt-10">
                        About Us
                    </h2>
                    <p className="md:text-3xl text-2xl text-center text-gray-800 font-bold my-5">We are
                        Priti's Cake Studio
                    </p>
                    <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2">
                        about priti's cake.
                    </p>    
                </div>
            </div>
        </div>
    </div>
}
