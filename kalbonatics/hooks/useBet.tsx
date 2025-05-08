import { useStore } from "@/store/store";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { writeContract } from "@wagmi/core";
import { waitForTransactionReceipt } from "@wagmi/core";
import { WAGMI_CONFIG } from "@/lib/web3";
import { CODE_ABI } from "@/lib/abis";
import { getContractAddress } from "@/lib/apollo";
import { Address } from "viem";
import { API_URL } from "@/lib/contants";

export default function useBet() {
  const mutation = useMutation({
    mutationFn: async (guess: string[]) => {
      const {
        data: { data },
      } = await axios.post(`${API_URL}submit`, {
        guess,
      });

      const codeAddress: Address = await getContractAddress("Code");
      const arr: ReadonlyArray<string> = [...guess];
      const tuple: readonly [
        `0x${string}`,
        `0x${string}`,
        `0x${string}`,
        `0x${string}`
      ] = [
        stringToBytes32(guess[0]),
        stringToBytes32(guess[1]),
        stringToBytes32(guess[2]),
        stringToBytes32(guess[3]),
      ] as readonly [
        `0x${string}`,
        `0x${string}`,
        `0x${string}`,
        `0x${string}`
      ];

      const result = await writeContract(WAGMI_CONFIG, {
        abi: CODE_ABI,
        address: codeAddress,
        functionName: "submitCode",
        args: [tuple],
      });

      const transactionReceipt = await waitForTransactionReceipt(WAGMI_CONFIG, {
        hash: result,
      });

      const correctCode: string[] = data[0].code;

      setCurrentGuess(guess);
      setCorrectCode(correctCode);
      setYellowHintsBought(0);
      setBlueHintsBought(0);
      setHints(["", "", "", ""]);

      const correct: boolean[] = [];

      for (let i: number = 0; i < guess.length; i++) {
        if (guess[i] === correctCode[i]) {
          correct.push(true);
        }
      }

      const evaluation = evaluateGuess(guess, correctCode);

      for (let i: number = 0; i < evaluation.length; i++) {
        if (evaluation[i] !== "Blue") {
          setHints(evaluateGuess(guess, correctCode));
        }
      }

      for (let i: number = 0; i < guess.length; i++) {
        if (guess[i] !== correctCode[i]) {
          setCard1({ color: "Red", value: undefined, bought: false });
          setCard2({ color: "Red", value: undefined, bought: false });
          setCard3({ color: "Red", value: undefined, bought: false });
          setCard4({ color: "Red", value: undefined, bought: false });
          return;
        }
      }

      setCard1({ color: "Green", value: undefined, bought: false });
      setCard2({ color: "Green", value: undefined, bought: false });
      setCard3({ color: "Green", value: undefined, bought: false });
      setCard4({ color: "Green", value: undefined, bought: false });
    },
  });

  return { ...mutation };
}

function evaluateGuess(guess: string[], correct: string[]): string[] {
  const result: string[] = [];
  const remainingCorrect: any[] = [...correct];

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === correct[i]) {
      result[i] = "Blue";
      remainingCorrect[i] = null;
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (result[i] === "Blue") {
      continue;
    }

    if (remainingCorrect.includes(guess[i])) {
      result[i] = "Yellow";
      const indexToRemove = remainingCorrect.indexOf(guess[i]);
      remainingCorrect[indexToRemove] = null;
    } else {
      result[i] = "Wrong";
    }
  }

  return result;
}
