import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Utensils, Building, Map } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useLanguage } from '../hooks/useLanguage';
import greenlandLandscape from '../assets/greenland/greenland-landscape.jpg';

const HomePage = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: MapPin,
      title: t('places'),
      description: 'Discover breathtaking landscapes and unique attractions',
      link: '/places',
      color: 'text-blue-600'
    },
    {
      icon: Utensils,
      title: t('dining'),
      description: 'Experience authentic Greenlandic cuisine',
      link: '/dining',
      color: 'text-green-600'
    },
    {
      icon: Building,
      title: t('accommodations'),
      description: 'Find comfortable places to stay',
      link: '/accommodations',
      color: 'text-purple-600'
    },
    {
      icon: Map,
      title: t('maps'),
      description: 'Navigate with interactive and downloadable maps',
      link: '/maps',
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${greenlandLandscape})`
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t('welcomeTitle')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('welcomeSubtitle')}
          </p>
          <Link to="/places">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
              {t('exploreNow')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Greenland
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to plan your perfect Greenland adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <feature.icon className={`w-12 h-12 mx-auto mb-4 ${feature.color} group-hover:scale-110 transition-transform`} />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">2.2M</div>
              <div className="text-xl opacity-90">Square Kilometers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">56K</div>
              <div className="text-xl opacity-90">Population</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">80%</div>
              <div className="text-xl opacity-90">Ice Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Explore?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start planning your unforgettable journey to Greenland today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/places">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Discover Places
              </Button>
            </Link>
            <Link to="/accommodations">
              <Button size="lg" variant="outline">
                Find Accommodation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;