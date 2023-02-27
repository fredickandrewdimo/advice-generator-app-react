import { useState } from "react";

const Home = () => {
  const [id, setId] = useState("000");
  const [slip, setSlip] = useState(
    "Please Click the Button to Generate Advice Slip"
  );

  const handleGenerate = () => {
    fetch("https://api.adviceslip.com/advice?slip")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setId(data.slip.id);
        setSlip(data.slip.advice);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-neutral-700 p-10 text-center  rounded w-11/12 md:max-w-2xl md:min-w-2xl mx-auto">
      <h3 className="text-green-300 font-bold text-lg md:text-2xl">
        Advice #{id}
      </h3>
      <h1 className="my-8 text-2xl md:text-4xl font-bold text-white">
        <span className="inline-block text-center">"{slip}"</span>
      </h1>
      <div className="flex items-center my-8">
        <div className="h-0.5 w-full bg-gray-400 rounded"></div>
        <div className="h-6 w-3 bg-gray-400 rounded mx-2"></div>
        <div className="h-6 w-3 bg-gray-400 rounded mr-2"></div>
        <div className="h-0.5 w-full bg-gray-400 rounded"></div>
      </div>
      <button
        onClick={handleGenerate}
        className="py-2 px-4 bg-green-300 font-bold rounded hover:bg-green-400"
      >
        Generate
      </button>
    </div>
  );
};

export default Home;
