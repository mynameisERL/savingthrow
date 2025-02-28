import { observer } from "mobx-react";
import { Button } from "../atoms/Button";
import { InventorySlot } from "../atoms/InventorySlot";
import Game from "../../Classes/Game";

type TopRowProps = {
  game: Game
}

export const TopRow = observer(({game} : TopRowProps) => {
  return (
    <section className="bg-gray-300 w-dvh h-50 flex flex-row justify-center items-center *:p-5">
      <InventorySlot label="head" />
      <InventorySlot label="body" />
      <InventorySlot label="legs" />
      <InventorySlot label="l.arm" />
      <InventorySlot label="r.arm" />

      <Button label="Bag" game={game}/>
    </section>
  );
});
