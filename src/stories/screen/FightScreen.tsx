import Game from "../../Classes/Game";
import { PlayArea } from "../molecules/PlayArea";
import { SideBar } from "../molecules/SideBar";

type FightScreenProps = {
  game: Game;
};

export const FightScreen = ({ game }: FightScreenProps) => {
  return (
    <main className="flex flex-row">
      <SideBar />
      <PlayArea game={game} />
    </main>
  );
};
