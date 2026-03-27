'use client';

import React from 'react';
import { GlowCard } from '@/components/ui/spotlight-card';
import { ImageCarousel } from '@/components/ui/image-carousel';

const DemoPage = () => {
  const campusImages = [
    'https://images.unsplash.com/photo-1517694712202-14dd11fa65e1?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1522071820081-940485675e7e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1497633762265-25c147e2e6d5?auto=format&fit=crop&w=800&q=80'
  ];

  const departmentCards = [
    { name: 'Civil Engineering', color: 'blue' as const },
    { name: 'Mechanical Engineering', color: 'purple' as const },
    { name: 'Electrical Engineering', color: 'green' as const },
    { name: 'Electronics & Instrumentation', color: 'orange' as const },
    { name: 'Computer Science & Engineering', color: 'gold' as const },
    { name: 'Chemical Engineering', color: 'red' as const },
    { name: 'Aerospace Engineering', color: 'blue' as const },
    { name: 'Machine Learning & AI', color: 'purple' as const }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="py-20 px-6 border-b border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            BMSCE Departments
          </h1>
          <p className="text-slate-300 text-xl">
            Excellence in Engineering Education & Research
          </p>
        </div>
      </header>

      {/* Image Carousel Section */}
      <section className="py-16 px-6 border-b border-slate-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-yellow-400">Campus Gallery</h2>
          <ImageCarousel
            images={campusImages}
            interval={3000}
            className="h-96 shadow-2xl rounded-xl overflow-hidden"
          />
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-yellow-400">Our Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departmentCards.map((dept, index) => (
              <GlowCard
                key={index}
                glowColor={dept.color}
                customSize
                width="100%"
                height={300}
                className="!p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-transform"
              >
                <h3 className="text-lg font-bold text-yellow-400">{dept.name}</h3>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-yellow-400">Why Choose Our Departments?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Industry Partnerships',
                description: 'Strong collaborations with leading companies for internships and recruitment'
              },
              {
                title: 'Modern Labs',
                description: 'State-of-the-art facilities and equipment for practical learning'
              },
              {
                title: 'Expert Faculty',
                description: 'PhD-qualified faculty with research publications and industry experience'
              },
              {
                title: 'High Placements',
                description: '98% placement rate with competitive salary packages'
              }
            ].map((feature, idx) => (
              <GlowCard
                key={idx}
                glowColor="gold"
                customSize
                width="100%"
                height="auto"
                className="!p-6"
              >
                <h4 className="text-xl font-bold text-yellow-400 mb-3">{feature.title}</h4>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <GlowCard glowColor="gold" customSize width="100%" height="auto" className="!p-12">
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">Ready to Join Us?</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Explore our departments and discover the perfect engineering path for your future.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-3 px-8 rounded-lg transition-all">
              Explore Departments
            </button>
          </GlowCard>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;
