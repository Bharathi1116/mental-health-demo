
import React from 'react';
import { BookText } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EmotionJournalPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-mind-blue/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 flex items-center gap-4">
              <div className="bg-mind-blue w-14 h-14 rounded-xl flex items-center justify-center">
                <BookText className="h-7 w-7 text-blue-500" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-mind-text">AI-Powered Emotion Journal</h1>
            </div>
            
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden mb-10">
              <div className="p-8">
                <p className="text-lg text-mind-text mb-6 leading-relaxed">
                  Log your daily thoughts and moods with MindSphere's intelligent journaling system. Our AI provides 
                  sentiment analysis and personalized insights to help you understand your emotional patterns over time.
                </p>
                
                <h2 className="text-xl font-semibold text-mind-text mb-4">Key Benefits</h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="bg-mind-blue/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span>Track your mood changes throughout weeks and months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-mind-blue/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span>Receive AI-powered insights about your emotional patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-mind-blue/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span>Set journaling reminders to build a consistent practice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-mind-blue/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span>End-to-end encryption ensures your private thoughts remain private</span>
                  </li>
                </ul>
                
                <div className="flex justify-center">
                  <Link to="/journal">
                    <Button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-glow hover:-translate-y-1 transition-all duration-300 px-8 py-6 h-auto text-lg">
                      Start Journaling
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

export default EmotionJournalPage;
