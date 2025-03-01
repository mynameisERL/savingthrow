import { useState, useEffect } from "react";
import Game from "../../Classes/Game";

type InitialLoadingProps = {
  audio: HTMLAudioElement;
  game: Game;
};
const InitialLoading = ({ audio, game }: InitialLoadingProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="absolute top-0 left-0 flex items-center justify-center h-[100dvh] w-[100dvw] bg-black overflow-hidden">
      {/* Dungeon Wall Texture */}
      <div className="absolute inset-0 bg-[url('src/assets/textures/bricktexture.jpg')] bg-cover bg-center opacity-50"></div>

      <div
        className={`fixed inset-0 flex items-center justify-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          height: "100dvh",
          width: "100dvw",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="smoke-effect">
            <div className="smoke-circle"></div>
            <div className="smoke-circle"></div>
            <div className="smoke-circle"></div>
          </div>
        </div>

        <div className="text-white font-bold relative z-10 text-7xl">
          <p className="tracking-widest">Saving Throw</p>

          <br></br>
          <button
            className="animate-pulse active:animate-ping"
            onClick={() => {
              game.changeScreen("fight");
              audio.play();
            }}
          >
            Play
          </button>
        </div>

        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-orange-500 rounded-full blur-sm animate-flicker"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-orange-500 rounded-full blur-sm animate-flicker"></div>
      </div>
    </div>
  );
};

export default InitialLoading;
