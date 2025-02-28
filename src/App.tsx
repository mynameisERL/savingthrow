import "./App.css";
import Game from "./Classes/Game";
import { FightScreen } from "./stories/screen/FightScreen";

function App() {

  const game = new Game();

  return (
    <div>
      <FightScreen game={game}/>
    </div>
  );
}

export default App;
