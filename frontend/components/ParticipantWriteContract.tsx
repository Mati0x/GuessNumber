import { useState } from "react";
import { useContractWrite } from "wagmi";
import * as contractJson from "../abi/abi.json";
import { ethers } from "ethers";
import { ContractUI } from "./ContractUI";
import { useIsMounted } from "../hooks/useIsMounted";

const guessNumberContract = {
  address: contractJson.address,
  abi: contractJson.abi,
};

export const ParticipantWriteContract = () => {
  const [guessNumber, setGuessNumber] = useState(0);
  const isMounted = useIsMounted();

  const { write, isLoading, isSuccess, isError, error, data } =
    useContractWrite({
      ...guessNumberContract,
      functionName: "guessNumber",
      args: [guessNumber],
      overrides: { value: ethers.utils.parseEther("0.01") },
    });

  return (
    <>
      {isMounted && (
        <ContractUI
          Title="Guess the Misterious Number.."
          onClick={() => write?.()}
          onChange={(e: any) => setGuessNumber(e.target.value)}
          isError={isError}
          error={error}
          isLoading={isLoading}
          isSuccess={isSuccess}
          data={data}
        />
      )}
    </>
  );
};
