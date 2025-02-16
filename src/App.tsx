import { useState } from "react";

import { observer } from "mobx-react";
import Game from "./Classes/Game";

const game = new Game();
const Buttons = observer(() => {
  return (
    <>
      <button onClick={() => game.increaseCount()}>
        count is {game.count}
      </button>
      <p>double count is {game.doubleCount}</p>
    </>
  );
});

import "./App.css";

function App() {
  return <Buttons />;
}

export default App;
