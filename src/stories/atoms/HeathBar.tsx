import { observer } from "mobx-react";

export interface HealthBarProps {
  healthPercentage: number;
}

export const HealthBar = observer(({ healthPercentage }: HealthBarProps) => {
  console.log(healthPercentage);
  return (
    <div className="w-lg bg-red-700 block rounded-full overflow-hidden h-4">
      <div
        className="h-full rounded-none bg-green-800"
        style={{ width: healthPercentage + "%" }}
      ></div>
    </div>
  );
});
