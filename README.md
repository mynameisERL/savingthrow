# Saving Throw

Saving Throw is a Yahtzee-based roguelike game that combines strategic dice rolling with thrilling dungeon exploration. Test your luck and skill as you battle enemies and overcome challenges!

You can find a hosted version of this game [here](https://www.saving-throw.vercel.app) - Desktop only at this time.

This game was the work of;

Emily Bennett - [emilyb93](https://www.github.com/emilyb93)

Lewis Price - [lewispricey](https://www.github.com/lewispricey)

Richard Neat - [RNeat](https://www.github.com/RNeat)

With music by Emily Bennett.

As a new challenge for us we decided to try the state management system [MobX](https://mobx.js.org/README.html).

## Features

- **Dice Mechanics**: Roll dice to create the best hand and defeat enemies.
- **Roguelike Elements**: Increasing challenge in each fight.
- **Strategic Gameplay**: Plan your re-rolls carefully to survive.

## How to play

Each level contains three rounds, each round consists of three hands, and each hand allows up to three rolls to achieve the best possible combination.

All dice will be automatically selected on the first roll of each round. Click on dice to select them for re-rolling; selected dice will turn green. When ready, press "Roll" to re-roll the selected dice. If you prefer not to select dice manually, pressing "Play" will automatically use the best hand available from the current dice.

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. Clone the repository:

```bash
git clone https://github.com/mynameisERL/saving-throw.git
cd saving-throw
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173` to play the game.

### Build for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

Enjoy the game and may your rolls be ever in your favor!
