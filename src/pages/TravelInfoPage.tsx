import React from 'react';
import { Thermometer, Plane, CreditCard, Shield, Clock, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Alert, AlertDescription } from '../components/ui/alert';
import { useLanguage } from '../hooks/useLanguage';

const TravelInfoPage = () => {
  const { t } = useLanguage();

  const weatherData = [
    { month: 'Jan', temp: '-8°C', daylight: '4h', conditions: 'Very Cold, Dark' },
    { month: 'Feb', temp: '-7°C', daylight: '7h', conditions: 'Cold, Increasing Light' },
    { month: 'Mar', temp: '-4°C', daylight: '12h', conditions: 'Cold, Equinox' },
    { month: 'Apr', temp: '1°C', daylight: '16h', conditions: 'Cool, Spring' },
    { month: 'May', temp: '6°C', daylight: '20h', conditions: 'Mild, Long Days' },
    { month: 'Jun', temp: '10°C', daylight: '24h', conditions: 'Warm, Midnight Sun' },
    { month: 'Jul', temp: '13°C', daylight: '24h', conditions: 'Warmest, Midnight Sun' },
    { month: 'Aug', temp: '11°C', daylight: '18h', conditions: 'Warm, Northern Lights Begin' },
    { month: 'Sep', temp: '6°C', daylight: '14h', conditions: 'Cool, Aurora Season' },
    { month: 'Oct', temp: '1°C', daylight: '10h', conditions: 'Cold, Peak Aurora' },
    { month: 'Nov', temp: '-3°C', daylight: '6h', conditions: 'Very Cold, Dark' },
    { month: 'Dec', temp: '-6°C', daylight: '3h', conditions: 'Coldest, Polar Night' }
  ];

  const essentialItems = [
    { category: 'Clothing', items: ['Insulated winter jacket', 'Thermal underwear', 'Waterproof boots', 'Warm hat and gloves', 'Sunglasses'] },
    { category: 'Electronics', items: ['Power bank', 'Universal adapter', 'Camera with extra batteries', 'Headlamp', 'GPS device'] },
    { category: 'Health & Safety', items: ['Sunscreen (high SPF)', 'First aid kit', 'Personal medications', 'Emergency whistle', 'Hand warmers'] },
    { category: 'Documents', items: ['Passport', 'Travel insurance', 'Emergency contacts', 'Accommodation confirmations', 'Flight tickets'] }
  ];

  const transportationOptions = [
    {
      type: 'Air Travel',
      description: 'Primary way to reach Greenland',
      routes: ['Copenhagen → Kangerlussuaq', 'Copenhagen → Nuuk', 'Reykjavik → Nuuk'],
      tips: ['Book early for better prices', 'Check baggage restrictions', 'Consider seasonal schedules']
    },
    {
      type: 'Domestic Flights',
      description: 'Connect between Greenlandic cities',
      routes: ['Air Greenland operates most routes', 'Helicopter services available', 'Charter flights for remote areas'],
      tips: ['Weather can cause delays', 'Limited schedules in winter', 'Book accommodation near airports']
    },
    {
      type: 'Boat Travel',
      description: 'Coastal transportation and cruises',
      routes: ['Arctic Umiaq Line ferry', 'Cruise ships in summer', 'Local boat services'],
      tips: ['Summer season only', 'Can be affected by ice conditions', 'Scenic but weather dependent']
    }
  ];

  const culturalTips = [
    {
      title: 'Language',
      content: 'Greenlandic (Kalaallisut) is the official language, but Danish and English are widely spoken in tourist areas.'
    },
    {
      title: 'Currency',
      content: 'Danish Krone (DKK) is used. Credit cards are widely accepted, but carry cash for small purchases.'
    },
    {
      title: 'Tipping',
      content: 'Tipping is not expected but appreciated for exceptional service. 10% is considered generous.'
    },
    {
      title: 'Respect for Nature',
      content: 'Leave no trace principles are crucial. Respect wildlife, stay on marked paths, and follow local guidelines.'
    },
    {
      title: 'Local Customs',
      content: 'Inuit culture values community and sharing. Be respectful when visiting settlements and ask permission before photographing people.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {t('travelInfoTitle')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('travelInfoSubtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="weather" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="weather">Weather</TabsTrigger>
            <TabsTrigger value="transportation">Transport</TabsTrigger>
            <TabsTrigger value="packing">Packing</TabsTrigger>
            <TabsTrigger value="culture">Culture</TabsTrigger>
            <TabsTrigger value="safety">Safety</TabsTrigger>
          </TabsList>

          <TabsContent value="weather" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Thermometer className="w-5 h-5 mr-2" />
                  Monthly Weather Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {weatherData.map((month, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">{month.month}</h3>
                        <Badge variant={month.temp.includes('-') ? 'destructive' : 'default'}>
                          {month.temp}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {month.daylight} daylight
                        </div>
                        <p>{month.conditions}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Best Time to Visit</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary">Summer (June - August)</h4>
                      <p className="text-sm text-gray-600">Warmest weather, midnight sun, hiking season, all activities available</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-600">Spring/Fall (April-May, September-October)</h4>
                      <p className="text-sm text-gray-600">Shoulder season, fewer crowds, Northern Lights possible, some activities limited</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Winter (November - March)</h4>
                      <p className="text-sm text-gray-600">Northern Lights season, dog sledding, extreme cold, limited daylight</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                      <div>
                        <strong>Midnight Sun:</strong> 24-hour daylight from May to July in northern regions
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                      <div>
                        <strong>Polar Night:</strong> Limited daylight from November to January
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                      <div>
                        <strong>Aurora Borealis:</strong> Best viewed from September to March
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                      <div>
                        <strong>Weather Changes:</strong> Conditions can change rapidly, always be prepared
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="transportation" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {transportationOptions.map((transport, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Plane className="w-5 h-5 mr-2" />
                      {transport.type}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{transport.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Routes & Options:</h4>
                      <ul className="space-y-1 text-sm">
                        {transport.routes.map((route, routeIndex) => (
                          <li key={routeIndex} className="flex items-center">
                            <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                            {route}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tips:</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {transport.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-center">
                            <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Transportation in Greenland is heavily weather-dependent. Always have flexible travel plans and consider travel insurance that covers weather-related delays.
              </AlertDescription>
            </Alert>
          </TabsContent>

          <TabsContent value="packing" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {essentialItems.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Packing Tips by Season</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Summer (Jun-Aug)</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Light layers for variable weather</li>
                      <li>• Rain jacket and waterproof pants</li>
                      <li>• Hiking boots and comfortable shoes</li>
                      <li>• Insect repellent</li>
                      <li>• Sun protection (hat, sunglasses, sunscreen)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-3">Spring/Fall</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Warm layers and thermal underwear</li>
                      <li>• Insulated jacket</li>
                      <li>• Waterproof outer layer</li>
                      <li>• Warm hat and gloves</li>
                      <li>• Sturdy, warm boots</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Winter (Nov-Mar)</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Extreme cold weather gear</li>
                      <li>• Multiple warm layers</li>
                      <li>• Insulated, waterproof boots</li>
                      <li>• Face protection (balaclava)</li>
                      <li>• Hand and foot warmers</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="culture" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {culturalTips.map((tip, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{tip.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Cultural Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Traditional Activities</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Dog sledding experiences</li>
                      <li>• Traditional hunting demonstrations</li>
                      <li>• Inuit storytelling sessions</li>
                      <li>• Traditional craft workshops</li>
                      <li>• Cultural festivals and events</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Local Cuisine</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Fresh Arctic seafood</li>
                      <li>• Traditional game meats</li>
                      <li>• Foraged berries and herbs</li>
                      <li>• Modern Nordic interpretations</li>
                      <li>• Local brewing traditions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Art & Crafts</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Traditional tupilak carvings</li>
                      <li>• Sealskin and fur products</li>
                      <li>• Contemporary Greenlandic art</li>
                      <li>• Jewelry with local stones</li>
                      <li>• Traditional clothing (anorak)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="safety" className="space-y-6">
            <Alert>
              <Shield className="h-4 w-4" />
              <AlertDescription>
                Greenland's remote and extreme environment requires careful preparation and respect for safety guidelines. Always inform others of your plans and carry emergency equipment.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Emergency Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Emergency Services:</strong> 112
                    </div>
                    <div>
                      <strong>Police:</strong> +299 70 14 48
                    </div>
                    <div>
                      <strong>Medical Emergency:</strong> +299 34 63 33
                    </div>
                    <div>
                      <strong>Search & Rescue:</strong> +299 34 10 00
                    </div>
                    <div>
                      <strong>Tourist Helpline:</strong> +299 32 83 00
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Health & Medical</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Vaccinations:</strong> No special vaccinations required
                    </div>
                    <div>
                      <strong>Medical Facilities:</strong> Limited outside major towns
                    </div>
                    <div>
                      <strong>Insurance:</strong> Comprehensive travel insurance essential
                    </div>
                    <div>
                      <strong>Medications:</strong> Bring sufficient personal medications
                    </div>
                    <div>
                      <strong>Sun Protection:</strong> High SPF sunscreen crucial (snow reflection)
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Outdoor Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Never travel alone in remote areas</li>
                    <li>• Check weather conditions before departing</li>
                    <li>• Carry GPS device and emergency beacon</li>
                    <li>• Inform others of your planned route and return time</li>
                    <li>• Respect wildlife and maintain safe distances</li>
                    <li>• Be aware of ice conditions and crevasse dangers</li>
                    <li>• Carry emergency shelter and extra food</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Travel Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Passport:</strong> Valid for at least 6 months
                    </div>
                    <div>
                      <strong>Visa:</strong> Not required for most nationalities (up to 90 days)
                    </div>
                    <div>
                      <strong>Travel Insurance:</strong> Mandatory and must cover Arctic activities
                    </div>
                    <div>
                      <strong>Permits:</strong> Special permits required for some remote areas
                    </div>
                    <div>
                      <strong>Currency:</strong> Danish Krone (DKK)
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TravelInfoPage;