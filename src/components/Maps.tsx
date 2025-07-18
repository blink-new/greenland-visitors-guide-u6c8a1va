import { Download, Map, Navigation, Compass } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

const Maps = () => {
  const mapResources = [
    {
      id: 1,
      title: "Complete Greenland Travel Map",
      description: "Comprehensive map showing all major towns, attractions, and transportation routes across Greenland.",
      image: "https://images.unsplash.com/photo-1597149962419-0d900ac2e4c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "PDF Download",
      size: "2.3 MB",
      features: ["All Major Cities", "Transportation Routes", "Attractions", "Topography"]
    },
    {
      id: 2,
      title: "West Greenland Detailed Map",
      description: "Detailed map of West Greenland including Nuuk, Ilulissat, Sisimiut, and surrounding areas.",
      image: "https://images.unsplash.com/photo-1597149962419-0d900ac2e4c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "PDF Download",
      size: "1.8 MB",
      features: ["Detailed West Coast", "Hiking Trails", "Accommodations", "Dining"]
    },
    {
      id: 3,
      title: "East Greenland Explorer Map",
      description: "Specialized map for East Greenland adventures including Tasiilaq and Scoresby Sound.",
      image: "https://images.unsplash.com/photo-1597149962419-0d900ac2e4c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "PDF Download",
      size: "1.5 MB",
      features: ["Remote Settlements", "Wildlife Areas", "Fjord Systems", "Adventure Routes"]
    },
    {
      id: 4,
      title: "Ilulissat Icefjord Map",
      description: "Detailed map of the UNESCO World Heritage Ilulissat Icefjord area with hiking trails.",
      image: "https://images.unsplash.com/photo-1597149962419-0d900ac2e4c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "PDF Download",
      size: "1.2 MB",
      features: ["UNESCO Site", "Hiking Trails", "Viewpoints", "Safety Information"]
    }
  ]

  const interactiveFeatures = [
    {
      icon: Navigation,
      title: "GPS Coordinates",
      description: "All locations include precise GPS coordinates for navigation"
    },
    {
      icon: Compass,
      title: "Offline Access",
      description: "Download maps for offline use during your Arctic adventure"
    },
    {
      icon: Map,
      title: "Detailed Legends",
      description: "Comprehensive legends explaining all symbols and markings"
    }
  ]

  const handleDownload = (mapTitle: string) => {
    // In a real implementation, this would trigger an actual PDF download
    alert(`Downloading ${mapTitle}... (This is a demo - actual PDF download would start here)`)
  }

  return (
    <section id="maps" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interactive & Downloadable Maps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate Greenland with confidence using our detailed maps. 
            Download offline versions for your Arctic adventure.
          </p>
        </div>

        {/* Interactive Map Preview */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-xl">
            <div className="relative h-96 bg-gradient-to-br from-blue-100 to-cyan-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Map className="h-24 w-24 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Greenland Map</h3>
                  <p className="text-gray-600 mb-4">Click and explore key locations across Greenland</p>
                  <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                    Launch Interactive Map
                  </Button>
                </div>
              </div>
              
              {/* Sample location markers */}
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse cursor-pointer" title="Nuuk"></div>
              <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-pulse cursor-pointer" title="Ilulissat"></div>
              <div className="absolute top-2/5 left-1/5 w-4 h-4 bg-red-500 rounded-full animate-pulse cursor-pointer" title="Sisimiut"></div>
              <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse cursor-pointer" title="Tasiilaq"></div>
            </div>
          </Card>
        </div>

        {/* Downloadable Maps */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Downloadable PDF Maps</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mapResources.map((map) => (
              <Card key={map.id} className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={map.image} 
                    alt={map.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary-600 text-white">
                      {map.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-sm font-medium">{map.size}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {map.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {map.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {map.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-accent-600 hover:bg-accent-700 text-white"
                    onClick={() => handleDownload(map.title)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF Map
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Features */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Map Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interactiveFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Tips */}
        <div className="mt-16 bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Navigation Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-3">Before You Go</h4>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Download offline maps to your device</li>
                <li>• Carry a physical compass as backup</li>
                <li>• Share your route with local guides</li>
                <li>• Check weather conditions regularly</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-3">Safety First</h4>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Never travel alone in remote areas</li>
                <li>• Carry emergency communication devices</li>
                <li>• Inform others of your planned route</li>
                <li>• Be prepared for rapid weather changes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Maps