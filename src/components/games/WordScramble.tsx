import React, { useState, useEffect } from "react";

const words = ["happiness", "kindness", "optimism", "mindful", "joyful", "gratitude", "peaceful"];

const shuffleWord = (word: string) => {
  return word.split("").sort(() => Math.random() - 0.5).join("");
};

const WordScramble: React.FC = () => {
  const [scrambledWord, setScrambledWord] = useState("");
  const [originalWord, setOriginalWord] = useState("");
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    generateWord();
  }, []);

  const generateWord = () => {
    const word = words[Math.floor(Math.random() * words.length)];
    setOriginalWord(word);
    setScrambledWord(shuffleWord(word));
    setUserInput("");
    setMessage("");
  };

  const checkAnswer = () => {
    if (userInput.toLowerCase() === originalWord.toLowerCase()) {
      setMessage("🎉 Correct! Great job!");
    } else {
      setMessage("❌ Try again!");
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Word Scramble</h2>
      <p className="text-lg text-gray-600 mb-4">Unscramble the word related to positivity!</p>
      <div className="text-2xl font-semibold bg-white p-4 rounded-lg shadow-md mb-4">
        {scrambledWord}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="p-2 border rounded mb-4 text-center"
        placeholder="Your answer"
      />
      <button onClick={checkAnswer} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-2">
        Submit
      </button>
      <button onClick={generateWord} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
        New Word
      </button>
      <p className="text-xl font-medium mt-4">{message}</p>
    </div>
  );
};

export default WordScramble;