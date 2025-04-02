import React, { useState, useEffect } from "react";

const WhackAMole: React.FC = () => {
  const [molePosition, setMolePosition] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMolePosition(Math.floor(Math.random() * 9));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleWhack = (index: number) => {
    if (index === molePosition) {
      setScore(score + 1);
      setMolePosition(null);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Whack-a-Mole</h2>
      <p className="text-lg text-gray-600 mb-4">Tap the mole as fast as you can!</p>
      <p className="text-xl font-bold mb-4">Score: {score}</p>
      <div className="grid grid-cols-3 gap-2 bg-white p-4 shadow-lg rounded-lg">
        {[...Array(9)].map((_, index) => (
          <button
            key={index}
            className={`w-20 h-20 flex items-center justify-center border text-xl font-bold ${
              index === molePosition ? "bg-red-500" : "bg-gray-300"
            }`}
            onClick={() => handleWhack(index)}
          >
            {index === molePosition ? "🐹" : ""}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WhackAMole;