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

  // Complete accommodation data matching the AccommodationsPage
  const accommodationsData = {
    'hotel-icefiord': {
      id: 'hotel-icefiord',
      name: 'Hotel Icefiord',
      type: 'Luxury Hotel',
      location: 'Ilulissat, Greenland',
      description: 'Hotel Icefiord is located on the coastline of Ilulissat with a beautiful view to Kangia Icefjord from every single room. In winter it is possible to enjoy the amazing starry sky and the northern lights from your bed through a sky view window in our deluxe rooms. In the cozy atmosphere of the restaurant, you can enjoy tasty food from fresh local ingredients – still with the amazing view of the icefjord through the big panoramic windows. Excursions with Disko Line Explorer, such as icefjord cruises, whale safari and fishing trips, all depart from our brand-new gangway right outside the hotel!',
      images: [
        'https://images.unsplash.com/photo-1710089179014-9cc7a3a2aca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxHcmVlbmxhbmQlMjBob3RlbCUyMGFjY29tbW9kYXRpb24lMjBhcmN0aWMlMjBsb2RnZXxlbnwwfDB8fHwxNzUyNzg0MjUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 9.2,
      reviewCount: 156,
      bookingUrl: 'https://hotelicefiord.com/',
      contact: {
        phone: '+299 94 41 53',
        address: 'Icefjord Road 1, 3952 Ilulissat',
        email: 'info@hotelicefiord.com'
      },
      amenities: [
        'Free WiFi', 'Restaurant', 'Icefjord Views', 'Terrace', 'Tour Desk', 
        'Whale Safari', 'Sky View Windows', 'Gangway Access', 'Northern Lights Viewing', 
        'Midnight Sun Views', 'Local Cuisine', 'Panoramic Windows'
      ],
      features: [
        'Icefjord Views from Every Room', 'Northern Lights Viewing', 'Midnight Sun', 
        'Whale Watching', 'Direct Excursion Access', 'Local Cuisine', 'Sky View Windows', 
        'Gangway Access'
      ],
      roomTypes: [
        'Standard Room', 'Deluxe Room with Sky View', 'Suite with Icefjord View', 
        'Premium Suite', 'Family Room'
      ],
      policies: {
        checkIn: '15:00 - 22:00',
        checkOut: '07:00 - 11:00',
        cancellation: 'Free cancellation up to 48 hours before arrival',
        pets: 'Pets not allowed',
        smoking: 'Non-smoking property',
        children: 'Children of all ages welcome',
        ageRestriction: 'Minimum age for check-in: 18'
      },
      nearbyAttractions: [
        { name: 'Kangia Icefjord', distance: '0.1 km', type: 'UNESCO Site' },
        { name: 'Disko Line Explorer Departure', distance: '0.0 km', type: 'Tour Operator' },
        { name: 'Ilulissat Town Center', distance: '1.2 km', type: 'Town Center' },
        { name: 'Sermermiut Settlement', distance: '2.5 km', type: 'Historical Site' },
        { name: 'Ilulissat Airport', distance: '4.2 km', type: 'Airport' }
      ],
      priceRange: '$$$'
    },
    'paa-jannik-bb': {
      id: 'paa-jannik-bb',
      name: 'Paa & Jannik – Bed & Breakfast',
      type: 'Bed & Breakfast',
      location: 'Ilulissat, Greenland',
      description: 'Bed & Breakfast Paa and Jannik offer rooms and holiday apartments to let. Centrally located rooms and apartments with terraces, barbecue and sea view. All the couple\'s rental accommodation facilities are no smoking, comfortably furnished and are either equipped with or have access to everything you need to make life comfortable: fully furnished kitchens, bathroom facilities and lounges with TVs.',
      images: [
        'https://images.unsplash.com/photo-1531049552576-2458cd6793fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxHcmVlbmxhbmQlMjBjb2xvcmZ1bCUyMGhvdXNlcyUyMGFyY3RpYyUyMGJ1aWxkaW5nc3xlbnwwfDB8fHwxNzUyNzg0MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 8.5,
      reviewCount: 73,
      bookingUrl: 'https://bb.gl/',
      contact: {
        phone: '+299 94 15 29',
        address: 'Central Ilulissat, 3952 Ilulissat',
        email: 'info@bb.gl'
      },
      amenities: [
        'WiFi', 'Full Kitchen', 'Sea View', 'Terrace', 'Barbecue', 'TV', 
        'Non-smoking', 'Bathroom Facilities', 'Lounge Area', 'Holiday Apartments'
      ],
      features: [
        'Family Run', 'Local Experience', 'Personal Service', 'Authentic Atmosphere', 
        'Self-Catering', 'Central Location', 'Sea Views', 'Terrace Access'
      ],
      roomTypes: [
        'Single Room', 'Double Room', 'Holiday Apartment', 'Family Room', 
        'Studio Apartment'
      ],
      policies: {
        checkIn: '14:00 - 20:00',
        checkOut: '08:00 - 11:00',
        cancellation: 'Free cancellation up to 24 hours before arrival',
        pets: 'Pets allowed with prior arrangement',
        smoking: 'Non-smoking property',
        children: 'Children of all ages welcome',
        ageRestriction: 'No age restriction for check-in'
      },
      nearbyAttractions: [
        { name: 'Ilulissat Town Center', distance: '0.3 km', type: 'Town Center' },
        { name: 'Disko Bay', distance: '0.5 km', type: 'Natural Wonder' },
        { name: 'Ilulissat Icefjord', distance: '1.8 km', type: 'UNESCO Site' },
        { name: 'Local Shops', distance: '0.2 km', type: 'Shopping' },
        { name: 'Ilulissat Airport', distance: '3.8 km', type: 'Airport' }
      ],
      priceRange: '$$'
    },
    'hotel-narsarsuaq': {
      id: 'hotel-narsarsuaq',
      name: 'Hotel Narsarsuaq',
      type: 'Hotel',
      location: 'Narsarsuaq, Greenland',
      description: 'A modern hotel with 80 rooms and about 180 beds. There is a choice of single rooms, double rooms, family rooms and suites. Hotel Narsarsuaq has a restaurant with an international menu specialising in Greenlandic cuisine, and a cafeteria which serves a buffet breakfast, lunch and dinner. In the summer there are direct flights from Denmark and Iceland to Narsarsuaq, which provides easy access to the many towns, amenities and historic sites that Southern Greenland has to offer. The ice cap is only a short hike away.',
      images: [
        'https://images.unsplash.com/photo-1573960794616-136220da6e6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwzfHxHcmVlbmxhbmQlMjBjb2xvcmZ1bCUyMGhvdXNlcyUyMGFyY3RpYyUyMGJ1aWxkaW5nc3xlbnwwfDB8fHwxNzUyNzg0MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1630145721925-f784151c70b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw0fHxHcmVlbmxhbmQlMjBjb2xvcmZ1bCUyMGhvdXNlcyUyMGFyY3RpYyUyMGJ1aWxkaW5nc3xlbnwwfDB8fHwxNzUyNzg0MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080'
      ],
      rating: 8.3,
      reviewCount: 67,
      bookingUrl: 'https://hotelnarsarsuaq.gl/',
      contact: {
        phone: '+299 66 51 60',
        address: 'Airport Road, 3923 Narsarsuaq',
        email: 'info@hotelnarsarsuaq.gl'
      },
      amenities: [
        'Free WiFi', 'Restaurant', 'Cafeteria', 'Family Rooms', 'Hiking Access', 
        'Ice Cap Tours', 'Airport Access', 'Buffet Service', 'International Menu', 
        'Greenlandic Cuisine', 'Historic Site Access', 'Modern Facilities'
      ],
      features: [
        'South Greenland Gateway', 'Direct International Flights', 'Ice Cap Access', 
        'Historic Sites', 'Hiking Opportunities', 'Modern Facilities', 'Large Capacity', 
        'Buffet Dining'
      ],
      roomTypes: [
        'Single Room', 'Double Room', 'Family Room', 'Suite', 'Twin Room', 
        'Superior Room'
      ],
      policies: {
        checkIn: '15:00 - 23:00',
        checkOut: '07:00 - 11:00',
        cancellation: 'Free cancellation up to 24 hours before arrival',
        pets: 'Pets not allowed',
        smoking: 'Designated smoking areas',
        children: 'Children of all ages welcome',
        ageRestriction: 'Minimum age for check-in: 18'
      },
      nearbyAttractions: [
        { name: 'Narsarsuaq Airport', distance: '0.5 km', type: 'Airport' },
        { name: 'Greenland Ice Cap', distance: '5.0 km', type: 'Natural Wonder' },
        { name: 'Erik the Red\'s Landing', distance: '2.0 km', type: 'Historical Site' },
        { name: 'Flower Valley', distance: '3.0 km', type: 'Natural Area' },
        { name: 'Narsarsuaq Museum', distance: '1.0 km', type: 'Museum' }
      ],
      priceRange: '$$'
    },
    'nuuk-apartments-hhe': {
      id: 'nuuk-apartments-hhe',
      name: 'Nuuk Hotel Apartments by HHE',
      type: 'Serviced Apartment',
      location: 'Nuuk, Greenland',
      description: '15 modern one bedroom apartments fully equipped downtown Nuuk. Fully equipped with bed linen and towels, laundry machine, and free wifi included. Check in at Hotel Hans Egede – HHE. These premium serviced apartments cater to business travelers and extended-stay guests seeking independence and comfort in Nuuk.',
      images: [
        'https://images.unsplash.com/photo-1654949935785-29cbc0090492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw3fHxHcmVlbmxhbmQlMjBob3RlbCUyMGFjY29tbW9kYXRpb24lMjBhcmN0aWMlMjBsb2RnZXxlbnwwfDB8fHwxNzUyNzg0MjUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://cf.bstatic.com/xdata/images/hotel/max500/615144832.jpg?k=5a48fb7a0e8067b1667d6c00ceb861495afcdab919887f2fbcb2d9cbb057cafe&o=',
        'https://cf.bstatic.com/xdata/images/hotel/max300/639184662.jpg?k=180afce6b7ada0bd89540ecf5817a5e78e2f56c09e5f62782a084b3e55462c7e&o='
      ],
      rating: 9.0,
      reviewCount: 15,
      bookingUrl: 'https://nuukhotelapartments.gl/',
      contact: {
        phone: '+299 32 42 22',
        address: 'Downtown Nuuk, 3900 Nuuk',
        email: 'apartments@hoteleg.gl'
      },
      amenities: [
        'Free WiFi', 'Full Kitchen', 'Washing Machine', 'Bed Linen', 'Towels', 
        'Downtown Location', 'Business Friendly', 'Check-in at Hotel Hans Egede', 
        'Modern Appliances', 'Separate Living Area'
      ],
      features: [
        'Self-Catering', 'Business Friendly', 'Long Stay Suitable', 'Modern Apartments', 
        'Downtown Location', 'Hotel Services', 'Extended Stay', 'Independence'
      ],
      roomTypes: ['One-Bedroom Apartment'],
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
        { name: 'Hotel Hans Egede', distance: '0.1 km', type: 'Hotel Services' },
        { name: 'Nuuk City Center', distance: '0.2 km', type: 'City Center' },
        { name: 'Katuaq Cultural Centre', distance: '0.4 km', type: 'Cultural Center' },
        { name: 'Nuuk Art Museum', distance: '0.3 km', type: 'Museum' },
        { name: 'Nuuk Airport', distance: '4.7 km', type: 'Airport' }
      ],
      priceRange: '$$'
    },
    'hans-egede-nuuk': {
      id: 'hans-egede-nuuk',
      name: 'Hotel Hans Egede',
      type: 'Luxury Hotel',
      location: 'Nuuk, Greenland',
      description: 'Named after Greenland\'s colonial founder, this prestigious hotel stands as Nuuk\'s premier accommodation since 1987. Located in the heart of the capital, it offers 169 elegantly appointed rooms with panoramic views of Nuuk Fjord and surrounding mountains. The hotel features three exceptional restaurants, including the acclaimed Hereford Beefstouw serving premium steaks, Sarfalik offering modern Nordic cuisine with Greenlandic ingredients, and Café Esmeralda for casual dining. With its central location near the National Museum, Katuaq Cultural Centre, and government buildings, guests enjoy easy access to Nuuk\'s cultural attractions while experiencing world-class hospitality in the Arctic.',
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
      description: 'Perched on the shores of Disko Bay, Hotel Hvide Falk offers front-row seats to nature\'s greatest ice show. This modern 4-star hotel provides unobstructed views of massive icebergs calving from Sermeq Kujalleq glacier, part of the UNESCO World Heritage Ilulissat Icefjord. The hotel\'s 48 comfortable rooms feature contemporary Scandinavian design with floor-to-ceiling windows showcasing the Arctic seascape. The renowned restaurant serves French-inspired cuisine using local ingredients like Arctic char, musk ox, and foraged herbs. Located just minutes from the Icefjord Centre and hiking trails, guests can witness the midnight sun in summer or Northern Lights in winter from their rooms.',
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
      description: 'These premium serviced apartments cater to business travelers and extended-stay guests seeking independence and comfort in Nuuk. Each spacious unit features a fully equipped kitchen with modern appliances, separate living and sleeping areas, and private balconies overlooking Nuuk Fjord or the surrounding mountains. The apartments include high-speed internet, washing machines, and contemporary furnishings designed for both work and relaxation. Located in a quiet residential area yet close to downtown, guests enjoy the privacy of home while having access to Nuuk\'s business district, restaurants, and cultural attractions. Ideal for corporate travelers, researchers, or families wanting self-catering flexibility during their Arctic adventure.',
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
    },
    'best-western-ilulissat': {
      id: 'best-western-ilulissat',
      name: 'Best Western Plus Ilulissat',
      type: 'International Hotel',
      location: 'Ilulissat, Greenland',
      description: 'This international-standard hotel brings familiar comfort to the edge of the world, combining global hospitality excellence with authentic Arctic experiences. Located in the heart of Ilulissat, guests enjoy easy access to the UNESCO World Heritage Icefjord while benefiting from reliable amenities and service standards. The hotel features modern rooms with Arctic-inspired décor, many offering spectacular views of Disko Bay\'s floating icebergs. The on-site restaurant showcases Greenlandic cuisine alongside international favorites, while the fitness center and business facilities cater to diverse traveler needs. With its strategic location near the airport, harbor, and Icefjord Centre, it serves as an ideal base for exploring the world\'s most active glacier outside Antarctica.',
      images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 8.5,
      reviewCount: 85,
      bookingUrl: 'https://www.booking.com/hotel/gl/best-western-plus-ilulissat.en.html',
      contact: {
        phone: '+299 94 48 00',
        address: 'Mittarfimmut Aqq. 6, 3952 Ilulissat',
        email: 'info@bestwestern-ilulissat.gl'
      },
      amenities: [
        'Free WiFi', 'Restaurant', 'Bar', 'Fitness Center', 'Airport Shuttle', 
        'Room Service', 'Business Center', 'Laundry', 'Conference Facilities', 
        'Tour Desk', 'Arctic Views', 'International Standards'
      ],
      features: [
        'International Standard', 'Icefjord Access', 'Modern Rooms', 'Conference Facilities', 
        'Arctic Views', 'Tour Desk', 'Global Brand Reliability', 'Business Services'
      ],
      roomTypes: [
        'Standard Room', 'Superior Room', 'Suite', 'Executive Room', 'Family Room'
      ],
      policies: {
        checkIn: '15:00 - 23:00',
        checkOut: '07:00 - 11:00',
        cancellation: 'Free cancellation up to 24 hours before arrival',
        pets: 'Pets allowed with restrictions',
        smoking: 'Non-smoking property',
        children: 'Children of all ages welcome',
        ageRestriction: 'Minimum age for check-in: 18'
      },
      nearbyAttractions: [
        { name: 'Ilulissat Icefjord Centre', distance: '1.5 km', type: 'Visitor Center' },
        { name: 'Ilulissat Harbor', distance: '0.8 km', type: 'Harbor' },
        { name: 'Disko Bay', distance: '0.6 km', type: 'Natural Wonder' },
        { name: 'Ilulissat Town Center', distance: '0.5 km', type: 'Town Center' },
        { name: 'Ilulissat Airport', distance: '3.5 km', type: 'Airport' }
      ],
      priceRange: '$$$'
    },
    'aurora-hut-inuktravel': {
      id: 'aurora-hut-inuktravel',
      name: 'Aurora Hut by InukTravel',
      type: 'Wilderness Lodge',
      location: 'Kangerlussuaq, Greenland',
      description: 'Nestled in the pristine wilderness near Kangerlussuaq, this intimate lodge offers an authentic Arctic experience far from light pollution. The cozy wooden huts provide comfortable accommodation while maintaining connection to Greenland\'s raw natural beauty. Each hut features traditional Nordic design with modern heating systems, perfect for viewing the Northern Lights dancing across the star-filled sky. Guests enjoy guided activities including ice fishing, snowshoeing, and cultural experiences with local Inuit guides who share traditional knowledge and stories. The lodge\'s remote location on the edge of the Greenland Ice Sheet provides unparalleled access to pristine wilderness, making it ideal for photographers, nature enthusiasts, and those seeking transformative Arctic solitude.',
      images: [
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1630145721925-f784151c70b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw0fHxHcmVlbmxhbmQlMjBjb2xvcmZ1bCUyMGhvdXNlcyUyMGFyY3RpYyUyMGJ1aWxkaW5nc3xlbnwwfDB8fHwxNzUyNzg0MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080'
      ],
      rating: 8.7,
      reviewCount: 42,
      bookingUrl: 'https://www.booking.com/hotel/gl/aurora-hut-by-inuktravel.en.html',
      contact: {
        phone: '+299 84 11 88',
        address: 'Wilderness Area, 3910 Kangerlussuaq',
        email: 'info@inuktravel.gl'
      },
      amenities: [
        'WiFi', 'Shared Kitchen', 'Common Area', 'Aurora Viewing', 'Hiking Trails', 
        'Cultural Activities', 'Ice Fishing', 'Snowshoeing', 'Local Guides', 
        'Traditional Experiences', 'Wilderness Access', 'Photography Tours'
      ],
      features: [
        'Northern Lights', 'Wilderness Location', 'Authentic Experience', 'Adventure Activities', 
        'Cozy Atmosphere', 'Local Guides', 'Ice Sheet Access', 'Cultural Immersion'
      ],
      roomTypes: [
        'Shared Dormitory', 'Private Room', 'Traditional Hut', 'Wilderness Cabin'
      ],
      policies: {
        checkIn: '16:00 - 20:00',
        checkOut: '08:00 - 10:00',
        cancellation: 'Free cancellation up to 48 hours before arrival',
        pets: 'Pets not allowed',
        smoking: 'Designated outdoor areas',
        children: 'Children over 12 welcome',
        ageRestriction: 'Minimum age for check-in: 18'
      },
      nearbyAttractions: [
        { name: 'Greenland Ice Sheet', distance: '15.0 km', type: 'Natural Wonder' },
        { name: 'Kangerlussuaq Airport', distance: '25.0 km', type: 'Airport' },
        { name: 'Russell Glacier', distance: '20.0 km', type: 'Glacier' },
        { name: 'Wilderness Hiking Trails', distance: '0.5 km', type: 'Hiking' },
        { name: 'Aurora Viewing Point', distance: '0.1 km', type: 'Natural Phenomenon' }
      ],
      priceRange: '$$'
    },
    'hotel-sisimiut': {
      id: 'hotel-sisimiut',
      name: 'Hotel Sisimiut',
      type: 'Hotel',
      location: 'Sisimiut, Greenland',
      description: 'Situated in Greenland\'s second-largest town, this welcoming hotel serves as the perfect gateway to West Greenland\'s diverse adventures. Sisimiut, located just north of the Arctic Circle, offers unique year-round activities from dog sledding and cross-country skiing in winter to hiking the Arctic Circle Trail in summer. The hotel provides comfortable accommodations with modern amenities while maintaining authentic Greenlandic character. Guests can explore the town\'s rich cultural heritage, including traditional kayak building, local museums, and vibrant arts scene. The hotel\'s restaurant features locally sourced ingredients including fresh seafood from Davis Strait. With easy access to both wilderness adventures and cultural experiences, it\'s ideal for travelers seeking authentic Arctic immersion.',
      images: [
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1630145721925-f784151c70b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw0fHxHcmVlbmxhbmQlMjBjb2xvcmZ1bCUyMGhvdXNlcyUyMGFyY3RpYyUyMGJ1aWxkaW5nc3xlbnwwfDB8fHwxNzUyNzg0MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1750859583990-633ed2eb1478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw1fHxHcmVlbmxhbmQlMjBjb2xvcmZ1bCUyMGhvdXNlcyUyMGFyY3RpYyUyMGJ1aWxkaW5nc3xlbnwwfDB8fHwxNzUyNzg0MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080'
      ],
      rating: 8.2,
      reviewCount: 67,
      bookingUrl: 'https://www.booking.com/hotel/gl/sisimiut.en.html',
      contact: {
        phone: '+299 86 48 40',
        address: 'Aqqusinersuaq 86, 3911 Sisimiut',
        email: 'info@hotelsisimiut.gl'
      },
      amenities: [
        'Free WiFi', 'Restaurant', 'Bar', 'Tour Desk', 'Luggage Storage', 
        'Laundry Service', 'Dog Sledding Tours', 'Arctic Circle Trail Access', 
        'Cultural Tours', 'Kayak Building Workshops', 'Local Seafood'
      ],
      features: [
        'Town Center', 'Adventure Base', 'Local Culture', 'Hiking Access', 
        'Arctic Activities', 'Friendly Staff', 'Cultural Heritage', 'Authentic Experience'
      ],
      roomTypes: [
        'Standard Room', 'Superior Room', 'Family Room', 'Twin Room'
      ],
      policies: {
        checkIn: '15:00 - 22:00',
        checkOut: '07:00 - 11:00',
        cancellation: 'Free cancellation up to 24 hours before arrival',
        pets: 'Pets not allowed',
        smoking: 'Designated smoking areas',
        children: 'Children of all ages welcome',
        ageRestriction: 'Minimum age for check-in: 18'
      },
      nearbyAttractions: [
        { name: 'Arctic Circle Trail', distance: '2.0 km', type: 'Hiking Trail' },
        { name: 'Sisimiut Museum', distance: '0.5 km', type: 'Museum' },
        { name: 'Traditional Kayak Workshop', distance: '0.8 km', type: 'Cultural Site' },
        { name: 'Sisimiut Harbor', distance: '0.3 km', type: 'Harbor' },
        { name: 'Sisimiut Airport', distance: '5.2 km', type: 'Airport' }
      ],
      priceRange: '$$'
    },
    'nuka-hostel': {
      id: 'nuka-hostel',
      name: 'Nuka Hostel',
      type: 'Hostel',
      location: 'Nuuk, Greenland',
      description: 'This vibrant backpacker haven in Nuuk\'s city center attracts adventurous travelers from around the world seeking affordable Arctic experiences. The hostel features clean dormitories and private rooms with shared kitchen facilities, creating a social atmosphere where guests exchange travel stories and plan joint adventures. Located within walking distance of Nuuk\'s main attractions including the National Museum, Katuaq Cultural Centre, and colorful Old Town, it offers excellent value for budget-conscious explorers. The communal areas foster connections between international travelers, researchers, and local guides, often leading to shared excursions to nearby hiking trails, boat trips, or Northern Lights viewing. With its friendly staff providing insider tips and tour bookings, it\'s the perfect base for authentic, affordable Arctic exploration.',
      images: [
        'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1531049552576-2458cd6793fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxHcmVlbmxhbmQlMjBjb2xvcmZ1bCUyMGhvdXNlcyUyMGFyY3RpYyUyMGJ1aWxkaW5nc3xlbnwwfDB8fHwxNzUyNzg0MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080'
      ],
      rating: 7.8,
      reviewCount: 156,
      bookingUrl: 'https://www.booking.com/hotel/gl/nuka-hostel.en.html',
      contact: {
        phone: '+299 32 83 50',
        address: 'Imaneq 21, 3900 Nuuk',
        email: 'info@nukahostel.gl'
      },
      amenities: [
        'Free WiFi', 'Shared Kitchen', 'Common Room', 'Luggage Storage', 
        'Laundry Facilities', 'Tour Information', 'Social Atmosphere', 
        'Budget Friendly', 'International Crowd', 'Local Tips'
      ],
      features: [
        'Budget Friendly', 'Social Atmosphere', 'Backpacker Hub', 'City Center', 
        'Shared Facilities', 'International Crowd', 'Cultural Exchange', 'Adventure Planning'
      ],
      roomTypes: [
        'Shared Dormitory', 'Private Room', '4-Bed Dorm', '6-Bed Dorm', 
        'Female-Only Dorm'
      ],
      policies: {
        checkIn: '15:00 - 22:00',
        checkOut: '08:00 - 11:00',
        cancellation: 'Free cancellation up to 24 hours before arrival',
        pets: 'Pets not allowed',
        smoking: 'Non-smoking property',
        children: 'Children over 16 welcome',
        ageRestriction: 'Minimum age for check-in: 16'
      },
      nearbyAttractions: [
        { name: 'Nuuk National Museum', distance: '0.4 km', type: 'Museum' },
        { name: 'Katuaq Cultural Centre', distance: '0.6 km', type: 'Cultural Center' },
        { name: 'Nuuk Old Town', distance: '0.3 km', type: 'Historic Area' },
        { name: 'Nuuk Harbor', distance: '0.5 km', type: 'Harbor' },
        { name: 'Nuuk Airport', distance: '4.5 km', type: 'Airport' }
      ],
      priceRange: '$'
    },
    'igdlo-guesthouse': {
      id: 'igdlo-guesthouse',
      name: 'Igdlo Guesthouse',
      type: 'Guesthouse',
      location: 'Ilulissat, Greenland',
      description: 'This charming family-run guesthouse embodies the warmth of Greenlandic hospitality, offering intimate accommodations where guests become part of the extended family. "Igdlo" means "home" in Greenlandic, perfectly capturing the welcoming atmosphere created by local hosts who share generations of Arctic knowledge. The cozy rooms feature traditional décor mixed with modern comforts, while the shared common areas encourage cultural exchange between visitors and locals. Guests enjoy homemade breakfasts featuring local specialties and receive personalized recommendations for exploring Ilulissat\'s wonders. The hosts, often multilingual locals, provide invaluable insights into Inuit culture, best hiking spots, and optimal times for iceberg viewing. This authentic experience offers genuine connection to Greenlandic life while maintaining comfortable, clean accommodations at excellent value.',
      images: [
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1531049552576-2458cd6793fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxHcmVlbmxhbmQlMjBjb2xvcmZ1bCUyMGhvdXNlcyUyMGFyY3RpYyUyMGJ1aWxkaW5nc3xlbnwwfDB8fHwxNzUyNzg0MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 8.4,
      reviewCount: 73,
      bookingUrl: 'https://www.booking.com/hotel/gl/igdlo-guesthouse.en.html',
      contact: {
        phone: '+299 94 16 42',
        address: 'Aqqusinersuaq 12, 3952 Ilulissat',
        email: 'info@igdlo.gl'
      },
      amenities: [
        'WiFi', 'Shared Kitchen', 'Common Area', 'Tour Booking', 'Local Advice', 
        'Breakfast Available', 'Cultural Exchange', 'Homemade Meals', 
        'Traditional Décor', 'Multilingual Hosts'
      ],
      features: [
        'Family Run', 'Local Experience', 'Personal Service', 'Authentic Atmosphere', 
        'Budget Friendly', 'Cultural Insights', 'Traditional Hospitality', 'Home-like Feel'
      ],
      roomTypes: [
        'Single Room', 'Double Room', 'Family Room', 'Shared Room', 'Traditional Room'
      ],
      policies: {
        checkIn: '14:00 - 20:00',
        checkOut: '08:00 - 11:00',
        cancellation: 'Free cancellation up to 24 hours before arrival',
        pets: 'Pets allowed with prior arrangement',
        smoking: 'Non-smoking property',
        children: 'Children of all ages welcome',
        ageRestriction: 'No age restriction for check-in'
      },
      nearbyAttractions: [
        { name: 'Ilulissat Icefjord', distance: '1.5 km', type: 'UNESCO Site' },
        { name: 'Ilulissat Town Center', distance: '0.4 km', type: 'Town Center' },
        { name: 'Disko Bay Viewpoint', distance: '0.8 km', type: 'Scenic Viewpoint' },
        { name: 'Local Hiking Trails', distance: '0.2 km', type: 'Hiking' },
        { name: 'Ilulissat Airport', distance: '3.7 km', type: 'Airport' }
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
                    Book Now
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