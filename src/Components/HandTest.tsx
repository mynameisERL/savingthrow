import { observer } from "mobx-react";

import { useState } from "react";
import dab from "../assets/dab.gif";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import Game from "../Classes/Game";

const HandTest = observer(() => {
  const [game] = useState(() => new Game());
  const round = game.currentRound;
  const hand = round.currentHand;
  const { width, height } = useWindowSize();
  return (
    <div>
      {hand.scoreInfo.handName === "Five of a Kind" && (
        <Confetti
          run={hand.scoreInfo.handName === "Five of a Kind"}
          width={width}
          height={height}
        />
      )}
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
      </section>
      <img
        className="h-10 w-10 m-auto"
        src={"src/assets/monsters/" + game.currentEnemy.filename}
      ></img>

      <p>Round Number: {round.roundNumber + 1}</p>
      <p>{game.currentEnemy.name}</p>
      <p>Enemy health: {round.targetScore}</p>
      <p>Score: {round.currentScore}</p>
      <p>{hand.scoreInfo.handName}</p>
      <p>{hand.scoreInfo.baseValue}</p>
      <p>
        {hand.scoreInfo.scoreTuple[0]} x {hand.scoreInfo.scoreTuple[1]}
      </p>

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
                    console.log(hand.selectedDice);
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
          round.scoreHand();
          game.evaluateRound();
        }}
      >
        Play Hand
      </button>
      <button
        onClick={() => {
          hand.rollSelected();
          hand.calculateScore();
        }}
      >
        Roll Selected
      </button>
      <p>Hands left: {round.handsLeft}</p>
      <p>Rerolls Left : {hand.rollsLeft}</p>
    </div>
  );
});

export default HandTest;
