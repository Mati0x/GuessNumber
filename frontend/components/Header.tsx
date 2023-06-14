import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <div>
      <nav className="p-4 flex justify-end  w-full  bg-sky-500">
        <ConnectButton></ConnectButton>
      </nav>
    </div>
  );
};

export default Header;
