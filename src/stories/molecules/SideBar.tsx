import { observer } from "mobx-react";
import { EnemyInfo } from "../../Classes/Game";
import Round from "../../Classes/Round";
import { HandInfo } from "../atoms/HandInfo";
import { Header } from "../atoms/Header";
import { InfoBox } from "../atoms/InfoBox";
import { RoundInfo } from "../atoms/RoundInfo";

export interface SideBarProps {
  round: Round,
  enemy: EnemyInfo
}

/** Primary UI component for user interaction */
export const SideBar = observer(({round, enemy}:SideBarProps) => {
  return (
    <section className="h-dvh grid grid-row-3 p-2 *:p-2 bg-gray-300 border-gray-900 outline-gray-900 outline-4">
      <Header />
      <RoundInfo round={round.roundNumber + 1} enemy={enemy.name} money={23} />
      <HandInfo handName={round.currentHand.scoreInfo.handName} scoreTuple={round.currentHand.scoreInfo.scoreTuple} />
      <div className="grid grid-cols-2 space-around">
        <InfoBox label="attacks" datum={round.handsLeft} />
        <InfoBox label="rolls" datum={round.currentHand.rollsLeft} />
      </div>
    </section>
  );
});
