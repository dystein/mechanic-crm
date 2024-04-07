import { FunctionComponent } from "react";
import Base from "./Base";

interface ChoicePopupProps {
  onChooseVehicle: () => void;
  onChooseCustomer: () => void;
}

const AddNew: FunctionComponent<ChoicePopupProps> = ({
  onChooseVehicle,
  onChooseCustomer,
}) => {
  return (
    <div className="w-[1366px] bg-black-black-50 h-[910px] overflow-hidden max-w-full max-h-full text-left text-sm text-primary-navy font-heading-h5-bold">
      <div className="absolute top-[calc(50%_-_77px)] left-[calc(50%_-_120px)] rounded-xl bg-primary-white w-60 overflow-hidden flex flex-col items-start justify-start">
        <div className="self-stretch relative bg-primary-white h-[50px] overflow-hidden shrink-0 text-grey-grey-70">
          <div className="absolute top-[10px] left-[15px] leading-[30px] font-medium inline-block w-[105px]">
            Add New
          </div>
          <img
            className="absolute top-[calc(50%_-_25px)] right-[0px] rounded-31xl w-[50px] h-[50px] overflow-hidden"
            alt=""
            src="/button8.svg"
          />
        </div>
        <Base
          baseWidth="unset"
          basePosition="relative"
          baseRight="unset"
          baseBottom="unset"
          baseLeft="unset"
          baseHeight="1px"
          baseTop="unset"
          baseAlignSelf="stretch"
        />
        <div
          className="self-stretch bg-primary-white overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] gap-[15px]"
          onClick={onChooseVehicle}
        >
          <img className="w-5 relative h-5" alt="" src="/icon6.svg" />
          <div className="flex-1 relative leading-[30px] font-medium">
            Vehicle
          </div>
          <img className="w-5 relative h-5" alt="" src="/icon7.svg" />
        </div>
        <Base
          baseWidth="unset"
          basePosition="relative"
          baseRight="unset"
          baseBottom="unset"
          baseLeft="unset"
          baseHeight="1px"
          baseTop="unset"
          baseAlignSelf="stretch"
        />
        <div
          className="self-stretch bg-primary-white overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] gap-[15px]"
          onClick={onChooseCustomer}
        >
          <img className="w-5 relative h-5" alt="" src="/icon8.svg" />
          <div className="flex-1 relative leading-[30px] font-medium">
            Customer
          </div>
          <img className="w-5 relative h-5" alt="" src="/icon7.svg" />
        </div>
        <Base
          baseWidth="unset"
          basePosition="relative"
          baseRight="unset"
          baseBottom="unset"
          baseLeft="unset"
          baseHeight="1px"
          baseTop="unset"
          baseAlignSelf="stretch"
        />
      </div>
    </div>
  );
};

export default AddNew;
