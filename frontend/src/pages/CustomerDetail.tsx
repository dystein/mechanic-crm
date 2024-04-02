import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ScreenColumnsBG from "../components/ScreenColumnsBG";
import LabelYes from "../components/LabelYes";
import LabelNo from "../components/LabelNo";
import Base from "../components/Base";
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";

const CustomerDetail: FunctionComponent = () => {
  const [isAlertCustomerSavedOpen, setAlertCustomerSavedOpen] = useState(false);
  const [isAlertCustomerDeletedOpen, setAlertCustomerDeletedOpen] =
    useState(false);
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const openAlertCustomerSaved = useCallback(() => {
    setAlertCustomerSavedOpen(true);
  }, []);

  const closeAlertCustomerSaved = useCallback(() => {
    setAlertCustomerSavedOpen(false);
  }, []);

  const openAlertCustomerDeleted = useCallback(() => {
    setAlertCustomerDeletedOpen(true);
  }, []);

  const closeAlertCustomerDeleted = useCallback(() => {
    setAlertCustomerDeletedOpen(false);
  }, []);

  const onButtonIconClick = useCallback(() => {
    navigate("/add-new-vehicle");
  }, [navigate]);

  const onDealRepeatLinkClick = useCallback(() => {
    navigate("/vehicle-detail");
  }, [navigate]);

  return (
    <>
      <div
          className="w-full relative bg-grey-grey-10 h-[910px] overflow-hidden text-left text-sm text-primary-white font-heading-h5-bold">
        <ScreenColumnsBG
            showRightArea
            screenColumnsBGWidth="100%"
            screenColumnsBGHeight="100%"
            screenColumnsBGPosition="absolute"
            screenColumnsBGTop="0px"
            screenColumnsBGRight="0px"
            screenColumnsBGBottom="0px"
            screenColumnsBGLeft="0px"
            rightAreaOverflow="hidden"
        />
        <div
            className="absolute w-[calc(100%_-_90px)] top-[90px] right-[0px] left-[90px] flex flex-row items-start justify-start">
          <div
              className="flex-1 h-[670px] overflow-hidden flex flex-col items-center justify-start p-6 box-border gap-[24px]">
            <div className="self-stretch relative rounded-xl h-[200px] overflow-hidden shrink-0">
              <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/cover@2x.png"
              />
              <div className="absolute top-[76px] left-[24px] w-[100px] h-[100px] overflow-hidden">
                <div
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-31xl bg-primary-white overflow-hidden">
                  <div
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-31xl bg-primary-white"/>
                </div>
                <img
                    className="absolute right-[0px] bottom-[0px] rounded-[20px] w-8 h-8"
                    alt=""
                    src="/icon-wrapper.svg"
                />
                <div
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden opacity-[0]"/>
              </div>
              <div
                  className="absolute top-[calc(50%_+_24px)] right-[40px] rounded-51xl bg-primary-blue overflow-hidden hidden flex-row items-center justify-center py-2.5 pr-4 pl-5 gap-[12px] cursor-pointer"
                  onClick={openAlertCustomerSaved}
              >
                <div className="relative leading-[30px] font-medium">
                  Save Changes
                </div>
                <img className="w-5 relative h-5" alt="" src="/icon20.svg"/>
              </div>
              <img
                  className="absolute top-[calc(50%_+_24px)] right-[40px] rounded-31xl w-[50px] h-[50px] overflow-hidden cursor-pointer"
                  alt=""
                  src="/button--delete-customer.svg"
                  onClick={openAlertCustomerDeleted}
              />
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[24px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
                <LabelYes
                    label="First Name"
                    icon="/icon11.svg"
                    placeholder="Barbara"
                    icon1="/icon21.svg"
                    showIcon={false}
                    showPlaceholder
                    iconVisible={false}
                    labelYesFlex="1"
                    labelYesAlignSelf="unset"
                    labelYesHeight="unset"
                    labelAlignSelf="stretch"
                    labelWidth="unset"
                    inputHeight="unset"
                    inputBackgroundColor="#eef6fb"
                    placeholderFlex="1"
                    placeholderWidth="unset"
                />
                <LabelYes
                    label="Last Name"
                    icon="/icon11.svg"
                    placeholder="Anderson"
                    icon1="/icon21.svg"
                    showIcon={false}
                    showPlaceholder
                    iconVisible={false}
                    labelYesFlex="1"
                    labelYesAlignSelf="unset"
                    labelYesHeight="unset"
                    labelAlignSelf="stretch"
                    labelWidth="unset"
                    inputHeight="unset"
                    inputBackgroundColor="#eef6fb"
                    placeholderFlex="1"
                    placeholderWidth="unset"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
                <LabelYes
                    label="Email"
                    icon="/icon11.svg"
                    placeholder="banderson@gmail.com"
                    icon1="/icon21.svg"
                    showIcon={false}
                    showPlaceholder
                    iconVisible={false}
                    labelYesFlex="1"
                    labelYesAlignSelf="unset"
                    labelYesHeight="unset"
                    labelAlignSelf="stretch"
                    labelWidth="unset"
                    inputHeight="unset"
                    inputBackgroundColor="#eef6fb"
                    placeholderFlex="1"
                    placeholderWidth="unset"
                />
                <LabelYes
                    label="Phone"
                    icon="/icon11.svg"
                    placeholder="310-685-3335"
                    icon1="/icon21.svg"
                    showIcon={false}
                    showPlaceholder
                    iconVisible={false}
                    labelYesFlex="1"
                    labelYesAlignSelf="unset"
                    labelYesHeight="unset"
                    labelAlignSelf="stretch"
                    labelWidth="unset"
                    inputHeight="unset"
                    inputBackgroundColor="#eef6fb"
                    placeholderFlex="1"
                    placeholderWidth="unset"
                />
              </div>
              <LabelYes
                  label="Address"
                  icon="/icon11.svg"
                  placeholder="Street Address"
                  icon1="/icon12.svg"
                  showIcon={false}
                  showPlaceholder
                  iconVisible={false}
                  labelYesFlex="unset"
                  labelYesAlignSelf="stretch"
                  labelYesHeight="unset"
                  labelAlignSelf="stretch"
                  labelWidth="unset"
                  inputHeight="unset"
                  inputBackgroundColor="#eef6fb"
                  placeholderFlex="1"
                  placeholderWidth="unset"
              />
              <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
                <LabelNo
                    icon="/icon11.svg"
                    placeholder="City"
                    icon1="/icon12.svg"
                    showIcon={false}
                    iconVisible={false}
                    labelNoFlex="1"
                    labelNoWidth="unset"
                    labelNoAlignSelf="unset"
                    labelNoBackgroundColor="#eef6fb"
                    placeholderFlex="1"
                />
                <LabelNo
                    icon="/icon11.svg"
                    placeholder="State / Province"
                    icon1="/icon12.svg"
                    showIcon={false}
                    iconVisible={false}
                    labelNoFlex="unset"
                    labelNoWidth="300px"
                    labelNoAlignSelf="unset"
                    labelNoBackgroundColor="#eef6fb"
                    placeholderFlex="unset"
                />
                <LabelNo
                    icon="/icon11.svg"
                    placeholder="Zip Code"
                    icon1="/icon12.svg"
                    showIcon={false}
                    iconVisible={false}
                    labelNoFlex="unset"
                    labelNoWidth="109px"
                    labelNoAlignSelf="unset"
                    labelNoBackgroundColor="#eef6fb"
                    placeholderFlex="unset"
                />
              </div>
            </div>
          </div>
          <div className="w-[417px] bg-grey-grey-20 flex flex-col items-center justify-start text-lg text-primary-navy">
            <div className="w-[417px] flex flex-col items-start justify-start gap-[4px]">
              <div className="w-[417px] relative h-[78px] overflow-hidden shrink-0">
                <b className="absolute top-[calc(50%_-_15px)] left-[24px] leading-[30px]">
                  Recent Vehicles
                </b>
                <img
                    className="absolute top-[calc(50%_-_20px)] right-[24px] rounded-31xl w-10 h-10 overflow-hidden cursor-pointer"
                    alt=""
                    src="/button16.svg"
                    onClick={onButtonIconClick}
                />
              </div>
              <div
                  className="self-stretch flex flex-col items-start justify-start gap-[4px] text-base text-grey-grey-90">
                <div
                    className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[9px] px-6 gap-[16px] cursor-pointer"
                    onClick={onDealRepeatLinkClick}
                >
                  <div className="w-11 relative rounded-6xl bg-grey-grey-50 h-11 overflow-hidden shrink-0">
                    <div
                        className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-6xl bg-grey-grey-50"/>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div
                        className="self-stretch h-[27px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[5px]">
                      <b className="relative leading-[27px]">2020</b>
                      <b className="relative leading-[27px]">Mercedes-Benz</b>
                      <b className="relative leading-[27px]">S550</b>
                    </div>
                    <div
                        className="self-stretch h-[27px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[12px] text-sm text-grey-grey-70">
                      <div className="relative leading-[27px]">
                        Nov 14, 09:00
                      </div>
                      <div className="relative leading-[27px]">•</div>
                      <div className="flex flex-row items-start justify-start gap-[6px]">
                        <div className="relative leading-[27px]">$</div>
                        <div className="relative leading-[27px]">6000</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                    className="w-[417px] overflow-hidden flex flex-row items-center justify-start py-[9px] px-6 box-border gap-[16px]">
                  <img
                      className="w-11 relative rounded-6xl h-11 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/image12@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start gap-[5px]">
                      <b className="relative leading-[27px]">2015</b>
                      <b className="relative leading-[27px]">Ford</b>
                      <b className="relative leading-[27px]">Fusion</b>
                    </div>
                    <div
                        className="self-stretch flex flex-row items-start justify-start gap-[12px] text-sm text-grey-grey-70">
                      <div className="relative leading-[27px]">
                        Nov 14, 09:00
                      </div>
                      <div className="relative leading-[27px]">•</div>
                      <div className="flex flex-row items-start justify-start gap-[6px]">
                        <div className="relative leading-[27px]">$</div>
                        <div className="w-[158px] relative leading-[27px] inline-block shrink-0">
                          6000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                    className="w-[417px] overflow-hidden flex flex-row items-center justify-start py-[9px] px-6 box-border gap-[16px]">
                  <img
                      className="w-11 relative rounded-6xl h-11 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/image13@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start gap-[5px]">
                      <b className="relative leading-[27px]">2014</b>
                      <b className="relative leading-[27px]">Toyota</b>
                      <b className="relative leading-[27px]">Tacoma</b>
                    </div>
                    <div
                        className="self-stretch flex flex-row items-start justify-start gap-[12px] text-sm text-grey-grey-70">
                      <div className="relative leading-[27px]">
                        Nov 14, 09:00
                      </div>
                      <div className="relative leading-[27px]">•</div>
                      <div className="flex flex-row items-start justify-start gap-[6px]">
                        <div className="relative leading-[27px]">$</div>
                        <div className="w-[158px] relative leading-[27px] inline-block shrink-0">
                          6000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                    className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[9px] pr-3.5 pl-6 text-right text-sm text-olive">
                  <div className="relative leading-[30px] font-medium">
                    Load More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar />
        <MainHeader dealDetails="Customer Details" onLogoClick={onLogoClick}/>
      </div>
    </>
  );
};

export default CustomerDetail;
