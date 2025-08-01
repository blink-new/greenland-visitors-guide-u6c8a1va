import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Star, Wifi, Car, Coffee, Users, ExternalLink, Bed, Bath, Home, Building } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useLanguage } from '../hooks/useLanguage';

const AccommodationsPage = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const accommodations = [
    {
      id: 'hotel-icefiord',
      name: 'Hotel Icefiord',
      type: 'hotel',
      location: 'Ilulissat',
      description: 'Hotel Icefiord is located on the coastline of Ilulissat with a beautiful view to Kangia Icefjord from every single room. In winter it is possible to enjoy the amazing starry sky and the northern lights from your bed through a sky view window in our deluxe rooms. In the cozy atmosphere of the restaurant, you can enjoy tasty food from fresh local ingredients – still with the amazing view of the icefjord through the big panoramic windows. Excursions with Disko Line Explorer, such as icefjord cruises, whale safari and fishing trips, all depart from our brand-new gangway right outside the hotel!',
      image: 'https://images.unsplash.com/photo-1710089179014-9cc7a3a2aca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxHcmVlbmxhbmQlMjBob3RlbCUyMGFjY29tbW9kYXRpb24lMjBhcmN0aWMlMjBsb2RnZXxlbnwwfDB8fHwxNzUyNzg0MjUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.2,
      reviewCount: 156,
      bookingUrl: 'https://hotelicefiord.com/',
      amenities: ['Free WiFi', 'Restaurant', 'Icefjord Views', 'Terrace', 'Tour Desk', 'Whale Safari', 'Sky View Windows', 'Gangway Access'],
      features: ['Icefjord Views from Every Room', 'Northern Lights Viewing', 'Midnight Sun', 'Whale Watching', 'Direct Excursion Access', 'Local Cuisine'],
      priceRange: '$$$',
      roomTypes: ['Standard Room', 'Deluxe Room with Sky View', 'Suite with Icefjord View']
    },
    {
      id: 'paa-jannik-bb',
      name: 'Paa & Jannik – Bed & Breakfast',
      type: 'guesthouse',
      location: 'Ilulissat',
      description: 'Bed & Breakfast Paa and Jannik offer rooms and holiday apartments to let. Centrally located rooms and apartments with terraces, barbecue and sea view. All the couple\'s rental accommodation facilities are no smoking, comfortably furnished and are either equipped with or have access to everything you need to make life comfortable: fully furnished kitchens, bathroom facilities and lounges with TVs.',
      image: 'https://images.unsplash.com/photo-1531049552576-2458cd6793fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxHcmVlbmxhbmQlMjBjb2xvcmZ1bCUyMGhvdXNlcyUyMGFyY3RpYyUyMGJ1aWxkaW5nc3xlbnwwfDB8fHwxNzUyNzg0MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 8.5,
      reviewCount: 73,
      bookingUrl: 'https://bb.gl/',
      amenities: ['WiFi', 'Full Kitchen', 'Sea View', 'Terrace', 'Barbecue', 'TV', 'Non-smoking', 'Bathroom Facilities'],
      features: ['Family Run', 'Local Experience', 'Personal Service', 'Authentic Atmosphere', 'Self-Catering', 'Central Location'],
      priceRange: '$$',
      roomTypes: ['Single Room', 'Double Room', 'Holiday Apartment', 'Family Room']
    },
    {
      id: 'hotel-narsarsuaq',
      name: 'Hotel Narsarsuaq',
      type: 'hotel',
      location: 'Narsarsuaq',
      description: 'A modern hotel with 80 rooms and about 180 beds. There is a choice of single rooms, double rooms, family rooms and suites. Hotel Narsarsuaq has a restaurant with an international menu specialising in Greenlandic cuisine, and a cafeteria which serves a buffet breakfast, lunch and dinner. In the summer there are direct flights from Denmark and Iceland to Narsarsuaq, which provides easy access to the many towns, amenities and historic sites that Southern Greenland has to offer. The ice cap is only a short hike away.',
      image: 'https://images.unsplash.com/photo-1573960794616-136220da6e6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwzfHxHcmVlbmxhbmQlMjBjb2xvcmZ1bCUyMGhvdXNlcyUyMGFyY3RpYyUyMGJ1aWxkaW5nc3xlbnwwfDB8fHwxNzUyNzg0MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 8.3,
      reviewCount: 67,
      bookingUrl: 'https://hotelnarsarsuaq.gl/',
      amenities: ['Free WiFi', 'Restaurant', 'Cafeteria', 'Family Rooms', 'Hiking Access', 'Ice Cap Tours', 'Airport Access', 'Buffet Service'],
      features: ['South Greenland Gateway', 'Direct International Flights', 'Ice Cap Access', 'Historic Sites', 'Hiking Opportunities', 'Modern Facilities'],
      priceRange: '$$',
      roomTypes: ['Single Room', 'Double Room', 'Family Room', 'Suite']
    },
    {
      id: 'nuuk-apartments-hhe',
      name: 'Nuuk Hotel Apartments by HHE',
      type: 'apartment',
      location: 'Nuuk',
      description: '15 modern one bedroom apartments fully equipped downtown Nuuk. Fully equipped with bed linen and towels, laundry machine, and free wifi included. Check in at Hotel Hans Egede – HHE. These premium serviced apartments cater to business travelers and extended-stay guests seeking independence and comfort in Nuuk.',
      image: 'https://images.unsplash.com/photo-1654949935785-29cbc0090492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw3fHxHcmVlbmxhbmQlMjBob3RlbCUyMGFjY29tbW9kYXRpb24lMjBhcmN0aWMlMjBsb2RnZXxlbnwwfDB8fHwxNzUyNzg0MjUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 9.0,
      reviewCount: 15,
      bookingUrl: 'https://nuukhotelapartments.gl/',
      amenities: ['Free WiFi', 'Full Kitchen', 'Washing Machine', 'Bed Linen', 'Towels', 'Downtown Location', 'Business Friendly', 'Check-in at Hotel Hans Egede'],
      features: ['Self-Catering', 'Business Friendly', 'Long Stay Suitable', 'Modern Apartments', 'Downtown Location', 'Hotel Services'],
      priceRange: '$$',
      roomTypes: ['One-Bedroom Apartment']
    },
    {
      id: 'hans-egede-nuuk',
      name: 'Hotel Hans Egede',
      type: 'hotel',
      location: 'Nuuk',
      description: 'Named after Greenland\'s colonial founder, this prestigious hotel stands as Nuuk\'s premier accommodation since 1987. Located in the heart of the capital, it offers 169 elegantly appointed rooms with panoramic views of Nuuk Fjord and surrounding mountains. The hotel features three exceptional restaurants, including the acclaimed Hereford Beefstouw serving premium steaks, Sarfalik offering modern Nordic cuisine with Greenlandic ingredients, and Café Esmeralda for casual dining. With its central location near the National Museum, Katuaq Cultural Centre, and government buildings, guests enjoy easy access to Nuuk\'s cultural attractions while experiencing world-class hospitality in the Arctic.',
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/240909481.jpg?k=9c41515019f1fb30c2b79f2d280685d0e40d192ea8951537f169dcbf11c2f744&o=',
      rating: 8.0,
      reviewCount: 90,
      bookingUrl: 'https://www.booking.com/hotel/gl/hans-egede-nuuk.en.html',
      amenities: ['Free WiFi', 'Restaurant', 'Bar', 'Fitness Center', 'Airport Shuttle', 'Free Parking', 'Room Service', '24-hour Front Desk'],
      features: ['City Center Location', 'Sea Views', 'Mountain Views', 'Historic Building', '3 Restaurants', 'Business Center'],
      priceRange: '$$$',
      roomTypes: ['Double Room', 'Twin Room', 'King Suite', 'Superior Double Room', 'Junior Suite', 'Family Suite']
    },
    {
      id: 'hvide-falk-ilulissat',
      name: 'Hotel Hvide Falk',
      type: 'hotel',
      location: 'Ilulissat',
      description: 'Perched on the shores of Disko Bay, Hotel Hvide Falk offers front-row seats to nature\'s greatest ice show. This modern 4-star hotel provides unobstructed views of massive icebergs calving from Sermeq Kujalleq glacier, part of the UNESCO World Heritage Ilulissat Icefjord. The hotel\'s 48 comfortable rooms feature contemporary Scandinavian design with floor-to-ceiling windows showcasing the Arctic seascape. The renowned restaurant serves French-inspired cuisine using local ingredients like Arctic char, musk ox, and foraged herbs. Located just minutes from the Icefjord Centre and hiking trails, guests can witness the midnight sun in summer or Northern Lights in winter from their rooms.',
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/446239393.jpg?k=6764a6181d02b86a4edec712c807331f4230e1f7848397de5b487085b6dc9435&o=',
      rating: 8.8,
      reviewCount: 139,
      bookingUrl: 'https://www.booking.com/hotel/gl/hvide-falk-ilulissat.en.html',
      amenities: ['Free WiFi', 'Restaurant', 'Bar', 'Free Airport Shuttle', 'Free Parking', 'Family Rooms', 'Tea/Coffee Maker', 'Terrace'],
      features: ['Sea Views', 'Iceberg Views', 'UNESCO Site Access', 'Modern Rooms', 'French Cuisine', 'Balconies'],
      priceRange: '$$$',
      roomTypes: ['Double Room with Sea View', 'Double Room with City View', 'Studio Apartment with Sea View', 'One-Bedroom Apartment']
    },
    {
      id: 'atcon-business-apartments',
      name: 'ATCON Business Apartments',
      type: 'apartment',
      location: 'Nuuk',
      description: 'These premium serviced apartments cater to business travelers and extended-stay guests seeking independence and comfort in Nuuk. Each spacious unit features a fully equipped kitchen with modern appliances, separate living and sleeping areas, and private balconies overlooking Nuuk Fjord or the surrounding mountains. The apartments include high-speed internet, washing machines, and contemporary furnishings designed for both work and relaxation. Located in a quiet residential area yet close to downtown, guests enjoy the privacy of home while having access to Nuuk\'s business district, restaurants, and cultural attractions. Ideal for corporate travelers, researchers, or families wanting self-catering flexibility during their Arctic adventure.',
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/610179164.jpg?k=9ddf2e3bbe06e1b772c9112c8a2188c46dabc3032c3311d77ab0e511d5ffb83e&o=',
      rating: 9.0,
      reviewCount: 1,
      bookingUrl: 'https://www.booking.com/hotel/gl/kulukis-business-apartments.en.html',
      amenities: ['Free WiFi', 'Full Kitchen', 'Washing Machine', 'Free Parking', 'Balcony', 'Dishwasher', 'Coffee Machine', 'Private Entrance'],
      features: ['Sea Views', 'Mountain Views', 'Self-Catering', 'Business Friendly', 'Long Stay Suitable', 'Private Apartment'],
      priceRange: '$$',
      roomTypes: ['One-Bedroom Apartment']
    },
    {
      id: 'best-western-ilulissat',
      name: 'Best Western Plus Ilulissat',
      type: 'hotel',
      location: 'Ilulissat',
      description: 'This international-standard hotel brings familiar comfort to the edge of the world, combining global hospitality excellence with authentic Arctic experiences. Located in the heart of Ilulissat, guests enjoy easy access to the UNESCO World Heritage Icefjord while benefiting from reliable amenities and service standards. The hotel features modern rooms with Arctic-inspired décor, many offering spectacular views of Disko Bay\'s floating icebergs. The on-site restaurant showcases Greenlandic cuisine alongside international favorites, while the fitness center and business facilities cater to diverse traveler needs. With its strategic location near the airport, harbor, and Icefjord Centre, it serves as an ideal base for exploring the world\'s most active glacier outside Antarctica.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 8.5,
      reviewCount: 85,
      bookingUrl: 'https://www.booking.com/hotel/gl/best-western-plus-ilulissat.en.html',
      amenities: ['Free WiFi', 'Restaurant', 'Bar', 'Fitness Center', 'Airport Shuttle', 'Room Service', 'Business Center', 'Laundry'],
      features: ['International Standard', 'Icefjord Access', 'Modern Rooms', 'Conference Facilities', 'Arctic Views', 'Tour Desk'],
      priceRange: '$$$',
      roomTypes: ['Standard Room', 'Superior Room', 'Suite']
    },
    {
      id: 'aurora-hut-inuktravel',
      name: 'Aurora Hut by InukTravel',
      type: 'lodge',
      location: 'Kangerlussuaq',
      description: 'Nestled in the pristine wilderness near Kangerlussuaq, this intimate lodge offers an authentic Arctic experience far from light pollution. The cozy wooden huts provide comfortable accommodation while maintaining connection to Greenland\'s raw natural beauty. Each hut features traditional Nordic design with modern heating systems, perfect for viewing the Northern Lights dancing across the star-filled sky. Guests enjoy guided activities including ice fishing, snowshoeing, and cultural experiences with local Inuit guides who share traditional knowledge and stories. The lodge\'s remote location on the edge of the Greenland Ice Sheet provides unparalleled access to pristine wilderness, making it ideal for photographers, nature enthusiasts, and those seeking transformative Arctic solitude.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 8.7,
      reviewCount: 42,
      bookingUrl: 'https://www.booking.com/hotel/gl/aurora-hut-by-inuktravel.en.html',
      amenities: ['WiFi', 'Shared Kitchen', 'Common Area', 'Aurora Viewing', 'Hiking Trails', 'Cultural Activities'],
      features: ['Northern Lights', 'Wilderness Location', 'Authentic Experience', 'Adventure Activities', 'Cozy Atmosphere', 'Local Guides'],
      priceRange: '$$',
      roomTypes: ['Shared Dormitory', 'Private Room']
    },
    {
      id: 'hotel-sisimiut',
      name: 'Hotel Sisimiut',
      type: 'hotel',
      location: 'Sisimiut',
      description: 'Situated in Greenland\'s second-largest town, this welcoming hotel serves as the perfect gateway to West Greenland\'s diverse adventures. Sisimiut, located just north of the Arctic Circle, offers unique year-round activities from dog sledding and cross-country skiing in winter to hiking the Arctic Circle Trail in summer. The hotel provides comfortable accommodations with modern amenities while maintaining authentic Greenlandic character. Guests can explore the town\'s rich cultural heritage, including traditional kayak building, local museums, and vibrant arts scene. The hotel\'s restaurant features locally sourced ingredients including fresh seafood from Davis Strait. With easy access to both wilderness adventures and cultural experiences, it\'s ideal for travelers seeking authentic Arctic immersion.',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 8.2,
      reviewCount: 67,
      bookingUrl: 'https://www.booking.com/hotel/gl/sisimiut.en.html',
      amenities: ['Free WiFi', 'Restaurant', 'Bar', 'Tour Desk', 'Luggage Storage', 'Laundry Service'],
      features: ['Town Center', 'Adventure Base', 'Local Culture', 'Hiking Access', 'Arctic Activities', 'Friendly Staff'],
      priceRange: '$$',
      roomTypes: ['Standard Room', 'Superior Room']
    },
    {
      id: 'nuka-hostel',
      name: 'Nuka Hostel',
      type: 'hostel',
      location: 'Nuuk',
      description: 'This vibrant backpacker haven in Nuuk\'s city center attracts adventurous travelers from around the world seeking affordable Arctic experiences. The hostel features clean dormitories and private rooms with shared kitchen facilities, creating a social atmosphere where guests exchange travel stories and plan joint adventures. Located within walking distance of Nuuk\'s main attractions including the National Museum, Katuaq Cultural Centre, and colorful Old Town, it offers excellent value for budget-conscious explorers. The communal areas foster connections between international travelers, researchers, and local guides, often leading to shared excursions to nearby hiking trails, boat trips, or Northern Lights viewing. With its friendly staff providing insider tips and tour bookings, it\'s the perfect base for authentic, affordable Arctic exploration.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 7.8,
      reviewCount: 156,
      bookingUrl: 'https://www.booking.com/hotel/gl/nuka-hostel.en.html',
      amenities: ['Free WiFi', 'Shared Kitchen', 'Common Room', 'Luggage Storage', 'Laundry Facilities', 'Tour Information'],
      features: ['Budget Friendly', 'Social Atmosphere', 'Backpacker Hub', 'City Center', 'Shared Facilities', 'International Crowd'],
      priceRange: '$',
      roomTypes: ['Shared Dormitory', 'Private Room']
    },
    {
      id: 'igdlo-guesthouse',
      name: 'Igdlo Guesthouse',
      type: 'guesthouse',
      location: 'Ilulissat',
      description: 'This charming family-run guesthouse embodies the warmth of Greenlandic hospitality, offering intimate accommodations where guests become part of the extended family. "Igdlo" means "home" in Greenlandic, perfectly capturing the welcoming atmosphere created by local hosts who share generations of Arctic knowledge. The cozy rooms feature traditional décor mixed with modern comforts, while the shared common areas encourage cultural exchange between visitors and locals. Guests enjoy homemade breakfasts featuring local specialties and receive personalized recommendations for exploring Ilulissat\'s wonders. The hosts, often multilingual locals, provide invaluable insights into Inuit culture, best hiking spots, and optimal times for iceberg viewing. This authentic experience offers genuine connection to Greenlandic life while maintaining comfortable, clean accommodations at excellent value.',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 8.4,
      reviewCount: 73,
      bookingUrl: 'https://www.booking.com/hotel/gl/igdlo-guesthouse.en.html',
      amenities: ['WiFi', 'Shared Kitchen', 'Common Area', 'Tour Booking', 'Local Advice', 'Breakfast Available'],
      features: ['Family Run', 'Local Experience', 'Personal Service', 'Authentic Atmosphere', 'Budget Friendly', 'Cultural Insights'],
      priceRange: '$$',
      roomTypes: ['Single Room', 'Double Room', 'Family Room']
    }
  ];

  const accommodationTypes = [
    { id: 'all', label: 'All Types' },
    { id: 'hotel', label: 'Hotels' },
    { id: 'apartment', label: 'Apartments' },
    { id: 'guesthouse', label: 'Guesthouses' },
    { id: 'hostel', label: 'Hostels' },
    { id: 'lodge', label: 'Lodges' }
  ];

  const filteredAccommodations = accommodations.filter(accommodation => {
    const matchesSearch = accommodation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         accommodation.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         accommodation.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || accommodation.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getAmenityIcon = (amenity: string) => {
    const amenityLower = amenity.toLowerCase();
    if (amenityLower.includes('wifi')) return <Wifi className="w-4 h-4" />;
    if (amenityLower.includes('parking') || amenityLower.includes('shuttle')) return <Car className="w-4 h-4" />;
    if (amenityLower.includes('restaurant') || amenityLower.includes('kitchen') || amenityLower.includes('coffee')) return <Coffee className="w-4 h-4" />;
    if (amenityLower.includes('room') || amenityLower.includes('bed')) return <Bed className="w-4 h-4" />;
    if (amenityLower.includes('bath') || amenityLower.includes('shower')) return <Bath className="w-4 h-4" />;
    return <Users className="w-4 h-4" />;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'hotel': return <Building className="w-4 h-4" />;
      case 'apartment': return <Home className="w-4 h-4" />;
      case 'guesthouse': return <Home className="w-4 h-4" />;
      case 'hostel': return <Bed className="w-4 h-4" />;
      case 'lodge': return <Home className="w-4 h-4" />;
      default: return <Building className="w-4 h-4" />;
    }
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
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Accommodations in Greenland
          </h1>
          <p className="text-xl text-gray-600">
            From luxury hotels to cozy guesthouses - find your perfect stay in the Arctic
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search accommodations by name, location, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {accommodationTypes.map((type) => (
              <Button
                key={type.id}
                variant={selectedType === type.id ? 'default' : 'outline'}
                onClick={() => setSelectedType(type.id)}
                className="rounded-full"
              >
                {type.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredAccommodations.length} of {accommodations.length} accommodations
            {selectedType !== 'all' && ` in ${accommodationTypes.find(t => t.id === selectedType)?.label}`}
          </p>
        </div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAccommodations.map((accommodation) => (
            <Card key={accommodation.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-48">
                <img
                  src={accommodation.image}
                  alt={accommodation.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900 capitalize flex items-center">
                    {getTypeIcon(accommodation.type)}
                    <span className="ml-1">{accommodation.type}</span>
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
                  {accommodation.name}
                </CardTitle>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {accommodation.location}
                  </div>
                  <div className="text-xs">
                    {accommodation.reviewCount} reviews
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {accommodation.description.length > 150 
                    ? `${accommodation.description.substring(0, 150)}...` 
                    : accommodation.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-sm text-gray-900 mb-2">Top Amenities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {accommodation.amenities.slice(0, 4).map((amenity, index) => (
                      <div key={index} className="flex items-center text-xs bg-gray-100 rounded-full px-2 py-1">
                        {getAmenityIcon(amenity)}
                        <span className="ml-1">{amenity}</span>
                      </div>
                    ))}
                    {accommodation.amenities.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{accommodation.amenities.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-sm text-gray-900 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {accommodation.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {accommodation.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{accommodation.features.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Link to={`/accommodations/${accommodation.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </Link>
                  <a 
                    href={accommodation.bookingUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Book Now
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAccommodations.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Bed className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No accommodations found</h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or browse all accommodations.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedType('all');
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}

        {/* Booking Tips */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Booking Tips for Greenland</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Bed className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Book Early</h4>
              <p className="text-gray-600 text-sm">
                Accommodation is limited, especially in summer. Book 3-6 months in advance for best availability.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <MapPin className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Location Matters</h4>
              <p className="text-gray-600 text-sm">
                Stay close to attractions or airports. Transportation between towns is limited and weather-dependent.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Star className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Local Experience</h4>
              <p className="text-gray-600 text-sm">
                Consider guesthouses and local accommodations for authentic cultural experiences and insider tips.
              </p>
            </div>
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="mt-12 bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Destinations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Nuuk', 'Ilulissat', 'Sisimiut', 'Kangerlussuaq', 'Narsarsuaq'].map((city) => {
              const cityCount = accommodations.filter(acc => acc.location === city).length;
              return (
                <div key={city} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                     onClick={() => setSearchTerm(city)}>
                  <h4 className="font-semibold text-gray-900">{city}</h4>
                  <p className="text-sm text-gray-600">{cityCount} accommodations</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationsPage;