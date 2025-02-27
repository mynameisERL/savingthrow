import { Button } from "../atoms/Button";

export const ButtonsContainer = () => {
  return (
    <section className="bg-gray-300 w-dvh h-40 flex flex-row place-content-around py-7">
      <Button label="Attack" />
      <Button label="Roll" />
    </section>
  );
};
