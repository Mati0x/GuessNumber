import React from "react";
import { Toaster } from "./Toaster";

export const WithdrawContractUI = ({
  Title = "Test",
  onClick,
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
    <div className="flex flex-col p-8 py-1 bg-base-200 opacity-80 rounded-2xl hover:shadow-2xl hover:scale-[1.005] transition-all max-h-[200px] w-full mt-4">
      <span className="sm:text-2xl text-black font-thin text-center">
        {Title}
      </span>
      <div className="mt-2 flex flex-col sm:flex-row items-start sm:items-center w-full">
        <div className="flex rounded-full border p-1  flex-shrink-0 w-full">
          <div className="flex rounded-full border-2 p-1 items-center justify-center w-full">
            <button
              className="rounded-full capitalize font-normal font-white w-full  transition-all tracking-widest flex items-center justify-center hover:bg-white hover:text-black"
              onClick={onClick}
            >
              {isLoading ? "Withdrawing" : "Withdraw"}
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
