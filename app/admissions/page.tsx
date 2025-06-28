'use client';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SCHOOL_NAME, IMAGES } from '../constants';

export default function Admissions() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src={IMAGES.campus}
          alt="Campus"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#025464]/80 to-[#E57C23]/80">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">Join {SCHOOL_NAME}</h1>
              <p className="text-xl">Begin your journey towards excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#025464] mb-12">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#E57C23]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#025464] mb-4">Application</h3>
              <p className="text-gray-600">
                Submit your online application with required documents
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#E57C23]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#025464] mb-4">Assessment</h3>
              <p className="text-gray-600">
                Complete entrance assessment and interview
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#E57C23]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#025464] mb-4">Decision</h3>
              <p className="text-gray-600">
                Receive admission decision within 2 weeks
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#E57C23]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-[#025464] mb-4">Enrollment</h3>
              <p className="text-gray-600">
                Complete enrollment and join our community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-[#F8F1F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#025464] mb-12">Admission Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#025464]">Required Documents</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <span className="text-[#E57C23] mr-2">✓</span>
                  Completed application form
                </li>
                <li className="flex items-center">
                  <span className="text-[#E57C23] mr-2">✓</span>
                  Previous academic records
                </li>
                <li className="flex items-center">
                  <span className="text-[#E57C23] mr-2">✓</span>
                  Two recommendation letters
                </li>
                <li className="flex items-center">
                  <span className="text-[#E57C23] mr-2">✓</span>
                  Birth certificate
                </li>
                <li className="flex items-center">
                  <span className="text-[#E57C23] mr-2">✓</span>
                  Passport-size photographs
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#025464]">Academic Requirements</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <span className="text-[#E57C23] mr-2">✓</span>
                  Minimum B average in core subjects
                </li>
                <li className="flex items-center">
                  <span className="text-[#E57C23] mr-2">✓</span>
                  English language proficiency
                </li>
                <li className="flex items-center">
                  <span className="text-[#E57C23] mr-2">✓</span>
                  Mathematics aptitude
                </li>
                <li className="flex items-center">
                  <span className="text-[#E57C23] mr-2">✓</span>
                  Successful entrance exam completion
                </li>
                <li className="flex items-center">
                  <span className="text-[#E57C23] mr-2">✓</span>
                  Interview performance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Fees */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#025464] mb-12">Tuition & Fees</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#025464] mb-4">Junior School</h3>
              <p className="text-3xl font-bold text-[#E57C23] mb-6">₵25,000<span className="text-sm text-gray-600">/year</span></p>
              <ul className="space-y-3 text-gray-600">
                <li>• All core subjects</li>
                <li>• Educational materials</li>
                <li>• Technology access</li>
                <li>• Sports activities</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#E57C23]">
              <h3 className="text-xl font-bold text-[#025464] mb-4">Senior School</h3>
              <p className="text-3xl font-bold text-[#E57C23] mb-6">₵35,000<span className="text-sm text-gray-600">/year</span></p>
              <ul className="space-y-3 text-gray-600">
                <li>• Advanced curriculum</li>
                <li>• Lab access</li>
                <li>• Career counseling</li>
                <li>• College prep</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#025464] mb-4">Additional Fees</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Registration: ₵500</li>
                <li>• Uniform: ₵1,000</li>
                <li>• Transportation: ₵5,000/year</li>
                <li>• Boarding: ₵15,000/year</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-20 bg-[#025464] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8">Take the first step towards an exceptional education at {SCHOOL_NAME}</p>
          <button className="bg-[#E57C23] text-white px-8 py-3 rounded-lg hover:bg-[#E8AA42] transition-colors">
            Apply Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
} 