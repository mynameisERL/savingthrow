import { observer } from "mobx-react";
import Game from "../../Classes/Game";
import { PlayArea } from "../molecules/PlayArea";
import { SideBar } from "../molecules/SideBar";

type FightScreenProps = {
  game: Game;
};

export const FightScreen = observer(({ game }: FightScreenProps) => {
  return (
    <main className="flex flex-row">
      <SideBar round={game.currentRound} enemy={game.currentEnemy}/>
      <PlayArea game={game} />
    </main>
  );
});
