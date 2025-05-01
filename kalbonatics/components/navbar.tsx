import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

export default function Navbar() {
  return (
    // <nav className="flex justify-between text-[#191919] items-center px-[32px] w-full max-w-[1440px] py-[32px] ">

    <nav className="flex
    justify-between w-full items-center text-[#191919]">
      <div className="p-[8px] bg-[#E5E5CB] rounded-[8px]">
        <p className="font-extrabold text-[18px]">KALFLIP</p>
      </div>
      <ConnectButton />
    </nav>
  );
}
