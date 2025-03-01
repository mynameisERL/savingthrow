import { observer } from "mobx-react";
import "./App.css";
import Game from "./Classes/Game";
import { FightScreen } from "./stories/screen/FightScreen";
import LoadingScreen from "./stories/screen/LoadingScreen";
import { useState } from "react";

const App = observer(() => {
  const [game] = useState(() => new Game());

  return (
    <div>
      {game.screen === "fight" ? (
        <FightScreen game={game} />
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
});

export default App;
