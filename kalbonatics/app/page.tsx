import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <>



      <div className="bg-[#191919] min-h-screen  text-[#191919] py-[32px] px-[10px]">

        {/* NavBar */}

        <nav className="flex justify-between items-center px-[32px]">
          <div className="py-[16px] px-[24px] bg-[#E5E5CB] rounded-[8px]">
            <p className="font-extrabold">KALFLIP</p>
          </div>
          <div className="py-[16px] px-[24px]  ">
            <ConnectButton />
          </div>
        </nav>

        {/* Main Content */}

        <main className="p-[32px] w-full text-[#E5E5CB] ">
          <div className="flex flex-col justify-center gap-[10px] w-full items-center">
            <div className="flex justify-center items-center border-[8px] border-[#E5E5CB] font-extrabold text-[20px] bg-[#E5E5CB0A] w-[128px] h-[128px] rounded-[128px] p-[10px]">
              <p>HEADS</p>
            </div>

            <div className="w-full flex justify-center p-[10px] gap-[10px] items-center">
              <div className="py-[10px] flex justify-between w-[247px] h-[84px] items-center px-[16px] border-[#E5E5CB] border-[2px] rounded-tl-[64px] rounded-bl-[64px] ">
                <img src="./heads.png" className="rounded-[128px] w-[64px] h-[64px]" alt="" />
                <p className="font-extrabold ">HEAD</p>
              </div>
              <div className="py-[10px] flex justify-between w-[247px] h-[84px] items-center px-[16px]  border-[#E5E5CB] border-[2px] rounded-tr-[64px] rounded-br-[64px] ">
                <p className=" font-extrabold ">TAILS</p>
                <img src="./tails.png" className="w-[64px] rounded-[128px] h-[64px]" alt="" />
              </div>
            </div>

            <div className="border-[#E5E5CB] border-[2px] p-[16px] flex flex-col gap-[8px] rounded-[8px] w-[500px] h-[321px]">
              <div className="border-[#E5E5CB52] border-[2px] p-[8px] rounded-[8px]">
                <p className="text-center font-extrabold">Current balance: 100</p>
              </div>
              <div className="flex gap-[8px] flex-col">
                <p className="font-extrabold text-[18px] leading-[120%] ">Bet Amount</p>
                <div className="border-[1px] rounded-[8px] p-[16px] border-[#E5E5CB1F]">
                  <p className="text-[24px] font-bold">10</p>
                </div>
              </div>

              <div className="flex gap-[16px] text-[#191919] font-extrabold">
                <button className="p-[16px] hover:cursor-pointer w-full rounded-[8px] bg-[#E5E5CB]">MIN</button>
                <button className="p-[16px] hover:cursor-pointer w-full rounded-[8px] bg-[#E5E5CB]">MAX</button>
              </div>

              <div className="flex gap-[16px] text-[#191919] font-extrabold">
                <button className="p-[16px] hover:cursor-pointer w-full rounded-[8px] bg-[#E5E5CB]">BET</button>

              </div>
            </div>


          </div>

        </main>





      </div>

    </>
  );
}
