import React, { useState, useEffect } from "react";

const generateShuffledGrid = () => {
  const tiles = Array.from({ length: 9 }, (_, i) => i);
  do {
    tiles.sort(() => Math.random() - 0.5);
  } while (!isSolvable(tiles));
  return tiles;
};

const isSolvable = (tiles: number[]) => {
  let inversions = 0;
  for (let i = 0; i < tiles.length; i++) {
    for (let j = i + 1; j < tiles.length; j++) {
      if (tiles[i] && tiles[j] && tiles[i] > tiles[j]) inversions++;
    }
  }
  return inversions % 2 === 0;
};

const PuzzleSlider: React.FC = () => {
  const [tiles, setTiles] = useState<number[]>(generateShuffledGrid());

  const moveTile = (index: number) => {
    const emptyIndex = tiles.indexOf(0);
    const validMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - 3, emptyIndex + 3];
    if (validMoves.includes(index)) {
      const newTiles = [...tiles];
      [newTiles[emptyIndex], newTiles[index]] = [newTiles[index], newTiles[emptyIndex]];
      setTiles(newTiles);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Puzzle Slider</h2>
      <p className="text-lg text-gray-600 mb-4">Arrange the tiles in order.</p>
      <div className="grid grid-cols-3 gap-2 bg-white p-4 shadow-lg rounded-lg">
        {tiles.map((tile, index) => (
          <button
            key={index}
            className={`w-20 h-20 flex items-center justify-center border text-xl font-bold ${tile === 0 ? "bg-gray-300" : "bg-blue-500 text-white"}`}
            onClick={() => moveTile(index)}
          >
            {tile !== 0 && tile}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PuzzleSlider;
