import React, {FunctionComponent} from "react";
import {useNavigate} from "react-router-dom";

export type CustomerRowType = {
    customerid: number; // Assuming customerid is always provided and is a number based on your DB
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
};

const DashRecentCustomer: FunctionComponent<CustomerRowType> = ({
                                                             customerid,
                                                             firstName,
                                                             lastName,
                                                             phone,
                                                             email,
                                                         }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to customer detail page
        navigate(`/customer-detail/${customerid}`);
    };

  return (
    <div className="hover:cursor-pointer hover:bg-grey-grey-30 self-stretch overflow-hidden flex flex-row items-center justify-start py-[9px] pr-3.5 pl-6"
         onClick={() => handleClick()}>
      <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
            <b className="relative leading-[27px]">{firstName}</b>
            <b className="flex-1 relative leading-[27px]">{lastName}</b>
          </div>
          <div className="self-stretch relative text-sm leading-[27px] text-grey-grey-70">
              {email}
          </div>
        </div>
      </div>
      <img
        className="hover:bg-grey-grey-50 w-[50px] relative rounded-31xl h-[50px] overflow-hidden shrink-0"
        alt=""
        src="/edit.svg"
      />
    </div>
  );
};

export default DashRecentCustomer;
