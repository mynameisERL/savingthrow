import dice_1 from "../../assets/icons/dice/dice_1.svg";
import dice_2 from "../../assets/icons/dice/dice_2.svg";
import dice_3 from "../../assets/icons/dice/dice_3.svg";
import dice_4 from "../../assets/icons/dice/dice_4.svg";
import dice_5 from "../../assets/icons/dice/dice_5.svg";
import dice_6 from "../../assets/icons/dice/dice_6.svg";

export interface DiceProps {
  number: number;
}

export const Dice = ({ number }: DiceProps) => {
  const dieLookup = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];
  return (
    <div className="w-25">
      <img src={dieLookup[number - 1]} alt={`${number} sided die`} />
    </div>
  );
};
