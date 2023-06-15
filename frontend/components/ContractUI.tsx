import React from "react";

export const ContractUI = ({
  Title = "Test",
  onClick,
  onChange,
  isError,
  error,
  isLoading,
  isSuccess,
  data,
}) => {
  const errorMessage = error?.message;
  const regex = /reason="([^"]+)"/;
  const matches = errorMessage?.match(regex);
  const simplifiedErrorMessage = matches ? matches[1] : "";

  return (
    <div className="flex flex-col p-8 py-8 bg-base-200 opacity-80 rounded-2xl border-2 hover:drop-shadow-2xl hover:scale-[1.01] transition-all">
      <span className="text-4xl sm:text-5xl text-black font-thin">{Title}</span>
      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
        <input
          type="number"
          placeholder="set Mistery Number here"
          className="input font-bai-jamjuree w-full px-5 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border  text-lg sm:text-2xl placeholder-white uppercase rounded-full"
          onChange={onChange}
        />
        <div className="flex rounded-full border p-1  flex-shrink-0">
          <div className="flex rounded-full border-2 p-1 items-center justify-center">
            <button
              className="rounded-full capitalize font-normal font-white w-24  transition-all tracking-widest flex items-center justify-center"
              onClick={onClick}
            >
              {isLoading ? "Sending" : "Send"}
            </button>
          </div>
        </div>
      </div>
      {isError && <div>{simplifiedErrorMessage}</div>}
      {/* {isLoading && <div>Check Wallet</div>} */}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  );
};
