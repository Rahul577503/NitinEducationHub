"use client";
import HeroSection from "@/components/HeroSection";
import CardList from "@/components/Card";
import ContactUs from "@/components/Contact";
import Topper from "@/components/Topper";
import Link from "next/link";
export default function Home() {
  return (
    <main className=" min-h-full bg-green-50  py-20 ">
      <div>
        <HeroSection />
      </div>
      <div>
        <Topper />
      </div>
      <div className="">
        <CardList />
        <div className="mt-4 text-center">
          <Link href="/learn" className="p-2 text-blue-500 border-2 border-green-500 rounded-md hover:text-blue-700">
            Explore More...
          </Link>
        </div>
      </div>
      <div>
        <ContactUs />
      </div>
    </main>
  );
}
