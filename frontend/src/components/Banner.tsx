import { Clock, Heart, RefreshCw } from "lucide-react";

export default function Banner(){

    return <div className="relative mx-5 md:mx-20 rounded-xl mb-10 h-72 overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img 
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkj1bcdn.b-cdn.net%2Fmedia%2F81142%2Fwheat.jpg&f=1&nofb=1&ipt=fabd7f17e7f651f34915136754f9b9842af58021e5a332d991fd16d8dd426719&ipo=images" 
        alt="Bakery background" 
        className="w-full h-full object-cover transform scale-x-[-1]"
      />
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r opacity-50 from-amber-900/90 to-amber-800/80"></div>
    </div>

    {/* Content */}
    <div className="relative h-full md:me-20 flex items-center justify-end pr-12">
      <div className="space-y-6">
        <div className="flex items-center space-x-4 text-white">
          <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/20">
            <RefreshCw className="w-6 h-6" />
          </div>
          <span className="text-lg font-medium tracking-wider">FRESH INGREDIENTS</span>
        </div>

        <div className="flex items-center space-x-4 text-white">
          <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/20">
            <Heart className="w-6 h-6" />
          </div>
          <span className="text-lg font-medium tracking-wider">BAKED WITH LOVE</span>
        </div>

        <div className="flex items-center space-x-4 text-white">
          <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/20">
            <Clock className="w-6 h-6" />
          </div>
          <span className="text-lg font-medium tracking-wider">ON TIME DELIVERY</span>
        </div>
      </div>
    </div>

    {/* Additional texture overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
  </div>
}