import { useState } from "react";
import { useContractWrite } from "wagmi";
import * as contractJson from "../abi/abi.json";
import { ethers } from "ethers";
import { ContractUI } from "./ContractUI";
import { WithdrawContractUI } from "./WithdrawContractUI";
import { useIsMounted } from "../hooks/useIsMounted";

const guessNumberContract = {
  address: contractJson.address,
  abi: contractJson.abi,
};

export const DeployerWriteContract = () => {
  const [misteryNumber, setMisteryNumber] = useState(0);
  const isMounted = useIsMounted();

  const { write, isLoading, isSuccess, isError, error, data } =
    useContractWrite({
      ...guessNumberContract,
      functionName: "setMisteryNumber",
      args: [misteryNumber],
      overrides: { value: ethers.utils.parseEther("0.1") },
    });
  const {
    write: resetGame,
    isLoading: resetIsLoading,
    isSuccess: resetIsSuccess,
    isError: resetIsError,
    error: resetError,
    data: resetData,
  } = useContractWrite({
    ...guessNumberContract,
    functionName: "resetGame",
    args: [misteryNumber],
    overrides: { value: ethers.utils.parseEther("0.1") },
  });

  const {
    write: withdraw,
    isSuccess: withdrawIsSuccess,
    isError: withdrawIsError,
    error: withdraError,
    data: withdrawData,
  } = useContractWrite({
    ...guessNumberContract,
    functionName: "withdrawBetPool",
  });

  return (
    <>
      {isMounted && (
        <>
          <div className="flex space-x-4">
            <ContractUI
              Title="Start the mistery.."
              onClick={() => write?.()}
              onChange={(e) => setMisteryNumber(e.target.value)}
              isError={isError}
              error={error}
              isLoading={isLoading}
              isSuccess={isSuccess}
              data={data}
            />
            <ContractUI
              Title="Reset the mistery"
              onClick={() => resetGame?.()}
              onChange={(e) => setMisteryNumber(e.target.value)}
              isError={resetIsError}
              error={resetError}
              isLoading={resetIsLoading}
              isSuccess={resetIsSuccess}
              data={resetData}
            />
          </div>
          <div className="flex space-x-4 border-1 border-red-400">
            <WithdrawContractUI
              Title="Withdraw Guessing Pool"
              onClick={() => withdraw?.()}
              isError={withdrawIsError}
              error={withdraError}
              isSuccess={withdrawIsSuccess}
              data={withdrawData}
            />
          </div>
        </>
      )}
    </>
  );
};
