'use client';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { SCHOOL_NAME, SCHOOL_MOTTO, IMAGES, FEATURES, TESTIMONIALS } from './constants';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with African Pattern Background */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero}
            alt="Modern African school building"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#025464]/80 to-[#E57C23]/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">{SCHOOL_NAME}</h1>
            <p className="text-xl md:text-2xl mb-8">{SCHOOL_MOTTO}</p>
            <div className="space-x-4">
              <button className="bg-[#E57C23] text-white px-8 py-3 rounded-lg hover:bg-[#E8AA42] transition-colors">
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#025464] transition-colors">
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with African Patterns */}
      <section className="py-20 bg-[#F8F1F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#025464] mb-4">Why Choose {SCHOOL_NAME}?</h2>
            <p className="text-xl text-gray-600">Blending African heritage with modern education</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#E57C23]">
                <div className="text-[#E57C23] mb-4">
                  {/* Icon would go here - using placeholder for now */}
                  <div className="w-12 h-12 bg-[#E57C23]/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#025464] mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#025464] mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600">Excellence in every field</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* STEM Program */}
            <div className="relative group overflow-hidden rounded-xl">
              <Image
                src={IMAGES.stem}
                alt="STEM Laboratory"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">STEM Excellence</h3>
                  <p className="opacity-0 group-hover:opacity-100 transition-opacity">
                    Cutting-edge labs and innovative teaching methods
                  </p>
                </div>
              </div>
            </div>

            {/* Arts & Culture */}
            <div className="relative group overflow-hidden rounded-xl">
              <Image
                src={IMAGES.arts}
                alt="Cultural Arts"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Arts & Culture</h3>
                  <p className="opacity-0 group-hover:opacity-100 transition-opacity">
                    Celebrating African creativity and expression
                  </p>
                </div>
              </div>
            </div>

            {/* Sports */}
            <div className="relative group overflow-hidden rounded-xl">
              <Image
                src={IMAGES.sports}
                alt="Sports Facilities"
                width={400}
                height={300}
                className="w-full h-[300px] object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Sports Excellence</h3>
                  <p className="opacity-0 group-hover:opacity-100 transition-opacity">
                    World-class facilities and professional coaching
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#025464] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Community</h2>
            <p className="text-xl opacity-80">Hear from our family</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="opacity-80">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-lg italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.campus}
            alt="Campus"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-[#E57C23]/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Begin Your Journey at {SCHOOL_NAME}</h2>
          <p className="text-xl mb-8">Take the first step towards an exceptional education rooted in African excellence</p>
          <button className="bg-white text-[#E57C23] px-8 py-3 rounded-lg hover:bg-[#F8F1F1] transition-colors">
            Apply Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
