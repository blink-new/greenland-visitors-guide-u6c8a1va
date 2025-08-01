import { Bed, MapPin, Star, Wifi, Car, Coffee, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import greenlandLandscape from '../assets/greenland/greenland-landscape.jpg'
import ship from '../assets/greenland/ship.jpg'
import iceberg from '../assets/greenland/iceberg.jpg'
import mountains from '../assets/greenland/mountains.jpg'

const Accommodations = () => {
  const accommodations = [
    {
      id: 1,
      name: "Hotel Icefiord",
      description: "Located on the coastline of Ilulissat with a beautiful view to Kangia Icefjord from every single room. In winter it is possible to enjoy the amazing starry sky and the northern lights from your bed through a sky view window in our deluxe rooms. In the cozy atmosphere of the restaurant, you can enjoy tasty food from fresh local ingredients – still with the amazing view of the icefjord through the big panoramic windows. In summer it is also possible to experience the midnight sun, the view of huge icebergs together with playful whales, from the big terrace of the hotel. Excursions with Disko Line Explorer, such as icefjord cruises, whale safari and fishing trips, all depart from our brand-new gangway right outside the hotel!",
      image: iceberg,
      location: "Ilulissat",
      type: "Hotel",
      rating: 4.7,
      amenities: ["Restaurant", "Icefjord Views", "WiFi", "Terrace", "Tour Desk", "Whale Safari", "Sky View Windows"]
    },
    {
      id: 2,
      name: "Paa & Jannik – Bed & Breakfast",
      description: "Bed & Breakfast Paa and Jannik offer rooms and holiday apartments to let in Ilulissat. Centrally located rooms and apartments with terraces, barbecue and sea view. All the couple's rental accommodation facilities are no smoking, comfortably furnished and are either equipped with or have access to everything you need to make life comfortable: fully furnished kitchens, bathroom facilities and lounges with TVs. If you need a room or a house, Paa & Jannik will be able to help you with authentic Greenlandic hospitality.",
      image: greenlandLandscape,
      location: "Ilulissat",
      type: "Bed & Breakfast",
      rating: 4.5,
      amenities: ["Kitchen", "Sea View", "Terrace", "Barbecue", "WiFi", "TV", "Non-smoking"]
    },
    {
      id: 3,
      name: "Hotel Narsarsuaq",
      description: "A modern hotel with 80 rooms and about 180 beds. There is a choice of single rooms, double rooms, family rooms and suites. Hotel Narsarsuaq has a restaurant with an international menu specialising in Greenlandic cuisine, and a cafeteria which serves a buffet breakfast, lunch and dinner. In the summer there are direct flights from Denmark and Iceland to Narsarsuaq, which provides easy access to the many towns, amenities and historic sites that Southern Greenland has to offer – not to mention the peaceful and spectacular surroundings which offer ample opportunities for hiking. The ice cap is only a short hike away.",
      image: mountains,
      location: "Narsarsuaq",
      type: "Hotel",
      rating: 4.3,
      amenities: ["Restaurant", "Cafeteria", "WiFi", "Family Rooms", "Hiking Access", "Ice Cap Tours"]
    },
    {
      id: 4,
      name: "Nuuk Hotel Apartments by HHE",
      description: "15 modern one bedroom apartments fully equipped downtown Nuuk. Fully equipped with bed linen and towels, laundry machine, and free wifi included. Check in at Hotel Hans Egede – HHE. These premium serviced apartments cater to business travelers and extended-stay guests seeking independence and comfort in Nuuk. Each spacious unit features a fully equipped kitchen with modern appliances, separate living and sleeping areas, and contemporary furnishings designed for both work and relaxation.",
      image: ship,
      location: "Nuuk",
      type: "Apartment",
      rating: 4.2,
      amenities: ["Full Kitchen", "WiFi", "Laundry", "Bed Linen", "Downtown Location", "Business Friendly"]
    },
    {
      id: 5,
      name: "Hotel Sisimiut",
      description: "Situated in Greenland's second-largest town just north of the Arctic Circle, this welcoming hotel serves as the perfect gateway to West Greenland's diverse adventures. Sisimiut offers unique year-round activities from dog sledding and cross-country skiing in winter to hiking the famous Arctic Circle Trail in summer. The hotel provides comfortable accommodations with modern amenities while maintaining authentic Greenlandic character. Guests can explore the town's rich cultural heritage including traditional kayak building, local museums, and vibrant arts scene.",
      image: greenlandLandscape,
      location: "Sisimiut",
      type: "Hotel",
      rating: 4.8,
      amenities: ["Restaurant", "WiFi", "Tour Desk", "Dog Sledding", "Arctic Circle Trail", "Cultural Tours"]
    },
    {
      id: 6,
      name: "Hotel Kangerlussuaq",
      description: "Strategically located near Greenland's main international airport, this modern hotel serves as the perfect transit point and adventure base for exploring the Arctic wilderness. The facility offers comfortable accommodations making it ideal for travelers, researchers, and adventure seekers. Guests enjoy easy access to the Greenland Ice Sheet, just 30 kilometers away, and can arrange guided tours to witness the massive ice cap that covers 80% of the island. The hotel organizes excursions including ice sheet walks, Northern Lights viewing, and cultural experiences with local communities.",
      image: mountains,
      location: "Kangerlussuaq",
      type: "Hotel",
      rating: 4.1,
      amenities: ["Restaurant", "WiFi", "Airport Shuttle", "Ice Sheet Tours", "Northern Lights", "Cultural Tours"]
    }
  ]

  const getTypeColor = (type: string) => {
    const colors = {
      'Hotel': 'bg-blue-100 text-blue-800',
      'Guesthouse': 'bg-green-100 text-green-800',
      'Hostel': 'bg-purple-100 text-purple-800',
      'Lodge': 'bg-emerald-100 text-emerald-800'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getAmenityIcon = (amenity: string) => {
    const icons = {
      'WiFi': Wifi,
      'Parking': Car,
      'Restaurant': Coffee,
      'Bar': Coffee,
      'Fitness Center': Bed,
      'Business Center': Bed,
      'Shared Kitchen': Coffee,
      'Laundry': Bed,
      'Common Area': Bed,
      'Common Room': Bed,
      'Airport Shuttle': Car,
      'Tour Desk': MapPin,
      'Cultural Tours': MapPin,
      'Dog Sledding': MapPin,
      'Bike Rental': Car,
      'Glacier Views': Star,
      'Boat Transfer': Car,
      'Hiking Trails': MapPin,
      'Fishing Tours': MapPin
    }
    const IconComponent = icons[amenity as keyof typeof icons] || Bed
    return <IconComponent className="h-4 w-4" />
  }

  return (
    <section id="accommodations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Where to Stay
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From luxury hotels with Arctic views to cozy guesthouses offering authentic experiences, 
            find the perfect accommodation for your Greenland adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((place) => (
            <Card key={place.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getTypeColor(place.type)}>
                    {place.type}
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
                <div className="flex items-center space-x-1 text-sm text-gray-500 mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>{place.location}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Amenities:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {place.amenities.slice(0, 4).map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-2 text-xs text-gray-600">
                        {getAmenityIcon(amenity)}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                  {place.amenities.length > 4 && (
                    <p className="text-xs text-gray-500 mt-2">+{place.amenities.length - 4} more amenities</p>
                  )}
                </div>

                <Button 
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white"
                  onClick={() => window.open('https://www.booking.com/searchresults.html?ss=Greenland', '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Book on Booking.com
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Booking Tips */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Accommodation Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Bed className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Book Early</h4>
              <p className="text-gray-600 text-sm">Accommodation is limited, especially in summer. Book 3-6 months in advance.</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <MapPin className="h-8 w-8 text-accent-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Location Matters</h4>
              <p className="text-gray-600 text-sm">Stay close to attractions or airports. Transportation between towns is limited.</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Star className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Local Experience</h4>
              <p className="text-gray-600 text-sm">Consider guesthouses for authentic cultural experiences and local insights.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accommodations