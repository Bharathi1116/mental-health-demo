
import React from 'react';
import { MessageCircle } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EmotionalSupportPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-mind-lavender/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 flex items-center gap-4">
              <div className="bg-mind-lavender w-14 h-14 rounded-xl flex items-center justify-center">
                <MessageCircle className="h-7 w-7 text-purple-500" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-mind-text">Anonymous Emotional Support</h1>
            </div>
            
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden mb-10">
              <div className="p-8">
                <p className="text-lg text-mind-text mb-6 leading-relaxed">
                  Share your emotions anonymously and receive supportive reactions from our community. 
                  MindSphere creates a safe space for expression without judgment, allowing you to 
                  connect with others who may be experiencing similar feelings.
                </p>
                
                <h2 className="text-xl font-semibold text-mind-text mb-4">Key Benefits</h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="bg-mind-lavender/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <span>Full anonymity protects your identity while sharing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-mind-lavender/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <span>Receive support and empathy from a compassionate community</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-mind-lavender/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <span>Express feelings you might not be comfortable sharing elsewhere</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-mind-lavender/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <span>Content moderation ensures a safe, supportive environment</span>
                  </li>
                </ul>
                
                <div className="flex justify-center">
                  <Link to="/community">
                    <Button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:shadow-glow hover:-translate-y-1 transition-all duration-300 px-8 py-6 h-auto text-lg">
                      Join Community
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

export default EmotionalSupportPage;
