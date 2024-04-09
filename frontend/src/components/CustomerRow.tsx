import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

export type CustomerRowType = {
  avatar?: string;
  customerid: number; // Assuming customerid is always provided and is a number based on your DB
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string; // Assuming you're passing the entire address as a single string
};

const CustomerRow: FunctionComponent<CustomerRowType> = ({
  customerid,
  firstName,
  lastName,
  phone,
  email,
  address,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to customer detail page
    navigate(`/customer-detail/${customerid}`);
  };

  // Split address into parts if needed
  // const [street, city, state, zip] = address.split(', ');

  return (
    <div className="self-stretch relative h-20 overflow-hidden shrink-0 text-left text-base text-primary-navy font-heading-h5-bold">
      <div className="absolute h-[calc(100%_-_1px)] w-full top-[0px] right-[0px] bottom-[1px] left-[0px] flex flex-row items-center justify-start py-0 pr-6 pl-3 box-border gap-[24px]">
        <div className="flex-1 relative h-[30px] overflow-hidden">
          <div className="absolute top-[calc(50%_-_14.5px)] left-[0px] overflow-hidden flex flex-row items-start justify-start gap-[5px]">
            <div className="relative leading-[30px]">{firstName}</div>
            <div className="relative leading-[30px]">{lastName}</div>
          </div>
        </div>
        <div className="flex-1 relative h-[30px] overflow-hidden">
          <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px]">
            {email}
          </div>
        </div>
        <div className="w-[140px] relative h-[30px] overflow-hidden shrink-0">
          <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px]">
            {phone}
          </div>
        </div>
        <div className="flex-1 relative h-[30px] overflow-hidden">
          <div className="absolute top-[calc(50%_-_14.5px)] left-[0px] h-[30px] overflow-hidden flex flex-row items-start justify-start gap-[5px]">
            <div className="relative leading-[30px]">{address}</div>
          </div>
        </div>
        <img
          className="w-[60px] relative rounded-3xs h-[60px] overflow-hidden shrink-0"
          alt=""
          src="/edit-cell1.svg"
          onClick={(e) => {
            e.stopPropagation(); // Prevent the row's click event
            navigate(`/customer-edit/${customerid}`);
          }}
        />
      </div>
      <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-grey-grey-30 h-px" />
    </div>
  );
};

export default CustomerRow;

// Ryan's Code
// <div
//   className="customer-row self-stretch relative h-20 overflow-hidden shrink-0 cursor-pointer text-left text-base text-primary-navy font-heading-h5-bold"
//   onClick={handleClick}
// >
//   {/* Customer info and layout here */}
//   <div className="flex flex-row items-center justify-between">
//     <div className="flex-1">{`${firstname} ${lastname}`}</div>
//     <div className="flex-1">{email}</div>
//     <div className="flex-1">{phone}</div>
//     <div className="flex-1">{address}</div>
//     {/* ... */}
//   </div>
//   <img
//     className="edit-icon w-6 h-6"
//     alt="Edit"
//     src="/edit-cell1.svg"
//     onClick={(e) => {
//       e.stopPropagation(); // Prevent the row's click event
//       navigate(`/customer-edit/${customerid}`);
//     }}
//   />
// </div>
