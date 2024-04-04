import { FunctionComponent } from "react";
import {useNavigate} from "react-router-dom";

export type CustomerRowType = {
    avatar?: string;
    customerID?: string | number;
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
};

const CustomerRow: FunctionComponent<CustomerRowType> = ({
                                                                   avatar,
                                                                   customerID,
                                                                   firstName,
                                                                   lastName,
                                                                   phone,
                                                                   email,
                                                                   street,
                                                                   city,
                                                                   state,
                                                                   zipCode,
                                                               }) => {

    const navigate = useNavigate();

    // THIS ASSUMES VEHICLE DETAIL PAGES ARE /vehicle-detail/<vehicleID>
    const handleClick = (customerID: number | string | undefined) => {
        navigate(`/vehicle-detail/${customerID}`);
    };

    return (
        <div className="self-stretch relative h-20 overflow-hidden shrink-0 text-left text-base text-primary-navy font-heading-h5-bold"
             onClick={() => handleClick(customerID)}
        >
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
                        0 {/* was deals may need change*/}
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

export default CustomerRow;
