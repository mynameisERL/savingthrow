export interface HandInfoProps {
    handName: string,
    scoreTuple: [number, number]
}
    
/** Primary UI component for user interaction */
export const HandInfo = ({handName, scoreTuple}: HandInfoProps) => {
    return (
    <section
        className="px-3 py-3 text-xl font-bold text-white-100 uppercase bg-yellow-950 border-4 border-yellow-700 rounded-md shadow-lg font-medieval tracking-widest w-80 h-40 grid grid-rows-2 text-center"
    >
        <p className={handName.length >= 10 ? "text-2xl" : "text-4xl"}>{handName}</p>
        <p className="text-4xl tracking-[1.2rem] lowercase">{scoreTuple[0]} x {scoreTuple[1]}</p>
    </section>
    );
};