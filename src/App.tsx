import { observer } from "mobx-react";
import "./App.css";
import Game from "./Classes/Game";
import { FightScreen } from "./stories/screen/FightScreen";
import LoadingScreen from "./stories/screen/LoadingScreen";
import { useState } from "react";
import GameOverScreen from "./stories/screen/GameOver";
import GameCompleteScreen from "./stories/screen/GameCompleteScreen";

const App = observer(() => {
  const [game] = useState(() => new Game());

  switch (game.screen) {
    case "fight":
      return <FightScreen game={game} />;
    case "loading":
      return <LoadingScreen />;
    case "transition":
      return <LoadingScreen />;
    case "game_over":
      return <GameOverScreen />;
    case "game_complete":
      return <GameCompleteScreen />;
  }
});

export default App;
