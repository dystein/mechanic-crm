import { FunctionComponent } from "react";

export type CustomerRowIgnoreType = {
  avatar?: string;
  firstName?: string;
  lastName?: string;
  deals?: string;
  email?: string;
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
};

const CustomerRowIgnore: FunctionComponent<CustomerRowIgnoreType> = ({
  avatar,
  firstName,
  lastName,
  deals,
  email,
  street,
  city,
  state,
  zipCode,
}) => {
  return (
    <div className="self-stretch relative h-20 overflow-hidden shrink-0 text-left text-base text-primary-navy font-heading-h5-bold">
      <div className="absolute h-[calc(100%_-_1px)] w-full top-[0px] right-[0px] bottom-[1px] left-[0px] flex flex-row items-center justify-start py-0 pr-6 pl-3 box-border gap-[24px]">
        <img
          className="w-11 relative rounded-6xl h-11 overflow-hidden shrink-0 object-cover"
          alt=""
          src={avatar}
        />
        <div className="flex-1 relative h-[30px] overflow-hidden">
          <div className="absolute top-[calc(50%_-_14.5px)] left-[0px] overflow-hidden flex flex-row items-start justify-start gap-[5px]">
            <div className="relative leading-[30px]">{firstName}</div>
            <div className="relative leading-[30px]">{lastName}</div>
          </div>
        </div>
        <div className="w-[60px] relative h-[30px] overflow-hidden shrink-0 hidden">
          <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px]">
            {deals}
          </div>
        </div>
        <div className="flex-1 relative h-[30px] overflow-hidden">
          <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px]">
            {email}
          </div>
        </div>
        <div className="w-[140px] relative h-[30px] overflow-hidden shrink-0">
          <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px]">
            999-999-9999
          </div>
        </div>
        <div className="flex-1 relative h-[30px] overflow-hidden">
          <div className="absolute top-[calc(50%_-_14.5px)] left-[0px] h-[30px] overflow-hidden flex flex-row items-start justify-start gap-[5px]">
            <div className="relative leading-[30px]">{street}</div>
            <div className="relative leading-[30px]">{city}</div>
            <div className="relative leading-[30px]">{state}</div>
            <div className="relative leading-[30px]">{zipCode}</div>
          </div>
        </div>
        <img
          className="w-[60px] relative rounded-3xs h-[60px] overflow-hidden shrink-0"
          alt=""
          src="/edit-cell1.svg"
        />
      </div>
      <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-grey-grey-30 h-px" />
    </div>
  );
};

export default CustomerRowIgnore;
