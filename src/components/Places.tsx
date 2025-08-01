import { MapPin, Clock, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import greenlandLandscape from '../assets/greenland/greenland-landscape.jpg'
import ship from '../assets/greenland/ship.jpg'
import iceberg from '../assets/greenland/iceberg.jpg'
import mountains from '../assets/greenland/mountains.jpg'

const Places = () => {
  const attractions = [
    {
      id: 1,
      name: "Ilulissat Icefjord",
      description: "UNESCO World Heritage site featuring massive icebergs calving from Sermeq Kujalleq glacier.",
      image: iceberg,
      location: "Ilulissat",
      duration: "Half day",
      rating: 4.9,
      category: "Natural Wonder",
      highlights: ["UNESCO Site", "Glacier Views", "Photography"]
    },
    {
      id: 2,
      name: "Nuuk (Godthåb)",
      description: "Greenland's colorful capital city blending modern Nordic culture with traditional Inuit heritage.",
      image: greenlandLandscape,
      location: "Nuuk",
      duration: "Full day",
      rating: 4.7,
      category: "City",
      highlights: ["Cultural Sites", "Museums", "Local Life"]
    },
    {
      id: 3,
      name: "Scoresby Sound",
      description: "The world's largest fjord system with dramatic landscapes and abundant Arctic wildlife.",
      image: mountains,
      location: "East Greenland",
      duration: "Multi-day",
      rating: 4.8,
      category: "Fjord",
      highlights: ["Wildlife", "Kayaking", "Remote Beauty"]
    },
    {
      id: 4,
      name: "Tasiilaq",
      description: "Traditional East Greenland settlement offering authentic Arctic experiences and dog sledding.",
      image: ship,
      location: "East Greenland",
      duration: "2-3 days",
      rating: 4.6,
      category: "Village",
      highlights: ["Dog Sledding", "Traditional Culture", "Northern Lights"]
    },
    {
      id: 5,
      name: "Kangerlussuaq",
      description: "Gateway to Greenland's ice sheet with opportunities for ice cap excursions and hiking.",
      image: mountains,
      location: "West Greenland",
      duration: "1-2 days",
      rating: 4.5,
      category: "Adventure Base",
      highlights: ["Ice Sheet Access", "Hiking", "Airport Hub"]
    },
    {
      id: 6,
      name: "Sisimiut",
      description: "Greenland's second-largest town with excellent hiking trails and cultural attractions.",
      image: greenlandLandscape,
      location: "West Greenland",
      duration: "1-2 days",
      rating: 4.4,
      category: "Town",
      highlights: ["Hiking Trails", "Local Culture", "Arctic Circle"]
    }
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      'Natural Wonder': 'bg-emerald-100 text-emerald-800',
      'City': 'bg-blue-100 text-blue-800',
      'Fjord': 'bg-cyan-100 text-cyan-800',
      'Village': 'bg-orange-100 text-orange-800',
      'Adventure Base': 'bg-purple-100 text-purple-800',
      'Town': 'bg-indigo-100 text-indigo-800'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <section id="places" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Places to Visit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From UNESCO World Heritage sites to remote Arctic settlements, 
            discover Greenland's most spectacular destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((place) => (
            <Card key={place.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(place.category)}>
                    {place.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{place.rating}</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {place.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {place.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{place.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{place.duration}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {place.highlights.map((highlight, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
                
                <Link to={`/places/${place.id}`}>
                  <Button className="w-full">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Places