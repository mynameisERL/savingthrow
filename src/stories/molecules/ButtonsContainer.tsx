import { observer } from "mobx-react";
import Game from "../../Classes/Game";
import { Button } from "../atoms/Button";

type ButtonsContainerProps = {
  game: Game;
};

export const ButtonsContainer = observer(({ game }: ButtonsContainerProps) => {
  return (
    <section className="bg-gray-300 w-dvh h-40 flex flex-row place-content-around py-7">
      <Button
        label="Attack"
        game={game}
        disabled={game.currentRound.currentHand.rollsLeft === 3}
      />
      <Button label="Roll" game={game} disabled={false} />
    </section>
  );
});
