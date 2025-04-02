
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Heart, Clock, Smile, Music, Zap, Coffee, Moon } from 'lucide-react';

const SelfCare = () => {
  const selfCareCategories = [
    {
      id: 1,
      title: "Quick Breaks",
      icon: <Clock className="h-5 w-5 text-blue-600" />,
      description: "2-5 minute exercises for busy schedules",
      color: "bg-mind-blue/30"
    },
    {
      id: 2,
      title: "Mood Boosters",
      icon: <Smile className="h-5 w-5 text-green-600" />,
      description: "Activities to lift your spirits",
      color: "bg-mind-teal/30"
    },
    {
      id: 3,
      title: "Sleep Better",
      icon: <Moon className="h-5 w-5 text-purple-600" />,
      description: "Improve your sleep quality",
      color: "bg-mind-lavender/30"
    },
    {
      id: 4,
      title: "Energy & Focus",
      icon: <Zap className="h-5 w-5 text-amber-600" />,
      description: "Tools to improve concentration",
      color: "bg-mind-sand/30"
    }
  ];

  const dailyTools = [
    {
      id: 1,
      title: "5-Minute Breathing Exercise",
      description: "Guided breathing to reduce stress and increase focus.",
      icon: <div className="bg-mind-blue/20 p-3 rounded-lg"><Music className="h-5 w-5 text-blue-600" /></div>,
      time: "5 min"
    },
    {
      id: 2,
      title: "Mindful Coffee Break",
      description: "Transform an ordinary coffee break into a mindfulness practice.",
      icon: <div className="bg-mind-sand/20 p-3 rounded-lg"><Coffee className="h-5 w-5 text-amber-600" /></div>,
      time: "10 min"
    },
    {
      id: 3,
      title: "Gratitude Journaling",
      description: "Quick journaling exercise focused on gratitude and positive reflection.",
      icon: <div className="bg-mind-teal/20 p-3 rounded-lg"><Heart className="h-5 w-5 text-green-600" /></div>,
      time: "7 min"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-4xl mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-mind-text mb-2">Self-Care Tools</h1>
            <p className="text-mind-subtle">
              Simple, effective activities to help you take care of your mental health and wellbeing.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden mb-10">
            <div className="bg-gradient-to-r from-mind-blue/30 to-mind-teal/30 py-3 px-6 flex items-center">
              <Heart className="h-5 w-5 text-mind-text mr-2" />
              <h2 className="text-lg font-medium text-mind-text">Today's Recommendation</h2>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-mind-blue/10 rounded-xl p-5 flex-grow">
                  <h3 className="font-medium text-mind-text mb-2">Deep Relaxation Meditation</h3>
                  <p className="text-mind-subtle mb-4">
                    A 15-minute guided meditation to help you release tension and find calm.
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 mb-4">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">15 minutes</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium shadow-sm hover:shadow-md transition-shadow duration-300">
                    Start Now
                  </button>
                </div>
                <div className="bg-gradient-to-r from-mind-blue/5 to-white rounded-xl p-5 flex-grow md:max-w-xs">
                  <h4 className="text-sm font-medium text-mind-text mb-2">Why we recommend this</h4>
                  <p className="text-mind-subtle text-sm">
                    Regular meditation can reduce stress hormones, improve focus, and promote emotional balance. 
                    Just 15 minutes can make a significant difference to your day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {selfCareCategories.map(category => (
              <div key={category.id} className="bg-white rounded-xl shadow-soft border border-gray-100 p-4 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className={`${category.color} p-3 rounded-lg inline-block`}>
                  {category.icon}
                </div>
                <h3 className="font-medium text-mind-text mt-3">{category.title}</h3>
                <p className="text-mind-subtle text-sm">{category.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden mb-10">
            <div className="bg-gradient-to-r from-mind-teal/30 to-mind-green/30 py-3 px-6 flex items-center justify-between">
              <div className="flex items-center">
                <Zap className="h-5 w-5 text-mind-text mr-2" />
                <h2 className="text-lg font-medium text-mind-text">Quick Daily Tools</h2>
              </div>
              <button className="text-green-600 text-sm font-medium hover:text-green-700 transition-colors">
                View All
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {dailyTools.map(tool => (
                  <div key={tool.id} className="flex gap-4">
                    {tool.icon}
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-mind-text">{tool.title}</h3>
                        <span className="text-xs bg-gray-100 text-mind-subtle px-2 py-1 rounded-full">{tool.time}</span>
                      </div>
                      <p className="text-mind-subtle mt-1">{tool.description}</p>
                      <button className="text-blue-500 text-sm font-medium mt-2 hover:text-blue-700 transition-colors">
                        Try this activity
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-mind-lavender/20 rounded-xl p-6 border border-mind-lavender/30">
              <h3 className="font-bold text-mind-text mb-2">Create Your Self-Care Plan</h3>
              <p className="text-mind-subtle mb-4">
                Design a personalized self-care routine that fits your lifestyle and preferences.
              </p>
              <button className="px-4 py-2 bg-white rounded-lg text-purple-600 font-medium shadow-sm hover:shadow-md transition-shadow duration-300">
                Start My Plan
              </button>
            </div>

            <div className="bg-mind-blue/20 rounded-xl p-6 border border-mind-blue/30">
              <h3 className="font-bold text-mind-text mb-2">Track Your Progress</h3>
              <p className="text-mind-subtle mb-4">
                Monitor how self-care activities impact your mood and wellbeing over time.
              </p>
              <button className="px-4 py-2 bg-white rounded-lg text-blue-600 font-medium shadow-sm hover:shadow-md transition-shadow duration-300">
                View Dashboard
              </button>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-mind-text mb-4">Make Self-Care a Priority</h3>
            <p className="text-mind-subtle mb-6 max-w-md mx-auto">
              Even a few minutes of self-care each day can significantly improve your mental and emotional wellbeing.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-medium shadow-sm hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
              Explore All Tools
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SelfCare;
