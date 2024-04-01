import React from "react";

const DashRecentVehicle = () => {
  return (
    <div className="self-stretch overflow-hidden shrink-0 flex flex-row items-start justify-start py-[9px] px-6">
      <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
            <b className="flex-1 relative leading-[27px]">2011 Nissan Altima</b>
            <div className="self-stretch flex flex-row items-start justify-end text-sm">
              <b className="relative leading-[27px]">$</b>
              <b className="relative leading-[27px]">5750</b>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[12px] text-sm text-grey-grey-70">
            <div className="flex-1 flex flex-row items-start justify-start">
              <div className="relative leading-[27px]">WEI0302</div>
              <div className="w-2.5 relative leading-[27px] inline-block shrink-0">{`, `}</div>
              <div className="relative leading-[27px]">NY</div>
              <div className="w-[42px] relative leading-[27px] hidden">
                12345
              </div>
            </div>
            <div className="relative leading-[27px] text-right">
              Nov 15, 08:00 AM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashRecentVehicle;
