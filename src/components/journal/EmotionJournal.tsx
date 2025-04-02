
import React, { useState, useEffect } from 'react';
import { PenLine, Save, ChevronDown, ChevronUp, Smile, PieChart, Calendar } from 'lucide-react';

const analyzeSentiment = (text: string) => {
  const sentiments = ['Joy', 'Calm', 'Neutral', 'Concern', 'Stress'];
  const randomSentiment = sentiments[Math.floor(Math.random() * sentiments.length)];
  
  const insights = [
    'You seem to be expressing gratitude for positive experiences.',
    'There might be some underlying stress in your writing.',
    'Your journal entry shows a balanced emotional perspective.',
    'You\'re focusing on solutions rather than problems.',
    'Consider taking some time for self-care today.'
  ];
  const randomInsight = insights[Math.floor(Math.random() * insights.length)];
  
  return {
    sentiment: randomSentiment,
    confidence: Math.floor(Math.random() * 30) + 70, 
    insight: randomInsight
  };
};

interface Entry {
  id: string;
  date: Date;
  content: string;
  mood: string;
  analysis: {
    sentiment: string;
    confidence: number;
    insight: string;
  } | null;
}

const EmotionJournal = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [currentEntry, setCurrentEntry] = useState('');
  const [selectedMood, setSelectedMood] = useState('neutral');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [expandedEntryId, setExpandedEntryId] = useState<string | null>(null);

  // Load entries from local storage on component mount
  useEffect(() => {
    const savedEntries = localStorage.getItem('journal-entries');
    if (savedEntries) {
      try {
        const parsedEntries = JSON.parse(savedEntries);
        // Convert string dates back to Date objects
        const formattedEntries = parsedEntries.map((entry: any) => ({
          ...entry,
          date: new Date(entry.date)
        }));
        setEntries(formattedEntries);
      } catch (error) {
        console.error('Error parsing saved entries:', error);
      }
    }
  }, []);

  // Save entries to local storage when they change
  useEffect(() => {
    localStorage.setItem('journal-entries', JSON.stringify(entries));
  }, [entries]);

  const handleSaveEntry = async () => {
    if (!currentEntry.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const analysis = analyzeSentiment(currentEntry);
      
      const newEntry: Entry = {
        id: Date.now().toString(),
        date: new Date(),
        content: currentEntry,
        mood: selectedMood,
        analysis
      };
      
      setEntries([newEntry, ...entries]);
      setCurrentEntry('');
      setSelectedMood('neutral');
      setIsAnalyzing(false);
      setExpandedEntryId(newEntry.id); // Auto-expand the new entry
    }, 1500);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const moods = [
    { id: 'happy', emoji: '😊', label: 'Happy' },
    { id: 'calm', emoji: '😌', label: 'Calm' },
    { id: 'neutral', emoji: '😐', label: 'Neutral' },
    { id: 'sad', emoji: '😔', label: 'Sad' },
    { id: 'anxious', emoji: '😰', label: 'Anxious' }
  ];

  const toggleEntry = (entryId: string) => {
    setExpandedEntryId(expandedEntryId === entryId ? null : entryId);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-mind-text mb-2">Emotion Journal</h1>
        <p className="text-mind-subtle">
          Record your thoughts and feelings. Our AI will analyze your entries to provide insights into your emotional patterns.
        </p>
      </div>
      
      {/* New Entry Section */}
      <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden mb-10 animate-scale-in">
        <div className="bg-gradient-to-r from-mind-blue/30 to-mind-lavender/30 py-3 px-6 flex items-center">
          <PenLine className="h-5 w-5 text-mind-text mr-2" />
          <h2 className="text-lg font-medium text-mind-text">New Entry</h2>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-mind-subtle mb-2">How are you feeling?</label>
            <div className="flex flex-wrap gap-3">
              {moods.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => setSelectedMood(mood.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                    selectedMood === mood.id 
                      ? 'bg-mind-blue text-blue-700 shadow-sm' 
                      : 'bg-gray-100 text-mind-subtle hover:bg-gray-200'
                  }`}
                >
                  <span>{mood.emoji}</span>
                  <span>{mood.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="journal-entry" className="block text-sm font-medium text-mind-subtle mb-2">
              Write about your day...
            </label>
            <textarea
              id="journal-entry"
              value={currentEntry}
              onChange={(e) => setCurrentEntry(e.target.value)}
              className="w-full min-h-[200px] p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-300 outline-none transition-all"
              placeholder="What's on your mind today? How are you feeling? What made you happy or stressed?"
            />
          </div>
          
          <div className="flex justify-end">
            <button
              onClick={handleSaveEntry}
              disabled={!currentEntry.trim() || isAnalyzing}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                !currentEntry.trim() || isAnalyzing
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-glow hover:-translate-y-1'
              }`}
            >
              {isAnalyzing ? (
                <>
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Save Entry
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Past Entries Section */}
      <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden animate-scale-in" style={{ animationDelay: "0.2s" }}>
        <div className="bg-gradient-to-r from-mind-lavender/30 to-mind-teal/30 py-3 px-6 flex items-center">
          <Calendar className="h-5 w-5 text-mind-text mr-2" />
          <h2 className="text-lg font-medium text-mind-text">Past Entries</h2>
        </div>
        
        <div className="divide-y divide-gray-100">
          {entries.length === 0 ? (
            <div className="p-10 text-center text-mind-subtle">
              <p className="mb-2">No journal entries yet.</p>
              <p>Start writing about your day to see AI insights here.</p>
            </div>
          ) : (
            entries.map((entry) => (
              <div key={entry.id} className="transition-all duration-300">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50 flex justify-between items-center"
                  onClick={() => toggleEntry(entry.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      {moods.find(m => m.id === entry.mood)?.emoji || '😐'}
                    </div>
                    <div>
                      <p className="font-medium text-mind-text">
                        {entry.content.substring(0, 60)}{entry.content.length > 60 ? '...' : ''}
                      </p>
                      <p className="text-xs text-mind-subtle mt-1">{formatDate(entry.date)}</p>
                    </div>
                  </div>
                  {expandedEntryId === entry.id ? (
                    <ChevronUp className="h-5 w-5 text-mind-subtle" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-mind-subtle" />
                  )}
                </div>
                
                {expandedEntryId === entry.id && (
                  <div className="px-6 pb-6 pt-2 bg-gray-50 animate-fade-in">
                    <p className="text-mind-text whitespace-pre-wrap mb-6">{entry.content}</p>
                    
                    {entry.analysis && (
                      <div className="bg-white rounded-xl border border-mind-blue/20 p-4">
                        <h4 className="text-sm font-semibold text-mind-text mb-3 flex items-center gap-2">
                          <Smile className="h-4 w-4 text-blue-500" />
                          AI Emotion Analysis
                        </h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-mind-subtle mb-1">Detected Emotion</p>
                            <div className="flex items-center gap-2">
                              <span className="text-blue-600 font-medium">{entry.analysis.sentiment}</span>
                              <span className="text-xs bg-mind-blue/30 text-blue-700 px-2 py-0.5 rounded-full">
                                {entry.analysis.confidence}% confidence
                              </span>
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-xs text-mind-subtle mb-1">AI Insight</p>
                            <p className="text-sm text-mind-text">{entry.analysis.insight}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default EmotionJournal;
