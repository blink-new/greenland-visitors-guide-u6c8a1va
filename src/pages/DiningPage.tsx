import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Clock, Star, Utensils } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useLanguage } from '../hooks/useLanguage';

const DiningPage = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('all');

  const restaurants = [
    {
      id: 1,
      name: 'Sarfalik Restaurant',
      cuisine: 'greenlandic',
      location: 'Nuuk',
      description: 'Fine dining with traditional Greenlandic ingredients and modern techniques',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      priceRange: '$$$',
      openHours: '18:00 - 22:00',
      specialties: ['Seal', 'Arctic Char', 'Reindeer'],
      features: ['Fine Dining', 'Local Ingredients', 'Wine Pairing']
    },
    {
      id: 2,
      name: 'Café Esmeralda',
      cuisine: 'international',
      location: 'Ilulissat',
      description: 'Cozy café with international dishes and stunning iceberg views',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.5,
      priceRange: '$$',
      openHours: '08:00 - 20:00',
      specialties: ['Coffee', 'Pastries', 'Light Meals'],
      features: ['Iceberg Views', 'WiFi', 'Vegetarian Options']
    },
    {
      id: 3,
      name: 'Mamartut Restaurant',
      cuisine: 'greenlandic',
      location: 'Nuuk',
      description: 'Traditional Greenlandic cuisine in a warm, welcoming atmosphere',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      priceRange: '$$',
      openHours: '12:00 - 21:00',
      specialties: ['Musk Ox', 'Arctic Fish', 'Traditional Stews'],
      features: ['Traditional Recipes', 'Local Atmosphere', 'Group Friendly']
    },
    {
      id: 4,
      name: 'Hotel Arctic Restaurant',
      cuisine: 'international',
      location: 'Ilulissat',
      description: 'Upscale dining with panoramic views of Disko Bay',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      priceRange: '$$$',
      openHours: '19:00 - 22:00',
      specialties: ['Seafood', 'International Cuisine', 'Cocktails'],
      features: ['Panoramic Views', 'Hotel Restaurant', 'Cocktail Bar']
    },
    {
      id: 5,
      name: 'Katuaq Café',
      cuisine: 'cafe',
      location: 'Nuuk',
      description: 'Cultural center café with light meals and local art',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.3,
      priceRange: '$',
      openHours: '10:00 - 18:00',
      specialties: ['Coffee', 'Sandwiches', 'Local Pastries'],
      features: ['Cultural Center', 'Art Gallery', 'Free WiFi']
    },
    {
      id: 6,
      name: 'Ulo Restaurant',
      cuisine: 'fusion',
      location: 'Kangerlussuaq',
      description: 'Modern fusion cuisine blending Arctic and international flavors',
      image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.4,
      priceRange: '$$',
      openHours: '17:00 - 21:00',
      specialties: ['Fusion Dishes', 'Arctic Ingredients', 'Creative Cocktails'],
      features: ['Modern Cuisine', 'Creative Menu', 'Airport Location']
    }
  ];

  const cuisineTypes = [
    { id: 'all', label: 'All Cuisines' },
    { id: 'greenlandic', label: 'Greenlandic' },
    { id: 'international', label: 'International' },
    { id: 'fusion', label: 'Fusion' },
    { id: 'cafe', label: 'Café' }
  ];

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = selectedCuisine === 'all' || restaurant.cuisine === selectedCuisine;
    return matchesSearch && matchesCuisine;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {t('diningTitle')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('diningSubtitle')}
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
              placeholder={`${t('search')} restaurants...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {cuisineTypes.map((cuisine) => (
              <Button
                key={cuisine.id}
                variant={selectedCuisine === cuisine.id ? 'default' : 'outline'}
                onClick={() => setSelectedCuisine(cuisine.id)}
                className="rounded-full"
              >
                {cuisine.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {restaurant.rating}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    {restaurant.priceRange}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{restaurant.name}</CardTitle>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {restaurant.location}
                  </div>
                  <div className="flex items-center">
                    <Utensils className="w-4 h-4 mr-1" />
                    {restaurant.cuisine}
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  {restaurant.openHours}
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4">{restaurant.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-sm text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {restaurant.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {restaurant.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Link to={`/dining/${restaurant.id}`}>
                  <Button className="w-full">
                    {t('viewDetails')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No restaurants found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiningPage;