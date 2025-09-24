"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image" // ✅ Import Next.js Image

export default function HomePage() {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen bg-[url('/hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>

        <header className="relative z-10 flex justify-between items-center p-6">
          <h1 className="text-green-600 font-bold text-2xl">Discover Pakistan</h1>
          <nav className="space-x-6 text-white">
            <Link href="#destinations" className="hover:text-green-600 font-bold">Destinations</Link>
            <Link href="#culture" className="hover:text-green-600 font-bold">Culture</Link>
            <Link href="#gallery" className="hover:text-green-600 font-bold">Gallery</Link>
            <Link href="#contact" className="hover:text-green-600 font-bold">Contact</Link>
          </nav>
        </header>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
          <h2 className="text-5xl font-bold text-center">
            Visit <span className="text-green-600">Pakistan</span>
          </h2>
          <p className="mt-4 text-lg">Breathtaking landscapes & culture await you.</p>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="py-20 container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Destinations</h3>

        {/* Hidden Gems */}
        <h4 className="text-3xl text-center my-4 p-4 font-semibold mb-6 text-green-600">Hidden Gems</h4>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { name: "Fairy Meadows", image: "/fm.jpeg", slug: "fairy-meadows" },
            { name: "Skardu", image: "/skardu.jpeg", slug: "skardu" },
            { name: "Naran", image: "/naran.jpeg", slug: "naran" },
          ].map((place, idx) => (
            <Link key={idx} href={`/city/${place.slug}`}>
              <motion.div whileHover={{ scale: 1.05 }} className="rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                <Image
                  src={place.image}
                  alt={place.name}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{place.name}</h4>
                  <p className="text-gray-600">
                    Discover the beauty of {place.name}, a hidden gem waiting for you.
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Rich Culture */}
        <h4 className="text-3xl text-center my-4 p-4 font-semibold mb-6 text-green-600">Rich Culture</h4>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { name: "Lahore", image: "/lhr.jpeg", slug: "lahore" },
            { name: "Multan", image: "/mlt.jpeg", slug: "multan" },
            { name: "Islamabad", image: "/isb.jpeg", slug: "islamabad" },
          ].map((place, idx) => (
            <Link key={idx} href={`/city/${place.slug}`}>
              <motion.div whileHover={{ scale: 1.05 }} className="rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                <Image
                  src={place.image}
                  alt={place.name}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{place.name}</h4>
                  <p className="text-gray-600">
                    Experience the culture of {place.name}, the heart of Pakistan&apos;s heritage.
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Nature Enriched */}
        <h4 className="text-3xl text-center my-4 p-4 font-semibold mb-6 text-green-600">Nature Enriched</h4>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { name: "Hunza Valley", image: "/hunza.jpeg", slug: "hunza-valley" },
            { name: "Fairy Meadows", image: "/fm.jpeg", slug: "fairy-meadows" },
            { name: "Naltar Valley", image: "/nlt.jpeg", slug: "naltar-valley" },
          ].map((place, idx) => (
            <Link key={idx} href={`/city/${place.slug}`}>
              <motion.div whileHover={{ scale: 1.05 }} className="rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                <Image
                  src={place.image}
                  alt={place.name}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{place.name}</h4>
                  <p className="text-gray-600">
                    Explore breathtaking nature in {place.name}, a paradise for adventurers.
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* South Pakistan */}
        <h4 className="text-3xl text-center my-4 p-4 font-semibold mb-6 text-green-600">South Pakistan</h4>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Karachi", image: "/kch.jpeg", slug: "karachi" },
            { name: "Gwadar", image: "/gwd.jpeg", slug: "gwadar" },
            { name: "Makran Coast", image: "/mkr.jpeg", slug: "makran-coast" },
          ].map((place, idx) => (
            <Link key={idx} href={`/city/${place.slug}`}>
              <motion.div whileHover={{ scale: 1.05 }} className="rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                <Image
                  src={place.image}
                  alt={place.name}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{place.name}</h4>
                  <p className="text-gray-600">
                    Discover the charm of {place.name}, where culture meets the sea.
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">Cultural Heritage</h3>
          <p className="max-w-3xl mx-auto text-gray-700 mb-10">
            From the vibrant streets of Lahore to the soulful shrines of Multan,
            Pakistan&apos;s culture is rich, diverse, and full of life.
          </p>
          <Image
            src="/culture.png"
            alt="Culture"
            width={900}
            height={500}
            className="rounded-2xl mx-auto shadow-lg p-4 w-[100%] mb-10"
          />
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Photo Gallery</h3>
        <div className="grid md:grid-cols-4 gap-7">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <motion.div whileHover={{ scale: 1.1 }} key={n} className="overflow-hidden rounded-xl shadow">
              <Image
                src={`/img${n}.jpeg`}
                alt={`Pakistan view ${n}`}
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-green-700 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Plan Your Journey</h3>
          <p className="mb-8 max-w-xl mx-auto">
            Get insider tips, travel guides, and updates about Pakistan tourism directly in your inbox.
          </p>
          <form className="flex flex-col md:flex-row justify-center gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg text-gray-900 w-full"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-green-700 rounded-lg font-semibold hover:bg-gray-100"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© {new Date().getFullYear()} Discover Pakistan. All rights reserved.</p>
      </footer>
    </div>
  )
}

