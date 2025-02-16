import { makeObservable, observable, action, computed } from "mobx";

class Game {
  count: number = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      doubleCount: computed,
      increaseCount: action,
    });
  }

  increaseCount() {
    this.count++;
  }

  get doubleCount() {
    return this.count * 2;
  }
}

export default Game;
