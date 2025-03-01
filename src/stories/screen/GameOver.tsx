import { useState, useEffect } from "react";

const GameOverScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="absolute top-0 left-0 flex items-center justify-center h-[100dvh] w-[100dvw] bg-black overflow-hidden">
      {/* Torch Flicker Effect */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-orange-500 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-orange-500 rounded-full blur-sm animate-pulse"></div>

      {/* Game Over Text */}
      <div
        className={`relative text-6xl font-bold text-red-600 text-shadow-lg transition-all duration-1000 ease-in-out ${
          isVisible ? "opacity-100 scale-110" : "opacity-0 scale-90"
        }`}
        style={{
          textShadow:
            "0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.6)",
        }}
      >
        Game Over
      </div>

      {/* Subtext */}
      <div
        className={`absolute top-3/4 text-xl text-gray-300 transition-all duration-1000 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        You have been defeated by the monster... <br></br>Refresh to try again
      </div>

      {/* Light Effect from Torches */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-orange-500/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default GameOverScreen;
