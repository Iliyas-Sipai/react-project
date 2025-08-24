import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between  p-4">
      <h1 className="text-2xl text-white">
        Hello <br /> <span className="text-3xl">Iliyas👋</span>
      </h1>
      <button className="bg-red-500 text-white font-semibold px-5 py-2 rounded">
        Log Out
      </button>
    </div>
  );
};

export default Header;
