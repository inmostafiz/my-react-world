import React from "react";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <section className="w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-6">

      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center text-white">
        <p className="text-lg mt-2">In-Progress</p>
        <h2 className="text-5xl font-bold">{inProgressCount}</h2>
      </div>

      <div className="bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-xl shadow-lg p-8 flex flex-col items-center justify-center text-white">
        <p className="text-lg mt-2">Resolved</p>
        <h2 className="text-5xl font-bold">{resolvedCount}</h2>
      </div>
    </section>
  );
};

export default Banner;