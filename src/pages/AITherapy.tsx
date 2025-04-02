
import React from 'react';
import { Brain } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AITherapyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-mind-teal/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 flex items-center gap-4">
              <div className="bg-mind-teal w-14 h-14 rounded-xl flex items-center justify-center">
                <Brain className="h-7 w-7 text-teal-500" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-mind-text">AI Therapy Chatbot</h1>
            </div>
            
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden mb-10">
              <div className="p-8">
                <p className="text-lg text-mind-text mb-6 leading-relaxed">
                  Engage in self-therapy conversations powered by our advanced AI that identifies negative thought 
                  patterns and suggests cognitive reframing techniques. Available 24/7 whenever you need support.
                </p>
                
                <h2 className="text-xl font-semibold text-mind-text mb-4">Key Benefits</h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="bg-mind-teal/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    </div>
                    <span>Available 24/7 for immediate support whenever you need it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-mind-teal/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    </div>
                    <span>Uses evidence-based cognitive behavioral therapy techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-mind-teal/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    </div>
                    <span>Helps identify and reframe negative thought patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-mind-teal/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    </div>
                    <span>Completely private conversations with state-of-the-art encryption</span>
                  </li>
                </ul>
                
                <div className="flex justify-center">
                  <Link to="/therapy">
                    <Button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:shadow-glow hover:-translate-y-1 transition-all duration-300 px-8 py-6 h-auto text-lg">
                      Start Chatting
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

export default AITherapyPage;
