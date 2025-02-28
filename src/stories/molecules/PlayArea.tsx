import Game from "../../Classes/Game";
import { Monster } from "./Monster";
import { ButtonsContainer } from "./ButtonsContainer";
import { DiceContainer } from "./DiceContainer";
import { TopRow } from "./TopRow";
import { observer } from "mobx-react";

type PlayAreaProps = {
  game: Game;
};

export const PlayArea = observer(({ game }: PlayAreaProps) => {
  return (
    <section className="bg-gray-300 h-dvh w-dvh outline-gray-900 outline-4 flex flex-col">
      <TopRow game={game}/>
      <Monster filename={game.currentEnemy.filename} health={game.currentEnemy.health} score={0} />
      <DiceContainer currentDice={game.currentRound.currentHand.currentDice} hand={game.currentRound.currentHand}/>
      <ButtonsContainer game={game}/>
    </section>
  );
});
