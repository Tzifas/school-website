'use client';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SCHOOL_NAME, IMAGES } from '../constants';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src={IMAGES.about}
          alt="Students in classroom"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#025464]/80 to-[#E57C23]/80">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <h1 className="text-5xl font-bold text-white">About {SCHOOL_NAME}</h1>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#025464] mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg">
                To provide world-class education rooted in African values and traditions, 
                empowering students to become innovative leaders who bridge cultural heritage 
                with global progress. At {SCHOOL_NAME}, we cultivate excellence, creativity, 
                and cultural pride while preparing students for success in an interconnected world.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#025464] mb-6">Our Vision</h2>
              <p className="text-gray-600 text-lg">
                To be the leading educational institution that exemplifies the perfect harmony 
                between African wisdom and modern innovation. We envision our graduates as 
                confident, culturally-aware leaders who drive positive change in their 
                communities and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#F8F1F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#025464] mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#E57C23]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-[#025464] mb-4">Cultural Pride</h3>
              <p className="text-gray-600">
                Celebrating and preserving African heritage while embracing global perspectives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#E57C23]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-[#025464] mb-4">Excellence</h3>
              <p className="text-gray-600">
                Pursuing the highest standards in academics, character, and leadership.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[#E57C23]/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-[#025464] mb-4">Community</h3>
              <p className="text-gray-600">
                Fostering a supportive environment that nurtures collaboration and mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#025464] mb-12">Our Journey</h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold text-[#E57C23]">2010</h3>
                <p className="text-xl text-[#025464]">Foundation</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600">
                  {SCHOOL_NAME} was established with a vision to provide quality education 
                  that honors African heritage while embracing modern educational practices.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold text-[#E57C23]">2015</h3>
                <p className="text-xl text-[#025464]">STEM Innovation Center</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600">
                  Launched state-of-the-art STEM facilities to nurture the next generation 
                  of African innovators and scientists.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold text-[#E57C23]">2018</h3>
                <p className="text-xl text-[#025464]">Cultural Arts Center</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600">
                  Opened our Cultural Arts Center, dedicated to preserving and celebrating 
                  African arts, music, and traditions.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold text-[#E57C23]">2023</h3>
                <p className="text-xl text-[#025464]">Global Recognition</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600">
                  Recognized as a leading institution in Africa for our innovative approach 
                  to blending traditional values with modern education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 