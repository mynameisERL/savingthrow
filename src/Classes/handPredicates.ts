type Chips = number;
type Mult = number;
export type ScoreTuple = [Chips, Mult];
export type ScoreResult = {
  handName: string;
  value: boolean;
  baseValue: number;
  scoreTuple: ScoreTuple;
};

const createMap = (dice: number[]) => {
  const faceCount: { [key: string]: number } = {};

  dice.forEach((currentNumber) => {
    if (!faceCount[currentNumber]) {
      faceCount[currentNumber] = 1;
    } else {
      faceCount[currentNumber]++;
    }
  });

  return faceCount;
};

export const HighRoll = (_: number[]): ScoreResult => {
  return {
    handName: "High Roll",
    value: true,
    baseValue: 5,
    scoreTuple: [5, 1],
  };
};
export const Pair = (dice: number[]): ScoreResult => {
  const map = createMap(dice);

  const values = Object.values(map);

  let isValid = false;
  values.forEach((val) => {
    if (val >= 2) {
      isValid = true;
    }
  });

  return {
    handName: "Pair",
    value: isValid,
    baseValue: 20,
    scoreTuple: [10, 2],
  };
};
export const TwoPair = (dice: number[]): ScoreResult => {
  const map = createMap(dice);

  const values = Object.values(map);

  values.sort().reverse();
  const isValid = values[0] >= 2 && values[1] >= 2; // needs two 2's

  return {
    handName: "Two Pair",
    value: isValid,
    baseValue: 40,
    scoreTuple: [20, 2],
  };
};

export const ThreeOfAKind = (dice: number[]): ScoreResult => {
  const map = createMap(dice);

  const values = Object.values(map);

  let isValid = false;

  if (values.includes(3)) {
    isValid = true;
  }

  return {
    handName: "Three of a Kind",
    value: isValid,
    baseValue: 90,
    scoreTuple: [30, 3],
  };
};
export const FourOfAKind = (dice: number[]): ScoreResult => {
  const map = createMap(dice);

  const values = Object.values(map);
  let isValid = false;

  if (values.includes(4)) {
    isValid = true;
  }

  return {
    handName: "Four of a Kind",
    value: isValid,
    baseValue: 140,
    scoreTuple: [35, 4],
  };
};
export const FullHouse = (dice: number[]): ScoreResult => {
  const map = createMap(dice);

  const values = Object.values(map);
  let isValid = false;

  if (values.includes(3) && values.includes(2)) {
    isValid = true;
  }

  return {
    handName: "Full House",
    value: isValid,
    baseValue: 160,
    scoreTuple: [40, 4],
  };
};
export const SmallStraight = (dice: number[]): ScoreResult => {
  const faces = dice.map((die) => die);
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
export const LargeStraight = (dice: number[]): ScoreResult => {
  const faces = dice.map((die) => die);
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
export const FiveOfAKind = (dice: number[]): ScoreResult => {
  const firstNum = dice[0];

  const isValid = dice.every((die) => die === firstNum);

  return {
    handName: "Five of a Kind",
    value: isValid,
    baseValue: 375,
    scoreTuple: [75, 5],
  };
};
