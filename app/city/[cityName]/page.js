"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"
import Image from "next/image" 

const cityHotels = {
    "lahore": [
        {
            id: 1,
            name: "Pearl Continental Hotel",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
            rating: 4.5,
            price: "$120/night",
            description: "Luxury hotel in the heart of Lahore with modern amenities and excellent service.",
            amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Parking"]
        },
        {
            id: 2,
            name: "Avari Hotel",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop",
            rating: 4.3,
            price: "$95/night",
            description: "Historic hotel with traditional Pakistani hospitality and contemporary comfort.",
            amenities: ["WiFi", "Restaurant", "Bar", "Gym", "Business Center"]
        },
        {
            id: 3,
            name: "Nishat Hotel",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop",
            rating: 4.1,
            price: "$75/night",
            description: "Comfortable accommodation with easy access to Lahore's cultural attractions.",
            amenities: ["WiFi", "Restaurant", "Parking", "Room Service"]
        }
    ],
    "karachi": [
        {
            id: 4,
            name: "Marriott Hotel Karachi",
            image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&h=300&fit=crop",
            rating: 4.6,
            price: "$140/night",
            description: "Premium beachfront hotel with stunning ocean views and world-class facilities.",
            amenities: ["WiFi", "Pool", "Spa", "Beach Access", "Restaurant", "Bar"]
        },
        {
            id: 5,
            name: "Ramada Plaza",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
            rating: 4.2,
            price: "$100/night",
            description: "Modern hotel in the business district with excellent connectivity.",
            amenities: ["WiFi", "Gym", "Restaurant", "Business Center", "Parking"]
        },
        {
            id: 6,
            name: "Hotel Crown Inn",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&h=300&fit=crop",
            rating: 3.9,
            price: "$65/night",
            description: "Budget-friendly option with clean rooms and essential amenities.",
            amenities: ["WiFi", "Restaurant", "Parking", "24/7 Front Desk"]
        }
    ],
    "islamabad": [
        {
            id: 7,
            name: "Serena Hotel Islamabad",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop",
            rating: 4.7,
            price: "$150/night",
            description: "Luxury hotel with beautiful mountain views and exceptional service.",
            amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Gym", "Business Center"]
        },
        {
            id: 8,
            name: "Islamabad Hotel",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop",
            rating: 4.0,
            price: "$85/night",
            description: "Comfortable hotel in the diplomatic enclave with modern facilities.",
            amenities: ["WiFi", "Restaurant", "Parking", "Room Service", "Gym"]
        }
    ],
    "multan": [
        {
            id: 9,
            name: "Ramada Multan",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
            rating: 4.3,
            price: "$90/night",
            description: "Modern hotel with traditional Pakistani architecture and warm hospitality.",
            amenities: ["WiFi", "Pool", "Restaurant", "Parking", "Spa"]
        },
        {
            id: 10,
            name: "Multan Serena Hotel",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop",
            rating: 4.4,
            price: "$110/night",
            description: "Luxury accommodation near historical shrines with cultural experiences.",
            amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Cultural Tours"]
        }
    ],
    "hunza-valley": [
        {
            id: 11,
            name: "Hunza Serena Inn",
            image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&h=300&fit=crop",
            rating: 4.8,
            price: "$130/night",
            description: "Mountain resort with breathtaking views of the Karakoram range.",
            amenities: ["WiFi", "Mountain Views", "Restaurant", "Hiking Tours", "Parking"]
        },
        {
            id: 12,
            name: "Eagle's Nest Hotel",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
            rating: 4.5,
            price: "$95/night",
            description: "Cozy mountain lodge with panoramic valley views and local charm.",
            amenities: ["Mountain Views", "Restaurant", "Local Tours", "Parking"]
        }
    ],
    "skardu": [
        {
            id: 13,
            name: "Shangrila Resort",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop",
            rating: 4.6,
            price: "$120/night",
            description: "Lakeside resort with stunning natural beauty and adventure activities.",
            amenities: ["Lake Views", "Boat Rides", "Restaurant", "Adventure Tours", "Parking"]
        },
        {
            id: 14,
            name: "Skardu Continental",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&h=300&fit=crop",
            rating: 4.2,
            price: "$80/night",
            description: "Comfortable hotel with easy access to Skardu's natural attractions.",
            amenities: ["WiFi", "Restaurant", "Parking", "Trekking Tours"]
        }
    ],
    "naran": [
        {
            id: 15,
            name: "Naran Valley Hotel",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
            rating: 4.3,
            price: "$70/night",
            description: "Mountain hotel with access to beautiful lakes and hiking trails.",
            amenities: ["Mountain Views", "Restaurant", "Hiking Tours", "Parking"]
        },
        {
            id: 16,
            name: "Kaghan Valley Resort",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop",
            rating: 4.1,
            price: "$85/night",
            description: "Scenic resort surrounded by mountains and natural beauty.",
            amenities: ["Mountain Views", "Restaurant", "Nature Tours", "Parking"]
        }
    ],
    "fairy-meadows": [
        {
            id: 17,
            name: "Fairy Meadows Cottages",
            image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&h=300&fit=crop",
            rating: 4.7,
            price: "$100/night",
            description: "Rustic cottages with direct views of Nanga Parbat mountain.",
            amenities: ["Mountain Views", "Camping", "Hiking Tours", "Basic Amenities"]
        }
    ],
    "gwadar": [
        {
            id: 18,
            name: "Gwadar Serena Hotel",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop",
            rating: 4.4,
            price: "$110/night",
            description: "Beachfront hotel with modern amenities and coastal views.",
            amenities: ["Beach Access", "WiFi", "Pool", "Restaurant", "Parking"]
        }
    ],
    "naltar-valley": [
        {
            id: 19,
            name: "Naltar Valley Resort",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
            rating: 4.3,
            price: "$85/night",
            description: "Mountain resort with access to beautiful lakes and skiing facilities.",
            amenities: ["Mountain Views", "Skiing", "Restaurant", "Hiking Tours", "Parking"]
        }
    ],
    "makran-coast": [
        {
            id: 20,
            name: "Makran Coastal Resort",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop",
            rating: 4.2,
            price: "$95/night",
            description: "Coastal resort with stunning ocean views and traditional architecture.",
            amenities: ["Beach Access", "WiFi", "Restaurant", "Fishing Tours", "Parking"]
        }
    ]
}


