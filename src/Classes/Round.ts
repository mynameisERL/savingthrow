import Hand from "./Hand";
import { makeObservable, observable, action } from "mobx";

class Round {
  targetScore: number;
  currentScore: number;
  roundNumber: number;
  handsLeft: number;
  currentHand: Hand;

  constructor(targetScore: number, roundNumber: number, handsLeft: number) {
    this.targetScore = targetScore;
    this.roundNumber = roundNumber;
    this.handsLeft = handsLeft;
    this.currentScore = 0;
    this.currentHand = new Hand(5, 8);
    makeObservable(this, {
      targetScore: observable,
      currentScore: observable,
      roundNumber: observable,
      handsLeft: observable,
      currentHand: observable,
      scoreHand: action,
    });
  }
  scoreHand() {
    const [chips, mult] = this.currentHand.scoreInfo.scoreTuple;
    const score = chips * mult;
    this.currentScore = score;

    this.currentHand = new Hand(5, 100);
    this.handsLeft--;
  }
}

export default Round;
