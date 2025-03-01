import { observer } from "mobx-react";
import Game from "../../Classes/Game";
import { PlayArea } from "../molecules/PlayArea";
import { SideBar } from "../molecules/SideBar";
import { useEffect, useState } from "react";

type FightScreenProps = {
  game: Game;
};

export const FightScreen = observer(({ game }: FightScreenProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 50);
  }, []);

  return (
    <main
      className={`flex flex-row transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <SideBar round={game.currentRound} enemy={game.currentEnemy} />
      <PlayArea game={game} />
    </main>
  );
});
