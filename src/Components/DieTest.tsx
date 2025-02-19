import { observer } from "mobx-react";

import Die from "../Classes/Die";
import { useState } from "react";

const DieTest = observer(() => {
  const [die] = useState(() => new Die());

  return (
    <div>
      <p>{die.currentNumber}</p>
      <button
        onClick={() => {
          die.roll();
        }}
      >
        Roll
      </button>
    </div>
  );
});

export default DieTest;
