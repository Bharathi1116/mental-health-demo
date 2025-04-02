
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { PhoneCall, Clock, Globe } from 'lucide-react';

const Helpline = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-4xl mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-mind-text mb-2">24/7 Helpline</h1>
            <p className="text-mind-subtle">
              Immediate support is always available. Our trained counselors are ready to listen and help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 hover:shadow-glow transition-shadow duration-300">
              <div className="bg-mind-blue/30 p-4 rounded-xl mb-4 inline-block">
                <PhoneCall className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-mind-text mb-2">Crisis Support</h2>
              <p className="text-mind-subtle mb-4">
                For immediate emotional support during a crisis. All calls are confidential.
              </p>
              <div className="text-2xl font-bold text-blue-600">1-800-273-8255</div>
            </div>

            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 hover:shadow-glow transition-shadow duration-300">
              <div className="bg-mind-teal/30 p-4 rounded-xl mb-4 inline-block">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-mind-text mb-2">Available 24/7</h2>
              <p className="text-mind-subtle mb-4">
                Our helpline is staffed around the clock, including holidays and weekends.
              </p>
              <div className="font-medium text-green-600">No appointment needed</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden mb-10">
            <div className="bg-gradient-to-r from-mind-blue/30 to-mind-lavender/30 py-3 px-6">
              <h2 className="text-lg font-medium text-mind-text">How It Works</h2>
            </div>
            <div className="p-6">
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="bg-mind-blue/20 text-blue-600 font-bold rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-medium text-mind-text">Call our helpline</h3>
                    <p className="text-mind-subtle">Dial our toll-free number to be connected with a trained counselor.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-mind-blue/20 text-blue-600 font-bold rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-medium text-mind-text">Share your concerns</h3>
                    <p className="text-mind-subtle">Our counselors are trained to listen without judgment and provide support.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-mind-blue/20 text-blue-600 font-bold rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-medium text-mind-text">Get personalized guidance</h3>
                    <p className="text-mind-subtle">Receive coping strategies and resources specific to your situation.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-mind-lavender/20 rounded-2xl p-6 border border-mind-lavender/30">
            <div className="flex gap-4 items-center mb-4">
              <Globe className="h-6 w-6 text-purple-600" />
              <h2 className="text-xl font-bold text-mind-text">International Support</h2>
            </div>
            <p className="text-mind-subtle mb-4">
              If you're outside the United States, please visit our international partners page for helplines in your country.
            </p>
            <button className="px-4 py-2 bg-white rounded-lg text-purple-600 font-medium shadow-sm hover:shadow-md transition-shadow duration-300">
              Find International Resources
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Helpline;
