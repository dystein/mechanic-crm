import { FunctionComponent } from "react";
import Base from "./Base";

export type MainHeaderType = {
  dealDetails?: string;

  /** Action props */
  onLogoClick?: () => void;
};

const MainHeader: FunctionComponent<MainHeaderType> = ({
  dealDetails,
  onLogoClick,
}) => {
  return (
    <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[90px] text-left text-5xl text-primary-navy font-heading-h5-bold">
      <div className="absolute w-[calc(100%_-_507px)] top-[0px] right-[417px] left-[90px] bg-ghostwhite h-[90px] overflow-hidden">
        <b className="absolute top-[calc(50%_-_20px)] left-[24px] leading-[40px] whitespace-pre-wrap">
          {dealDetails}
        </b>
      </div>
      <div className="absolute top-[0px] right-[0px] bg-aliceblue w-[417px] h-[90px] overflow-hidden">
        <img
          className="absolute top-[calc(50%_-_25px)] right-[94px] rounded-31xl w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="/button.svg"
        />
        <img
          className="absolute top-[calc(50%_-_25px)] right-[24px] rounded-81xl w-[50px] h-[50px] overflow-hidden object-cover"
          alt=""
          src="/user1@2x.png"
        />
      </div>
      <img
        className="absolute top-[calc(50%_-_45px)] left-[0px] w-[90px] h-[90px] overflow-hidden cursor-pointer"
        alt=""
        src="/logo.svg"
        onClick={onLogoClick}
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
  );
};

export default MainHeader;
