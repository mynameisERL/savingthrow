export interface InfoBoxProps {
    label: string;
    datum: number;
}
  
  /** Primary UI component for user interaction */
  export const InfoBox = ({ label, datum }: InfoBoxProps) => {
    return (
      <section
        className="px-3 py-3 text-xl font-bold text-white-100 uppercase bg-yellow-950 border-4 border-yellow-700 rounded-md shadow-lg font-medieval tracking-widest w-35 h-50 grid grid-rows-[30%, 70%] text-center"
      >
        <span>{label}</span>
        <span className="text-8xl text-center">{datum}</span>
      </section>
    );
  };