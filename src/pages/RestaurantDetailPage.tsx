import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Star, Phone, Globe, Utensils, Wifi, CreditCard } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { useLanguage } from '../hooks/useLanguage';

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { t } = useLanguage();

  // Mock data - in a real app, this would come from an API
  const restaurant = {
    id: 1,
    name: 'Sarfalik Restaurant',
    cuisine: 'Greenlandic Fine Dining',
    location: 'Nuuk, Greenland',
    description: 'Sarfalik Restaurant offers an exceptional fine dining experience featuring traditional Greenlandic ingredients prepared with modern culinary techniques. Located in the heart of Nuuk, we showcase the best of Arctic cuisine with locally sourced seal, reindeer, and fresh Arctic char.',
    images: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.8,
    priceRange: '$$$',
    openHours: {
      monday: '18:00 - 22:00',
      tuesday: '18:00 - 22:00',
      wednesday: '18:00 - 22:00',
      thursday: '18:00 - 22:00',
      friday: '18:00 - 23:00',
      saturday: '18:00 - 23:00',
      sunday: 'Closed'
    },
    contact: {
      phone: '+299 32 83 00',
      website: 'www.sarfalik.gl',
      address: 'Aqqusinersuaq 12, 3900 Nuuk'
    },
    specialties: ['Seal Tartare', 'Arctic Char', 'Reindeer Tenderloin', 'Greenlandic Lamb'],
    features: ['Fine Dining', 'Local Ingredients', 'Wine Pairing', 'Reservations Required'],
    amenities: ['WiFi', 'Credit Cards', 'Wheelchair Accessible', 'Private Dining'],
    menu: [
      {
        category: 'Appetizers',
        items: [
          { name: 'Seal Tartare', price: '185 DKK', description: 'Fresh seal with Arctic herbs and cloudberries' },
          { name: 'Smoked Arctic Char', price: '165 DKK', description: 'House-smoked char with juniper and sea buckthorn' }
        ]
      },
      {
        category: 'Main Courses',
        items: [
          { name: 'Reindeer Tenderloin', price: '285 DKK', description: 'Tender reindeer with root vegetables and lingonberry sauce' },
          { name: 'Greenlandic Lamb', price: '265 DKK', description: 'Slow-cooked lamb with Arctic thyme and wild mushrooms' }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/dining">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('backToList')}
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image */}
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={restaurant.images[0]}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-white/90 text-gray-900">
                  <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                  {restaurant.rating}
                </Badge>
              </div>
            </div>

            {/* Restaurant Info */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-3xl mb-2">{restaurant.name}</CardTitle>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center">
                        <Utensils className="w-4 h-4 mr-1" />
                        {restaurant.cuisine}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {restaurant.location}
                      </div>
                      <Badge variant="outline">{restaurant.priceRange}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {restaurant.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.features.map((feature, index) => (
                        <Badge key={index} variant="outline">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Menu */}
            <Card>
              <CardHeader>
                <CardTitle>Menu Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                {restaurant.menu.map((section, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <h3 className="font-semibold text-lg mb-3">{section.category}</h3>
                    <div className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                          <span className="font-semibold text-primary ml-4">{item.price}</span>
                        </div>
                      ))}
                    </div>
                    {index < restaurant.menu.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Additional Images */}
            <div className="grid grid-cols-2 gap-4">
              {restaurant.images.slice(1).map((image, index) => (
                <div key={index} className="h-48 rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`${restaurant.name} ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-gray-500" />
                  <span>{restaurant.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-3 text-gray-500" />
                  <span>{restaurant.contact.website}</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-3 text-gray-500 mt-1" />
                  <span>{restaurant.contact.address}</span>
                </div>
              </CardContent>
            </Card>

            {/* Opening Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Opening Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(restaurant.openHours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="capitalize font-medium">{day}</span>
                      <span className={hours === 'Closed' ? 'text-red-600' : 'text-gray-700'}>
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {restaurant.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-sm">
                      {amenity === 'WiFi' && <Wifi className="w-4 h-4 mr-2 text-green-600" />}
                      {amenity === 'Credit Cards' && <CreditCard className="w-4 h-4 mr-2 text-blue-600" />}
                      {!['WiFi', 'Credit Cards'].includes(amenity) && (
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2" />
                      )}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full" size="lg">
                Make Reservation
              </Button>
              <Button variant="outline" className="w-full">
                View on Map
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;