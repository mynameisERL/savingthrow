import {
  FiveOfAKind,
  LargeStraight,
  SmallStraight,
  FullHouse,
  FourOfAKind,
  ThreeOfAKind,
  TwoPair,
  Pair,
  HighRoll,
  ScoreResult,
} from "./handPredicates";
import { makeObservable, observable, action } from "mobx";

const possibleHands = [
  FiveOfAKind,
  LargeStraight,
  SmallStraight,
  FullHouse,
  FourOfAKind,
  ThreeOfAKind,
  TwoPair,
  Pair,
  HighRoll,
];

import Die from "./Die";

class Scorer {
  dice: Die[];

  bestHand: ScoreResult;

  constructor(dice: Die[]) {
    this.dice = dice;
    this.bestHand = {
      handName: "High Roll",
      value: true,
      baseValue: 5,
      scoreTuple: [5, 1],
    };

    makeObservable(this, {
      dice: observable,
      bestHand: observable,
      calculateHand: action,
    });
  }

  calculateHand() {
    let currentBestScore = this.bestHand.baseValue;
    const faces = this.dice.map((x) => x.currentNumber);

    for (let i = 0; i < possibleHands.length; i++) {
      const output = possibleHands[i](faces);
      if (output.value === true && output.baseValue > currentBestScore) {
        currentBestScore = output.baseValue;
        this.bestHand = output;
      }
    }

    return this.bestHand;
  }
}

export default Scorer;
