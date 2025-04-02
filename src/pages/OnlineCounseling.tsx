
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { MessageCircle, Calendar, Video, Shield } from 'lucide-react';

const OnlineCounseling = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-4xl mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-mind-text mb-2">Online Counseling</h1>
            <p className="text-mind-subtle">
              Professional therapy from the comfort of your home. Connect with licensed therapists through secure video sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 hover:shadow-glow transition-shadow duration-300">
              <div className="bg-mind-teal/30 p-4 rounded-xl mb-4 inline-block">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-medium text-mind-text mb-2">Text Therapy</h3>
              <p className="text-mind-subtle">
                Exchange messages with your therapist at your own pace.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 hover:shadow-glow transition-shadow duration-300">
              <div className="bg-mind-blue/30 p-4 rounded-xl mb-4 inline-block">
                <Video className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-medium text-mind-text mb-2">Video Sessions</h3>
              <p className="text-mind-subtle">
                Face-to-face therapy through secure video calls.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 hover:shadow-glow transition-shadow duration-300">
              <div className="bg-mind-lavender/30 p-4 rounded-xl mb-4 inline-block">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-medium text-mind-text mb-2">Flexible Scheduling</h3>
              <p className="text-mind-subtle">
                Book sessions that fit your busy lifestyle.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden mb-10">
            <div className="bg-gradient-to-r from-mind-blue/30 to-mind-teal/30 py-3 px-6">
              <h2 className="text-lg font-medium text-mind-text">How to Get Started</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-mind-blue/20 rounded-full h-8 w-8 flex items-center justify-center text-blue-600 font-medium">1</div>
                    <h3 className="font-medium text-mind-text">Complete brief assessment</h3>
                  </div>
                  <p className="text-mind-subtle pl-11">
                    Answer a few questions to help us understand your needs.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-mind-blue/20 rounded-full h-8 w-8 flex items-center justify-center text-blue-600 font-medium">2</div>
                    <h3 className="font-medium text-mind-text">Match with a therapist</h3>
                  </div>
                  <p className="text-mind-subtle pl-11">
                    We'll connect you with a licensed therapist based on your unique needs.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-mind-blue/20 rounded-full h-8 w-8 flex items-center justify-center text-blue-600 font-medium">3</div>
                    <h3 className="font-medium text-mind-text">Begin counseling</h3>
                  </div>
                  <p className="text-mind-subtle pl-11">
                    Start your therapy journey through text, voice, or video sessions.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-mind-blue/20 rounded-full h-8 w-8 flex items-center justify-center text-blue-600 font-medium">4</div>
                    <h3 className="font-medium text-mind-text">Track your progress</h3>
                  </div>
                  <p className="text-mind-subtle pl-11">
                    Monitor your mental health journey with helpful tools and assessments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="bg-mind-sand/50 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-medium text-mind-text mb-2">Your Privacy Matters</h3>
                <p className="text-mind-subtle">
                  All communications between you and your therapist are secured with bank-level encryption. 
                  Your information is confidential and protected by strict privacy policies.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium shadow-sm hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
              Start Online Counseling
            </button>
            <p className="text-mind-subtle mt-4">
              Plans start at $65/week. Cancel anytime.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OnlineCounseling;
