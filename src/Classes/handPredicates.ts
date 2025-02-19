type Chips = number;
type Mult = number;
export type ScoreTuple = [Chips, Mult];
export type ScoreResult = {
  handName: string;
  value: boolean;
  baseValue: number;
  scoreTuple: ScoreTuple;
};
export const HighRoll = (dice: Die[]): ScoreResult => {
  return {
    handName: "High Roll",
    value: true,
    baseValue: 5,
    scoreTuple: [5, 1],
  };
};
export const Pair = (dice: Die[]): ScoreResult => {
  const firstFace = dice[0].currentNumber;
  const secondFace = dice[1].currentNumber;
  const isValid = firstFace === secondFace;
  return {
    handName: "Pair",
    value: isValid,
    baseValue: 100,
    scoreTuple: [10, 2],
  };
};
export const TwoPair = (dice: Die[]): ScoreResult => {
  const faceCount: { [key: string]: number } = {};

  dice.forEach(({ currentNumber }) => {
    if (!faceCount[currentNumber]) {
      faceCount[currentNumber] = 1;
    } else {
      faceCount[currentNumber]++;
    }
  });

  const values = Object.values(faceCount);
  values.sort().reverse();
  const isValid = values[0] === 2 && values[1] === 2;
  // sort > 1,2,2
  // reverse to ensure the 2's are always in the 0 and 1 position

  return {
    handName: "Two Pair",
    value: isValid,
    baseValue: 40,
    scoreTuple: [20, 2],
  };
};
export const ThreeOfAKind = (dice: Die[]): ScoreResult => {
  const firstFace = dice[0].currentNumber;

  const isValid = dice.every((die: Die) => die.currentNumber === firstFace);

  return {
    handName: "Three of a Kind",
    value: isValid,
    baseValue: 90,
    scoreTuple: [30, 3],
  };
};
export const FourOfAKind = (dice: Die[]): ScoreResult => {
  const firstFace = dice[0].currentNumber;

  const isValid = dice.every((die: Die) => die.currentNumber === firstFace);

  return {
    handName: "Four of a Kind",
    value: isValid,
    baseValue: 140,
    scoreTuple: [35, 4],
  };
};
export const FullHouse = (dice: Die[]): ScoreResult => {
  const faceCount: { [key: string]: number } = {};

  dice.forEach(({ currentNumber }) => {
    if (!faceCount[currentNumber]) {
      faceCount[currentNumber] = 1;
    } else {
      faceCount[currentNumber]++;
    }
  });

  const values = Object.values(faceCount);
  values.sort();

  const isValid = values[0] === 2 && values[1] === 3;

  return {
    handName: "Full House",
    value: isValid,
    baseValue: 160,
    scoreTuple: [40, 4],
  };
};
export const SmallStraight = (dice: Die[]): ScoreResult => {
  const faces = dice.map((die) => die.currentNumber);
  faces.sort();

  const possibles = ["1,2,3,4", "2,3,4,5", "3,4,5,6"];

  const isValid = possibles.includes(faces.join());

  return {
    handName: "Small Straight",
    value: isValid,
    baseValue: 180,
    scoreTuple: [45, 4],
  };
};
export const LargeStraight = (dice: Die[]): ScoreResult => {
  const faces = dice.map((die) => die.currentNumber);
  faces.sort();

  const possibles = ["1,2,3,4,5", "2,3,4,5,6"];

  const isValid = possibles.includes(faces.join());

  return {
    handName: "Large Straight",
    value: isValid,
    baseValue: 180,
    scoreTuple: [60, 5],
  };
};
export const FiveOfAKind = (dice: Die[]): ScoreResult => {
  const firstNum = dice[0].currentNumber;

  const isValid = dice.every((die) => die.currentNumber === firstNum);

  return {
    handName: "Five of a Kind",
    value: isValid,
    baseValue: 375,
    scoreTuple: [75, 5],
  };
};
