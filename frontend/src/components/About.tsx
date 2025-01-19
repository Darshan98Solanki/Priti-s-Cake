
export default function About() {
    return <div className="w-full lg:h-screen h-full m-auto flex items-center justify-cetner py-20">
        <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
            <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
                <div className="relative">
                    {/* <!-- Side Img 1 --> */}
                    <img className="absolute z-20 lg:left-[2rem] -top-4 left-[1rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-Lp8SqwSCpjEh-A_j01nTAHaHa%26pid%3DApi&f=1&ipt=5f5ce6a0d45cbfcb8f8803cc8c28932b45b388484983da3025874717b5dbf29f&ipo=images" alt="Side Image" />

                    {/* <!-- Side Img 2 --> */}
                    <img className="absolute z-20 lg:top-[12rem] sm:top-[11rem] top-[5rem] sm:-left-[3rem] -left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.btapZALju_QF7oVeVhd5_gHaHa%26pid%3DApi&f=1&ipt=22e5d7108a7e3c75980ac781568a2aa12db6fff232a4b0d841940b3052a5dbef&ipo=images" alt="Side Image 2" />

                    {/* <!-- Side Img 3 --> */}
                    <img className="absolute z-20 lg:top-[23rem] sm:top-[20.5rem] top-[10.5rem] left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fa3%2Fd2%2F33%2Fa3d23342ca95da48f3d9019f24ac6734--slice-of-cakes-buttercream-fondant.jpg&f=1&nofb=1&ipt=fefd61fb8fc1b82baa2238e9e47e05ef9ef360669ea906c580e1dbd4dc01389b&ipo=images" alt="Side Image 3" />

                    {/* <!-- Main Img --> */}
                    <img
                        className="rounded-full relative object-cover right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-red-400"
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.fanpage.it%2Fwp-content%2Fuploads%2Fsites%2F22%2F2021%2F08%2Fcake-decorations.jpg&f=1&nofb=1&ipt=aa211d31838e86c6b4b21a41a36cf59f05948f02df58da38ec1314eefb0f1689&ipo=images" alt="About us" />
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
