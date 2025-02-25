export interface RoundInfoProps {
  round: number,
  enemy: string,
  money: number
}
  
  /** Primary UI component for user interaction */
  export const RoundInfo = ({ round, enemy, money }: RoundInfoProps) => {
    return (
      <section
        className="px-3 py-3 text-xl font-bold text-white-100 uppercase bg-yellow-950 border-4 border-yellow-700 rounded-md shadow-lg font-medieval tracking-widest w-80 h-60 grid grid-rows-3 text-center"
      >
        <p>round {round}</p>
        <p>{enemy}</p>
        <p>{money}G</p>
      </section>
    );
  };