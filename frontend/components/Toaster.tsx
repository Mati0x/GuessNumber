import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/outline";

import { XMarkIcon } from "@heroicons/react/20/solid";

export const Toaster = ({ message, status = "success", data }) => {
  const [show, setShow] = useState(true);

  const ENUM_STATUSES = {
    success: <CheckCircleIcon className="w-7 text-cyan-500" />,
    error: <XCircleIcon className="w-7 text-red-500" />,
  };

  console.log("data", data);

  return (
    <>
      <div
        aria-live="assertive"
        className="relative inset-0 flex items-end  sm:items-start mt-4 transition-all"
      >
        <div className="flex w-full  flex-col items-center space-y-4 sm:items-end">
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className=" flex w-full max-w-md divide-x divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="flex w-0 flex-1 items-center p-2 ">
                <div className="w-full  flex space-x-2">
                  <div className="text-sm font-medium text-gray-900  flex items-center ">
                    {status == "success"
                      ? ENUM_STATUSES.success
                      : ENUM_STATUSES.error}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{message}</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col divide-y divide-gray-200">
                  {status == "success" && (
                    <div className="flex h-0 flex-1">
                      <button
                        type="button"
                        className="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        onClick={() => {
                          setShow(false);
                        }}
                      >
                        <a
                          href={`https://sepolia.etherscan.io/tx/${data?.hash}`}
                          target="_blank"
                        >
                          etherscan
                        </a>
                      </button>
                    </div>
                  )}
                  <div className="flex h-0 flex-1 items-center justify-center p-2">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};
