
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import EmotionJournal from '../components/journal/EmotionJournal';

const Journal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <EmotionJournal />
      </main>
      <Footer />
    </div>
  );
};

export default Journal;
