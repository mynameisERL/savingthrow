import { makeObservable, observable, action } from "mobx";

class Die {
  currentNumber: number;
  possibleFaces: number[];

  constructor() {
    this.currentNumber = 1;
    this.possibleFaces = [1, 2, 3, 4, 5, 6];

    makeObservable(this, {
      currentNumber: observable,
      possibleFaces: observable,
      roll: action,
    });
  }

  roll() {
    const randomFace = Math.floor(Math.random() * this.possibleFaces.length);
    this.currentNumber = this.possibleFaces[randomFace];
  }
}

export default Die;
