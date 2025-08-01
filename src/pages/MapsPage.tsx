import React, { useState } from 'react';
import { Download, MapPin, Layers, Navigation, Compass } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useLanguage } from '../hooks/useLanguage';

const MapsPage = () => {
  const { t } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions = [
    {
      id: 'west',
      name: 'West Greenland',
      cities: ['Nuuk', 'Ilulissat', 'Sisimiut', 'Kangerlussuaq'],
      description: 'Most populated region with major cities and attractions',
      color: '#DC2626'
    },
    {
      id: 'east',
      name: 'East Greenland',
      cities: ['Tasiilaq', 'Ittoqqortoormiit'],
      description: 'Remote wilderness with traditional settlements',
      color: '#EF4444'
    },
    {
      id: 'north',
      name: 'North Greenland',
      cities: ['Qaanaaq', 'Thule'],
      description: 'Arctic frontier with unique Inuit culture',
      color: '#F87171'
    },
    {
      id: 'south',
      name: 'South Greenland',
      cities: ['Narsarsuaq', 'Qassiarsuk'],
      description: 'Green valleys and Viking history',
      color: '#FCA5A5'
    }
  ];

  const mapLayers = [
    {
      id: 'topographic',
      name: 'Topographic',
      description: 'Detailed terrain and elevation data',
      icon: <Layers className="w-5 h-5" />
    },
    {
      id: 'satellite',
      name: 'Satellite',
      description: 'High-resolution satellite imagery',
      icon: <Navigation className="w-5 h-5" />
    },
    {
      id: 'tourist',
      name: 'Tourist',
      description: 'Points of interest and attractions',
      icon: <MapPin className="w-5 h-5" />
    }
  ];

  const downloadableMaps = [
    {
      name: 'Complete Greenland Map',
      size: '15.2 MB',
      format: 'PDF',
      description: 'Full country overview with major cities and attractions',
      downloadUrl: '#'
    },
    {
      name: 'West Greenland Detail',
      size: '8.7 MB',
      format: 'PDF',
      description: 'Detailed map of western region including Nuuk and Ilulissat',
      downloadUrl: '#'
    },
    {
      name: 'Hiking Trails Map',
      size: '12.1 MB',
      format: 'PDF',
      description: 'Comprehensive hiking and trekking routes',
      downloadUrl: '#'
    },
    {
      name: 'Transportation Map',
      size: '6.3 MB',
      format: 'PDF',
      description: 'Airports, harbors, and transportation connections',
      downloadUrl: '#'
    }
  ];

  const majorCities = [
    { name: 'Nuuk', population: '18,800', region: 'West', x: 35, y: 65 },
    { name: 'Ilulissat', population: '4,700', region: 'West', x: 25, y: 45 },
    { name: 'Sisimiut', population: '5,600', region: 'West', x: 30, y: 55 },
    { name: 'Tasiilaq', population: '2,000', region: 'East', x: 75, y: 50 },
    { name: 'Kangerlussuaq', population: '500', region: 'West', x: 40, y: 60 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {t('mapsTitle')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('mapsSubtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="interactive" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="interactive">Interactive Map</TabsTrigger>
            <TabsTrigger value="downloads">Download Maps</TabsTrigger>
          </TabsList>

          <TabsContent value="interactive" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Interactive Map */}
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Compass className="w-5 h-5 mr-2" />
                      Interactive Greenland Map
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative bg-gradient-to-b from-blue-100 to-blue-200 rounded-lg overflow-hidden" style={{ height: '600px' }}>
                      {/* Greenland Outline */}
                      <svg
                        viewBox="0 0 100 100"
                        className="absolute inset-0 w-full h-full"
                        style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))' }}
                      >
                        {/* Main Greenland shape */}
                        <path
                          d="M20 20 Q15 25 18 35 L22 45 Q25 50 30 52 L35 58 Q40 65 45 68 L50 75 Q55 80 60 78 L65 75 Q70 70 72 65 L75 55 Q78 45 75 35 L70 25 Q65 20 60 18 L50 15 Q40 12 35 15 L25 18 Q20 20 20 20 Z"
                          fill="white"
                          stroke="#DC2626"
                          strokeWidth="0.5"
                          className="cursor-pointer hover:fill-red-50 transition-colors"
                        />
                        
                        {/* Ice sheet representation */}
                        <path
                          d="M30 25 Q35 30 40 32 L45 38 Q50 45 55 48 L60 55 Q65 60 62 65 L58 62 Q53 58 48 55 L43 48 Q38 42 35 38 L32 32 Q30 28 30 25 Z"
                          fill="#E5F3FF"
                          opacity="0.7"
                        />

                        {/* Cities */}
                        {majorCities.map((city, index) => (
                          <g key={index}>
                            <circle
                              cx={city.x}
                              cy={city.y}
                              r="1.5"
                              fill="#DC2626"
                              className="cursor-pointer hover:r-2 transition-all"
                              onClick={() => setSelectedRegion(city.region)}
                            />
                            <text
                              x={city.x + 2}
                              y={city.y - 1}
                              fontSize="2"
                              fill="#374151"
                              className="font-medium"
                            >
                              {city.name}
                            </text>
                          </g>
                        ))}

                        {/* Region boundaries */}
                        <defs>
                          <pattern id="westPattern" patternUnits="userSpaceOnUse" width="4" height="4">
                            <rect width="4" height="4" fill="rgba(220, 38, 38, 0.1)" />
                          </pattern>
                        </defs>
                      </svg>

                      {/* Legend */}
                      <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                        <h4 className="font-semibold text-sm mb-2">Legend</h4>
                        <div className="space-y-1 text-xs">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                            <span>Major Cities</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-blue-200 rounded mr-2"></div>
                            <span>Ice Sheet</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-white border border-primary rounded mr-2"></div>
                            <span>Land Area</span>
                          </div>
                        </div>
                      </div>

                      {/* Scale */}
                      <div className="absolute bottom-4 right-4 bg-white rounded-lg p-2 shadow-lg">
                        <div className="text-xs text-gray-600 mb-1">Scale</div>
                        <div className="flex items-center">
                          <div className="w-12 h-0.5 bg-gray-800 mr-2"></div>
                          <span className="text-xs">500 km</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Map Layers */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Map Layers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {mapLayers.map((layer) => (
                        <div key={layer.id} className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <div className="text-primary mr-3">
                            {layer.icon}
                          </div>
                          <div>
                            <div className="font-medium text-sm">{layer.name}</div>
                            <div className="text-xs text-gray-500">{layer.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Regions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Regions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {regions.map((region) => (
                        <div
                          key={region.id}
                          className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                            selectedRegion === region.id
                              ? 'border-primary bg-red-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => setSelectedRegion(selectedRegion === region.id ? null : region.id)}
                        >
                          <div className="flex items-center mb-2">
                            <div
                              className="w-3 h-3 rounded-full mr-2"
                              style={{ backgroundColor: region.color }}
                            ></div>
                            <span className="font-medium text-sm">{region.name}</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-2">{region.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {region.cities.map((city, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {city}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Facts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Total Area:</span>
                        <span className="font-medium">2.2M km²</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ice Coverage:</span>
                        <span className="font-medium">80%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Population:</span>
                        <span className="font-medium">56,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time Zone:</span>
                        <span className="font-medium">UTC-3 to UTC-1</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="downloads" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {downloadableMaps.map((map, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{map.name}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <Badge variant="outline">{map.format}</Badge>
                      <span>{map.size}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{map.description}</p>
                    <Button className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      {t('downloadPdf')}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Usage Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Map Usage Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Offline Usage</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Download maps before traveling to remote areas</li>
                      <li>• Print backup copies for emergency situations</li>
                      <li>• Use GPS coordinates for precise navigation</li>
                      <li>• Carry a compass as backup navigation tool</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Safety Considerations</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Weather conditions can change rapidly</li>
                      <li>• Inform others of your planned route</li>
                      <li>• Carry emergency communication devices</li>
                      <li>• Check ice conditions before traveling</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MapsPage;