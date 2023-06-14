import React from "react";
import * as contractJson from "../abi/abi.json";
import { useContractRead, useContractReads } from "wagmi";
import { useIsMounted } from "../hooks/useIsMounted";
import { ethers, BigNumber, utils } from "ethers";
import { useContractReadData } from "../hooks/useContractReadData";

const guessNumberContract = {
  address: contractJson.address,
  abi: contractJson.abi,
  watch: true,
};

export const ReadContratData = () => {
  const isMounted = useIsMounted();

  const { data: fee } = useContractReadData("FEE");
  const { data: betPool } = useContractReadData("betPool");
  const { data: prizePool } = useContractReadData("prizePool");
  const { data: misteryNumber } = useContractReadData("misteryNumber");
  const { data: isGuess } = useContractRead({
    ...guessNumberContract,
    functionName: "wasGuessed",
  });
  const { data: owner } = useContractRead({
    ...guessNumberContract,
    functionName: "owner",
  });

  return (
    <div>
      <h1>READ CONTRACT DATA:</h1>
      <div>Fee: {isMounted && fee}</div>
      <div>Prize: {isMounted && prizePool}</div>
      <div>Pool: {isMounted && betPool}</div>
      <div>Mistery Number: {isMounted && misteryNumber?.toString()}</div>
      <div>is Guess ?.. {isMounted && isGuess ? "true" : "false"}</div>
      <br></br>
      <div>Owner: {isMounted && owner?.toString()}</div>
    </div>
  );
};
