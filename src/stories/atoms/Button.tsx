import { observer } from "mobx-react";
import Game from "../../Classes/Game";

export interface ButtonProps {
  label: string;
  game: Game
}

/** Primary UI component for user interaction */
export const Button = observer(({ label, game }: ButtonProps) => { 

  const attack = () => {
    game.currentRound.scoreHand();
    game.evaluateRound();
  }

  const roll = () => {
    game.currentRound.currentHand.rollSelected();
    game.currentRound.currentHand.calculateScore();
  }

  return (
    <button
      type="button"
      className="px-6 py-3 text-xl font-bold text-white-100 uppercase bg-yellow-950 border-4 border-yellow-700 rounded-md shadow-lg transition-all duration-200 ease-in-out hover:bg-yellow-700 hover:border-yellow-900 active:scale-95 font-medieval tracking-widest w-50"
      onClick={label === "Roll" ? roll : attack}
    >
      {label}
    </button>
  );
});
