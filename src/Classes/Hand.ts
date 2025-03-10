import { makeObservable, observable, action } from "mobx";
import Die from "./Die";
import Scorer from "./Scorer";
import { ScoreResult } from "./handPredicates";
// type NumString = "0" | "1" | "2" | "3" | "4" | "5";
// Rich how do we do this
// pls help

class Hand {
  currentHandScore: number;
  currentDice: Die[];
  selectedDice: { [key: number]: Die };
  rollsLeft: number;
  scoreInfo: ScoreResult;

  constructor(amountOfDice: number, rollsLeft: number) {
    this.selectedDice = {};
    this.currentDice = Array(amountOfDice)
      .fill("")
      .map(() => new Die());

    this.currentDice.forEach((_, i) => this.selectDie(i));
    this.rollsLeft = rollsLeft;
    this.currentHandScore = 0;
    this.scoreInfo = {
      handName: "Ready to Roll",
      baseValue: 0,
      value: true,
      scoreTuple: [0, 0],
    } as ScoreResult;
    makeObservable(this, {
      currentHandScore: observable,
      currentDice: observable,
      selectedDice: observable,
      rollsLeft: observable,
      scoreInfo: observable,
      calculateScore: action,
      rollSelected: action,
      selectDie: action,
      unselectDie: action,
      decreaseRolls: action,
      increaseRolls: action,
    });
  }

  calculateScore() {
    const scorer = new Scorer(this.currentDice);

    const score = scorer.calculateHand();
    this.scoreInfo = score;
    return score;
  }
  // selectDie > moves into selectedDice
  //    use the dice index from current dice > store it into selected dice on that key

  selectDie(diceIndex: number) {
    this.selectedDice[diceIndex] = this.currentDice[diceIndex];
    this.currentDice[diceIndex].toggleSelected();
  }

  // rollSelected > loops through selectedDice and calls roll method on each die // decrement rollsLeft
  rollSelected() {
    if (this.rollsLeft) {
      this.rollsLeft--;
      for (let diceKey in this.selectedDice) {
        const currentDie = this.selectedDice[diceKey];
        currentDie.roll();
        currentDie.toggleSelected();
        delete this.selectedDice[diceKey];
      }
    }
  }

  // unSelectDie > moves out selectedDice
  unselectDie(diceIndex: number) {
    delete this.selectedDice[diceIndex];
    this.currentDice[diceIndex].toggleSelected();
  }

  // decreaseRolls > for use with rollSelected
  decreaseRolls() {
    this.rollsLeft--;
  }

  // increaseRolls > have an item you use midgame to give an extra roll
  increaseRolls() {
    this.rollsLeft++;
  }
}

export default Hand;
