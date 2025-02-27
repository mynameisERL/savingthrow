import Game from "../../Classes/Game";
import { Monster } from "./Monster";
import { ButtonsContainer } from "./ButtonsContainer";
import { DiceContainer } from "./DiceContainer";
import { TopRow } from "./TopRow";

type PlayAreaProps = {
  game: Game;
};

export const PlayArea = ({ game }: PlayAreaProps) => {
  return (
    <section className="bg-gray-300 h-dvh w-dvh outline-gray-900 outline-4 flex flex-col">
      <TopRow />
      <Monster filename={"ghost.png"} health={100} score={80} />
      <DiceContainer currentDice={game.currentRound.currentHand.currentDice} />
      <ButtonsContainer />
    </section>
  );
};
