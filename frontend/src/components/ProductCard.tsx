export default function ProductCard() {
    return <a href="#" className="group relative block overflow-hidden rounded-md">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1854652%2Fpexels-photo-1854652.jpeg%3Fcs%3Dsrgb%26dl%3Dslice-cake-1854652.jpg%26fm%3Djpg&f=1&nofb=1&ipt=676a61738f144af3b3701c441aeaad2dd3f3ecfd41ceefa6fda896d1caf30318&ipo=images" alt=""
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"/>
            
        <div className="relative border border-gray-100 bg-white p-6">
            <p className="text-gray-700">
                $49.99
                <span className="text-gray-400 line-through">$80</span>
            </p>

            <h3 className="mt-1.5 text-lg font-medium text-gray-900">Wireless Headphones</h3>

            <p className="mt-1.5 line-clamp-3 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure obcaecati pariatur.
                Officiis qui, enim cupiditate aliquam corporis iste.
            </p>

            {/* <form className="mt-4 flex gap-4">
                <button
                    type="button"
                    className="block w-full rounded bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                >
                    Buy Now
                </button>
            </form> */}
        </div>
    </a>
}