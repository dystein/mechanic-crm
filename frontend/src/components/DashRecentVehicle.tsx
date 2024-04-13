import React, {FunctionComponent} from "react";
import {CustomerRowType} from "./DashRecentCustomer";
import {useNavigate} from "react-router-dom";
import vehicleDetail from "../pages/VehicleDetail";

export type VehicleRowType = {
  vehicleId: number;
  year: number;
  make: string;
  model: string;
  licensePlate: string;
  state: string;
};

const DashRecentVehicle: FunctionComponent<VehicleRowType> = ({
                                                                vehicleId,
                                                                year,
                                                                make,
                                                                model,
                                                                licensePlate,
                                                                state,
                                                              }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to customer detail page
    navigate(`/customer-detail/${vehicleId}`);
  };

  return (
    <div className="hover:cursor-pointer hover:bg-gray-100 self-stretch overflow-hidden shrink-0 flex flex-row items-start justify-start py-[9px] px-6"
         onClick={() => handleClick()}>
      <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
            <b className="flex-1 relative leading-[27px]">{year} {make} {model}</b>
            <div className="self-stretch flex flex-row items-start justify-end text-sm">
              {/* cost was here \/ */}
              <b className="relative leading-[27px]"></b>
              <b className="relative leading-[27px]"></b>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[12px] text-sm text-grey-grey-70">
            <div className="flex-1 flex flex-row items-start justify-start">
              <div className="relative leading-[27px]">{licensePlate}</div>
              <div className="w-2.5 relative leading-[27px] inline-block shrink-0">{`, `}</div>
              <div className="relative leading-[27px]">{state}</div>
              <div className="w-[42px] relative leading-[27px] hidden">
                12345
              </div>
            </div>
            <div className="relative leading-[27px] text-right hidden">
              Nov 15, 08:00 AM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashRecentVehicle;
