import Navbar from "@/components/navbar";
import CoinFlipChoices from "@/views/coin-flip-choices";
import CoinFlipForm from "@/views/coin-flip-form";
import CoinFlipResult from "@/views/coin-flip-result";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col gap-8 bg-[#191919] text-[#E5E5CB] items-center p-[32px] ">
        <Navbar />

        <div className="w-full max-w-[1280px] flex flex-col gap-4 items-center">
          <CoinFlipResult />

          <CoinFlipChoices />
          <CoinFlipForm />
        </div>
      </div>
    </>
  );
}
