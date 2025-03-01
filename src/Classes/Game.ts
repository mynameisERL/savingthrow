import { makeObservable, observable, action } from "mobx";
import Round from "./Round";

const enemiesList = [
  { name: "Slime Stallone", health: 100, filename: "slime.png" },
  { name: "Vlad Pitt", health: 150, filename: "vampire.png" },
  { name: "Bansheeoncé", health: 300, filename: "banshee.png" },
  { name: "Lich Olascage", health: 450, filename: "halloween.png" },
  { name: "Phantom Hanks", health: 600, filename: "ghost.png" },
  { name: "Owlbear Growlz", health: 750, filename: "owlbear.png" },
];
export type EnemyInfo = { name: string; health: number; filename: string };

type PlayerStates = "active" | "won" | "lost";
type Screens = "fight" | "loading" | "transition";

class Game {
  playerLevel: number;
  roundNumber: number;
  currentRound: Round;
  enemies: EnemyInfo[];
  currentEnemy: EnemyInfo;
  playerState: PlayerStates;
  screen: Screens;

  constructor() {
    this.playerLevel = 1;
    this.roundNumber = 0;
    this.enemies = enemiesList;
    this.currentEnemy = this.enemies[0];
    this.playerState = "active";
    this.screen = "loading";

    setTimeout(() => {
      this.changeScreen("fight");
    }, 3000);

    this.currentRound = new Round(
      this.currentEnemy.health,
      this.roundNumber,
      3
    );

    makeObservable(this, {
      playerLevel: observable,
      roundNumber: observable,
      enemies: observable,
      currentEnemy: observable,
      playerState: observable,
      currentRound: observable,
      screen: observable,
      nextRound: action,
      setPlayerState: action,
      evaluateRound: action,
      changeScreen: action,
    });
  }

  evaluateRound() {
    if (this.currentRound.currentScore >= this.currentRound.targetScore) {
      console.log(this.screen);
      this.nextRound();
      this.changeScreen("transition");
      console.log(this.screen);
      setTimeout(() => {
        this.changeScreen("fight");
        console.log(this.screen);
      }, 3000);
    }
  }

  nextRound() {
    if (this.playerLevel < this.enemies.length) {
      this.playerLevel++;
      this.roundNumber++;
      this.currentEnemy = this.enemies[this.playerLevel - 1];
      this.currentRound = new Round(
        this.currentEnemy.health,
        this.roundNumber,
        3
      );
    } else {
      this.setPlayerState("won");
    }
  }

  setPlayerState(playerState: PlayerStates) {
    this.playerState = playerState;
  }

  changeScreen(screen: Screens) {
    this.screen = screen;
  }
}

export default Game;
