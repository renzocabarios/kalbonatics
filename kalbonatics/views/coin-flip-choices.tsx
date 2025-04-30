"use client";
import React, { useEffect, useState } from "react";

export default function CoinFlipChoices() {
  const [type, settype] = useState("HEAD");

  const onHead = () => {
    settype("HEADS");
  };

  const onTail = () => {
    settype("TAILS");
  };

  useEffect(() => {
    alert(`I chose ${type}`);
  }, [type]);

  return (
    <div className="w-full flex justify-center p-[10px] gap-[10px] items-center">
      <div
        onClick={onHead}
        className="hover:cursor-pointer py-[10px] flex justify-between w-[247px] h-[84px] items-center px-[16px] border-[#E5E5CB] border-[2px] rounded-tl-[64px] rounded-bl-[64px] "
      >
        <img
          src="./heads-coin.png"
          className="rounded-[128px] w-[64px] h-[64px]"
          alt=""
        />
        <p className="font-extrabold ">HEADS</p>
      </div>
      <div
        onClick={onTail}
        className="hover:cursor-pointer py-[10px] flex justify-between w-[247px] h-[84px] items-center px-[16px]  border-[#E5E5CB] border-[2px] rounded-tr-[64px] rounded-br-[64px] "
      >
        <p className=" font-extrabold ">TAILS</p>
        <img
          src="./tails-coin.png"
          className="w-[64px] rounded-[128px] h-[64px]"
          alt=""
        />
      </div>
    </div>
  );
}
