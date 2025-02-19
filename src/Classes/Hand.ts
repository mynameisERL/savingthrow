import { makeObservable, observable, action } from "mobx";
import Die from "./Die";
// type NumString = "0" | "1" | "2" | "3" | "4" | "5";
// Rich how do we do this
// pls help

class Hand {
  currentHandScore: number;
  currentDice: Die[];
  selectedDice: { [key: number]: Die }; // roll selectdice.foreach, roll
  rollsLeft: number;
  // scorer

  constructor(amountOfDice: number, rollsLeft: number) {
    this.currentDice = Array(amountOfDice)
      .fill("")
      .map(() => new Die());
    this.rollsLeft = rollsLeft;
    this.currentHandScore = 0;
    this.selectedDice = {};

    makeObservable(this, {
      currentHandScore: observable,
      currentDice: observable,
      selectedDice: observable,
      rollsLeft: observable,
      selectDie: action,
    });
  }
  // selectDie > moves into selectedDice
  //    use the dice index from current dice > store it into selected dice on that key

  selectDie(diceIndex: number) {
    this.selectedDice[diceIndex] = this.currentDice[diceIndex];
  }

  // rollSelected > loops through selectedDice and calls roll method on each die // decrement rollsLeft
  rollSelected() {
    if (this.rollsLeft) {
      this.rollsLeft--;
      for (let diceKey in this.selectedDice) {
        const currentDie = this.selectedDice[diceKey];
        currentDie.roll();
        delete this.selectedDice[diceKey];
      }
    }
  }

  // unSelectDie > moves out selectedDice
  unselectDie(diceIndex: number) {
    delete this.selectedDice[diceIndex];
  }

  // decreaseRolls > for use with rollSelected
  decreaseRolls() {
    this.rollsLeft--;
  }

  // increaseRolls > have an item you use midgame to give an extra roll
  increaseRolls() {
    this.rollsLeft++;
  }

  // calculateScore > call scorer.calculate with this
}

export default Hand;
