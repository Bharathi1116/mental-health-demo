
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { MessageSquare, TrendingUp, Users, Award, Shield } from 'lucide-react';

const Community = () => {
  const discussionTopics = [
    {
      id: 1,
      title: "Tips for managing anxiety during stressful situations",
      author: "mindful_traveler",
      replies: 24,
      views: 158,
      tags: ["Anxiety", "Coping Skills"]
    },
    {
      id: 2,
      title: "How has mindfulness meditation changed your life?",
      author: "serene_soul",
      replies: 18,
      views: 104,
      tags: ["Mindfulness", "Meditation"]
    },
    {
      id: 3,
      title: "Looking for book recommendations on overcoming depression",
      author: "healing_reader",
      replies: 32,
      views: 211,
      tags: ["Depression", "Resources"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-4xl mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-mind-text mb-2">Community Forum</h1>
            <p className="text-mind-subtle">
              Connect with others, share experiences, and find support in our moderated community space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <div className="bg-mind-blue/30 p-4 rounded-xl mb-4 inline-block">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-mind-text">12,450+</div>
              <p className="text-mind-subtle">Community Members</p>
            </div>

            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <div className="bg-mind-teal/30 p-4 rounded-xl mb-4 inline-block">
                <MessageSquare className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-mind-text">875+</div>
              <p className="text-mind-subtle">Active Discussions</p>
            </div>

            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <div className="bg-mind-lavender/30 p-4 rounded-xl mb-4 inline-block">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-mind-text">95%</div>
              <p className="text-mind-subtle">Member Satisfaction</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden mb-10">
            <div className="bg-gradient-to-r from-mind-teal/30 to-mind-blue/30 py-3 px-6 flex items-center justify-between">
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-mind-text mr-2" />
                <h2 className="text-lg font-medium text-mind-text">Trending Discussions</h2>
              </div>
              <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                View All
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {discussionTopics.map(topic => (
                  <div key={topic.id} className="border border-gray-100 rounded-xl p-4 hover:border-blue-200 transition-colors duration-200 cursor-pointer">
                    <h3 className="font-medium text-mind-text">{topic.title}</h3>
                    <div className="flex items-center text-mind-subtle text-sm mt-2">
                      <span>Posted by {topic.author}</span>
                      <span className="mx-2">•</span>
                      <span>{topic.replies} replies</span>
                      <span className="mx-2">•</span>
                      <span>{topic.views} views</span>
                    </div>
                    <div className="mt-3 flex gap-2">
                      {topic.tags.map(tag => (
                        <span key={tag} className="bg-mind-blue/20 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-mind-lavender/20 rounded-xl p-6 border border-mind-lavender/30">
              <div className="flex gap-4 items-center mb-4">
                <Award className="h-6 w-6 text-purple-600" />
                <h2 className="text-xl font-bold text-mind-text">Join the Conversation</h2>
              </div>
              <p className="text-mind-subtle mb-4">
                Share your experiences, ask questions, and connect with others on similar mental health journeys.
              </p>
              <button className="px-4 py-2 bg-white rounded-lg text-purple-600 font-medium shadow-sm hover:shadow-md transition-shadow duration-300">
                Create Account
              </button>
            </div>

            <div className="bg-mind-sand/20 rounded-xl p-6 border border-mind-sand/30">
              <div className="flex gap-4 items-center mb-4">
                <Shield className="h-6 w-6 text-amber-600" />
                <h2 className="text-xl font-bold text-mind-text">Community Guidelines</h2>
              </div>
              <p className="text-mind-subtle mb-4">
                Our forum is a safe, respectful space. View our community guidelines to learn more.
              </p>
              <button className="px-4 py-2 bg-white rounded-lg text-amber-600 font-medium shadow-sm hover:shadow-md transition-shadow duration-300">
                Read Guidelines
              </button>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-mind-text mb-4">Ready to Connect?</h3>
            <p className="text-mind-subtle mb-6 max-w-md mx-auto">
              Join thousands of others sharing their mental health journey in a supportive environment.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-medium shadow-sm hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
              Join Community
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
