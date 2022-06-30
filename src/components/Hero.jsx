import React from "react";
// import img from 'src/components/assets/cyber-bg.png'

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between background"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">API Testing Made Easy</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">GetDude</h1>
          <p className="text-2xl">Provided By The Searchers</p>
          <button className="py-3 px-6 sm:w-[60%] my-4"onClick={() => window.open('/getdude') }>Get Started</button>
        </div>
        <div>
          {/* <img className="w-full"  alt="/" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
