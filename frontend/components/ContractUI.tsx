import React from "react";

export const ContractUI = (
  Title: string,
  onClick: () => void,
  onChange: (e) => void,
  isError?: boolean,
  isLoading?: boolean,
  isSuccess?: boolean,
  error?,
  data?
) => {
  return (
    <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 ">
      <span className="text-4xl sm:text-6xl text-black">Title</span>

      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
        <input
          type="number"
          placeholder="set Mistery Number here"
          className="input font-bai-jamjuree w-full px-5 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border  text-lg sm:text-2xl placeholder-white uppercase"
          onChange={onChange}
        />
        <div className="flex rounded-full border  p-1 flex-shrink-0">
          <div className="flex rounded-full border-2  p-1">
            <button
              //   className={`btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest ${
              //     isLoading ? "loading" : ""
              //   }`}
              onClick={onClick}
            >
              {/* {!isLoading && ( */}
              <>
                <button className="w-3 h-3 mt-0.5">Sent</button>
              </>
              {/* )} */}
            </button>
          </div>
        </div>
      </div>
      {/* {isError && <div>{error?.message}</div>}
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>} */}
    </div>
  );
};
