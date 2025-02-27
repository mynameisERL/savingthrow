export interface InventorySlotProps {
  label: string;
  itemInfo?: { title: string; description: string; imgUrl: string };
}

/** Primary UI component for user interaction */
export const InventorySlot = ({ label, itemInfo }: InventorySlotProps) => {
  return (
    <section className="text-xl font-bold text-white-100 uppercase bg-stone-600 rounded-lg shadow-lg font-medieval tracking-widest w-35 h-35 grid text-center m-1">
      {itemInfo ? (
        <section className="relative group grid">
          <img
            src={`src/assets/items/${itemInfo.imgUrl}`}
            className="w-30 h-30 m-auto rounded-md"
          ></img>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-max bg-gray-800 text-white text-sm rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="font-semibold">{itemInfo.title}</div>
            <div className="mt-1">{itemInfo.description}</div>
          </div>
        </section>
      ) : (
        <p className="my-auto">{label}</p>
      )}
    </section>
  );
};
