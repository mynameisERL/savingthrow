import { HealthBar } from "../atoms/HeathBar";
import { observer } from "mobx-react";
import Round from "../../Classes/Round";

type MonsterProps = {
  filename: string;
  round: Round;
};

export const Monster = observer(({ filename, round }: MonsterProps) => {
  return (
    <section className="bg-gray-300 w-dvh h-80 flex flex-col justify-center items-center">
      <img className="h-50 w-50 mb-3" src={"/assets/monsters/" + filename} />
      <HealthBar
        healthPercentage={round.healthPercentage}
        monsterHealth={round.targetScore}
        currentScore={round.currentScore}
      />
    </section>
  );
});
