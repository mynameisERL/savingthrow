import { observer } from "mobx-react";
import "./App.css";
import Game from "./Classes/Game";
import { FightScreen } from "./stories/screen/FightScreen";
import LoadingScreen from "./stories/screen/LoadingScreen";
import { useMemo, useState } from "react";
import GameOverScreen from "./stories/screen/GameOver";
import GameCompleteScreen from "./stories/screen/GameCompleteScreen";

import InitialLoading from "./stories/screen/InitialLoading";

const App = observer(() => {
  const [game] = useState(() => new Game());
  const audio = useMemo(
    () => new Audio("/assets/music/FIGHT LOOT SHOP.mp3"),
    []
  );
  audio.loop = true;

  switch (game.screen) {
    case "fight":
      return <FightScreen game={game} />;
    case "loading":
      return <InitialLoading audio={audio} game={game} />;
    case "transition":
      return <LoadingScreen />;
    case "game_over":
      return <GameOverScreen />;
    case "game_complete":
      return <GameCompleteScreen />;
  }
});

export default App;
