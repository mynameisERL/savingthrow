import Hand from "./Hand";
import { makeObservable, observable, action, computed } from "mobx";

class Round {
  targetScore: number;
  currentScore: number;
  roundNumber: number;
  handsLeft: number;
  currentHand: Hand;
  onePercentOfHealth: number;

  constructor(targetScore: number, roundNumber: number, handsLeft: number) {
    this.targetScore = targetScore;
    this.roundNumber = roundNumber;
    this.handsLeft = handsLeft;
    this.currentScore = 0;
    this.currentHand = new Hand(5, 3);
    this.onePercentOfHealth = targetScore / 100;
    makeObservable(this, {
      targetScore: observable,
      currentScore: observable,
      roundNumber: observable,
      handsLeft: observable,
      currentHand: observable,
      healthPercentage: computed,
      scoreHand: action,
    });
  }
  scoreHand() {
    const [chips, mult] = this.currentHand.scoreInfo.scoreTuple;
    const score = chips * mult;
    this.currentScore += score;

    this.currentHand = new Hand(5, 3);
    this.handsLeft--;
  }

  get healthPercentage() {
    if (this.currentScore > this.targetScore) return 0;
    return 100 - this.currentScore / this.onePercentOfHealth;
  }
}

export default Round;
