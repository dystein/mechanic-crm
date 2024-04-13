import { useCallback } from "react";
import DefaultButton from "./DefaultButton";
import { useNavigate } from "react-router-dom";

const DashLatestRepair = () => {
  const navigate = useNavigate();

  const onDealContainerClick = useCallback(() => {
    navigate("/vehicle-detail");
  }, [navigate]);

  return (
    <div className="w-[268px] relative rounded-xl bg-goldenrod-200 box-border h-[392px] text-sm text-primary-white border-[1px] border-solid border-grey-grey-30">
      {/* Latest Repair Header */}
      <div className="absolute top-[0px] left-[0px] w-[268px] h-[78px] overflow-hidden text-lg">
        <div className="absolute top-[0px] left-[0px] w-[268px] h-[78px]">
          <b className="absolute top-[24px] left-[24px] leading-[30px]">
            Latest Repair
          </b>
          <div className="absolute top-[34px] right-[28px] rounded-3xs bg-primary-white w-2.5 h-2.5" />
        </div>
      </div>
      {/* Latest Repair Details */}
      <div className="absolute top-[78px] left-[0px] w-[268px] h-[314px] overflow-hidden">
        <div className="absolute h-full w-[calc(100%_-_101.1px)] top-[0px] right-[101.1px] bottom-[0px] left-[0px] flex flex-col items-start justify-start">
          <div
            className="w-[268px] relative h-[314px] overflow-hidden shrink-0"
            onClick={onDealContainerClick}
          >
            <div className="absolute top-[0px] left-[24px] w-[220px] flex flex-row items-center justify-start gap-[12px]">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start">
                  <b className="relative leading-[27px]">2020 Mercedes-Benz</b>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start">
                  <div className="relative leading-[27px]">S550</div>
                </div>
              </div>
            </div>
            <div className="absolute top-[78px] left-[24px] w-[220px] flex flex-col items-start justify-start">
              <div className="relative leading-[27px]">Appointment Date</div>
              <b className="w-[220px] relative leading-[27px] inline-block h-[27px] shrink-0">
                Nov 18 2021, 17:00
              </b>
            </div>
            <div className="absolute top-[236px] left-[24px] w-[73px] flex flex-col items-start justify-start">
              <div className="relative leading-[27px]">Price</div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <b className="relative leading-[27px]">$</b>
                <b className="relative leading-[27px]">5750</b>
              </div>
            </div>
            <div className="absolute top-[156px] right-[24px] w-[100px] h-[54px] flex flex-col items-start justify-start">
              <div className="relative leading-[27px]">State</div>
              <b className="self-stretch relative leading-[27px]">NJ</b>
            </div>
            <div className="absolute top-[156px] left-[24px] w-[103px] h-[54px] flex flex-col items-start justify-start">
              <div className="relative leading-[27px]">Mileage</div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="w-[59px] relative leading-[27px] flex items-center shrink-0">
                  123,456
                </b>
              </div>
            </div>
            <DefaultButton
              buttonText="See Detail"
              DefaultButtonPosition="absolute"
              DefaultButtonTop="238px"
              DefaultButtonRight="24px"
              DefaultButtonWidth="84px"
              DefaultButtonOverflow="hidden"
              DefaultButtonBottom="unset"
              DefaultButtonLeft="unset"
              DefaultButtonBackgroundColor="#fff"
              DefaultButtonBorder="1px solid #eaeef4"
              DefaultButtonFlex="unset"
              buttonColor="#092c4c"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashLatestRepair;
