import Die from "../../Classes/Die";
import { Dice, DiceNumber } from "../atoms/Dice";

type DiceContainerProps = {
  currentDice: Die[];
};

export const DiceContainer = ({ currentDice }: DiceContainerProps) => {
  return (
    <section className="bg-gray-300 w-dvh h-30 flex flex-row place-content-center">
      {currentDice.map((die, index) => (
        <Dice
          key={index}
          number={die.currentNumber as DiceNumber}
          isSelected={false}
        />
      ))}
    </section>
  );
};
