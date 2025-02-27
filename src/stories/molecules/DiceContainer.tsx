import { Dice } from "../atoms/Dice";

export const DiceContainer = () => {
  return (
    <section className="bg-gray-200 w-dvh h-30 flex flex-row place-content-center">
      <Dice number={1} isSelected={false} />
      <Dice number={1} isSelected={false} />
      <Dice number={1} isSelected={false} />
      <Dice number={1} isSelected={false} />
      <Dice number={1} isSelected={false} />
    </section>
  );
};
