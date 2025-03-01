const GameCompleteScreen = () => {
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center h-[100dvh] w-[100dvw] bg-black overflow-hidden">
      <img
        src="/assets/dab.gif"
        alt="Game Complete"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
        <h1 className="text-6xl font-bold text-white text-shadow-lg">
          Game Complete!
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Congratulations on your victory!<br></br>
          Thanks for playing!
          <br></br>
          This game was created by
          <br></br>
          <ul className="flex flex-row space-x-5 *:text-4xl">
            <li>Emily Bennett</li>
            <li>Lewis Price</li>
            <li>Richard Neat</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default GameCompleteScreen;
