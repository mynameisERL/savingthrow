import { makeObservable, observable, action } from "mobx";

class Die {
  currentNumber: number;
  possibleFaces: number[];
  selected: boolean;

  constructor() {
    this.currentNumber = 1;
    this.possibleFaces = [1, 2, 3, 4, 5, 6];
    this.selected = false;

    makeObservable(this, {
      currentNumber: observable,
      possibleFaces: observable,
      roll: action,
      selected: observable
    });
  }

  roll() {
    const randomFace = Math.floor(Math.random() * this.possibleFaces.length);
    this.currentNumber = this.possibleFaces[randomFace];
  }

  toggleSelected() {
    this.selected = !this.selected;
  }
}

export default Die;
