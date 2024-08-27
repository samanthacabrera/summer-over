import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-blue-100 to-white text-center">
      <div className="max-w-4xl mx-auto space-y-4 px-4">
        <h1 className="text-4xl font-semibold text-slate-400">
          My Sister's Closet
        </h1>
        <p className="text-lg text-slate-400">
          Swap, lend, or donate clothes with other women in your area.
        </p>
      </div>
    </section>
  );
};

export default Hero;
