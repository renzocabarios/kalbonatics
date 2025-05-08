import { Address, maxInt256 } from "viem";
import { useMutation } from "@tanstack/react-query";
import { writeContract } from "@wagmi/core";
import { waitForTransactionReceipt } from "@wagmi/core";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { ERC20_ABI } from "@/lib/abis";
import { WAGMI_CONFIG } from "@/lib/web3";
import { getContractAddress } from "@/lib/apollo";

interface IUseApproveArgs {}

export default function useApprove() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({}: IUseApproveArgs) => {
      const codeTokenAddress: Address = await getContractAddress("CodeToken");
      const codeAddress: Address = await getContractAddress("Code");
      const result = await writeContract(WAGMI_CONFIG, {
        abi: ERC20_ABI,
        address: codeTokenAddress as Address,
        functionName: "approve",
        args: [codeAddress as Address, maxInt256],
      });

      const transactionReceipt = await waitForTransactionReceipt(WAGMI_CONFIG, {
        hash: result,
      });

      return transactionReceipt;
    },
    onSuccess(data, variables, context) {
      // toast({
      //   title: "Transaction Success",
      //   description: "Approval Success",
      // });
      queryClient.invalidateQueries({
        queryKey: [],
      });
    },
  });

  useEffect(() => {
    console.log(mutation?.error);
  }, [mutation?.error]);

  return { ...mutation };
}
