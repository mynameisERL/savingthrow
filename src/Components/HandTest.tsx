import { observer } from "mobx-react";

import Hand from "../Classes/Hand";
import { useEffect, useState } from "react";

const HandTest = observer(() => {
  const [hand] = useState(() => new Hand(5, 3));

  useEffect(() => {
    hand.scorer.calculateHand();
    console.log("handChanges");
  }, [hand]);
  return (
    <div>
      <section>
        <p>{hand.scorer.bestHand.handName}</p>
        <p>Score: {hand.scorer.bestHand.baseValue}</p>
        <p>Rolls Left : {hand.rollsLeft}</p>
      </section>

      <ul className="flex flex-row">
        {hand.currentDice.map((dice, index) => {
          const selected = hand.selectedDice[index] ? true : false;

          return (
            <li
              className={`flex flex-col m-2 ${
                selected && "border border-b-emerald-600"
              }`}
            >
              <p>{dice.currentNumber}</p>
              <button
                onClick={() => {
                  if (selected) {
                    hand.unselectDie(index);
                  } else {
                    hand.selectDie(index);
                  }
                }}
              >
                {selected ? "-" : "+"}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          hand.rollSelected();
        }}
      >
        Roll Selected
      </button>
    </div>
  );
});

export default HandTest;
