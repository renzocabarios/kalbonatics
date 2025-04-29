"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function CoinFlipForm() {
  const [balance, setbalance] = useState(100);
  const [bet, setbet] = useState(0);

  const onMax = () => {
    setbet(balance);
  };

  const onHalf = () => {
    setbet(balance / 2);
  };

  const onBet = () => {
    alert(`I bet ${bet}`);
  };

  return (
    <div className="border-[#E5E5CB] border-[2px] p-[16px] flex flex-col gap-[8px] rounded-[8px] w-full max-w-[500px]">
      <div className="border-[#E5E5CB52] border-[2px] p-[8px] rounded-[8px]">
        <p className="text-center font-extrabold">Current balance: {balance}</p>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-extrabold text-[18px] leading-[120%] ">Bet Amount</p>

        <Input
          value={bet}
          onChange={(e) => {
            setbet(Number(e.target.value));
          }}
          type="number"
          placeholder="place bet"
          className={cn(
            "border-[1px] rounded-[8px] p-[16px] border-[#E5E5CB1F]"
          )}
        />
      </div>

      <div className="w-full flex gap-4 items-center ">
        <Button
          onClick={onHalf}
          className={cn(
            "p-[16px] hover:cursor-pointer basis-[49%] rounded-[8px] bg-[#E5E5CB] text-[#191919]"
          )}
        >
          HALF
        </Button>

        <Button
          onClick={onMax}
          className={cn(
            "p-[16px] hover:cursor-pointer basis-[49%] rounded-[8px] bg-[#E5E5CB] text-[#191919]"
          )}
        >
          MAX
        </Button>
      </div>

      <div className="flex gap-[16px] font-extrabold">
        <Button
          className={cn(
            "p-[16px] hover:cursor-pointer w-full rounded-[8px] bg-[#E5E5CB] text-[#191919]"
          )}
          onClick={onBet}
        >
          BET
        </Button>
      </div>
    </div>
  );
}
