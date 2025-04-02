
import React from 'react';
import { Coffee } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MindfulBreaksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-mind-sand/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 flex items-center gap-4">
              <div className="bg-mind-sand w-14 h-14 rounded-xl flex items-center justify-center">
                <Coffee className="h-7 w-7 text-amber-500" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-mind-text">Mindful Breaks & Stress Detection</h1>
            </div>
            
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden mb-10">
              <div className="p-8">
                <p className="text-lg text-mind-text mb-6 leading-relaxed">
                  Receive reminders for relaxation exercises like breathing and stretching when our AI detects signs of stress
                  in your usage patterns. Build healthy habits with timed mindfulness activities throughout your day.
                </p>
                
                <h2 className="text-xl font-semibold text-mind-text mb-4">Key Benefits</h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="bg-mind-sand/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    </div>
                    <span>AI detects potential stress patterns to offer timely support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-mind-sand/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    </div>
                    <span>Guided breathing exercises to reduce anxiety in moments of stress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-mind-sand/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    </div>
                    <span>Quick stretching routines to release physical tension</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-mind-sand/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    </div>
                    <span>Customizable reminder schedule to build a mindfulness routine</span>
                  </li>
                </ul>
                
                <div className="flex justify-center">
                  <Link to="/self-care">
                    <Button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-glow hover:-translate-y-1 transition-all duration-300 px-8 py-6 h-auto text-lg">
                      Try Mindful Breaks
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MindfulBreaksPage;
