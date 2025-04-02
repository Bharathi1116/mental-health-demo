
import React from 'react';
import { Utensils } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MoodNutritionPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-mind-green/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 flex items-center gap-4">
              <div className="bg-mind-green w-14 h-14 rounded-xl flex items-center justify-center">
                <Utensils className="h-7 w-7 text-green-500" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-mind-text">Mood-Based Nutrition</h1>
            </div>
            
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden mb-10">
              <div className="p-8">
                <p className="text-lg text-mind-text mb-6 leading-relaxed">
                  Discover foods and recipes scientifically proven to enhance your mental wellbeing based on your current mood.
                  Our nutrition recommendations are tailored to support emotional balance through diet.
                </p>
                
                <h2 className="text-xl font-semibold text-mind-text mb-4">Key Benefits</h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="bg-mind-green/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span>Personalized food recommendations based on your emotional state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-mind-green/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span>Evidence-based nutritional science for mental wellness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-mind-green/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span>Simple, delicious recipes targeting specific emotional needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-mind-green/30 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span>Shopping lists for mood-boosting ingredients</span>
                  </li>
                </ul>
                
                <div className="flex justify-center">
                  <Link to="/nutrition-recipes">
                    <Button className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-glow hover:-translate-y-1 transition-all duration-300 px-8 py-6 h-auto text-lg">
                      Explore Nutrition
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

export default MoodNutritionPage;
