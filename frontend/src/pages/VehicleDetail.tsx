import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ScreenColumnsBG from "../components/ScreenColumnsBG";
import Base from "../components/Base";
import LabelYes from "../components/LabelYes";
import LabelNo from "../components/LabelNo";
import DefaultButton from "../components/DefaultButton";
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";

const VehicleDetail: FunctionComponent = () => {
  const [isAlertVehicleDeletedOpen, setAlertVehicleDeletedOpen] =
    useState(false);
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const openAlertVehicleDeleted = useCallback(() => {
    setAlertVehicleDeletedOpen(true);
  }, []);

  const closeAlertVehicleDeleted = useCallback(() => {
    setAlertVehicleDeletedOpen(false);
  }, []);

  const onButtonIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onButtonIcon1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonIcon2Click = useCallback(() => {
    navigate("/customers");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative bg-grey-grey-10 h-[1116px] text-left text-sm text-grey-grey-70 font-heading-h5-bold">
        <ScreenColumnsBG
          showRightArea
          screenColumnsBGWidth="100%"
          screenColumnsBGHeight="100%"
          screenColumnsBGPosition="absolute"
          screenColumnsBGTop="0px"
          screenColumnsBGRight="0px"
          screenColumnsBGBottom="0px"
          screenColumnsBGLeft="0px"
          rightAreaOverflow="unset"
        />
        <div className="absolute w-[calc(100%_-_90px)] top-[90px] right-[0px] left-[90px] flex flex-row items-start justify-start">
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-start p-6 gap-[24px]">
              <div className="flex-1 relative h-[60px] overflow-hidden">
                <div className="absolute top-[8px] left-[0px] rounded-6xl w-11 h-11 overflow-hidden">
                  <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-6xl bg-grey-grey-30" />
                </div>
                <div className="absolute top-[0px] left-[64px] leading-[30px]">
                  Customer
                </div>
                <div className="absolute top-[30px] left-[64px] flex flex-row items-start justify-start gap-[5px] text-base text-grey-grey-90">
                  <b className="relative leading-[30px]">Deanna</b>
                  <b className="relative leading-[30px]">Annis</b>
                </div>
              </div>
              <div className="flex-1 relative h-[60px]">
                <div className="absolute top-[0px] left-[0px] leading-[30px]">
                  Email
                </div>
                <b className="absolute top-[30px] left-[0px] text-base leading-[30px] text-grey-grey-90">
                  brodrigues@gmail.com
                </b>
              </div>
              <div className="flex-1 relative h-[60px]">
                <div className="absolute top-[0px] left-[0px] leading-[30px]">
                  Phone
                </div>
                <b className="absolute top-[30px] left-[0px] text-base leading-[30px] text-grey-grey-90">
                  617-952-4069
                </b>
              </div>
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
            <div className="self-stretch bg-primary-white flex flex-row items-center justify-start p-6 gap-[24px] text-9xl text-primary-navy">
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                <b className="relative leading-[40px]">
                  2020 Mercedes-Benz S550
                </b>
                <div className="flex flex-row items-start justify-start">
                  <b className="relative leading-[40px]">6ZAW303</b>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[20px]">
                <img
                  className="w-[50px] relative rounded-31xl h-[50px] overflow-hidden shrink-0 cursor-pointer"
                  alt=""
                  src="/button13.svg"
                  onClick={openAlertVehicleDeleted}
                />
                <img
                  className="w-[50px] relative rounded-31xl h-[50px] overflow-hidden shrink-0"
                  alt=""
                  src="/button14.svg"
                />
              </div>
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
            <div className="self-stretch flex flex-row items-start justify-start p-6 gap-[24px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[40px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[24px]">
                  <div className="flex-1 relative h-[60px]">
                    <div className="absolute top-[0px] left-[0px] leading-[30px]">
                      Progress
                    </div>
                    <b className="absolute top-[30px] left-[0px] text-base leading-[30px] text-grey-grey-90">
                      In Progress
                    </b>
                  </div>
                  <div className="flex-1 relative h-[60px]">
                    <div className="absolute top-[0px] left-[0px] leading-[30px]">
                      Appointment Date
                    </div>
                    <b className="absolute top-[30px] left-[0px] text-base leading-[30px] text-grey-grey-90">
                      Nov 17, 2021 08:00
                    </b>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[24px]">
                  <div className="flex-1 relative h-[60px]">
                    <div className="absolute top-[0px] left-[0px] leading-[30px]">
                      Mileage
                    </div>
                    <div className="absolute top-[30px] left-[0px] flex flex-row items-center justify-start text-base text-grey-grey-90">
                      <b className="relative leading-[30px]">123,456</b>
                    </div>
                  </div>
                  <div className="flex-1 relative h-[60px]">
                    <div className="absolute top-[0px] left-[0px] leading-[30px]">
                      Number of people
                    </div>
                    <b className="absolute top-[30px] left-[0px] text-base leading-[30px] text-grey-grey-90">
                      10
                    </b>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[24px]">
                  <div className="flex-1 relative h-[60px]">
                    <div className="absolute top-[0px] left-[0px] leading-[30px]">
                      Price
                    </div>
                    <div className="absolute top-[30px] left-[0px] flex flex-row items-start justify-start gap-[2px] text-base text-grey-grey-90">
                      <b className="relative leading-[30px]">$</b>
                      <b className="relative leading-[30px]">6000</b>
                    </div>
                  </div>
                  <div className="flex-1 relative h-[60px]">
                    <div className="absolute top-[0px] left-[0px] leading-[30px]">
                      Vehicle Access
                    </div>
                    <b className="absolute top-[30px] left-[0px] text-base leading-[30px] text-grey-grey-90">
                      Keys with Dylan
                    </b>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative leading-[30px]">
                    Special Instructions
                  </div>
                  <div className="self-stretch relative text-base leading-[30px] font-medium text-grey-grey-90">
                    At risus viverra adipiscing at in tellus. Blandit massa enim
                    nec dui nunc mattis. Lacus vel facilisis volutpat est velit.
                  </div>
                </div>
              </div>
              <div className="w-80 flex flex-col items-start justify-start">
                <img
                  className="w-80 relative rounded-xl h-80 overflow-hidden shrink-0"
                  alt=""
                  src="/image8.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[417px] bg-grey-grey-20 overflow-hidden shrink-0 flex flex-col items-center justify-start text-lg text-primary-navy">
            <div className="self-stretch overflow-hidden flex flex-col items-center justify-start p-6">
              <div className="self-stretch rounded-xl bg-primary-white overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-grey-grey-30">
                <div className="self-stretch relative h-[78px] overflow-hidden shrink-0">
                  <b className="absolute top-[24px] left-[24px] leading-[30px]">
                    Record Activity
                  </b>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-3 px-6 gap-[24px] text-base">
                  <LabelYes
                    label="Description"
                    icon="/icon15.svg"
                    placeholder="Write your notes"
                    icon1="/icon14.svg"
                    showIcon={false}
                    showPlaceholder
                    iconVisible={false}
                    labelYesFlex="unset"
                    labelYesAlignSelf="stretch"
                    labelYesHeight="unset"
                    labelAlignSelf="stretch"
                    labelWidth="unset"
                    inputHeight="unset"
                    inputBackgroundColor="#f6fafd"
                    placeholderFlex="1"
                    placeholderWidth="unset"
                  />
                  <LabelNo
                    icon="/icon15.svg"
                    placeholder="Nov 14 2021, 10:00"
                    icon1="/icon18.svg"
                    showIcon={false}
                    iconVisible
                    labelNoFlex="unset"
                    labelNoWidth="unset"
                    labelNoAlignSelf="stretch"
                    labelNoBackgroundColor="#f6fafd"
                    placeholderFlex="1"
                  />
                  <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[12px]">
                    <b className="relative leading-[30px]">Images</b>
                    <div className="self-stretch rounded-lg bg-grey-grey-10 overflow-hidden flex flex-col items-center justify-center p-2 text-center text-grey-grey-70 border-[1px] border-solid border-grey-grey-30">
                      <div className="relative leading-[30px]">ADD</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative h-[78px] overflow-hidden shrink-0">
                  <DefaultButton
                    buttonText="Save"
                    DefaultButtonPosition="absolute"
                    DefaultButtonTop="unset"
                    DefaultButtonRight="24px"
                    DefaultButtonWidth="100px"
                    DefaultButtonOverflow="hidden"
                    DefaultButtonBottom="20px"
                    DefaultButtonLeft="unset"
                    DefaultButtonBackgroundColor="#e8c400"
                    DefaultButtonBorder="unset"
                    DefaultButtonFlex="unset"
                    buttonColor="#fff"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-center justify-start">
              <div className="self-stretch relative h-[78px] overflow-hidden shrink-0">
                <b className="absolute top-[24px] left-[24px] leading-[30px]">
                  Activity Log
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-6 gap-[24px] text-sm text-grey-grey-70">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-3 gap-[12px]">
                  <div className="w-[54px] relative h-[54px] overflow-hidden shrink-0">
                    <div className="absolute top-[11px] left-[11px] rounded-81xl bg-primary-white box-border w-8 h-8 overflow-hidden border-[11px] border-solid border-gold-200" />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch relative leading-[27px]">
                        17 Nov 2021
                      </div>
                      <div className="self-stretch relative leading-[27px] font-medium text-primary-navy">
                        Smog Inspection
                      </div>
                    </div>
                    <div className="self-stretch bg-primary-white overflow-hidden flex flex-col items-center justify-center">
                      <img
                        className="self-stretch relative max-w-full overflow-hidden h-[120px] shrink-0"
                        alt=""
                        src="/image9.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[11px]">
                  <div className="w-[54px] relative h-[54px] overflow-hidden shrink-0">
                    <div className="absolute top-[11px] left-[11px] rounded-81xl bg-primary-white box-border w-8 h-8 overflow-hidden border-[11px] border-solid border-gold-200" />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch relative leading-[27px]">
                        16 Nov 2021
                      </div>
                      <div className="self-stretch relative leading-[27px] font-medium text-primary-navy">
                        Installation of the new air conditioning system
                      </div>
                    </div>
                    <div className="w-[150px] rounded-xl h-[100px] overflow-hidden shrink-0 hidden flex-row items-start justify-start">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/image10@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[11px]">
                  <div className="w-[54px] relative h-[54px] overflow-hidden shrink-0">
                    <div className="absolute top-[11px] left-[11px] rounded-81xl bg-primary-white box-border w-8 h-8 overflow-hidden border-[11px] border-solid border-gold-200" />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch relative leading-[27px]">
                        16 Nov 2021
                      </div>
                      <div className="self-stretch relative leading-[27px] font-medium text-primary-navy">
                        Evaluation and removal of the old system
                      </div>
                    </div>
                    <div className="w-[150px] rounded-xl h-[100px] overflow-hidden shrink-0 hidden flex-row items-start justify-start">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/image11@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[9px] pr-3.5 pl-6 text-right text-olive">
                  <div className="relative leading-[30px] font-medium">
                    Load More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar />
        <MainHeader dealDetails="Deal  Details" onLogoClick={onLogoClick} />
      </div>
    </>
  );
};

export default VehicleDetail;
