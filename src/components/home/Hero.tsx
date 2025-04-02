
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Subtle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-mind-blue/30 blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-mind-teal/20 blur-3xl animate-pulse-subtle" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-40 right-40 w-40 h-40 rounded-full bg-mind-lavender/20 blur-3xl animate-pulse-subtle" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-mind-text tracking-tight leading-tight animate-fade-in"
          >
            Nurturing Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Mental Wellbeing</span> with AI
          </h1>
          
          <p 
            className="text-lg md:text-xl text-mind-subtle max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            A comprehensive mental health platform integrating AI-driven self-reflection, therapy, mood tracking, and wellness tools for holistic well-being.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" 
            style={{ animationDelay: "0.4s" }}
          >
            <Link 
              to="/journal" 
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:shadow-glow transform transition-all duration-300 hover:-translate-y-1"
            >
              Start Journal <ArrowRight size={16} />
            </Link>
            <Link 
              to="/therapy" 
              className="px-8 py-3 rounded-full border border-mind-blue/30 bg-white/50 backdrop-blur-subtle text-mind-text font-medium hover:bg-mind-blue/20 transition-all duration-300"
            >
              Try AI Therapy
            </Link>
          </div>
        </div>
        
        <div 
          ref={heroRef}
          className="mt-16 max-w-4xl mx-auto bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-glow animate-scale-in" 
          style={{ animationDelay: "0.6s" }}
        >
          <div className="bg-gradient-to-r from-mind-blue/40 to-mind-teal/40 h-2"></div>
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-mind-blue/40 flex items-center justify-center">
                  <span className="text-blue-500 font-semibold">MS</span>
                </div>
                <div>
                  <h3 className="font-medium text-mind-text">MindSphere Assistant</h3>
                  <p className="text-xs text-mind-subtle">AI Therapy Session</p>
                </div>
              </div>
              <span className="text-xs text-mind-subtle">Just now</span>
            </div>
            
            <div className="space-y-4">
              <p className="text-mind-text p-3 bg-mind-blue/20 rounded-2xl rounded-tl-none max-w-[80%]">
                How are you feeling today? I'm here to listen and provide support for whatever you might be going through.
              </p>
              
              <p className="text-mind-text p-3 bg-mind-green/20 rounded-2xl rounded-tr-none max-w-[80%] ml-auto">
                I've been feeling a bit anxious about work lately. There's a lot of pressure to perform.
              </p>
              
              <p className="text-mind-text p-3 bg-mind-blue/20 rounded-2xl rounded-tl-none max-w-[80%]">
                It's completely normal to feel anxious when facing work pressure. Let's explore some techniques that might help you manage this anxiety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