const cityInfo = {
    "lahore": {
        name: "Lahore",
        description: "The cultural heart of Pakistan, known for its rich history, Mughal architecture, and vibrant food scene.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop"
    },
    "karachi": {
        name: "Karachi",
        description: "Pakistan's largest city and economic hub, offering a blend of modern urban life and coastal charm.",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&h=400&fit=crop"
    },
    "islamabad": {
        name: "Islamabad",
        description: "The modern capital city, known for its green spaces, diplomatic enclave, and proximity to the Margalla Hills.",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=400&fit=crop"
    },
    "multan": {
        name: "Multan",
        description: "The city of saints, famous for its Sufi shrines, blue pottery, and rich cultural heritage.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=400&fit=crop"
    },
    "hunza-valley": {
        name: "Hunza Valley",
        description: "A paradise in the mountains, known for its stunning landscapes, friendly people, and long life expectancy.",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&h=400&fit=crop"
    },
    "skardu": {
        name: "Skardu",
        description: "Gateway to the world's highest peaks, offering breathtaking mountain views and adventure opportunities.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=400&fit=crop"
    },
    "naran": {
        name: "Naran",
        description: "A beautiful valley town known for its pristine lakes, hiking trails, and cool mountain climate.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=400&fit=crop"
    },
    "fairy-meadows": {
        name: "Fairy Meadows",
        description: "A magical meadow with direct views of Nanga Parbat, offering camping and trekking experiences.",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&h=400&fit=crop"
    },
    "gwadar": {
        name: "Gwadar",
        description: "A coastal city with beautiful beaches, fishing culture, and strategic importance as a port city.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=400&fit=crop"
    },
    "naltar-valley": {
        name: "Naltar Valley",
        description: "A picturesque valley known for its colorful lakes, skiing opportunities, and pristine mountain landscapes.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=400&fit=crop"
    },
    "makran-coast": {
        name: "Makran Coast",
        description: "A stunning coastal region with pristine beaches, traditional fishing villages, and unique geological formations.",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=400&fit=crop"
    }
}


