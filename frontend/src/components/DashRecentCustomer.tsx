import React from "react";

const DashRecentCustomer = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[9px] pr-3.5 pl-6">
      <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
            <b className="relative leading-[27px]">Jayandre</b>
            <b className="flex-1 relative leading-[27px]">Boscia</b>
          </div>
          <div className="self-stretch relative text-sm leading-[27px] text-grey-grey-70">
            jayboss@gmail.com
          </div>
        </div>
      </div>
      <img
        className="w-[50px] relative rounded-31xl h-[50px] overflow-hidden shrink-0"
        alt=""
        src="/edit.svg"
      />
    </div>
  );
};

export default DashRecentCustomer;
