
import React, { useState, useEffect, useRef } from 'react';
import { Send, RefreshCw, Brain, Lightbulb } from 'lucide-react';

const aiResponses = [
  "It sounds like you're feeling overwhelmed. That's completely normal, especially when facing multiple responsibilities. Could you tell me more about what's causing the most stress right now?",
  "I understand that anxiety can be challenging. Have you noticed any specific triggers for these feelings?",
  "It's great that you're aware of these thought patterns. Let's try to reframe some of these thoughts. Instead of thinking 'I always fail,' perhaps we can consider times when you've succeeded?",
  "Deep breathing can be helpful in moments of stress. Try breathing in for 4 counts, holding for 4, and exhaling for 6. How does that feel?",
  "Your feelings are valid. It takes courage to discuss these thoughts. What coping strategies have worked for you in the past?",
  "I notice you mentioned feeling 'not good enough.' This is a common cognitive distortion called personalization. Let's explore where this belief might come from.",
  "Self-compassion is crucial for mental wellbeing. How would you speak to a friend facing the same situation?",
  "Setting boundaries is important for mental health. Are there specific relationships or situations where you find it difficult to set boundaries?",
  "Progress in mental health isn't always linear, and that's okay. What small victory can you celebrate today?",
  "Have you tried grounding techniques when feeling anxious? The 5-4-3-2-1 method involves naming 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste."
];

const getAIResponse = (message: string) => {
  const randomIndex = Math.floor(Math.random() * aiResponses.length);
  return aiResponses[randomIndex];
};

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const TherapyChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Initialize with welcome message
  useEffect(() => {
    const welcomeMessage: Message = {
      id: '1',
      text: "Hello, I'm your AI therapy assistant. I'm here to listen and support you. How are you feeling today?",
      sender: 'ai',
      timestamp: new Date()
    };
    
    setMessages([welcomeMessage]);
  }, []);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI thinking and typing
    setTimeout(() => {
      const aiResponse = getAIResponse(input);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  const renderTherapyTips = () => {
    const tips = [
      "Try deep breathing when feeling overwhelmed",
      "Practice mindfulness for 5 minutes daily",
      "Challenge negative thoughts with evidence",
      "Set small, achievable goals each day",
      "Maintain a regular sleep schedule"
    ];
    
    return (
      <div className="bg-mind-teal/20 rounded-xl p-4 my-6">
        <h3 className="flex items-center gap-2 text-sm font-medium text-mind-text mb-3">
          <Lightbulb className="h-4 w-4 text-teal-500" />
          Helpful Wellness Tips
        </h3>
        <ul className="space-y-2">
          {tips.map((tip, index) => (
            <li key={index} className="text-sm text-mind-subtle flex items-start gap-2">
              <span className="text-teal-500 text-lg leading-none">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-mind-text mb-2">AI Therapy Chatbot</h1>
        <p className="text-mind-subtle">
          Have a supportive conversation with our AI assistant. It uses Cognitive Behavioral Therapy (CBT) principles to help identify and reframe negative thought patterns.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 flex flex-col h-[600px] animate-scale-in">
            <div className="bg-gradient-to-r from-mind-teal/30 to-mind-blue/30 py-3 px-6 flex items-center">
              <Brain className="h-5 w-5 text-teal-600 mr-2" />
              <h2 className="text-lg font-medium text-mind-text">CBT Assistant</h2>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.sender === 'user' 
                          ? 'bg-mind-green/30 rounded-tr-none' 
                          : 'bg-mind-blue/30 rounded-tl-none'
                      } animate-scale-in`}
                    >
                      <p className="text-mind-text">{message.text}</p>
                      <p className="text-right text-xs text-mind-subtle mt-1">
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-mind-blue/30 rounded-2xl rounded-tl-none p-3 max-w-[80%] animate-pulse-subtle">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                        <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-100">
              <div className="flex gap-2">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message here..."
                  className="flex-1 resize-none border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-100 focus:border-blue-300 outline-none transition-all"
                  rows={2}
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isTyping}
                  className={`self-end p-3 rounded-xl transition-all ${
                    !input.trim() || isTyping
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:shadow-md'
                  }`}
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-medium text-mind-text mb-4">About AI Therapy</h3>
            <p className="text-mind-subtle mb-4">
              This AI assistant uses principles from Cognitive Behavioral Therapy (CBT) to help you identify and reframe negative thought patterns.
            </p>
            <p className="text-mind-subtle mb-4">
              While it's not a replacement for professional therapy, it can provide support and guidance for everyday mental wellness.
            </p>
            <button className="w-full flex items-center justify-center gap-2 py-2 border border-mind-blue/30 rounded-lg text-blue-600 hover:bg-mind-blue/10 transition-colors">
              <RefreshCw className="h-4 w-4" />
              Start New Conversation
            </button>
          </div>
          
          {renderTherapyTips()}
        </div>
      </div>
    </div>
  );
};

export default TherapyChat;
