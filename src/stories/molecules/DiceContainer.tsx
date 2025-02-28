import Die from "../../Classes/Die";
import Hand from "../../Classes/Hand";
import { Dice, DiceNumber } from "../atoms/Dice";
import { observer } from "mobx-react";

type DiceContainerProps = {
  currentDice: Die[];
  hand: Hand
};

export const DiceContainer = observer(({ currentDice, hand }: DiceContainerProps) => {  
  return (
    <section className="bg-gray-300 w-dvh h-30 flex flex-row place-content-center">
      {currentDice.map((die, index) => (
        <Dice
          key={index}
          index={index}
          number={die.currentNumber as DiceNumber}
          hand={hand}
          die={die}
        />
      ))}
    </section>
  );
});
