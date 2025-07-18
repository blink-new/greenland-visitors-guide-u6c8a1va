import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Star, Phone, Globe, Wifi, Car, Coffee, Users, ExternalLink, Bed, Bath, Home, Building, Calendar, Clock, CreditCard, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { useLanguage } from '../hooks/useLanguage';

const AccommodationDetailPage = () => {
  const { id } = useParams();
  const { t } = useLanguage();

  // Real accommodation data matching the AccommodationsPage
  const accommodationsData = {
    'hans-egede-nuuk': {
      id: 'hans-egede-nuuk',
      name: 'Hotel Hans Egede',
      type: 'Luxury Hotel',
      location: 'Nuuk, Greenland',
      description: 'Hotel Hans Egede stands as Nuuk\'s premier hotel, offering unparalleled comfort in the heart of Greenland\'s capital. This historic establishment combines traditional Greenlandic hospitality with modern luxury, featuring three exceptional restaurants including the renowned Hereford Beefstouw. With stunning sea and mountain views, the hotel serves as the perfect base for exploring Nuuk\'s cultural attractions, museums, and the beautiful Arctic landscape.',
      images: [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/240909481.jpg?k=9c41515019f1fb30c2b79f2d280685d0e40d192ea8951537f169dcbf11c2f744&o=',
        'https://cf.bstatic.com/xdata/images/hotel/max500/692142981.jpg?k=90be860236431f1a581898bd7620f33b28baa4284ea9b418e041cb0fd5c0fa90&o=',
        'https://cf.bstatic.com/xdata/images/hotel/max500/682981494.jpg?k=2919446515ae621859a09b1a8e9c99bb0dd7c138cf7e667fc89be3831edc2253&o='
      ],
      rating: 8.0,
      reviewCount: 90,
      bookingUrl: 'https://www.booking.com/hotel/gl/hans-egede-nuuk.en.html',
      contact: {
        phone: '+299 32 42 22',
        address: 'Aqqusinersuaq 1-5, 3900 Nuuk',
        email: 'info@hoteleg.gl'
      },
      amenities: [
        'Free WiFi', 'Restaurant', 'Bar', 'Fitness Center', 'Airport Shuttle', 
        'Free Parking', 'Room Service', '24-hour Front Desk', 'Business Center', 
        'Meeting Facilities', 'Laundry Service', 'Elevator'
      ],
      features: [
        'City Center Location', 'Sea Views', 'Mountain Views', 'Historic Building', 
        '3 Restaurants', 'Business Center', 'Conference Facilities', 'Spa Services'
      ],
      roomTypes: [
        'Double Room', 'Twin Room', 'King Suite', 'Superior Double Room', 
        'Junior Suite', 'Family Suite', 'One-Bedroom Suite'
      ],
      policies: {
        checkIn: '15:00 - 23:30',
        checkOut: '01:00 - 10:00',
        cancellation: 'Free cancellation up to 24 hours before arrival',
        pets: 'Pets not allowed',
        smoking: 'Non-smoking property',
        children: 'Children of all ages welcome',
        ageRestriction: 'Minimum age for check-in: 18'
      },
      nearbyAttractions: [
        { name: 'Nuuk Art Museum', distance: '0.2 km', type: 'Museum' },
        { name: 'Nuuk Cathedral', distance: '0.3 km', type: 'Historic Site' },
        { name: 'Katuaq Cultural Centre', distance: '0.5 km', type: 'Cultural Center' },
        { name: 'Nuuk Shopping Center', distance: '0.1 km', type: 'Shopping' },
        { name: 'Nuuk Airport', distance: '4.7 km', type: 'Airport' }
      ],
      priceRange: '$$$'
    },
    'hvide-falk-ilulissat': {
      id: 'hvide-falk-ilulissat',
      name: 'Hotel Hvide Falk',
      type: 'Boutique Hotel',
      location: 'Ilulissat, Greenland',
      description: 'Hotel Hvide Falk offers one of the most spectacular locations in Ilulissat, with breathtaking views of Disko Bay and the famous icebergs. This modern boutique hotel provides comfortable accommodations with a focus on local cuisine and exceptional service. The hotel\'s restaurant serves French and international cuisine with a Greenlandic twist, making it a culinary destination in its own right. Perfect for exploring the UNESCO World Heritage Icefjord.',
      images: [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/446239393.jpg?k=6764a6181d02b86a4edec712c807331f4230e1f7848397de5b487085b6dc9435&o=',
        'https://cf.bstatic.com/xdata/images/hotel/max500/446238704.jpg?k=6b7f2b9c392fc05dc687e773a33dda51e2264b7607128960b9d2368d2275385c&o=',
        'https://cf.bstatic.com/xdata/images/hotel/max500/486530892.jpg?k=02bffae2b2a74d5600cde8faa47d21d006baa6f81e30ace91d46a6b0e15d1929&o='
      ],
      rating: 8.8,
      reviewCount: 139,
      bookingUrl: 'https://www.booking.com/hotel/gl/hvide-falk-ilulissat.en.html',
      contact: {
        phone: '+299 94 43 43',
        address: 'Aqqusinersuaq 4, 3952 Ilulissat',
        email: 'info@hvidefalk.gl'
      },
      amenities: [
        'Free WiFi', 'Restaurant', 'Bar', 'Free Airport Shuttle', 'Free Parking', 
        'Family Rooms', 'Tea/Coffee Maker', 'Terrace', 'Balconies', 'Shared Lounge'
      ],
      features: [
        'Sea Views', 'Iceberg Views', 'UNESCO Site Access', 'Modern Rooms', 
        'French Cuisine', 'Balconies', 'Boutique Style', 'Local Specialties'
      ],
      roomTypes: [
        'Double Room with Sea View', 'Double Room with City View', 
        'Studio Apartment with Sea View', 'One-Bedroom Apartment'
      ],
      policies: {
        checkIn: '14:00 - 21:00',
        checkOut: '06:00 - 10:00',
        cancellation: 'Free cancellation up to 48 hours before arrival',
        pets: 'Pets not allowed',
        smoking: 'Designated smoking areas',
        children: 'Children of all ages welcome',
        ageRestriction: 'Minimum age for check-in: 18'
      },
      nearbyAttractions: [
        { name: 'Ilulissat Icefjord', distance: '2.0 km', type: 'UNESCO Site' },
        { name: 'Sermermiut Settlement', distance: '3.0 km', type: 'Historical Site' },
        { name: 'Ilulissat Museum', distance: '1.0 km', type: 'Museum' },
        { name: 'Disko Bay', distance: '0.5 km', type: 'Natural Wonder' },
        { name: 'Ilulissat Airport', distance: '3.9 km', type: 'Airport' }
      ],
      priceRange: '$$$'
    },
    'atcon-business-apartments': {
      id: 'atcon-business-apartments',
      name: 'ATCON Business Apartments',
      type: 'Serviced Apartment',
      location: 'Nuuk, Greenland',
      description: 'ATCON Business Apartments offers spacious, fully-equipped apartments perfect for extended stays and business travelers. Each apartment features a full kitchen, washing machine, and private balcony with stunning sea and mountain views. The modern amenities and self-catering facilities make it ideal for those seeking independence and comfort during their stay in Nuuk.',
      images: [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/610179164.jpg?k=9ddf2e3bbe06e1b772c9112c8a2188c46dabc3032c3311d77ab0e511d5ffb83e&o=',
        'https://cf.bstatic.com/xdata/images/hotel/max500/615144832.jpg?k=5a48fb7a0e8067b1667d6c00ceb861495afcdab919887f2fbcb2d9cbb057cafe&o=',
        'https://cf.bstatic.com/xdata/images/hotel/max300/639184662.jpg?k=180afce6b7ada0bd89540ecf5817a5e78e2f56c09e5f62782a084b3e55462c7e&o='
      ],
      rating: 9.0,
      reviewCount: 1,
      bookingUrl: 'https://www.booking.com/hotel/gl/kulukis-business-apartments.en.html',
      contact: {
        phone: '+299 32 11 00',
        address: 'Business District, 3900 Nuuk',
        email: 'info@atcon.gl'
      },
      amenities: [
        'Free WiFi', 'Full Kitchen', 'Washing Machine', 'Free Parking', 
        'Balcony', 'Dishwasher', 'Coffee Machine', 'Private Entrance', 
        'Dining Area', 'Flat-screen TV'
      ],
      features: [
        'Sea Views', 'Mountain Views', 'Self-Catering', 'Business Friendly', 
        'Long Stay Suitable', 'Private Apartment', 'Modern Furnishing', 'Spacious Layout'
      ],
      roomTypes: ['One-Bedroom Apartment'],
      policies: {
        checkIn: '16:00 - 23:00',
        checkOut: '06:00 - 10:00',
        cancellation: 'Free cancellation up to 24 hours before arrival',
        pets: 'Pets not allowed',
        smoking: 'Non-smoking property',
        children: 'Children not allowed',
        ageRestriction: 'No age restriction for check-in'
      },
      nearbyAttractions: [
        { name: 'Nuuk Business District', distance: '0.1 km', type: 'Business Area' },
        { name: 'Nuuk Harbor', distance: '1.5 km', type: 'Harbor' },
        { name: 'Nuuk City Center', distance: '2.0 km', type: 'City Center' },
        { name: 'Nuuk Airport', distance: '3.7 km', type: 'Airport' }
      ],
      priceRange: '$$'
    }
  };

  const accommodation = accommodationsData[id as keyof typeof accommodationsData];

  if (!accommodation) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Accommodation Not Found</h1>
          <p className="text-gray-600 mb-6">The accommodation you're looking for doesn't exist.</p>
          <Link to="/accommodations">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Accommodations
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getAmenityIcon = (amenity: string) => {
    const amenityLower = amenity.toLowerCase();
    if (amenityLower.includes('wifi')) return <Wifi className="w-4 h-4 text-blue-600" />;
    if (amenityLower.includes('restaurant') || amenityLower.includes('bar') || amenityLower.includes('kitchen') || amenityLower.includes('coffee')) return <Coffee className="w-4 h-4 text-orange-600" />;
    if (amenityLower.includes('parking') || amenityLower.includes('shuttle')) return <Car className="w-4 h-4 text-green-600" />;
    if (amenityLower.includes('room') || amenityLower.includes('bed')) return <Bed className="w-4 h-4 text-purple-600" />;
    if (amenityLower.includes('bath') || amenityLower.includes('shower')) return <Bath className="w-4 h-4 text-blue-500" />;
    return <Users className="w-4 h-4 text-gray-600" />;
  };

  const getPriceColor = (priceRange: string) => {
    switch (priceRange) {
      case '$': return 'bg-green-100 text-green-800';
      case '$$': return 'bg-yellow-100 text-yellow-800';
      case '$$$': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/accommodations">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Accommodations
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
                src={accommodation.images[0]}
                alt={accommodation.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 space-y-2">
                <Badge variant="secondary" className="bg-white/90 text-gray-900">
                  <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                  {accommodation.rating}
                </Badge>
                <Badge className={getPriceColor(accommodation.priceRange)}>
                  {accommodation.priceRange}
                </Badge>
              </div>
            </div>

            {/* Hotel Info */}
            <Card>
              <CardHeader>
                <div>
                  <CardTitle className="text-3xl mb-2">{accommodation.name}</CardTitle>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center">
                      <Badge variant="outline">{accommodation.type}</Badge>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {accommodation.location}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{accommodation.rating}</span>
                      <span className="text-sm ml-1">({accommodation.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {accommodation.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {accommodation.features.map((feature, index) => (
                        <Badge key={index} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Amenities</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {accommodation.amenities.slice(0, 8).map((amenity, index) => (
                        <div key={index} className="flex items-center text-sm">
                          {getAmenityIcon(amenity)}
                          <span className="ml-2">{amenity}</span>
                        </div>
                      ))}
                    </div>
                    {accommodation.amenities.length > 8 && (
                      <p className="text-sm text-gray-500 mt-2">
                        +{accommodation.amenities.length - 8} more amenities
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Room Types */}
            <Card>
              <CardHeader>
                <CardTitle>Available Room Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {accommodation.roomTypes.map((roomType, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Bed className="w-5 h-5 text-gray-600 mr-3" />
                      <span className="font-medium">{roomType}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Images */}
            {accommodation.images.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {accommodation.images.slice(1).map((image, index) => (
                  <div key={index} className="h-48 rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${accommodation.name} ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card>
              <CardHeader>
                <CardTitle>Book Your Stay</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a 
                  href={accommodation.bookingUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-red-600 hover:bg-red-700" size="lg">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Book on Booking.com
                  </Button>
                </a>
                <div className="text-center text-sm text-gray-500">
                  Best price guaranteed • Free cancellation available
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-gray-500" />
                  <span>{accommodation.contact.phone}</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-3 text-gray-500 mt-1" />
                  <span>{accommodation.contact.address}</span>
                </div>
                {accommodation.contact.email && (
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-3 text-gray-500" />
                    <span>{accommodation.contact.email}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Policies */}
            <Card>
              <CardHeader>
                <CardTitle>Hotel Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-3 text-gray-500" />
                    <div>
                      <span className="font-medium">Check-in:</span>
                      <span className="ml-2">{accommodation.policies.checkIn}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-3 text-gray-500" />
                    <div>
                      <span className="font-medium">Check-out:</span>
                      <span className="ml-2">{accommodation.policies.checkOut}</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start">
                    <CreditCard className="w-4 h-4 mr-3 text-gray-500 mt-1" />
                    <div>
                      <span className="font-medium">Cancellation:</span>
                      <p className="text-sm text-gray-600 mt-1">{accommodation.policies.cancellation}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-3 text-gray-500" />
                    <div>
                      <span className="font-medium">Pets:</span>
                      <span className="ml-2 text-sm">{accommodation.policies.pets}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-3 text-gray-500" />
                    <div>
                      <span className="font-medium">Smoking:</span>
                      <span className="ml-2 text-sm">{accommodation.policies.smoking}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nearby Attractions */}
            <Card>
              <CardHeader>
                <CardTitle>Nearby Attractions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {accommodation.nearbyAttractions.map((attraction, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-sm">{attraction.name}</div>
                        <div className="text-xs text-gray-500">{attraction.type}</div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {attraction.distance}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationDetailPage;