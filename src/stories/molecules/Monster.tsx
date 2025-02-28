import { useMemo } from "react";
import { HealthBar } from "../atoms/HeathBar";
import { observer } from "mobx-react";

type MonsterProps = {
  filename: string;
  health: number;
  score: number;
};

export const Monster = observer(({ filename, health, score }: MonsterProps) => {
  const onePercentOfHealth = useMemo(() => health / 100, []);
  return (
    <section className="bg-gray-300 w-dvh h-80 flex flex-col justify-center items-center">
      <img className="h-50 w-50 mb-3" src={"src/assets/monsters/" + filename} />
      <HealthBar healthPercentage={100 - score / onePercentOfHealth} />
    </section>
  );
});
