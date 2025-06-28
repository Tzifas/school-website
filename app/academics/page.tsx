'use client';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SCHOOL_NAME, IMAGES } from '../constants';

export default function Academics() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src={IMAGES.stem}
          alt="STEM Laboratory"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#025464]/80 to-[#E57C23]/80">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <h1 className="text-5xl font-bold text-white">Academic Excellence</h1>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#025464] mb-12">Our Academic Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* STEM Program */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#E57C23]">
              <h3 className="text-xl font-bold text-[#025464] mb-4">STEM Excellence</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Advanced Mathematics</li>
                <li>• Computer Science & Programming</li>
                <li>• Robotics & AI</li>
                <li>• Environmental Science</li>
                <li>• Engineering Principles</li>
              </ul>
            </div>

            {/* Arts & Humanities */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#E57C23]">
              <h3 className="text-xl font-bold text-[#025464] mb-4">Arts & Humanities</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• African Literature</li>
                <li>• World History</li>
                <li>• Visual Arts</li>
                <li>• Music & Dance</li>
                <li>• Cultural Studies</li>
              </ul>
            </div>

            {/* Business Studies */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#E57C23]">
              <h3 className="text-xl font-bold text-[#025464] mb-4">Business Studies</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Entrepreneurship</li>
                <li>• Economics</li>
                <li>• Financial Literacy</li>
                <li>• Marketing</li>
                <li>• Business Ethics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-20 bg-[#F8F1F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#025464] mb-12">Our Teaching Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Image
                src={IMAGES.library}
                alt="Modern Library"
                width={600}
                height={400}
                className="rounded-xl"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#025464] mb-3">Project-Based Learning</h3>
                <p className="text-gray-600">
                  Students engage in hands-on projects that solve real-world problems, 
                  combining traditional wisdom with modern innovation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#025464] mb-3">Small Class Sizes</h3>
                <p className="text-gray-600">
                  Maximum attention and support with a student-to-teacher ratio of 15:1.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#025464] mb-3">Technology Integration</h3>
                <p className="text-gray-600">
                  Modern learning tools and platforms enhance the educational experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#025464] mb-3">Cultural Integration</h3>
                <p className="text-gray-600">
                  African principles and values are woven into all subjects and activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#025464] mb-12">Academic Calendar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#E57C23] mb-4">Term 1</h3>
              <p className="text-gray-600 mb-4">September - December</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Orientation Week: Sept 1-7</li>
                <li>• Mid-term Break: Oct 15-22</li>
                <li>• Final Exams: Dec 10-20</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#E57C23] mb-4">Term 2</h3>
              <p className="text-gray-600 mb-4">January - March</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Classes Resume: Jan 10</li>
                <li>• Cultural Week: Feb 15-21</li>
                <li>• Final Exams: Mar 15-25</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#E57C23] mb-4">Term 3</h3>
              <p className="text-gray-600 mb-4">April - July</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Classes Resume: Apr 10</li>
                <li>• Sports Week: May 15-21</li>
                <li>• Final Exams: Jul 1-10</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 