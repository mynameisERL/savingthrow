export interface ButtonProps {
  label: string;
}

/** Primary UI component for user interaction */
export const Button = ({ label }: ButtonProps) => {
  return (
    <button
      type="button"
      className="px-6 py-3 text-xl font-bold text-white-100 uppercase bg-yellow-950 border-4 border-yellow-700 rounded-md shadow-lg transition-all duration-200 ease-in-out hover:bg-yellow-700 hover:border-yellow-900 active:scale-95 font-medieval tracking-widest w-50"
    >
      {label}
    </button>
  );
};
