
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { BookOpen, Download, FileText, GraduationCap, Bookmark, Search } from 'lucide-react';

const Resources = () => {
  const categories = [
    { id: 1, name: "Anxiety & Stress", count: 24, icon: <div className="bg-mind-blue/30 p-3 rounded-lg"><BookOpen className="h-5 w-5 text-blue-600" /></div> },
    { id: 2, name: "Depression", count: 18, icon: <div className="bg-mind-lavender/30 p-3 rounded-lg"><BookOpen className="h-5 w-5 text-purple-600" /></div> },
    { id: 3, name: "Relationships", count: 15, icon: <div className="bg-mind-teal/30 p-3 rounded-lg"><BookOpen className="h-5 w-5 text-green-600" /></div> },
    { id: 4, name: "Self-Esteem", count: 12, icon: <div className="bg-mind-sand/30 p-3 rounded-lg"><BookOpen className="h-5 w-5 text-amber-600" /></div> }
  ];

  const featuredResources = [
    {
      id: 1,
      title: "Understanding Anxiety: A Comprehensive Guide",
      type: "E-Book",
      description: "Learn about the different types of anxiety disorders and evidence-based treatment approaches.",
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 2,
      title: "Mindfulness for Beginners",
      type: "Video Course",
      description: "A step-by-step introduction to mindfulness practices for daily life.",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      id: 3,
      title: "Coping Skills Workbook",
      type: "Workbook",
      description: "Practical exercises and worksheets to develop healthy coping mechanisms.",
      icon: <Download className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-4xl mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-mind-text mb-2">Educational Resources</h1>
            <p className="text-mind-subtle">
              Expand your understanding of mental health with our evidence-based educational materials.
            </p>
          </div>

          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for resources..."
                className="w-full py-3 pl-12 pr-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-300 outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {categories.map(category => (
              <div key={category.id} className="bg-white rounded-xl shadow-soft border border-gray-100 p-4 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                {category.icon}
                <h3 className="font-medium text-mind-text mt-3">{category.name}</h3>
                <p className="text-mind-subtle text-sm">{category.count} resources</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden mb-10">
            <div className="bg-gradient-to-r from-mind-blue/30 to-mind-green/30 py-3 px-6 flex items-center">
              <Bookmark className="h-5 w-5 text-mind-text mr-2" />
              <h2 className="text-lg font-medium text-mind-text">Featured Resources</h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {featuredResources.map(resource => (
                  <div key={resource.id} className="flex gap-4 border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <div className="flex-shrink-0 bg-mind-blue/20 h-12 w-12 rounded-lg flex items-center justify-center text-blue-600">
                      {resource.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-mind-text">{resource.title}</h3>
                        <span className="bg-mind-blue/20 text-blue-600 text-xs px-2 py-0.5 rounded-full">{resource.type}</span>
                      </div>
                      <p className="text-mind-subtle mt-1">{resource.description}</p>
                      <button className="text-blue-500 text-sm font-medium mt-2 flex items-center gap-1 hover:text-blue-700 transition-colors">
                        Access resource
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-mind-sand/20 rounded-xl p-6 border border-mind-sand/30">
              <h3 className="font-bold text-mind-text mb-2">Self-Assessment Tools</h3>
              <p className="text-mind-subtle mb-4">
                Take our scientifically validated screening assessments to better understand your mental health.
              </p>
              <button className="px-4 py-2 bg-white rounded-lg text-amber-600 font-medium shadow-sm hover:shadow-md transition-shadow duration-300">
                Take an Assessment
              </button>
            </div>

            <div className="bg-mind-lavender/20 rounded-xl p-6 border border-mind-lavender/30">
              <h3 className="font-bold text-mind-text mb-2">Podcast Series</h3>
              <p className="text-mind-subtle mb-4">
                Listen to our podcast featuring mental health experts discussing various topics.
              </p>
              <button className="px-4 py-2 bg-white rounded-lg text-purple-600 font-medium shadow-sm hover:shadow-md transition-shadow duration-300">
                Browse Episodes
              </button>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-mind-text mb-4">For Mental Health Professionals</h3>
            <p className="text-mind-subtle mb-6 max-w-md mx-auto">
              Access specialized resources, continuing education, and professional development materials.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium shadow-sm hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
              Professional Resources
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
