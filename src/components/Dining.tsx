import { Utensils, MapPin, DollarSign, Star } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import greenlandLandscape from '../assets/greenland/greenland-landscape.jpg'
import ship from '../assets/greenland/ship.jpg'
import iceberg from '../assets/greenland/iceberg.jpg'
import mountains from '../assets/greenland/mountains.jpg'

const Dining = () => {
  const restaurants = [
    {
      id: 1,
      name: "Sarfalik Restaurant",
      description: "Fine dining featuring modern interpretations of traditional Greenlandic cuisine with locally sourced ingredients.",
      image: greenlandLandscape,
      location: "Nuuk",
      cuisine: "Greenlandic Fine Dining",
      priceRange: "$$$",
      rating: 4.8,
      specialties: ["Reindeer", "Arctic Char", "Seal"]
    },
    {
      id: 2,
      name: "Hotel Arctic Restaurant",
      description: "Panoramic views of Disko Bay while enjoying fresh seafood and international cuisine.",
      image: iceberg,
      location: "Ilulissat",
      cuisine: "International & Seafood",
      priceRange: "$$$",
      rating: 4.6,
      specialties: ["Halibut", "King Crab", "Musk Ox"]
    },
    {
      id: 3,
      name: "Café Iluliaq",
      description: "Cozy café serving hearty soups, fresh pastries, and the best coffee in Ilulissat.",
      image: ship,
      location: "Ilulissat",
      cuisine: "Café & Light Meals",
      priceRange: "$$",
      rating: 4.5,
      specialties: ["Coffee", "Pastries", "Soup"]
    },
    {
      id: 4,
      name: "Katuaq Cultural Centre Café",
      description: "Cultural hub café offering light meals and traditional Greenlandic snacks.",
      image: mountains,
      location: "Nuuk",
      cuisine: "Traditional & Modern",
      priceRange: "$$",
      rating: 4.3,
      specialties: ["Traditional Bread", "Fish Cakes", "Local Berries"]
    },
    {
      id: 5,
      name: "Sisimiut Museum Café",
      description: "Museum café serving traditional Greenlandic dishes and locally caught fish.",
      image: greenlandLandscape,
      location: "Sisimiut",
      cuisine: "Traditional Greenlandic",
      priceRange: "$$",
      rating: 4.2,
      specialties: ["Arctic Char", "Traditional Stew", "Dried Fish"]
    },
    {
      id: 6,
      name: "Kangerlussuaq Airport Restaurant",
      description: "Convenient dining option for travelers with international and local dishes.",
      image: mountains,
      location: "Kangerlussuaq",
      cuisine: "International",
      priceRange: "$$",
      rating: 4.0,
      specialties: ["Burgers", "Pasta", "Local Fish"]
    }
  ]

  const getPriceColor = (price: string) => {
    const colors = {
      '$': 'bg-green-100 text-green-800',
      '$$': 'bg-yellow-100 text-yellow-800',
      '$$$': 'bg-red-100 text-red-800'
    }
    return colors[price as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <section id="dining" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dining in Greenland
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience unique Arctic cuisine featuring fresh seafood, traditional Inuit dishes, 
            and modern interpretations of local ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getPriceColor(restaurant.priceRange)}>
                    {restaurant.priceRange}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{restaurant.rating}</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {restaurant.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {restaurant.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{restaurant.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Utensils className="h-4 w-4" />
                    <span>{restaurant.cuisine}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dining Tips */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Dining Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Local Ingredients</h4>
              <p className="text-gray-600 text-sm">Try traditional foods like seal, whale, reindeer, and Arctic char for an authentic experience.</p>
            </div>
            <div className="text-center">
              <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-accent-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Pricing</h4>
              <p className="text-gray-600 text-sm">Expect higher prices due to remote location. Most restaurants accept credit cards.</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Reservations</h4>
              <p className="text-gray-600 text-sm">Book ahead, especially in summer. Many restaurants have limited seating.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dining