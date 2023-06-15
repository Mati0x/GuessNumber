import React from "react";
import { Toaster } from "./Toaster";

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
    <div className="flex flex-col p-8 py-8 bg-base-200 opacity-80 rounded-2xl border-[1px] hover:shadow-2xl hover:scale-[1.005] transition-all max-h-[200px]">
      <span className="text-4xl sm:text-5xl text-black font-thin">{Title}</span>
      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
        <input
          type="number"
          placeholder="Number here.."
          className="input font-bai-jamjuree w-full px-5 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border  text-lg sm:text-2xl placeholder:text-gray-500 placeholder:text-sm placeholder:font-thin rounded-full focus:outline-none focus:ring-sky-500  font-thin"
          onChange={onChange}
        />

        <div className="flex rounded-full border p-1  flex-shrink-0">
          <div className="flex rounded-full border-2 p-1 items-center justify-center">
            <button
              className="rounded-full capitalize font-normal font-white w-24  transition-all tracking-widest flex items-center justify-center hover:bg-white hover:text-black"
              onClick={onClick}
            >
              {isLoading ? "Sending" : "Send"}
            </button>
          </div>
        </div>
      </div>
      {isError && <Toaster message={simplifiedErrorMessage} status="error" />}
      {isSuccess && (
        <Toaster
          message={"Transaction Succesfull !!!"}
          status="success"
          data={data}
        />
      )}
    </div>
  );
};
