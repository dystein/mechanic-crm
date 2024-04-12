import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

export type VehicleRowType = {
    avatar?: string;
    vehicleid: number;
    customerid?: number;
    make: string;
    model: string;
    year: number;
    mileage: number;
    licenseplate: string;
    state: string;
    notes?: string;
};

const VehicleRow: FunctionComponent<VehicleRowType> = ({
                                                           avatar,
                                                           vehicleid,
                                                           customerid,
                                                           make,
                                                           model,
                                                           year,
                                                           mileage,
                                                           licenseplate,
                                                           state,
                                                           notes
}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to vehicle detail page
        navigate(`/vehicle-detail/${vehicleid}`);
    };

    return (
        <div className="hover:cursor-pointer hover:bg-gray-100 self-stretch relative h-20 overflow-hidden shrink-0 text-left text-base text-primary-navy font-heading-h5-bold"
             onClick={() => handleClick()}>
            <div className="absolute h-[calc(100%_-_1px)] w-full top-[0px] right-[0px] bottom-[1px] left-[0px] flex flex-row items-center justify-start py-0 pr-6 pl-3 box-border gap-[24px]">
                <div className="flex-1 relative h-[30px] overflow-hidden">
                    <div
                        className="absolute top-[calc(50%_-_14.5px)] left-[0px] overflow-hidden flex flex-row items-start justify-start gap-[5px]">
                        <div className="relative leading-[30px]">{year}</div>
                        <div className="relative leading-[30px]">{make}</div>
                        <div className="relative leading-[30px]">{model}</div>
                    </div>
                </div>
                <div className="flex-1 relative h-[30px] overflow-hidden">
                    <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px]">
                        {mileage}
                    </div>
                </div>
                <div className="w-[140px] relative h-[30px] overflow-hidden shrink-0">
                    <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px]">
                        {state}
                    </div>
                </div>
                <div className="flex-1 relative h-[30px] overflow-hidden">
                    <div className="absolute top-[calc(50%_-_14.5px)] left-[0px] h-[30px] overflow-hidden flex flex-row items-start justify-start gap-[5px]">
                        <div className="relative leading-[30px]">{licenseplate}</div>
                    </div>
                </div>
                <img
                    className="hover:cursor-pointer hover:bg-gray-200 w-[60px] relative rounded-3xs h-[60px] overflow-hidden shrink-0"
                    alt=""
                    src="/edit-cell1.svg"
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent the row's click event
                        navigate(`/vehicle-edit/${vehicleid}`);
                    }}
                />
            </div>
            <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-grey-grey-30 h-px" />
        </div>
    );
};

export default VehicleRow;
