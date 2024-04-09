import { useCallback } from "react";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

export type CustomerVehicleCountType = {
  customerOrVehicle?: string;
};

const CustomerVehicleCount: FunctionComponent<CustomerVehicleCountType> = ({
  customerOrVehicle,
}) => {
  const navigate = useNavigate();

  const onDashboardVehiclesCountClick = useCallback(() => {
    navigate(`/${customerOrVehicle?.toLowerCase()}`);
  }, [navigate]);

  return (
    <div
      className="hover:cursor-pointer hover:bg-gray-100 self-stretch relative rounded-xl bg-primary-white box-border h-[168px] cursor-pointer border-[1px] border-solid border-grey-grey-30"
      onClick={onDashboardVehiclesCountClick}
    >
      <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden">
        <div className="absolute top-[24px] left-[24px] leading-[30px] font-medium">
          {customerOrVehicle}
        </div>
        <div className="absolute top-[64px] left-[24px] text-29xl leading-[80px] font-semibold font-manrope text-primary-navy">
          {/* Need to make this number dynamic */}
          69
        </div>
        <img
          className="absolute top-[44px] left-[164px] rounded-81xl w-20 h-20 overflow-hidden"
          alt=""
          src={`/${customerOrVehicle}.svg`}
        />
      </div>
    </div>
  );
};

export default CustomerVehicleCount;
