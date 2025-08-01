import { ArrowDown, MapPin, Thermometer } from 'lucide-react'
import { Button } from './ui/button'
import greenlandLandscape from '../assets/greenland/greenland-landscape.jpg'

const Hero = () => {
  const scrollToPlaces = () => {
    const element = document.querySelector('#places')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${greenlandLandscape})`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover
            <span className="block text-accent-400">Greenland</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Experience the world's largest island with pristine wilderness, ancient ice sheets, 
            and vibrant Inuit culture in the heart of the Arctic.
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="h-5 w-5 text-accent-400" />
              <span>2.2M km² of wilderness</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Thermometer className="h-5 w-5 text-accent-400" />
              <span>Best time: June - September</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 text-lg font-semibold"
              onClick={scrollToPlaces}
            >
              Explore Places
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold"
              onClick={() => document.querySelector('#accommodations')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Plan Your Stay
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToPlaces}
          className="text-white hover:text-accent-400 transition-colors duration-200"
        >
          <ArrowDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  )
}

export default Hero