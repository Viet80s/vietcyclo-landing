import Image from "next/image";
import {
  Coffee,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-amber-700" />
            <span className="text-xl font-bold text-amber-900">VietCyclo</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#home"
              className="text-sm font-medium hover:text-amber-700 transition-colors"
            >
              Home
            </a>
            <a
              href="#promo"
              className="text-sm font-medium hover:text-amber-700 transition-colors"
            >
              Promo Codes
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-amber-700 transition-colors"
            >
              About Us
            </a>
            <a
              href="#location"
              className="text-sm font-medium hover:text-amber-700 transition-colors"
            >
              Find Us
            </a>
          </nav>
          <Button size="sm" className="bg-amber-700 hover:bg-amber-800">
            Visit Us
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-amber-700/50 z-10" />
          <div className="relative h-[70vh] overflow-hidden">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Vietnamese Coffee Culture"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
            <div className="max-w-3xl space-y-4">
              <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-900 mb-2">
                Now Open in Nottingham
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
                Experience Authentic{" "}
                <span className="text-amber-200">Vietnamese Coffee</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Discover the rich flavors and traditions of Vietnam at
                Nottingham&apos;s newest coffee destination
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Get Promo Codes
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white hover:bg-white/20"
                >
                  Our Menu
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Promo Code Section */}
        <section id="promo" className="py-16 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-900 mb-2">
                Limited Time Offer
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
                Exclusive Promo Codes
              </h2>
              <p className="text-lg text-amber-800/80 max-w-2xl">
                Celebrate our grand opening with these special offers. Simply
                show the code when ordering!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Promo Code 1 */}
              <Card className="overflow-hidden border-2 border-amber-200 bg-white">
                <div className="bg-amber-700 py-2 text-center text-white font-medium">
                  FIRST TIME VISITORS
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">
                    WELCOME25
                  </h3>
                  <p className="text-amber-700 font-medium mb-4">
                    25% OFF YOUR FIRST ORDER
                  </p>
                  <p className="text-gray-600 mb-6">
                    Valid for all menu items. One-time use per customer.
                  </p>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Copy Code
                  </Button>
                </CardContent>
              </Card>

              {/* Promo Code 2 */}
              <Card className="overflow-hidden border-2 border-amber-200 bg-white">
                <div className="bg-amber-700 py-2 text-center text-white font-medium">
                  COFFEE LOVERS
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">
                    VIETBOGO
                  </h3>
                  <p className="text-amber-700 font-medium mb-4">
                    BUY ONE GET ONE FREE
                  </p>
                  <p className="text-gray-600 mb-6">
                    Valid on all traditional Vietnamese coffee drinks.
                  </p>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Copy Code
                  </Button>
                </CardContent>
              </Card>

              {/* Promo Code 3 */}
              <Card className="overflow-hidden border-2 border-amber-200 bg-white">
                <div className="bg-amber-700 py-2 text-center text-white font-medium">
                  WEEKEND SPECIAL
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">
                    WEEKEND10
                  </h3>
                  <p className="text-amber-700 font-medium mb-4">
                    10% OFF + FREE PASTRY
                  </p>
                  <p className="text-gray-600 mb-6">
                    Valid Saturday and Sunday only. Min. order £10.
                  </p>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Copy Code
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section
        <section id="about" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="VietCyclo Coffee Shop Interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-900">
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-amber-900">
                  Bringing Vietnam's Coffee Culture to Nottingham
                </h2>
                <p className="text-gray-600">
                  VietCyclo is a passion project born from our love of authentic
                  Vietnamese coffee traditions. We source our beans directly
                  from Vietnam's highlands, ensuring the highest quality and
                  most authentic flavors.
                </p>
                <p className="text-gray-600">
                  Our coffee is prepared using traditional methods, including
                  the iconic Vietnamese drip filter (phin), creating a rich,
                  bold flavor that's distinctively different from Western coffee
                  styles.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <Coffee className="h-5 w-5 text-amber-700" />
                    </div>
                    <span className="font-medium">Authentic Recipes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-amber-700" />
                    </div>
                    <span className="font-medium">Traditional Methods</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Featured Drinks */}
        <section className="py-16 bg-amber-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="inline-block rounded-full bg-amber-800 px-3 py-1 text-sm text-amber-100 mb-2">
                Our Specialties
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-100 mb-4">
                Signature Vietnamese Coffee
              </h2>
              <p className="text-amber-100/80 max-w-2xl mx-auto">
                Experience the unique flavors that make Vietnamese coffee
                world-famous
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Coffee 1 */}
              <div className="bg-amber-800/50 rounded-lg p-6 text-center">
                <div className="h-40 w-40 mx-auto mb-4 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Cà Phê Sữa Đá"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-amber-100 mb-2">
                  Cà Phê Sữa Đá
                </h3>
                <p className="text-amber-100/80">
                  Traditional iced coffee with condensed milk
                </p>
              </div>

              {/* Coffee 2 */}
              <div className="bg-amber-800/50 rounded-lg p-6 text-center">
                <div className="h-40 w-40 mx-auto mb-4 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Egg Coffee"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-amber-100 mb-2">
                  Egg Coffee
                </h3>
                <p className="text-amber-100/80">
                  Coffee topped with whipped egg cream
                </p>
              </div>

              {/* Coffee 3 */}
              <div className="bg-amber-800/50 rounded-lg p-6 text-center">
                <div className="h-40 w-40 mx-auto mb-4 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Coconut Coffee"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-amber-100 mb-2">
                  Coconut Coffee
                </h3>
                <p className="text-amber-100/80">
                  Blended coffee with coconut cream
                </p>
              </div>

              {/* Coffee 4 */}
              <div className="bg-amber-800/50 rounded-lg p-6 text-center">
                <div className="h-40 w-40 mx-auto mb-4 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Phin Filter Coffee"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-amber-100 mb-2">
                  Phin Filter Coffee
                </h3>
                <p className="text-amber-100/80">
                  Slow-dripped traditional black coffee
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-900 mb-2">
                Visit Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
                Find Us in Nottingham
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We&apos;re conveniently located in the heart of Nottingham. Come
                experience the taste of Vietnam!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-amber-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-amber-900 mb-4">
                  Opening Hours
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">7:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">8:00 AM - 9:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                </ul>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-amber-700 mt-1" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-600">
                        123 Market Street, Nottingham, NG1 6HX
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-amber-700 mt-1" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">+44 115 123 4567</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-amber-700 hover:bg-amber-800">
                    Get Directions
                  </Button>
                </div>
              </div>

              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Map location of VietCyclo Coffee Shop"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <MapPin className="h-8 w-8 text-amber-700 mx-auto" />
                    <p className="font-bold text-amber-900 mt-2">
                      VietCyclo Coffee
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-amber-100">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Ready to Experience VietCyclo?
            </h2>
            <p className="text-amber-800/80 max-w-2xl mx-auto mb-8">
              Don&apos;t forget to bring your promo code for special discounts
              on your visit!
            </p>
            <Button size="lg" className="bg-amber-700 hover:bg-amber-800">
              View All Promotions <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="h-6 w-6" />
                <span className="text-xl font-bold">VietCyclo</span>
              </div>
              <p className="text-amber-100/80 mb-6">
                Authentic Vietnamese coffee experience in the heart of
                Nottingham.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-amber-100/80 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-100/80 hover:text-white">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-100/80 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-100/80 hover:text-white">
                    Promotions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-100/80 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Newsletter</h3>
              <p className="text-amber-100/80 mb-4">
                Subscribe to get updates on new promotions and seasonal
                specials.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 rounded-md text-amber-900 flex-1"
                />
                <Button className="bg-amber-600 hover:bg-amber-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-800 mt-10 pt-6 text-center text-amber-100/60">
            <p>
              &copy; {new Date().getFullYear()} VietCyclo Coffee. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
