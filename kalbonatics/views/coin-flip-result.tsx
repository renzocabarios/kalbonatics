import React from "react";

export default function CoinFlipResult() {
  return (
    <div className=" flex justify-center items-center border-[8px] border-[#E5E5CB] font-extrabold text-[20px] bg-[#E5E5CB0A] w-[128px] h-[128px] rounded-[128px] ">
      {/* <p>HEADS</p> */}
      <img src="./heads-coin.png" className="object-cover w-full h-full" alt="" />
    </div>
  );
}
