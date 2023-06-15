import React from "react";
import { useContractRead } from "wagmi";
import { useIsMounted } from "../hooks/useIsMounted";
import * as contractJson from "../abi/abi.json";

const guessNumberContract = {
  address: contractJson.address,
  abi: contractJson.abi,
  watch: true,
};

export const MisteryNumberUI = () => {
  const isMounted = useIsMounted();
  const { data: misteryNumber } = useContractRead({
    ...guessNumberContract,
    functionName: "misteryNumber",
  });

  const { data: isGuess } = useContractRead({
    ...guessNumberContract,
    functionName: "wasGuessed",
  });
  const { data: owner } = useContractRead({
    ...guessNumberContract,
    functionName: "owner",
  });

  console.log("wasGuessed", isGuess);
  return (
    <>
      {isMounted && (
        <div className="h-52 mt-12 flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-cyan-blue rounded-lg hover:shadow-lg hover:border-2 cursor-pointer transition-all ease-in-out">
          <h2 className="font-thin text-4xl mb-2">.. Mistery Number ..</h2>
          <div
            className={`${
              !isGuess ? "blur-xl" : ""
            }   transition-all ease duration-3000`}
          >
            <h1 className="text-8xl font-mono text-white">
              {misteryNumber?.toString()}
            </h1>
          </div>
        </div>
      )}
    </>
  );
};
