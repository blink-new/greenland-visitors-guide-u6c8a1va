import { Plane, Calendar, Thermometer, AlertTriangle, Info, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

const TravelInfo = () => {
  const weatherData = [
    { month: 'June', temp: '5°C to 10°C', conditions: 'Mild, long daylight', activities: 'Hiking, sightseeing' },
    { month: 'July', temp: '8°C to 15°C', conditions: 'Warmest month', activities: 'All outdoor activities' },
    { month: 'August', temp: '6°C to 12°C', conditions: 'Still warm, fewer crowds', activities: 'Photography, wildlife' },
    { month: 'September', temp: '2°C to 8°C', conditions: 'Northern lights begin', activities: 'Aurora viewing' }
  ]

  const essentialInfo = [
    {
      icon: Plane,
      title: "Getting There",
      items: [
        "Fly via Copenhagen (CPH) or Reykjavik (KEF)",
        "Main airports: Kangerlussuaq (SFJ) and Nuuk (GOH)",
        "Air Greenland is the primary carrier",
        "Book flights well in advance for summer travel"
      ]
    },
    {
      icon: Calendar,
      title: "Best Time to Visit",
      items: [
        "Summer (June-August): Warmest weather, midnight sun",
        "Spring (April-May): Fewer crowds, still cold",
        "Fall (September-October): Northern lights, cooler",
        "Winter (November-March): Extreme cold, polar night"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Important Considerations",
      items: [
        "No roads between towns - travel by air or sea",
        "Extremely expensive - budget accordingly",
        "Limited infrastructure outside main towns",
        "Weather can change rapidly - pack layers"
      ]
    }
  ]

  const packingList = {
    clothing: [
      "Waterproof jacket and pants",
      "Insulated winter coat",
      "Warm layers (fleece, wool)",
      "Waterproof hiking boots",
      "Warm hat and gloves",
      "Sunglasses and sunscreen"
    ],
    gear: [
      "Camera with extra batteries",
      "Portable charger/power bank",
      "First aid kit",
      "Headlamp/flashlight",
      "Binoculars for wildlife",
      "Reusable water bottle"
    ],
    documents: [
      "Valid passport",
      "Travel insurance",
      "Flight confirmations",
      "Hotel reservations",
      "Emergency contact info",
      "Copies of important documents"
    ]
  }

  return (
    <section id="travel-info" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Travel Information
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential information to help you plan your Arctic adventure. 
            From weather conditions to packing lists, we've got you covered.
          </p>
        </div>

        {/* Weather Widget */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-none shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <Thermometer className="h-6 w-6 text-primary-600" />
                Weather & Best Time to Visit
              </CardTitle>
              <CardDescription className="text-gray-600">
                Plan your visit during the optimal months for your preferred activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {weatherData.map((month, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                    <h4 className="font-semibold text-gray-900 mb-2">{month.month}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Thermometer className="h-4 w-4 text-red-500" />
                        <span className="font-medium">{month.temp}</span>
                      </div>
                      <p className="text-gray-600">{month.conditions}</p>
                      <Badge variant="secondary" className="text-xs">
                        {month.activities}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Essential Information */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Information</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {essentialInfo.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <section.icon className="h-6 w-6 text-primary-600" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Packing Guide */}
        <div className="mb-16">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">Packing Guide</CardTitle>
              <CardDescription>
                Essential items for your Greenland adventure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="clothing" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="clothing">Clothing</TabsTrigger>
                  <TabsTrigger value="gear">Gear & Equipment</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>
                
                <TabsContent value="clothing" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {packingList.clothing.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="gear" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {packingList.gear.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-accent-600 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="documents" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {packingList.documents.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Quick Tips */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
            <Info className="h-6 w-6 text-primary-600" />
            Quick Tips for First-Time Visitors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Clock className="h-8 w-8 text-primary-600 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Time Zone</h4>
              <p className="text-gray-600 text-sm">Greenland has multiple time zones. West Greenland is UTC-3, East Greenland is UTC-1.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Plane className="h-8 w-8 text-accent-600 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Currency</h4>
              <p className="text-gray-600 text-sm">Danish Krone (DKK) is used. Credit cards are widely accepted in towns.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <AlertTriangle className="h-8 w-8 text-orange-600 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Language</h4>
              <p className="text-gray-600 text-sm">Greenlandic and Danish are official languages. English is spoken in tourist areas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TravelInfo