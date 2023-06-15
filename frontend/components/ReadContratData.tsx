import React from "react";
import * as contractJson from "../abi/abi.json";
import { ReadDataUI } from "./ReadDataUI";
import { useContractRead } from "wagmi";
import { useIsMounted } from "../hooks/useIsMounted";
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

  const stats = [
    { name: "Fee", value: fee, symbol: "ETH" },
    { name: "Guess Pool", value: betPool, symbol: "ETH" },
    { name: "Prize Pool", value: prizePool, symbol: "ETH" },
  ];

  return (
    <div>
      <ReadDataUI stats={stats} />
      {/* {isMounted &&
        stats.map((stat) => (
          <div key={stat.name} className="flex space-x-4">
            <div className="flex flex-col">
              <div className="font-bold">{stat.name}</div>
              <div className="text-gray-500">
                {stat.value} {stat.symbol}
              </div>
            </div>
          </div>
        ))} */}
    </div>
  );
};

// const { data: misteryNumber } = useContractReadData("misteryNumber");
// const { data: isGuess } = useContractRead({
//   ...guessNumberContract,
//   functionName: "wasGuessed",
// });
// const { data: owner } = useContractRead({
//   ...guessNumberContract,
//   functionName: "owner",
// });
