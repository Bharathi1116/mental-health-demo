
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import TherapyChat from '../components/therapy/TherapyChat';

const Therapy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <TherapyChat />
      </main>
      <Footer />
    </div>
  );
};

export default Therapy;
