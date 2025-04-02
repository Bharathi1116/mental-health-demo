import React, { useState, useEffect } from "react";

const cards = ["🍎", "🍌", "🍇", "🍉", "🍎", "🍌", "🍇", "🍉"]; 

const MemoryMatch: React.FC = () => {
  const [shuffledCards, setShuffledCards] = useState<string[]>([]);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);

  useEffect(() => {
    setShuffledCards([...cards].sort(() => Math.random() - 0.5));
  }, []);

  const handleCardClick = (index: number) => {
    if (flippedIndexes.length === 2 || flippedIndexes.includes(index)) return;
    
    const newFlipped = [...flippedIndexes, index];
    setFlippedIndexes(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (shuffledCards[first] === shuffledCards[second]) {
        setMatched([...matched, first, second]);
      }
      setTimeout(() => setFlippedIndexes([]), 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Memory Match</h1>
      <div className="grid grid-cols-4 gap-4">
        {shuffledCards.map((emoji, index) => (
          <button
            key={index}
            onClick={() => handleCardClick(index)}
            className={`w-16 h-16 flex items-center justify-center text-2xl bg-white border rounded-lg shadow-lg ${
              flippedIndexes.includes(index) || matched.includes(index) ? "" : "bg-gray-400"
            }`}
          >
            {flippedIndexes.includes(index) || matched.includes(index) ? emoji : "❓"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MemoryMatch;