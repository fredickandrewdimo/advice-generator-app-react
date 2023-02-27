const Home = () => {
  return (
    <div className="bg-neutral-700 p-10 text-center w-11/12 md:w-6/12 mx-auto rounded">
      <h3 className="text-green-300 font-bold text-lg md:2xl">Advice #219</h3>
      <h1 className="my-8 text-2xl md:text-4xl font-bold text-white">
        "Try buying a coffee for the creator of a free public API now."
      </h1>
      <div className="flex items-center my-8">
        <div className="h-0.5 w-full bg-gray-400 rounded"></div>
        <div className="h-6 w-3 bg-gray-400 rounded mx-2"></div>
        <div className="h-6 w-3 bg-gray-400 rounded mr-2"></div>
        <div className="h-0.5 w-full bg-gray-400 rounded"></div>
      </div>
      <button className="py-2 px-4 bg-green-300 font-bold rounded hover:bg-green-400">
        Generate
      </button>
    </div>
  );
};

export default Home;
