import { observer } from "mobx-react";

import Hand from "../Classes/Hand";
import { useState } from "react";

const HandTest = observer(() => {
  const [hand] = useState(() => new Hand(5, 3));

  return (
    <div>
      <section>Rolls Left : {hand.rollsLeft}</section>
      <ul className="flex flex-row">
        {hand.currentDice.map((dice, index) => {
          const selected = hand.selectedDice[index] ? true : false;
          console.log(index, selected);
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
                {selected ? "remove" : "select"}
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
