import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Star, Camera, Info, Calendar, Users, Thermometer, Wind } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { useLanguage } from '../hooks/useLanguage';
import greenlandLandscape from '../assets/greenland/greenland-landscape.jpg';
import ship from '../assets/greenland/ship.jpg';
import iceberg from '../assets/greenland/iceberg.jpg';
import mountains from '../assets/greenland/mountains.jpg';

const PlaceDetailPage = () => {
  const { id } = useParams();
  const { t } = useLanguage();

  const placesData = {
    '1': {
      id: 1,
      name: 'Ilulissat Icefjord',
      category: 'Natural Wonder',
      location: 'Ilulissat, West Greenland',
      description: 'UNESCO World Heritage site featuring massive icebergs calving from Sermeq Kujalleq glacier.',
      longDescription: 'The Ilulissat Icefjord is where the Sermeq Kujalleq glacier meets the sea, producing some of the largest icebergs in the Northern Hemisphere. This UNESCO World Heritage site offers visitors a chance to witness the raw power of nature as massive ice formations break away from the glacier and drift into Disko Bay. The area is not only spectacular for its natural beauty but also scientifically important for understanding climate change and glacial dynamics.',
      image: iceberg,
      gallery: [iceberg, mountains, greenlandLandscape],
      rating: 4.9,
      duration: '4-6 hours',
      bestTime: 'June to September',
      difficulty: 'Easy to Moderate',
      highlights: ['UNESCO World Heritage Site', 'Massive Icebergs', 'Glacier Views', 'Photography Paradise', 'Boat Tours Available'],
      activities: [
        'Boat tours among icebergs',
        'Helicopter flights over the glacier',
        'Photography workshops',
        'Guided hiking trails',
        'Evening iceberg watching'
      ],
      practicalInfo: {
        entrance: 'Free access to viewpoints',
        parking: 'Available in Ilulissat town',
        facilities: 'Visitor center, restrooms, café',
        accessibility: 'Wheelchair accessible viewpoints available'
      },
      weather: {
        summer: '5-15°C, long daylight hours',
        winter: '-10 to -25°C, Northern Lights possible'
      },
      howToGet: 'Fly to Ilulissat Airport (JAV) from Kangerlussuaq or Nuuk. The icefjord is a 2km walk from town center.',
      tips: [
        'Dress warmly even in summer',
        'Bring waterproof clothing for boat tours',
        'Best photography light is during golden hour',
        'Book helicopter tours in advance',
        'Respect safety barriers and guidelines'
      ]
    },
    '2': {
      id: 2,
      name: 'Nuuk (Godthåb)',
      category: 'City',
      location: 'Nuuk, West Greenland',
      description: 'Greenland\'s colorful capital city blending modern Nordic culture with traditional Inuit heritage.',
      longDescription: 'Nuuk, Greenland\'s capital and largest city, is a vibrant blend of modern Scandinavian architecture and traditional Inuit culture. Home to about 18,000 residents, the city offers excellent museums, cultural sites, and stunning natural surroundings. The colorful houses against the backdrop of mountains and fjords create a uniquely Arctic urban experience.',
      image: greenlandLandscape,
      gallery: [greenlandLandscape, ship, mountains],
      rating: 4.7,
      duration: 'Full day',
      bestTime: 'Year-round',
      difficulty: 'Easy',
      highlights: ['National Museum', 'Colorful Architecture', 'Cultural Center', 'Modern Nordic Design', 'Inuit Heritage'],
      activities: [
        'Visit the National Museum of Greenland',
        'Explore the old colonial harbor',
        'Walk through the colorful Nuuk neighborhoods',
        'Visit Katuaq Cultural Center',
        'Hiking in nearby mountains',
        'Shopping for local crafts'
      ],
      practicalInfo: {
        entrance: 'City access free, museum fees apply',
        parking: 'Street parking and paid lots available',
        facilities: 'Full city amenities, restaurants, hotels',
        accessibility: 'Most attractions wheelchair accessible'
      },
      weather: {
        summer: '5-15°C, mild and pleasant',
        winter: '-5 to -15°C, Northern Lights season'
      },
      howToGet: 'Fly to Nuuk Airport (GOH) from Copenhagen or Kangerlussuaq. City center is 4km from airport.',
      tips: [
        'Visit the National Museum first for context',
        'Try local seafood at restaurants',
        'Walk the harbor area for best photos',
        'Check cultural center event schedule',
        'Bring layers for changing weather'
      ]
    },
    '3': {
      id: 3,
      name: 'Scoresby Sound',
      category: 'Fjord',
      location: 'East Greenland',
      description: 'The world\'s largest fjord system with dramatic landscapes and abundant Arctic wildlife.',
      longDescription: 'Scoresby Sound is the world\'s largest fjord system, stretching over 350 kilometers inland from the Greenland Sea. This remote wilderness area offers some of the most dramatic Arctic landscapes on Earth, with towering mountains, massive glaciers, and pristine wilderness. The fjord system is home to diverse Arctic wildlife including seals, whales, Arctic foxes, and numerous seabird species.',
      image: mountains,
      gallery: [mountains, iceberg, ship],
      rating: 4.8,
      duration: 'Multi-day expedition',
      bestTime: 'July to September',
      difficulty: 'Moderate to Challenging',
      highlights: ['World\'s Largest Fjord', 'Arctic Wildlife', 'Pristine Wilderness', 'Dramatic Landscapes', 'Expedition Cruising'],
      activities: [
        'Expedition cruise through the fjord',
        'Zodiac boat excursions',
        'Wildlife watching and photography',
        'Hiking on remote shores',
        'Visiting abandoned settlements',
        'Kayaking in protected bays'
      ],
      practicalInfo: {
        entrance: 'Accessible only by expedition cruise',
        parking: 'N/A - cruise ship access only',
        facilities: 'Limited - expedition ship facilities only',
        accessibility: 'Challenging terrain, good fitness required'
      },
      weather: {
        summer: '0-10°C, can be windy and changeable',
        winter: 'Inaccessible due to sea ice'
      },
      howToGet: 'Join an expedition cruise from Iceland or Norway. Some flights to Constable Point available.',
      tips: [
        'Book expedition cruise well in advance',
        'Pack warm, waterproof clothing',
        'Bring binoculars for wildlife viewing',
        'Be prepared for rough seas',
        'Respect wildlife viewing distances'
      ]
    },
    '4': {
      id: 4,
      name: 'Tasiilaq',
      category: 'Village',
      location: 'East Greenland',
      description: 'Traditional East Greenland settlement offering authentic Arctic experiences and dog sledding.',
      longDescription: 'Tasiilaq is the largest settlement in East Greenland, home to about 2,000 people who maintain traditional Inuit ways of life alongside modern conveniences. The town offers visitors authentic Arctic experiences including dog sledding, traditional hunting demonstrations, and insights into Inuit culture. Surrounded by dramatic mountains and accessible by helicopter or boat, Tasiilaq provides a genuine glimpse into life in the Arctic.',
      image: ship,
      gallery: [ship, mountains, greenlandLandscape],
      rating: 4.6,
      duration: '2-3 days',
      bestTime: 'March-May (dog sledding), June-September (hiking)',
      difficulty: 'Moderate',
      highlights: ['Traditional Inuit Culture', 'Dog Sledding', 'Northern Lights', 'Authentic Arctic Life', 'Mountain Hiking'],
      activities: [
        'Dog sledding expeditions',
        'Traditional hunting demonstrations',
        'Visit local museum and cultural sites',
        'Hiking in surrounding mountains',
        'Northern Lights viewing (winter)',
        'Meeting local Inuit families'
      ],
      practicalInfo: {
        entrance: 'No entrance fees for town',
        parking: 'N/A - no roads to Tasiilaq',
        facilities: 'Basic amenities, small hotel, restaurant',
        accessibility: 'Remote location, basic facilities only'
      },
      weather: {
        summer: '5-15°C, hiking season',
        winter: '-15 to -30°C, dog sledding season'
      },
      howToGet: 'Helicopter from Kulusuk Airport or boat from Iceland (summer only).',
      tips: [
        'Book accommodation well in advance',
        'Respect local customs and traditions',
        'Bring warm clothing for all seasons',
        'Learn basic Greenlandic greetings',
        'Support local guides and businesses'
      ]
    },
    '5': {
      id: 5,
      name: 'Kangerlussuaq',
      category: 'Adventure Base',
      location: 'West Greenland',
      description: 'Gateway to Greenland\'s ice sheet with opportunities for ice cap excursions and hiking.',
      longDescription: 'Kangerlussuaq serves as Greenland\'s main international airport and gateway to the ice sheet. This former US military base offers unique opportunities to access the Greenland Ice Sheet, the world\'s second-largest ice mass. The area features excellent hiking trails, wildlife viewing opportunities, and serves as a base for ice sheet expeditions and research activities.',
      image: mountains,
      gallery: [mountains, greenlandLandscape, iceberg],
      rating: 4.5,
      duration: '1-2 days',
      bestTime: 'June to September',
      difficulty: 'Easy to Challenging',
      highlights: ['Ice Sheet Access', 'International Airport', 'Hiking Trails', 'Wildlife Viewing', 'Research Station'],
      activities: [
        'Ice sheet excursions and tours',
        'Hiking to Russell Glacier',
        'Wildlife watching (musk oxen, caribou)',
        'Visit the ice sheet research station',
        'Photography workshops',
        'Northern Lights viewing (winter)'
      ],
      practicalInfo: {
        entrance: 'Free access to most areas',
        parking: 'Available at airport and town',
        facilities: 'Airport, hotel, restaurant, shops',
        accessibility: 'Good facilities due to airport location'
      },
      weather: {
        summer: '10-20°C, dry continental climate',
        winter: '-20 to -30°C, clear skies common'
      },
      howToGet: 'International flights from Copenhagen and Reykjavik to Kangerlussuaq Airport (SFJ).',
      tips: [
        'Perfect stopover for ice sheet visits',
        'Rent a car for glacier access',
        'Bring sun protection for ice sheet visits',
        'Check weather conditions before hiking',
        'Book ice sheet tours in advance'
      ]
    },
    '6': {
      id: 6,
      name: 'Sisimiut',
      category: 'Town',
      location: 'West Greenland',
      description: 'Greenland\'s second-largest town with excellent hiking trails and cultural attractions.',
      longDescription: 'Sisimiut is Greenland\'s second-largest town and the northernmost ice-free port year-round. Located just north of the Arctic Circle, the town combines modern amenities with traditional Greenlandic culture. Sisimiut is renowned for its excellent hiking trails, cultural museum, and as a center for Arctic sports and outdoor activities.',
      image: greenlandLandscape,
      gallery: [greenlandLandscape, mountains, ship],
      rating: 4.4,
      duration: '1-2 days',
      bestTime: 'June to September (hiking), December to April (winter sports)',
      difficulty: 'Easy to Moderate',
      highlights: ['Arctic Circle Location', 'Excellent Hiking', 'Cultural Museum', 'Year-round Port', 'Arctic Sports'],
      activities: [
        'Hiking the Arctic Circle Trail',
        'Visit Sisimiut Museum',
        'Explore the old town and harbor',
        'Dog sledding (winter)',
        'Cross-country skiing',
        'Cultural events and festivals'
      ],
      practicalInfo: {
        entrance: 'Free town access, museum fees apply',
        parking: 'Available in town center',
        facilities: 'Hotels, restaurants, shops, hospital',
        accessibility: 'Good facilities for a Greenlandic town'
      },
      weather: {
        summer: '5-15°C, excellent hiking weather',
        winter: '-10 to -20°C, good for winter sports'
      },
      howToGet: 'Fly from Kangerlussuaq or Nuuk to Sisimiut Airport (JHS), or arrive by coastal ferry.',
      tips: [
        'Great base for Arctic Circle Trail',
        'Visit during summer for best hiking',
        'Try local seafood specialties',
        'Check museum opening hours',
        'Bring hiking gear for trail access'
      ]
    }
  };

  const place = placesData[id as keyof typeof placesData];

  if (!place) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Place not found</h1>
          <Link to="/places">
            <Button>Back to Places</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link to="/places" className="inline-flex items-center text-white mb-4 hover:text-gray-200">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Places
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {place.name}
            </h1>
            <div className="flex items-center space-x-6 text-white">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {place.location}
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 fill-yellow-400 text-yellow-400" />
                {place.rating}
              </div>
              <Badge className="bg-white/20 text-white border-white/30">
                {place.category}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="w-5 h-5 mr-2" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {place.longDescription}
                </p>
              </CardContent>
            </Card>

            {/* Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Things to Do</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {place.activities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{activity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gallery */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="w-5 h-5 mr-2" />
                  Photo Gallery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {place.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${place.name} ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Visitor Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {place.tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm text-gray-600">Duration</span>
                  </div>
                  <span className="font-medium">{place.duration}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm text-gray-600">Best Time</span>
                  </div>
                  <span className="font-medium">{place.bestTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm text-gray-600">Difficulty</span>
                  </div>
                  <span className="font-medium">{place.difficulty}</span>
                </div>
              </CardContent>
            </Card>

            {/* Weather */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Thermometer className="w-5 h-5 mr-2" />
                  Weather
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Summer</h4>
                  <p className="text-sm text-gray-600">{place.weather.summer}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Winter</h4>
                  <p className="text-sm text-gray-600">{place.weather.winter}</p>
                </div>
              </CardContent>
            </Card>

            {/* How to Get There */}
            <Card>
              <CardHeader>
                <CardTitle>How to Get There</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{place.howToGet}</p>
              </CardContent>
            </Card>

            {/* Practical Information */}
            <Card>
              <CardHeader>
                <CardTitle>Practical Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Entrance</h4>
                  <p className="text-sm text-gray-600">{place.practicalInfo.entrance}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Facilities</h4>
                  <p className="text-sm text-gray-600">{place.practicalInfo.facilities}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Accessibility</h4>
                  <p className="text-sm text-gray-600">{place.practicalInfo.accessibility}</p>
                </div>
              </CardContent>
            </Card>

            {/* Highlights */}
            <Card>
              <CardHeader>
                <CardTitle>Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {place.highlights.map((highlight, index) => (
                    <Badge key={index} variant="secondary">
                      {highlight}
                    </Badge>
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

export default PlaceDetailPage;