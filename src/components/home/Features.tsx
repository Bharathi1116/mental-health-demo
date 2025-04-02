
import React, { useRef, useEffect } from 'react';
import { BookText, MessageCircle, Brain, Coffee, Utensils, Gamepad } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  // Improved intersection observer for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class and make sure it stays visible
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.add('opacity-100');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card) => {
      observer.observe(card);
    });
    
    return () => {
      featureCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  const features = [
    {
      title: 'AI-Powered Emotion Journal',
      description: 'Log your daily thoughts and moods. Our AI provides sentiment analysis and personalized insights to help you understand your emotional patterns.',
      icon: <BookText className="h-6 w-6 text-blue-500" />,
      color: 'bg-mind-blue',
      delay: 0,
      link: '/emotion-journal'
    },
    {
      title: 'Anonymous Emotional Support',
      description: 'Share your emotions anonymously and receive supportive reactions from our community, creating a safe space for expression.',
      icon: <MessageCircle className="h-6 w-6 text-purple-500" />,
      color: 'bg-mind-lavender',
      delay: 0.1,
      link: '/emotional-support'
    },
    {
      title: 'AI Therapy Chatbot',
      description: 'Engage in self-therapy conversations powered by AI that identifies negative thought patterns and suggests reframing techniques.',
      icon: <Brain className="h-6 w-6 text-teal-500" />,
      color: 'bg-mind-teal',
      delay: 0.2,
      link: '/ai-therapy'
    },
    {
      title: 'Mindful Breaks & Stress Detection',
      description: 'Receive reminders for relaxation exercises like breathing and stretching when our AI detects signs of stress.',
      icon: <Coffee className="h-6 w-6 text-amber-500" />,
      color: 'bg-mind-sand',
      delay: 0.3,
      link: '/mindful-breaks'
    },
    {
      title: 'Mood-Based Nutrition',
      description: 'Discover foods and recipes scientifically proven to enhance your mental wellbeing based on your current mood.',
      icon: <Utensils className="h-6 w-6 text-green-500" />,
      color: 'bg-mind-green',
      delay: 0.4,
      link: '/mood-nutrition'
    },
    {
      title: 'Interactive Mind Games',
      description: 'Engage in fun, science-backed games designed to improve focus, memory, and emotional well-being.',
      icon: <Gamepad className="h-6 w-6 text-blue-500" />, 
      color: 'bg-mind-blue',
      delay: 0.5,
      link: '/games'
    }
    
  ];

  return (
    <section ref={featuresRef} className="py-20 bg-white" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-mind-text mb-4">Comprehensive Wellbeing Tools</h2>
          <p className="text-mind-subtle text-lg">
            MindSphere offers a suite of AI-powered features designed to support every aspect of your mental health journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link to={feature.link} key={index} className="block">
              <div 
                className="feature-card opacity-0 bg-white border border-gray-100 rounded-2xl p-6 shadow-soft transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
                style={{ animationDelay: `${feature.delay}s` }}
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-mind-text mb-3">{feature.title}</h3>
                <p className="text-mind-subtle">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
