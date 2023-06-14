import React from "react";

const Footer = () => {
  return (
    <div className="fixed flex justify-between items-center w-full z-20 p-4 bottom-0 left-0 pointer-events-none bg-sky-500 shadow-lg">
      <div className="w-full text-center">
        <p className="text-slate-900 text-sm">
          Built by Team 8 at Encode-Solidity-Bootcamp
        </p>
      </div>
    </div>
  );
};

export default Footer;
