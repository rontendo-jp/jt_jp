import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Star, Heart, ArrowRight, Wheat, Film, ChevronLeft, ChevronRight, Microwave, Timer, Zap, AlertTriangle, ChefHat } from 'lucide-react';
import { cn, optimizeImage, Navbar, Footer } from './Shared';

/**
 * Reusable Core Component for Jolly Time Popcorn Japan
 * Exports both default and named components.
 */

export function JollyTimeLineupVariant() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Demonstrating the UI components
  return (
    <div className="font-sans antialiased text-stone-900 bg-stone-50">
      <Navbar onContactClick={() => {}} />
      
      <section className="pt-32 pb-20 px-6 container mx-auto text-center">
        <h1 className="text-5xl font-black mb-8 text-primary">Component Preview</h1>
        <p className="text-xl text-stone-600 mb-12">This is the reusable component library for Jolly Time Japan.</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
            <h3 className="text-2xl font-black mb-4">Navbar & Footer</h3>
            <p className="text-stone-600">Pre-styled layout components with Tally integration.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
            <h3 className="text-2xl font-black mb-4">Optimized Images</h3>
            <p className="text-stone-600">Utility for on-the-fly WebP conversion and resizing.</p>
          </div>
        </div>
      </section>

      <Footer onContactClick={() => {}} />
    </div>
  );
}

export default JollyTimeLineupVariant;
