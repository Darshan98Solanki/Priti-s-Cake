import { Clock, Heart, RefreshCw } from "lucide-react";

export default function Banner(){

    return <div className="relative mx-5 md:mx-20 rounded-xl mb-10 h-72 overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img 
        src="https://s3-alpha-sig.figma.com/img/7930/9acd/b38c49c98c926492398075d4faa6be76?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=im68svBTaBJNwFeNdZEZRCabbhMSeoLmbGaBGUcdUT5l1OZZw5r97E180kBGw0D0gJlK9BBkYXSJLW5PSwJCFqPNqz3FrmPfyY4HwhBLafuWaG-yCqStVmVm9qP5UHbLAseuoqcsWL~qo1YlRqvOdWhqMqBBscGdf~KHCPflQdB~-1LOVbQ8cL85teWqM24cuzhnrYOZf9xL~T5byfZIY3JTJiFrCnbboRSiZ6O6fITsGOeqnTM834GOhi-XoO4MC2N1iVo7yYPzRKnBaelEwqzhheBps5kctNVesQzy0G3ceVCkG2gDzCFOKUYcZ25SCrxpdB29TlO8gllMsOKDoQ__" 
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