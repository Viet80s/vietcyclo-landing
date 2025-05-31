import Image from "next/image";
import {
  Coffee,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  ChevronRight,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import StackComponent from "@/components/Stack";
import Link from "next/link";
import { AnimatedShinyTextDemo } from "@/components/FancyButton";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b px-10 shadow-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/pictures/logo.webp"
              alt="VietCyclo Logo"
              width={40}
              height={40}
            />
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
              About VietCyclo
            </a>
            <a
              href="#location"
              className="text-sm font-medium hover:text-amber-700 transition-colors"
            >
              Find Us
            </a>
          </nav>
          <Link href="#location">
            <Button size="sm" className="bg-amber-700 hover:bg-amber-800">
              Visit Us
            </Button>
          </Link>
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
              <div className="inline-block rounded-full px-3 py-1 text-sm text-amber-900 mb-2">
                <AnimatedShinyTextDemo text={"✨ Now Open in Nottingham ✨"} />
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
                <Link href="#promo">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                    Get Promo Codes
                  </Button>
                </Link>
                <Link href="https://vietcyclo.co.uk/menu-category">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 text-white border-white hover:bg-white/20"
                  >
                    VietCyclo Menu
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Promo Code Section */}
        <section id="promo" className="py-16 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div>
                <AnimatedShinyTextDemo text={"🎉 Limited Time Offer 🎉"} />
              </div>
              <h2 className="text-3xl mt-5 md:text-4xl font-bold text-amber-900 mb-4">
                Exclusive Promo Codes
              </h2>
              <p className="text-lg text-amber-800/80 max-w-2xl text-pretty">
                Celebrate our grand opening with these special offers. Simply
                swipe and choose the code you&apos;d like, then add it to your
                VietCyclo Rewards account!
              </p>
              {/* <p className="text-md mt-3 text-amber-800/80 max-w-2xl text-pretty">
                Your code will be used once and automatically applied to your
                next purchase at our Nottingham location. But you can add codes
                as much as you want to your account!
              </p> */}
            </div>

            <StackComponent />
          </div>
        </section>

        {/* About Section */}
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
                  Bringing Vietnam&apos;s Coffee Culture to Nottingham
                </h2>
                <p className="text-gray-600">
                  VietCyclo is a passion project born from our love of authentic
                  Vietnamese coffee traditions. We source our beans directly
                  from Vietnam&apos;s highlands, ensuring the highest quality
                  and most authentic flavors.
                </p>
                <p className="text-gray-600">
                  Our coffee is prepared using traditional methods, including
                  the iconic Vietnamese drip filter (phin), creating a rich,
                  bold flavor that&apos;s distinctively different from Western
                  coffee styles.
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
        </section>

        {/* Location Section */}
        <section id="location" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="mt-5 text-3xl md:text-4xl font-bold text-amber-900 mb-4">
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
                    <span className="font-medium text-gray-600">
                      7:00 AM - 8:00 PM
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-gray-600">
                      8:00 AM - 9:00 PM
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-600">
                      9:00 AM - 6:00 PM
                    </span>
                  </li>
                </ul>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-amber-700" />
                    <div>
                      <p className="text-gray-600">
                        63-65 Friar Lane, Nottingham, NG1 6DH
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-amber-700" />
                    <div>
                      <p className="text-gray-600">+44 115 123 4567</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="https://maps.app.goo.gl/CqDN1B3QJAi34dti9">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800">
                      Get Directions
                    </Button>
                  </Link>
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
            <Link href="#promo">
              <Button size="lg" className="bg-amber-700 hover:bg-amber-800">
                View All Promotions <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-xanh opacity-80 text-md md:text-lg my-8 p-6 border-t border-xanh/20">
        <a href={"mailto:info@vietcyclo.co.uk"}>
          <p className="underline">Email us: info@vietcyclo.co.uk</p>
        </a>
        <p className="mt-1">63-67 Friar Lane, Nottingham NG1 6DH</p>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} Viet Cyclo LTD. All Rights Reserved.
        </p>
        <div className="text-right flex items-center text-xanh text-md justify-center mt-4">
          <Link href={"https://kitebusinesssolution.com/"}>
            <div className="mr-2">Powered by KITE</div>
          </Link>
          <div>
            <Image
              src="/pictures/kite.png"
              alt="VietCyclo Logo"
              width={30}
              height={30}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