export default function CityPage() {
  const params = useParams()
  const cityName = params.cityName
  const hotels = cityHotels[cityName] || []
  const city = cityInfo[cityName]

  const [showForm, setShowForm] = useState(false)
  const [selectedHotel, setSelectedHotel] = useState(null)
  const [formData, setFormData] = useState({ name: "", email: "", days: 1 })
  const [bookingInfo, setBookingInfo] = useState(null)

  const handleClick = (hotel) => {
    setSelectedHotel(hotel)
    setShowForm(true)
  }

  const handleClose = () => {
    setShowForm(false)
    setSelectedHotel(null)
    setFormData({ name: "", email: "", days: 1 })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const today = new Date()
    const randomOffset = Math.floor(Math.random() * 30)
    const checkInDate = new Date(today.setDate(today.getDate() + randomOffset))
    const formattedDate = checkInDate.toDateString()

    setBookingInfo({
      hotel: selectedHotel,
      name: formData.name,
      email: formData.email,
      days: formData.days,
      checkIn: formattedDate
    })

    handleClose()
  }

  if (!city) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">City Not Found</h1>
          <p className="text-gray-600 mb-8">The city you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero Section */}
      <div
        className="h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${city.image})` }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-600 bg-white/60 px-4 py-2 rounded">
          {city.name}
        </h1>
      </div>

      {/* Hotels Section */}
      <section className="py-20 container mx-auto px-6 relative z-0">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-600 mb-4">Hotels in {city.name}</h2>
          <p className="text-gray-800 text-lg">{city.description}</p>
        </div>

        {hotels.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <motion.div
                key={hotel.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-green-800">{hotel.name}</h3>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="ml-1 text-gray-600">{hotel.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 text-sm">{hotel.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">{hotel.price}</span>
                    <button
                      onClick={() => handleClick(hotel)}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No hotels available for this city yet.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            href="/"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            ← Back to Destinations
          </Link>
        </div>
      </section>

      {/* Booking Card Side Panel */}
      <AnimatePresence>
        {bookingInfo && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-20 right-10 w-80 bg-white border border-gray-200 rounded-2xl shadow-xl p-6 z-50"
          >
            <h2 className="text-2xl font-bold text-green-700 mb-2">{bookingInfo.hotel.name}</h2>
            <p className="text-green-800 mb-1"><strong>Name:</strong> {bookingInfo.name}</p>
            <p className="text-green-800 mb-1"><strong>Email:</strong> {bookingInfo.email}</p>
            <p className="text-green-800 mb-1"><strong>Days:</strong> {bookingInfo.days}</p>
            <p className="text-green-800 mb-3"><strong>Check-in:</strong> {bookingInfo.checkIn}</p>
            <button
              onClick={() => setBookingInfo(null)}
              className="mt-2 w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-white rounded-2xl p-8 w-full max-w-md relative">
              <h2 className="text-2xl font-bold mb-4 text-green-700">
                Book {selectedHotel?.name}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-green-800">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border text-black border-gray-300 rounded-lg px-3 py-2 mt-1"
                  />
                </div>
                <div>
                  <label className="block text-green-800">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full text-black border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  />
                </div>
                <div>
                  <label className="block text-green-800">Number of Days</label>
                  <input
                    type="number"
                    name="days"
                    min="1"
                    value={formData.days}
                    onChange={handleChange}
                    required
                    className="w-full border text-black border-gray-300 rounded-lg px-3 py-2 mt-1"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-4 py-2 rounded-lg border text-green-600 border-gray-300 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
