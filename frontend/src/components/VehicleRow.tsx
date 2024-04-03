import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Badge from "./Badge";
import { useNavigate } from 'react-router-dom';

export type VehicleRowType = {
    image?: string;
    vehicleID?: number | string;
    street?: string;
    city?: string;
    state?: string;
    appointmentDate?: string;
    progress?: string;

    /** Style props */
    propWidth?: CSSProperties["width"];
    propFlex?: CSSProperties["flex"];
    propFlex1?: CSSProperties["flex"];
    propMinWidth?: CSSProperties["minWidth"];
    propFlex2?: CSSProperties["flex"];
    propMinWidth1?: CSSProperties["minWidth"];
    propPadding?: CSSProperties["padding"];
    propMinWidth2?: CSSProperties["minWidth"];
};

const VehicleRow: FunctionComponent<VehicleRowType> = ({
    image,
    vehicleID,
    street,
    city,
    state,
    appointmentDate,
    progress,
    propWidth,
    propFlex,
    propFlex1,
    propMinWidth,
    propFlex2,
    propMinWidth1,
    propPadding,
    propMinWidth2,
}) => {
    const navigate = useNavigate();

    // THIS ASSUMES VEHICLE DETAIL PAGES ARE /vehicle-detail/<vehicleID>
    const handleClick = (vehicleId: number | string | undefined) => {
        navigate(`/vehicle-detail/${vehicleId}`);
    };

    const addressConcatStyle: CSSProperties = useMemo(() => {
        return {
            width: propWidth,
        };
    }, [propWidth]);

    const streetStyle: CSSProperties = useMemo(() => {
        return {
            flex: propFlex,
        };
    }, [propFlex]);

    const cityStyle: CSSProperties = useMemo(() => {
        return {
            flex: propFlex1,
            minWidth: propMinWidth,
        };
    }, [propFlex1, propMinWidth]);

    const stateStyle: CSSProperties = useMemo(() => {
        return {
            flex: propFlex2,
            minWidth: propMinWidth1,
        };
    }, [propFlex2, propMinWidth1]);

    const badgeStyle: CSSProperties = useMemo(() => {
        return {
            padding: propPadding,
        };
    }, [propPadding]);

    const badge1Style: CSSProperties = useMemo(() => {
        return {
            minWidth: propMinWidth2,
        };
    }, [propMinWidth2]);

    return (
        <div
            className="self-stretch relative h-20 overflow-hidden shrink-0 text-left text-base text-primary-navy font-heading-h5-bold cursor-pointer"
            onClick={() => handleClick(vehicleID)}
        >
            <div
                className="absolute h-[calc(100%_-_1px)] w-full top-[0px] right-[0px] bottom-[1px] left-[0px] flex flex-row items-center justify-start py-0 pr-6 pl-3 box-border gap-[24px]">
                <img
                    className="w-11 relative rounded-6xl h-11 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src={image}
                />
                <div className="flex-1 relative h-[30px] overflow-hidden">
                    <div
                        className="absolute top-[calc(50%_-_15px)] left-[0px] flex flex-row items-start justify-start gap-[5px]"
                        style={addressConcatStyle}
                    >
                        <div className="relative leading-[30px]" style={streetStyle}>
                            {street}
                        </div>
                        <div className="relative leading-[30px]" style={cityStyle}>
                            {city}
                        </div>
                        <div className="relative leading-[30px]" style={stateStyle}>
                            {state}
                        </div>
                        <div className="relative leading-[30px]"/>
                    </div>
                </div>
                <div className="w-[100px] relative h-[30px]">
                    <div
                        className="absolute top-[calc(50%_-_15px)] left-[0px] w-[100px] h-[30px] flex flex-row items-center justify-start gap-[2px]">
                        <div className="relative leading-[30px]">100</div>
                        <img
                            className="w-[18.9px] relative h-[12.9px]"
                            alt=""
                            src="/m2.svg"
                        />
                    </div>
                </div>
                <div className="w-[200px] relative h-[30px] overflow-hidden shrink-0">
                    <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px]">
                        {appointmentDate}
                    </div>
                </div>
                <div className="w-[120px] relative h-[30px] overflow-hidden shrink-0">
                    <div className="absolute top-[calc(50%_-_15px)] left-[0px] flex flex-row items-start justify-start">
                        <div className="relative leading-[30px]">$</div>
                        <div className="relative leading-[30px]">6000</div>
                    </div>
                </div>
                <Badge
                    statusLabel="CLOSED"
                    badgeBackgroundColor="#fffdc3"
                    badgePosition="unset"
                    badgeTop="unset"
                    badgeRight="unset"
                    badgeWidth="120px"
                    badgeHeight="40px"
                    badgeColor="#726000"
                    badgeTextTransform="uppercase"
                    badgeFontWeight="500"
                />
                <img
                    className="w-[60px] relative rounded-3xs h-[60px] overflow-hidden shrink-0"
                    alt=""
                    src="/edit-cell.svg"
                />
            </div>
            <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-grey-grey-30 h-px"/>
        </div>
    );
};

export default VehicleRow;
