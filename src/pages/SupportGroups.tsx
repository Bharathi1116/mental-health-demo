
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Users, Calendar, MapPin, Heart } from 'lucide-react';

const SupportGroups = () => {
  const upcomingGroups = [
    {
      id: 1,
      name: "Anxiety Support Circle",
      date: "Tuesdays at 7:00 PM ET",
      type: "Virtual",
      description: "A safe space for those managing anxiety to share experiences and coping strategies."
    },
    {
      id: 2,
      name: "Grief & Loss Group",
      date: "Wednesdays at 6:30 PM ET",
      type: "Virtual",
      description: "Support for anyone experiencing loss and navigating the grief process."
    },
    {
      id: 3,
      name: "Mindfulness Meditation",
      date: "Thursdays at 8:00 PM ET",
      type: "Virtual",
      description: "Guided meditation and mindfulness practices for mental well-being."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-4xl mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-mind-text mb-2">Support Groups</h1>
            <p className="text-mind-subtle">
              Connect with others who understand what you're going through. Our support groups provide community, understanding, and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 hover:shadow-glow transition-shadow duration-300">
              <div className="bg-mind-lavender/30 p-4 rounded-xl mb-4 inline-block">
                <Users className="h-7 w-7 text-purple-600" />
              </div>
              <h2 className="text-xl font-bold text-mind-text mb-2">Virtual Groups</h2>
              <p className="text-mind-subtle">
                Join from anywhere with an internet connection. Our virtual groups offer the same quality support with added convenience.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 hover:shadow-glow transition-shadow duration-300">
              <div className="bg-mind-teal/30 p-4 rounded-xl mb-4 inline-block">
                <MapPin className="h-7 w-7 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-mind-text mb-2">In-Person Groups</h2>
              <p className="text-mind-subtle">
                Meet face-to-face in a safe, welcoming environment. Find groups in your local area.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden mb-10">
            <div className="bg-gradient-to-r from-mind-lavender/30 to-mind-blue/30 py-3 px-6 flex items-center">
              <Calendar className="h-5 w-5 text-mind-text mr-2" />
              <h2 className="text-lg font-medium text-mind-text">Upcoming Virtual Groups</h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {upcomingGroups.map(group => (
                  <div key={group.id} className="border border-gray-100 rounded-xl p-4 hover:border-purple-200 transition-colors duration-200">
                    <h3 className="font-medium text-mind-text">{group.name}</h3>
                    <div className="flex items-center gap-2 text-mind-subtle text-sm mt-1">
                      <Calendar className="h-4 w-4" />
                      <span>{group.date}</span>
                    </div>
                    <p className="mt-3 text-mind-subtle">{group.description}</p>
                    <div className="mt-4">
                      <button className="px-4 py-2 bg-mind-lavender/20 text-purple-600 rounded-lg text-sm font-medium hover:bg-mind-lavender/30 transition-colors duration-200">
                        Join Group
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-mind-green/20 rounded-2xl p-6 border border-mind-green/30 mb-10">
            <div className="flex gap-4 items-center mb-4">
              <Heart className="h-6 w-6 text-green-600" />
              <h2 className="text-xl font-bold text-mind-text">Group Benefits</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="bg-green-100 text-green-600 rounded-full h-5 w-5 flex items-center justify-center text-xs mt-0.5">✓</div>
                <span className="text-mind-subtle">Reduced feelings of isolation and loneliness</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-100 text-green-600 rounded-full h-5 w-5 flex items-center justify-center text-xs mt-0.5">✓</div>
                <span className="text-mind-subtle">Learning practical coping skills from others</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-100 text-green-600 rounded-full h-5 w-5 flex items-center justify-center text-xs mt-0.5">✓</div>
                <span className="text-mind-subtle">Gaining perspective on your own experiences</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-100 text-green-600 rounded-full h-5 w-5 flex items-center justify-center text-xs mt-0.5">✓</div>
                <span className="text-mind-subtle">Building a network of support and understanding</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-mind-text mb-4">Find Your Group</h3>
            <p className="text-mind-subtle mb-6 max-w-md mx-auto">
              Whether you're seeking support for anxiety, depression, grief, or another life challenge, there's a group for you.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-medium shadow-sm hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
              Browse All Groups
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SupportGroups;
