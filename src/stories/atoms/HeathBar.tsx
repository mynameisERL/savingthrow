export interface HealthBarProps {
  healthPercentage: number;
}

export const HealthBar = ({ healthPercentage }: HealthBarProps) => {
  return (
    <div className="w-lg bg-red-700 block rounded-full overflow-hidden h-4">
      <div
        className="h-full rounded-none bg-green-800"
        style={{ width: healthPercentage + "%" }}
      ></div>
    </div>
  );
};
