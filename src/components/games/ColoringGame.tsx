import React, { useState } from "react";

const ColoringGame: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [canvas, setCanvas] = useState(Array(100).fill("white"));

  const changeColor = (index: number) => {
    setCanvas(canvas.map((color, i) => (i === index ? selectedColor : color)));
  };

  const resetCanvas = () => {
    setCanvas(Array(100).fill("white"));
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Coloring Game</h2>
      <p className="text-lg text-gray-600 mb-4">Pick a color and tap a section to paint.</p>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {["red", "blue", "green", "yellow", "purple", "black"].map((color) => (
          <button
            key={color}
            className={`w-12 h-12 rounded-lg border-2 ${selectedColor === color ? "border-black" : "border-gray-300"}`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
      <div className="grid grid-cols-10 gap-1 bg-white p-4 shadow-lg rounded-lg">
        {canvas.map((color, index) => (
          <div
            key={index}
            className="w-8 h-8 border border-gray-300 cursor-pointer rounded-md"
            style={{ backgroundColor: color }}
            onClick={() => changeColor(index)}
          />
        ))}
      </div>
      <button
        onClick={resetCanvas}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Reset Canvas
      </button>
    </div>
  );
};

export default ColoringGame;
