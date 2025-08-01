import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Clock, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useLanguage } from '../hooks/useLanguage';
import greenlandLandscape from '../assets/greenland/greenland-landscape.jpg';
import ship from '../assets/greenland/ship.jpg';
import iceberg from '../assets/greenland/iceberg.jpg';
import mountains from '../assets/greenland/mountains.jpg';

const PlacesPage = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const places = [
    {
      id: 1,
      name: 'Ilulissat Icefjord',
      category: 'nature',
      location: 'Ilulissat',
      description: 'UNESCO World Heritage site with spectacular icebergs',
      image: iceberg,
      rating: 4.9,
      duration: '4-6 hours',
      highlights: ['UNESCO Site', 'Icebergs', 'Photography']
    },
    {
      id: 2,
      name: 'Nuuk Old Town',
      category: 'cultural',
      location: 'Nuuk',
      description: 'Historic colonial district with colorful houses',
      image: greenlandLandscape,
      rating: 4.6,
      duration: '2-3 hours',
      highlights: ['History', 'Architecture', 'Culture']
    },
    {
      id: 3,
      name: 'Scoresby Sound',
      category: 'nature',
      location: 'East Greenland',
      description: 'World\'s largest fjord system with dramatic landscapes',
      image: mountains,
      rating: 4.8,
      duration: 'Full day',
      highlights: ['Fjords', 'Wildlife', 'Boat tours']
    },
    {
      id: 4,
      name: 'Tasiilaq',
      category: 'cultural',
      location: 'East Greenland',
      description: 'Traditional Inuit settlement with authentic culture',
      image: ship,
      rating: 4.7,
      duration: '3-4 hours',
      highlights: ['Inuit Culture', 'Traditional Life', 'Handicrafts']
    },
    {
      id: 5,
      name: 'Disko Island',
      category: 'nature',
      location: 'Disko Bay',
      description: 'Volcanic island with unique geology and hot springs',
      image: mountains,
      rating: 4.5,
      duration: 'Full day',
      highlights: ['Geology', 'Hot Springs', 'Hiking']
    },
    {
      id: 6,
      name: 'Kangerlussuaq',
      category: 'adventure',
      location: 'West Greenland',
      description: 'Gateway to the ice sheet with adventure activities',
      image: greenlandLandscape,
      rating: 4.4,
      duration: 'Half day',
      highlights: ['Ice Sheet', 'Adventure', 'Airport Hub']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Places' },
    { id: 'nature', label: 'Nature' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'adventure', label: 'Adventure' }
  ];

  const filteredPlaces = places.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         place.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {t('placesTitle')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('placesSubtitle')}
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
              placeholder={t('search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map((place) => (
            <Card key={place.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {place.rating}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{place.name}</CardTitle>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  {place.location}
                  <Clock className="w-4 h-4 ml-4 mr-1" />
                  {place.duration}
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4">{place.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {place.highlights.map((highlight, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>

                <Link to={`/places/${place.id}`}>
                  <Button className="w-full">
                    {t('viewDetails')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPlaces.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No places found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlacesPage;