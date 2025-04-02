import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BreathingExercise: React.FC = () => {
  const [breathPhase, setBreathPhase] = useState("Inhale");
  const [counter, setCounter] = useState(4);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    
    const interval = setInterval(() => {
      if (counter === 1) {
        setBreathPhase((prev) => (prev === "Inhale" ? "Hold" : prev === "Hold" ? "Exhale" : "Inhale"));
        setCounter(breathPhase === "Hold" ? 4 : 6); 
      } else {
        setCounter((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [counter, breathPhase, isRunning]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Breathing Exercise</h2>
      <p className="text-lg text-gray-600 mb-6">Follow the breathing guide to relax and refocus.</p>
      <motion.div
        animate={{ scale: breathPhase === "Inhale" ? 1.2 : 0.8 }}
        transition={{ duration: 4 }}
        className="w-32 h-32 flex items-center justify-center bg-white shadow-lg rounded-full border-4 border-blue-500"
      >
        <h3 className="text-2xl font-semibold text-blue-600">{breathPhase}</h3>
      </motion.div>
      <p className="text-lg font-medium text-gray-700 mt-4">{counter}s</p>
      <button 
        onClick={() => setIsRunning(true)} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Start Exercise
      </button>
    </div>
  );
};

export default BreathingExercise;
