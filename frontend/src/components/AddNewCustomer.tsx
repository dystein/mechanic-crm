import { FunctionComponent } from "react";
import LabelYes from "./LabelYes";
import LabelNo from "./LabelNo";
import TypeDefaultStyleWhite from "./TypeDefaultStyleWhite";

const AddNewCustomer: FunctionComponent = () => {
  return (
    <div className="w-[1366px] bg-black-black-50 h-[910px] max-w-full max-h-full overflow-auto text-left text-lg text-primary-navy font-heading-h5-bold">
      <div className="absolute top-[calc(50%_-_350px)] left-[calc(50%_-_310px)] rounded-xl bg-primary-white w-[620px] overflow-hidden flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-center justify-start py-3.5 pr-3.5 pl-8 gap-[32px]">
          <b className="flex-1 relative leading-[30px]">Add New Customer</b>
          <img
            className="w-[50px] relative rounded-31xl h-[50px]"
            alt=""
            src="/button9.svg"
          />
        </div>
        <div className="self-stretch relative bg-primary-white h-[528px] overflow-y-auto shrink-0 text-base">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-col items-start justify-start py-2 px-8 box-border gap-[20px]">
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[12px]">
              <b className="relative leading-[30px]">Avatar</b>
              <img
                className="w-[50px] relative rounded-81xl h-[50px] overflow-hidden shrink-0 hidden"
                alt=""
                src="/upload-avatar.svg"
              />
              <div className="rounded-lg bg-grey-grey-10 overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 gap-[12px] text-center text-grey-grey-70 border-[1px] border-solid border-grey-grey-30">
                <img
                  className="w-5 relative h-5 hidden"
                  alt=""
                  src="/icon9.svg"
                />
                <div className="relative leading-[30px]">ADD</div>
                <img
                  className="w-5 relative h-5 hidden"
                  alt=""
                  src="/icon10.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
              <LabelYes
                label="First Name"
                icon="/icon11.svg"
                placeholder="Barbara"
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
                label="Last Name"
                icon="/icon11.svg"
                placeholder="Anderson"
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
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
              <LabelYes
                label="Email"
                icon="/icon11.svg"
                placeholder="banderson@gmail.com"
                icon1="/icon12.svg"
                showIcon={false}
                showPlaceholder={false}
                iconVisible={false}
                labelYesFlex="1"
                labelYesAlignSelf="unset"
                labelYesHeight="unset"
                labelAlignSelf="unset"
                labelWidth="344px"
                inputHeight="50px"
                inputBackgroundColor="#f6fafd"
                placeholderFlex="unset"
                placeholderWidth="240px"
              />
              <LabelYes
                label="Phone"
                icon="/icon11.svg"
                placeholder="310-685-3335"
                icon1="/icon12.svg"
                showIcon={false}
                showPlaceholder={false}
                iconVisible={false}
                labelYesFlex="1"
                labelYesAlignSelf="unset"
                labelYesHeight="unset"
                labelAlignSelf="unset"
                labelWidth="344px"
                inputHeight="50px"
                inputBackgroundColor="#f6fafd"
                placeholderFlex="unset"
                placeholderWidth="240px"
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
              inputBackgroundColor="#f6fafd"
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
                labelNoBackgroundColor="#f6fafd"
                placeholderFlex="1"
              />
              <LabelNo
                icon="/icon11.svg"
                placeholder="State / Province"
                icon1="/icon12.svg"
                showIcon={false}
                iconVisible={false}
                labelNoFlex="unset"
                labelNoWidth="160px"
                labelNoAlignSelf="unset"
                labelNoBackgroundColor="#f6fafd"
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
                labelNoBackgroundColor="#f6fafd"
                placeholderFlex="unset"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-end pt-4 px-8 pb-7">
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <TypeDefaultStyleWhite
              buttonText="Cancel"
              typeDefaultStyleWhitePosition="unset"
              typeDefaultStyleWhiteTop="unset"
              typeDefaultStyleWhiteRight="unset"
              typeDefaultStyleWhiteWidth="unset"
              typeDefaultStyleWhiteOverflow="hidden"
              typeDefaultStyleWhiteBottom="unset"
              typeDefaultStyleWhiteLeft="unset"
              typeDefaultStyleWhiteBackgroundColor="unset"
              typeDefaultStyleWhiteBorder="unset"
              typeDefaultStyleWhiteFlex="unset"
              buttonColor="#092c4c"
            />
            <TypeDefaultStyleWhite
              buttonText="Save Customer"
              typeDefaultStyleWhitePosition="unset"
              typeDefaultStyleWhiteTop="unset"
              typeDefaultStyleWhiteRight="unset"
              typeDefaultStyleWhiteWidth="unset"
              typeDefaultStyleWhiteOverflow="hidden"
              typeDefaultStyleWhiteBottom="unset"
              typeDefaultStyleWhiteLeft="unset"
              typeDefaultStyleWhiteBackgroundColor="#dbb800"
              typeDefaultStyleWhiteBorder="unset"
              typeDefaultStyleWhiteFlex="unset"
              buttonColor="#fff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewCustomer;
