import { useState } from "react";
import { useContractWrite } from "wagmi";
import * as contractJson from "../abi/abi.json";
import { ethers, utils } from "ethers";
import { ContractUI } from "./ContractUI";

const guessNumberContract = {
  address: contractJson.address,
  abi: contractJson.abi,
};

export const DeployerWriteContract = () => {
  const [misteryNumber, setMisteryNumber] = useState(0);
  const [guessNumberArg, setGuessNumberArg] = useState(0);

  // const { write, isLoading, isSuccess, isError, error } = useContractWrite({
  //   ...guessNumberContract,
  //   functionName: "setMisteryNumber",
  //   args: [misteryNumber],
  //   overrides: { value: ethers.utils.parseEther("0.1") },
  // });

  const check = () => {
    console.log("hello");
  };

  console.log(misteryNumber);

  return (
    <>
      <ContractUI
        Title="SetNumber"
        onClick={check()}
        onChange={(e) => setMisteryNumber(e.target.value)}
      />
    </>
  );
};

// const errorMessage = error?.message;
// const regex = /reason="([^"]+)"/;
// const matches = errorMessage?.match(regex);
// const targetNumberErrorMessage = matches ? matches[1] : "";
// console.log(targetNumberErrorMessage);

// const { write: guessNumber, error: guessError } = useContractWrite({
//   ...guessNumberContract,
//   functionName: "guessNumber",
//   args: [guessNumberArg],
//   overrides: { value: ethers.utils.parseEther("0.01") },
// });
// const { write: withdraw, error: withdrawError } = useContractWrite({
//   ...guessNumberContract,
//   functionName: "withdrawBetPool",
// });
// const { write: reset, error: resetError } = useContractWrite({
//   ...guessNumberContract,
//   functionName: "resetGame",
//   args: [misteryNumber],
//   overrides: { value: ethers.utils.parseEther("0.1") },
// });

// <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 ">
//   <span className="text-4xl sm:text-6xl text-black">Set a Number</span>

//   <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
//     <input
//       type="number"
//       placeholder="set Mistery Number here"
//       className="input font-bai-jamjuree w-full px-5 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border  text-lg sm:text-2xl placeholder-white uppercase"
//       onChange={(e) => setMisteryNumber(e.target.value)}
//     />
//     <div className="flex rounded-full border  p-1 flex-shrink-0">
//       <div className="flex rounded-full border-2  p-1">
//         <button
//           className={`btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest ${
//             isLoading ? "loading" : ""
//           }`}
//           onClick={() => write?.()}
//         >
//           {!isLoading && (
//             <>
//               <button className="w-3 h-3 mt-0.5">Sent</button>
//             </>
//           )}
//         </button>
//       </div>
//     </div>
//   </div>
//   {isError && <div>{error?.message}</div>}
//   {isLoading && <div>Check Wallet</div>}
//   {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
// </div>
