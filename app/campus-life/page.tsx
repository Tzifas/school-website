'use client';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SCHOOL_NAME, IMAGES } from '../constants';

export default function CampusLife() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src={IMAGES.arts}
          alt="Campus Life"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#025464]/80 to-[#E57C23]/80">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">Campus Life</h1>
              <p className="text-xl">Experience the vibrant community at {SCHOOL_NAME}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#025464] mb-12">Student Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#E57C23]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎭</span>
              </div>
              <h3 className="text-xl font-bold text-[#025464] mb-4">Arts & Culture</h3>
              <p className="text-gray-600">
                Immerse yourself in traditional and contemporary African arts, music, 
                dance, and theater productions throughout the year.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#E57C23]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">⚽</span>
              </div>
              <h3 className="text-xl font-bold text-[#025464] mb-4">Sports</h3>
              <p className="text-gray-600">
                Participate in competitive sports including football, basketball, 
                athletics, and traditional African games.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#E57C23]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-[#025464] mb-4">Clubs</h3>
              <p className="text-gray-600">
                Join various student clubs focusing on leadership, technology, 
                environmental conservation, and community service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-[#F8F1F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#025464] mb-12">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#025464] mb-4">Modern Classrooms</h3>
                <p className="text-gray-600">
                  Smart classrooms equipped with interactive technology and comfortable 
                  learning spaces.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#025464] mb-4">Science Labs</h3>
                <p className="text-gray-600">
                  State-of-the-art laboratories for physics, chemistry, biology, and 
                  computer science.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#025464] mb-4">Sports Complex</h3>
                <p className="text-gray-600">
                  Modern sports facilities including a football field, basketball court, 
                  and Olympic-sized swimming pool.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#025464] mb-4">Cultural Center</h3>
                <p className="text-gray-600">
                  Dedicated space for arts, music, and cultural activities with 
                  performance venues.
                </p>
              </div>
            </div>
            <div>
              <Image
                src={IMAGES.library}
                alt="Modern Library"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Boarding Life */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#025464] mb-12">Boarding Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Image
                src={IMAGES.campus}
                alt="Boarding Facilities"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-600">
                Our boarding facilities provide a home away from home, fostering independence, 
                responsibility, and lifelong friendships. Students enjoy:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#E57C23] mr-2">✓</span>
                  <span className="text-gray-600">
                    Modern, comfortable dormitories with study areas
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E57C23] mr-2">✓</span>
                  <span className="text-gray-600">
                    Nutritious meals featuring both African and international cuisine
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E57C23] mr-2">✓</span>
                  <span className="text-gray-600">
                    24/7 security and medical support
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E57C23] mr-2">✓</span>
                  <span className="text-gray-600">
                    Evening study sessions and mentoring
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E57C23] mr-2">✓</span>
                  <span className="text-gray-600">
                    Weekend activities and excursions
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Student Support */}
      <section className="py-20 bg-[#025464] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Student Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Academic Support</h3>
              <ul className="space-y-2 text-gray-200">
                <li>• Personal tutoring</li>
                <li>• Study groups</li>
                <li>• Career guidance</li>
                <li>• University counseling</li>
              </ul>
            </div>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Health & Wellness</h3>
              <ul className="space-y-2 text-gray-200">
                <li>• On-campus clinic</li>
                <li>• Counseling services</li>
                <li>• Nutrition guidance</li>
                <li>• Fitness programs</li>
              </ul>
            </div>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Personal Development</h3>
              <ul className="space-y-2 text-gray-200">
                <li>• Leadership training</li>
                <li>• Life skills workshops</li>
                <li>• Mentorship programs</li>
                <li>• Community service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 