import { FunctionComponent } from "react";

export type CustomerType = {
  avatar?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  edit?: string;
};

const Customer: FunctionComponent<CustomerType> = ({
  avatar,
  firstname,
  lastname,
  email,
  edit,
}) => {
  return (
    <div className="overflow-hidden flex flex-row items-center justify-start py-[9px] pr-3.5 pl-6 box-border text-left text-base text-primary-navy font-heading-h5-bold self-stretch">
      <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
        <img
          className="w-11 relative rounded-6xl h-11 overflow-hidden shrink-0 object-cover"
          alt=""
          src={avatar}
        />
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
            <b className="relative leading-[27px]">{firstname}</b>
            <b className="flex-1 relative leading-[27px]">{lastname}</b>
          </div>
          <div className="self-stretch relative text-sm leading-[27px] text-grey-grey-70">
            {email}
          </div>
        </div>
      </div>
      <img
        className="w-[50px] relative rounded-31xl h-[50px] overflow-hidden shrink-0"
        alt=""
        src={edit}
      />
    </div>
  );
};

export default Customer;
