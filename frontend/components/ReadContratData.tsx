import React from "react";
import * as contractJson from "../abi/abi.json";
import { ReadDataUI } from "./ReadDataUI";
import { MisteryNumberUI } from "./MisteryNumberUI";
import { useContractReadData } from "../hooks/useContractReadData";

const guessNumberContract = {
  address: contractJson.address,
  abi: contractJson.abi,
  watch: true,
};

export const ReadContratData = () => {
  const { data: fee } = useContractReadData("FEE");
  const { data: betPool } = useContractReadData("betPool");
  const { data: prizePool } = useContractReadData("prizePool");

  const stats = [
    { name: "Fee", value: fee, symbol: "ETH" },
    { name: "Guess Pool", value: betPool, symbol: "ETH" },
    { name: "Prize Pool", value: prizePool, symbol: "ETH" },
  ];

  return (
    <>
      <ReadDataUI stats={stats} />
      <MisteryNumberUI />
    </>
  );
};
