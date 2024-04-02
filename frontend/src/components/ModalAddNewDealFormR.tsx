import { FunctionComponent } from "react";
import DefaultButton from "./DefaultButton";
import UploadImage from "./UploadImage";
import LabelNo from "./LabelNo";
import LabelYes from "./LabelYes";

const ModalAddNewDealFormR: FunctionComponent = () => {
  return (
    <div className="absolute h-[calc(100%_-_224px)] top-[112px] bottom-[112px] left-[calc(50%_-_310px)] rounded-xl bg-primary-white w-[620px] overflow-hidden flex flex-col items-start justify-start text-left text-lg text-primary-navy font-heading-h5-bold">
      <div className="self-stretch flex flex-row items-center justify-start py-3.5 pr-3.5 pl-8 gap-[14px]">
        <b className="flex-1 relative leading-[30px]">Add New Vehicle</b>
        <img
          className="w-[50px] relative rounded-31xl h-[50px] overflow-hidden shrink-0"
          alt=""
          src="/button10.svg"
        />
      </div>
      <div className="self-stretch bg-grey-grey-20 flex flex-row items-center justify-center py-4 px-8 gap-[20px] text-sm text-grey-grey-70 border-[1px] border-solid border-grey-grey-30">
        <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
          <div className="w-11 relative rounded-6xl h-11 overflow-hidden shrink-0">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-6xl bg-grey-grey-50" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[27px]">Customer</div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[5px] text-base text-primary-navy">
              <b className="relative leading-[27px]">Deanna</b>
              <b className="flex-1 relative leading-[27px]">Annis</b>
            </div>
          </div>
        </div>
        <DefaultButton
          buttonText="Change Customer"
          DefaultButtonPosition="unset"
          DefaultButtonTop="unset"
          DefaultButtonRight="unset"
          DefaultButtonWidth="180px"
          DefaultButtonOverflow="hidden"
          DefaultButtonBottom="unset"
          DefaultButtonLeft="unset"
          DefaultButtonBackgroundColor="#fff"
          DefaultButtonBorder="1px solid #eaeef4"
          DefaultButtonFlex="unset"
          buttonColor="#092c4c"
        />
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start text-base">
        <div className="self-stretch flex-1 relative bg-primary-white overflow-y-auto">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-col items-start justify-start pt-7 px-8 pb-6 box-border gap-[20px]">
            <UploadImage />
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <b className="self-stretch relative leading-[30px]">
                Vehicle Information
              </b>
              <div className="w-[344px] rounded-lg bg-grey-grey-10 box-border overflow-hidden hidden flex-row items-center justify-start py-2.5 px-5 gap-[12px] text-grey-grey-70 border-[1px] border-solid border-grey-grey-30">
                <img
                  className="w-5 relative h-5 hidden"
                  alt=""
                  src="/icon11.svg"
                />
                <div className="flex-1 relative leading-[30px]">
                  Street Address
                </div>
                <img
                  className="w-5 relative h-5 hidden"
                  alt=""
                  src="/icon12.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
              <LabelNo
                icon="/icon11.svg"
                placeholder="Year"
                icon1="/icon12.svg"
                showIcon={false}
                iconVisible={false}
                labelNoFlex="unset"
                labelNoWidth="115px"
                labelNoAlignSelf="unset"
                labelNoBackgroundColor="#f6fafd"
                placeholderFlex="unset"
              />
              <LabelNo
                icon="/icon11.svg"
                placeholder="Make"
                icon1="/icon12.svg"
                showIcon={false}
                iconVisible={false}
                labelNoFlex="unset"
                labelNoWidth="200px"
                labelNoAlignSelf="unset"
                labelNoBackgroundColor="#f6fafd"
                placeholderFlex="1"
              />
              <LabelNo
                icon="/icon11.svg"
                placeholder="Model"
                icon1="/icon12.svg"
                showIcon={false}
                iconVisible={false}
                labelNoFlex="unset"
                labelNoWidth="200px"
                labelNoAlignSelf="unset"
                labelNoBackgroundColor="#f6fafd"
                placeholderFlex="unset"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
              <LabelYes
                label="Mileage"
                icon="/icon11.svg"
                placeholder="25 m2"
                icon1="/icon12.svg"
                showIcon={false}
                showPlaceholder={false}
                iconVisible={false}
                labelYesFlex="1"
                labelYesAlignSelf="unset"
                labelYesHeight="unset"
                labelAlignSelf="stretch"
                labelWidth="unset"
                inputHeight="50px"
                inputBackgroundColor="#f6fafd"
                placeholderFlex="unset"
                placeholderWidth="240px"
              />
              <LabelYes
                label="Plate No."
                icon="/icon11.svg"
                placeholder="9"
                icon1="/icon12.svg"
                showIcon={false}
                showPlaceholder={false}
                iconVisible={false}
                labelYesFlex="1"
                labelYesAlignSelf="unset"
                labelYesHeight="unset"
                labelAlignSelf="stretch"
                labelWidth="unset"
                inputHeight="50px"
                inputBackgroundColor="#f6fafd"
                placeholderFlex="unset"
                placeholderWidth="240px"
              />
            </div>
            <LabelYes
              label="Appointment Date"
              icon="/icon11.svg"
              placeholder="Nov 14, 2021"
              icon1="/icon13.svg"
              showIcon={false}
              showPlaceholder
              iconVisible
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
            <LabelYes
              label="Special Instructions"
              icon="/icon11.svg"
              placeholder="Leave any special instructions"
              icon1="/icon14.svg"
              showIcon={false}
              showPlaceholder={false}
              iconVisible={false}
              labelYesFlex="unset"
              labelYesAlignSelf="stretch"
              labelYesHeight="271px"
              labelAlignSelf="stretch"
              labelWidth="unset"
              inputHeight="50px"
              inputBackgroundColor="#f6fafd"
              placeholderFlex="unset"
              placeholderWidth="240px"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start pt-4 px-8 pb-7 gap-[70px]">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <b className="relative leading-[30px]">Progress</b>
            <LabelNo
              icon="/icon15.svg"
              placeholder="In Progress"
              icon1="/icon16.svg"
              showIcon={false}
              iconVisible
              labelNoFlex="unset"
              labelNoWidth="172px"
              labelNoAlignSelf="unset"
              labelNoBackgroundColor="#f6fafd"
              placeholderFlex="1"
            />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
            <DefaultButton
              buttonText="Cancel"
              DefaultButtonPosition="unset"
              DefaultButtonTop="unset"
              DefaultButtonRight="unset"
              DefaultButtonWidth="unset"
              DefaultButtonOverflow="hidden"
              DefaultButtonBottom="unset"
              DefaultButtonLeft="unset"
              DefaultButtonBackgroundColor="unset"
              DefaultButtonBorder="unset"
              DefaultButtonFlex="unset"
              buttonColor="#092c4c"
            />
            <DefaultButton
              buttonText="Save Vehicle"
              DefaultButtonPosition="unset"
              DefaultButtonTop="unset"
              DefaultButtonRight="unset"
              DefaultButtonWidth="unset"
              DefaultButtonOverflow="hidden"
              DefaultButtonBottom="unset"
              DefaultButtonLeft="unset"
              DefaultButtonBackgroundColor="#dab700"
              DefaultButtonBorder="unset"
              DefaultButtonFlex="1"
              buttonColor="#fff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddNewDealFormR;
