import { FunctionComponent } from "react";

const UploadImage: FunctionComponent = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[12px] text-left text-base text-primary-navy font-heading-h5-bold">
      <b className="relative leading-[30px]">Vehicle Images</b>
      <div className="rounded-lg bg-grey-grey-10 overflow-hidden flex flex-row items-center justify-start py-2.5 px-5 gap-[12px] text-center text-grey-grey-70 border-[1px] border-solid border-grey-grey-30">
        <img className="w-5 relative h-5 hidden" alt="" src="/icon9.svg" />
        <div className="relative leading-[30px]">ADD</div>
        <img className="w-5 relative h-5 hidden" alt="" src="/icon10.svg" />
      </div>
    </div>
  );
};

export default UploadImage;
