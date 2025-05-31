import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-sky-200">
      <div className="my-10 flex justify-center px-20">
        <div className="cbBody w-min rounded-2xl bg-gradient-to-r from-gray-600 to-gray-800 py-5 text-white">
          <p className="text-center text-3xl font-semibold">Chat</p>
          {/* 
                    CHats div

           */}
          <div className="chats m-3 flex flex-col gap-6">
            <div className="flex flex-row items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-black p-2 text-center">
                A
              </span>
              <span className="flex w-fit flex-col items-center justify-center rounded-lg bg-gray-800 px-3 py-3">
                <span className="flex flex-row items-center gap-3">
                  <p>Mike</p>
                  <p className="text-xs text-gray-400">14 days ago</p>
                </span>
                <span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Velit, accusamus!
                  </p>
                </span>
              </span>
            </div>

            <div className="flex flex-row items-center justify-end gap-3">
              <span className="flex w-fit flex-col items-center justify-end rounded-lg bg-violet-800 px-3 py-3">
                <span className="flex flex-row items-center justify-end gap-3">
                  <p className="text-xs text-gray-400">14 days ago</p>
                  <p>Mike</p>
                </span>
                <span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Velit, accusamus!
                  </p>
                </span>
              </span>
              <span className="h-10 w-10 rounded-full bg-black p-2 text-center">
                A
              </span>
            </div>

            <div className="flex flex-row items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-black p-2 text-center">
                A
              </span>
              <span className="flex w-fit flex-col items-center justify-center rounded-lg bg-gray-800 px-3 py-3">
                <span className="flex flex-row items-center gap-3">
                  <p>Mike</p>
                  <p className="text-xs text-gray-400">14 days ago</p>
                </span>
                <span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Velit, accusamus!
                  </p>
                </span>
              </span>
            </div>
          </div>
          <div className="flex w-full items-center justify-center px-4">
            <div className="relative w-[70vw] max-w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus-icon lucide-plus absolute top-2.5 left-2"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <input
                type="text"
                placeholder="Add a message"
                className="h-10 w-full rounded-full border border-gray-300 pr-4 pl-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
