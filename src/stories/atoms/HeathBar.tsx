import { observer } from "mobx-react";

export interface HealthBarProps {
  healthPercentage: number;
  monsterHealth: number;
  currentScore: number;
}

export const HealthBar = observer(
  ({ healthPercentage, monsterHealth, currentScore }: HealthBarProps) => {
    console.log(healthPercentage);
    return (
      <>
        <p className="text-black">
          {monsterHealth - currentScore} / {monsterHealth}
        </p>
        <div className="w-lg bg-red-700 block rounded-full overflow-hidden h-4">
          <div
            className="h-full rounded-none bg-green-800 "
            style={{ width: healthPercentage + "%" }}
          ></div>
          <p></p>
        </div>
      </>
    );
  }
);
