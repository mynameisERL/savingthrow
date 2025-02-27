import { useMemo } from "react";
import { HealthBar } from "./atoms/HeathBar";

type MonsterProps = {
  filename: string;
  health: number;
  score: number;
};

export const Monster = ({ filename, health, score }: MonsterProps) => {
  const onePercentOfHealth = useMemo(() => health / 100, []);
  console.log(score / onePercentOfHealth);
  return (
    <section className="bg-gray-300 w-dvh h-50 flex flex-col justify-center items-center">
      <img className="h-30 w-30 mb-3" src={"src/assets/monsters/" + filename} />
      <HealthBar healthPercentage={100 - score / onePercentOfHealth} />
    </section>
  );
};
