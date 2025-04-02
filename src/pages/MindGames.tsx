// src/pages/MindGames.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Grid from "@/components/ui/grid";
import MemoryMatch from "@/components/games/MemoryMatch";
import BreathingExercise from "@/components/games/BreathingExercise";
import ColoringGame from "@/components/games/ColoringGame";
import PuzzleSlider from "@/components/games/PuzzleSlider";
import WhackAMole from "@/components/games/WhackAMole";
import WordScramble from "@/components/games/WordScramble";

const games = [
  { name: "Memory Match", component: <MemoryMatch /> },
  { name: "Breathing Exercise", component: <BreathingExercise /> },
  { name: "Coloring Game", component: <ColoringGame /> },
  { name: "Puzzle Slider", component: <PuzzleSlider /> },
  { name: "Whack-a-Mole", component: <WhackAMole /> },
  { name: "Word Scramble", component: <WordScramble /> },
];

const MindGames: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Interactive Mind Games</h1>
      <p className="text-lg text-gray-600 mb-6">
        Play engaging, science-backed games designed to boost focus, memory, and emotional well-being.
      </p>
      <Grid>
        {games.map((game, index) => (
          <Card key={index} className="p-4 text-center">
            <CardContent>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">{game.name}</h2>
              {game.component}
            </CardContent>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default MindGames;
