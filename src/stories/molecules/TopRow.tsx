import { Button } from "../atoms/Button";
import { InventorySlot } from "../atoms/InventorySlot";

export const TopRow = () => {
  return (
    <section className="bg-gray-300 w-dvh h-50 flex flex-row justify-center items-center *:p-5">
      <InventorySlot label="Head" />
      <InventorySlot label="Head" />
      <InventorySlot label="Head" />
      <InventorySlot label="Head" />
      <InventorySlot label="Head" />

      <Button label="Bag" />
    </section>
  );
};
