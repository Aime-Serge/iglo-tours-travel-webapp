import { useState } from 'react';
import { IMAGE_PATHS } from '@/constants/IMAGE_PATHS';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DatePicker } from "@/components/ui/date-picker";

export function CarRentalPage() {
  const [activeTab, setActiveTab] = useState("cars");

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header with contact info */}
    
      {/* Navigation */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center space-x-2">
                          <div className="w-40 h-14 relative">
                                 <img src={IMAGE_PATHS.logo} 
                              alt="IGLO TOURS & TRAVEL"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </a>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="font-medium hover:text-blue-600">Home</Link>
              <Link to="/tours" className="font-medium hover:text-blue-600">Tours</Link>
              <Link to="/car-rental" className="font-medium text-blue-600">Car Rental</Link>
              <a href="/#destination" className="font-medium hover:text-blue-600">Destination</a>
              <a href="/#about" className="font-medium hover:text-blue-600">About Us</a>
              <a href="/#contact" className="font-medium hover:text-blue-600">Contact Us</a>
            </nav>
            <Button variant="outline" size="icon" className="md:hidden">
              <i className="fas fa-bars"></i>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-16">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/assets/images/LargeSUV.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 z-0"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Car Rental Services</h1>
            <p className="text-xl mb-8">
              Explore East Africa at your own pace with our reliable and comfortable car rental options.
              We offer a variety of vehicles to suit your needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Car Rental Form & Options */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Car Rental Booking Form */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-6">Book a Vehicle</h2>
                    
                    <form className="space-y-4">
                      <div>
                        <Label htmlFor="pickup-location">Pickup Location</Label>
                        <Select defaultValue="kigali">
                          <SelectTrigger>
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kigali">Kigali, Rwanda</SelectItem>
                            <SelectItem value="entebbe">Entebbe, Uganda</SelectItem>
                            <SelectItem value="nairobi">Nairobi, Kenya</SelectItem>
                            <SelectItem value="arusha">Arusha, Tanzania</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="pickup-date">Pickup Date</Label>
                        <DatePicker />
                      </div>
                      
                      <div>
                        <Label htmlFor="dropoff-date">Drop-off Date</Label>
                        <DatePicker />
                      </div>
                      
                      <div>
                        <Label htmlFor="vehicle-type">Vehicle Type</Label>
                        <Select defaultValue="suv">
                          <SelectTrigger>
                            <SelectValue placeholder="Select vehicle type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="economy">Economy Car</SelectItem>
                            <SelectItem value="sedan">Sedan</SelectItem>
                            <SelectItem value="suv">SUV / 4x4</SelectItem>
                            <SelectItem value="minivan">Minivan</SelectItem>
                            <SelectItem value="safari">Safari Vehicle</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="driver">Driver Option</Label>
                        <Select defaultValue="with-driver">
                          <SelectTrigger>
                            <SelectValue placeholder="Select driver option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="with-driver">With Driver</SelectItem>
                            <SelectItem value="self-drive">Self Drive</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <Button className="w-full">Check Availability</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              {/* Car Options */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="cars" onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 h-auto">
                    <TabsTrigger value="cars">Cars</TabsTrigger>
                    <TabsTrigger value="suv">SUVs / 4x4</TabsTrigger>
                    <TabsTrigger value="safari">Safari Vehicles</TabsTrigger>
                  </TabsList>
                  
                  {/* Cars Tab */}
                  <TabsContent value="cars" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <div className="h-48 bg-gray-100">
                          <img 
                            src="https://i.pinimg.com/1200x/4d/48/0c/4d480c6a0df8a37cbbfd8f0d84b62618.jpg" 
                            alt="Economy Car" 
                            className="h-full w-full object-cover" 
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-xl font-bold mb-2">Toyota Corolla or similar</h3>
                          <p className="text-gray-600 mb-4">Economy car, perfect for city travel and short distances</p>
                          
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            <div className="flex items-center gap-2">
                              <i className="fas fa-user"></i>
                              <span>4 Passengers</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <i className="fas fa-suitcase"></i>
                              <span>2 Bags</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <i className="fas fa-gas-pump"></i>
                              <span>Fuel Efficient</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <i className="fas fa-cogs"></i>
                              <span>Automatic</span>
                            </div>
                          </div>
                          
                          <div className="flex items-baseline justify-between border-t pt-4">
                            
                            <Button variant="outline">Select</Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <div className="h-48 bg-gray-100">
                          <img 
                            src="https://i.pinimg.com/736x/78/62/4e/78624e2ff86c993b95ec6f991d10dcdc.jpg" 
                            alt="Sedan" 
                            className="h-full w-full object-cover" 
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-xl font-bold mb-2">Toyota Camry or similar</h3>
                          <p className="text-gray-600 mb-4">Comfortable sedan for business trips or family travel</p>
                          
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            <div className="flex items-center gap-2">
                              <i className="fas fa-user"></i>
                              <span>5 Passengers</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <i className="fas fa-suitcase"></i>
                              <span>3 Bags</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <i className="fas fa-gas-pump"></i>
                              <span>Moderate</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <i className="fas fa-cogs"></i>
                              <span>Automatic</span>
                            </div>
                          </div>
                          
                          <div className="flex items-baseline justify-between border-t pt-4">
                          
                            <Button variant="outline">Select</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  
                  {/* SUVs Tab */}
                  <TabsContent value="suv" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <div className="h-48 bg-gray-100">
                          <img 
                            src="https://i.pinimg.com/1200x/08/ec/81/08ec81fb0bd97f2d90ecc9b1480741a2.jpg" 
                            alt="SUV" 
                            className="h-full w-full object-cover" 
                          />2
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-xl font-bold mb-2">Toyota RAV4 or similar</h3>
                          <p className="text-gray-600 mb-4">Compact SUV suitable for light off-road and city driving</p>
                          
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            <div className="flex items-center gap-2">
                              <i className="fas fa-user"></i>
                              <span>5 Passengers</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <i className="fas fa-suitcase"></i>
                              <span>4 Bags</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <i className="fas fa-gas-pump"></i>
                              <span>Moderate</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <i className="fas fa-road"></i>
                              <span>4x2 / 4x4</span>
                            </div>
                          </div>
                          
                          <div className="flex items-baseline justify-between border-t pt-4">
                            
                            <Button variant="outline">Select</Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <div className="h-48 bg-gray-100">
                          <img 
                            src="https://i.pinimg.com/1200x/c8/c5/a6/c8c5a664ed9f29d07fec57ecaef6ddb8.jpg" 
                            alt="Large SUV" 
                            className="h-full w-full object-cover" 
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-xl font-bold mb-2">Toyota Land Cruiser Prado</h3>
                          <p className="text-gray-600 mb-4">Robust 4x4 capable of handling rugged terrain</p>
                          
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            <div className="flex items-center gap-2">
                              <i className="fas fa-user"></i>
                              <span>7 Passengers</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <i className="fas fa-suitcase"></i>
                              <span>5 Bags</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <i className="fas fa-gas-pump"></i>
                              <span>High</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <i className="fas fa-road"></i>
                              <span>4x4</span>
                            </div>
                          </div>
                          
                          <div className="flex items-baseline justify-between border-t pt-4">
                          
                            <Button variant="outline">Select</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  
                  {/* Safari Vehicles Tab */}
                  <TabsContent value="safari" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <div className="h-48 bg-gray-100">
                          <img 
                            src="https://i.pinimg.com/1200x/19/3b/00/193b00f3861cfef9ca578c801f34fe5c.jpg" 
                            alt="Safari Van" 
                            className="h-full w-full object-cover" 
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-xl font-bold mb-2">Safari Van</h3>
                          <p className="text-gray-600 mb-4">Customized van with pop-up roof for game viewing</p>
                          
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            <div className="flex items-center gap-2">
                              <i className="fas fa-user"></i>
                              <span>7 Passengers</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <i className="fas fa-binoculars"></i>
                              <span>Pop-up Roof</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <i className="fas fa-road"></i>
                              <span>All Terrain</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <i className="fas fa-user-tie"></i>
                              <span>With Driver</span>
                            </div>
                          </div>
                          
                          <div className="flex items-baseline justify-between border-t pt-4">
        
                            <Button variant="outline">Select</Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <div className="h-48 bg-gray-100">
                          <img 
                            src="https://i.pinimg.com/1200x/e1/75/81/e17581dbe09184e1d7658e000135b7da.jpg" 
                            alt="Land Cruiser Safari" 
                            className="h-full w-full object-cover" 
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-xl font-bold mb-2">Land Cruiser Safari Vehicle</h3>
                          <p className="text-gray-600 mb-4">Premium 4x4 safari vehicle with custom configuration for game viewing</p>
                          
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            <div className="flex items-center gap-2">
                              <i className="fas fa-user"></i>
                              <span>6 Passengers</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <i className="fas fa-binoculars"></i>
                              <span>Pop-up Roof</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <i className="fas fa-road"></i>
                              <span>All Terrain</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <i className="fas fa-user-tie"></i>
                              <span>With Driver</span>
                            </div>
                          </div>
                          
                          <div className="flex items-baseline justify-between border-t pt-4">
                            
                            <Button variant="outline">Select</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-lg font-medium text-blue-600 mb-2">Our Rental Services</h2>
            <h3 className="text-3xl font-bold mb-2">Why Choose Our Car Rental</h3>
            <Separator className="w-20 h-1 bg-blue-600" />
            <p className="text-center mt-4 max-w-2xl text-gray-600">
              We offer reliable, comfortable, and well-maintained vehicles for your travel needs across East Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-shield-alt text-blue-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold mb-3">Safe & Reliable</h4>
              <p className="text-gray-600">All our vehicles are regularly maintained and inspected for safety and reliability.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-hand-holding-usd text-blue-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold mb-3">Competitive Pricing</h4>
              <p className="text-gray-600">We offer the best rates with no hidden costs or surprise fees.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-user-tie text-blue-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold mb-3">Professional Drivers</h4>
              <p className="text-gray-600">Our experienced drivers know the roads well and provide excellent service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Policy */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-lg font-medium text-blue-600 mb-2">Good to Know</h2>
            <h3 className="text-3xl font-bold mb-2">Rental Policy</h3>
            <Separator className="w-20 h-1 bg-blue-600" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4">Requirements</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Valid driving license for at least 2 years</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Minimum age: 23 years old</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Valid passport or ID card</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Credit card for security deposit</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4">Included in Rental</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Unlimited mileage</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Third-party insurance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Airport pickup and drop-off</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>24/7 roadside assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="text-xl font-bold mb-4">IGLO TOURS & TRAVEL</h5>
              <p className="mb-4">Travel wise and experience the world with us because we are the driving forces who are not afraid to think on a different niche.</p>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><a href="/#about" className="hover:underline">About Us</a></li>
                <li><Link to="/tours" className="hover:underline">Tours</Link></li>
                <li><a href="/#destination" className="hover:underline">Destinations</a></li>
                <li><a href="/#contact" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-4">Contact Info</h5>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-yellow-400"><i className="fas fa-map-marker-alt"></i></span>
                  <span>Rwanda</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-yellow-400"><i className="fas fa-phone"></i></span>
                  <span>+(250) 788 306 892</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-yellow-400"><i className="fas fa-envelope"></i></span>
                  <span>iglotourstravel@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-blue-800 text-center">
            <p>&copy; {new Date().getFullYear()} IGLO TOURS & TRAVEL, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}