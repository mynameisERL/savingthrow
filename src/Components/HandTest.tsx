import { observer } from "mobx-react";

import Hand from "../Classes/Hand";
import { useState } from "react";
import dab from "../assets/dab.gif";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const HandTest = observer(() => {
  const [hand] = useState(() => new Hand(5, 100));
  const { width, height } = useWindowSize();
  return (
    <div>
      <Confetti
        run={hand.scoreInfo.handName === "Five of a Kind"}
        width={width}
        height={height}
      />
      <section>
        {hand.scoreInfo.handName === "Five of a Kind" && (
          <div>
            <p className="text-7xl"> SAVING THROW :OOOOOOOOO</p>
            <div className="flex flex-row">
              <img src={dab} />
              <img src={dab} />
              <img src={dab} />
              <img src={dab} />
              <img src={dab} />
              <img src={dab} />
              <img src={dab} />
              <img src={dab} />
            </div>
          </div>
        )}
        <p>{hand.scoreInfo.handName}</p>
        <p>Score: {hand.scoreInfo.baseValue}</p>
        <p>Rolls Left : {hand.rollsLeft}</p>
      </section>
      <button
        onClick={() => {
          [0, 1, 2, 3, 4].forEach((i) => hand.selectDie(i));
        }}
      >
        Select All
      </button>

      <ul className="flex flex-row justify-center">
        {hand.currentDice.map((dice, index) => {
          const selected = hand.selectedDice[index] ? true : false;

          return (
            <li
              className={`flex flex-col m-2 ${
                selected && "border border-b-emerald-600"
              }`}
            >
              <button
                onClick={() => {
                  if (selected) {
                    hand.unselectDie(index);
                  } else {
                    hand.selectDie(index);
                  }
                }}
              >
                {dice.currentNumber}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          hand.rollSelected();
          hand.calculateScore();
        }}
      >
        Roll Selected
      </button>
    </div>
  );
});

export default HandTest;
