import { useCallback } from "react";
import Badge from "./Badge";
import Base from "./Base";
import { useNavigate } from "react-router-dom";

const DashRecVehRepairs = () => {
  const navigate = useNavigate();

  const onDealContainer2Click = useCallback(() => {
    navigate("/vehicle-detail");
  }, [navigate]);
  return (
    <div className="flex-1 rounded-xl bg-primary-white box-border h-[360px] flex flex-col items-start justify-start text-sm border-[1px] border-solid border-grey-grey-30">
      <div
        className="self-stretch flex-1 flex flex-col items-start justify-start"
        onClick={onDealContainer2Click}
      >
        <div className="self-stretch relative h-[86px] overflow-hidden shrink-0">
          <div className="absolute top-[calc(50%_-_25px)] left-[20px] flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
              <b className="flex-1 relative leading-[27px] text-base text-primary-navy">
                2011 Nissan Altima
              </b>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px] text-sm text-grey-grey-70">
              <div className="flex-1 flex flex-row items-start justify-start">
                <div className="relative leading-[27px]">WEI0302</div>
                <div className="w-2.5 relative leading-[27px] inline-block shrink-0">
                  ,{" "}
                </div>
                <div className="relative leading-[27px]">NY</div>
                <div className="w-[42px] relative leading-[27px] hidden">
                  12345
                </div>
              </div>
            </div>
          </div>
          <Badge
            statusLabel="IN PROGRESS"
            badgeBackgroundColor="#fffdc3"
            badgePosition="absolute"
            badgeTop="calc(50% - 20px)"
            badgeRight="74px"
            badgeWidth="unset"
            badgeHeight="unset"
            badgeColor="#825d00"
            badgeTextTransform="uppercase"
            badgeFontWeight="500"
          />
          <img
            className="hover:cursor-pointer hover:bg-grey-grey-20 absolute top-[calc(50%_-_25px)] right-[24px] rounded-31xl w-[50px] h-[50px] overflow-hidden"
            alt=""
            src="/button1.svg"
          />
          <Base
            baseWidth="100%"
            basePosition="absolute"
            baseRight="0px"
            baseBottom="0px"
            baseLeft="0px"
            baseHeight="1px"
            baseTop="unset"
            baseAlignSelf="unset"
          />
        </div>
        <div className="self-stretch flex-1 relative">
          <Base
            baseWidth="1px"
            basePosition="absolute"
            baseRight="unset"
            baseBottom="unset"
            baseLeft="45px"
            baseHeight="207px"
            baseTop="31px"
            baseAlignSelf="unset"
          />
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-y-auto flex flex-col items-start justify-start p-[18px] box-border gap-[18px]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="w-[54px] relative h-[54px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_16px)] rounded-81xl bg-primary-white box-border w-8 h-8 overflow-hidden border-[11px] border-solid border-goldenrod-100" />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[27px]">
                    17 Nov 2021
                  </div>
                  <div className="self-stretch relative leading-[27px] font-medium text-primary-navy">
                    Installation of the new air conditioning system
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="w-[54px] relative h-[54px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_16px)] rounded-81xl bg-primary-white box-border w-8 h-8 overflow-hidden border-[11px] border-solid border-goldenrod-100" />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[27px]">
                    17 Nov 2021
                  </div>
                  <div className="self-stretch relative leading-[27px] font-medium text-primary-navy">
                    Installation of the new air conditioning system
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch relative h-[46px] overflow-hidden shrink-0 text-center text-base text-olive">
              <b className="hover:cursor-pointer absolute top-[calc(50%_-_15px)] left-[calc(50%_-_41.5px)] leading-[30px]">
                Load More
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashRecVehRepairs;
