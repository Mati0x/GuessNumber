import { useState, useEffect } from "react";
import { useIsMounted } from "./useIsMounted";
import { useContractRead } from "wagmi";
import * as contractJson from "../abi/abi.json";
import { ethers } from "ethers";

function convertWeiToEther(weiAmount) {
  //   if (weiAmount === true || weiAmount === false) {
  //     return;
  //   }
  const etherAmount = ethers.utils.formatEther(weiAmount || "0");
  return etherAmount;
}

const guessNumberContract = {
  address: contractJson.address,
  abi: contractJson.abi,
  watch: true,
};

export const useContractReadData = (functionName: string) => {
  const { data, isError, isLoading, error } = useContractRead({
    ...guessNumberContract,
    functionName: functionName as string,
  });

  const parseData = convertWeiToEther(data);

  return { data: parseData, isError, isLoading, error };
};
