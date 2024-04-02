import { FunctionComponent, useState, useCallback } from "react";
import Base from "./Base";
import {useLocation, useNavigate} from "react-router-dom";

const Sidebar: FunctionComponent = () => {
    const [isAddNewOpen, setAddNewOpen] = useState(false);

    const navigate = useNavigate();

    const location = useLocation();

    const onButtonIcon1Click = useCallback(() => {
        navigate('/vehicles'); // Navigate to vehicle page
    }, [navigate]);

    const onButtonIcon2Click = useCallback(() => {
        navigate('/customers'); // Navigate to customer page
    }, [navigate]);

    const onButtonIcon3Click = useCallback(() => {
        navigate('/dashboard'); // Navigate to dashboard page
    }, [navigate]);

    return (
        <div className="absolute h-[calc(100%_-_90px)] top-[90px] bottom-[0px] left-[0px] bg-ghostwhite w-[90px]">
            <Base
                baseWidth="1px"
                basePosition="absolute"
                baseRight="0px"
                baseBottom="0px"
                baseLeft="unset"
                baseHeight="100%"
                baseTop="0px"
                baseAlignSelf="unset"
            />
            <div className="absolute top-[20px] left-[calc(50%_-_25px)] flex flex-col items-start justify-start gap-[16px]">
                <img
                    className="w-[50px] relative rounded-31xl h-[50px] overflow-hidden shrink-0 cursor-pointer"
                    alt=""
                    //src="/button-1.svg" // Update if you have a different icon
                    src={location.pathname === '/dashboard' || location.pathname === '/' ? '/button-1.svg' : '/button11.svg' }
                    onClick={onButtonIcon3Click}
                />
                <img
                    className="w-[50px] relative rounded-31xl h-[50px] overflow-hidden shrink-0 cursor-pointer"
                    alt=""
                    src={location.pathname === '/vehicles' || location.pathname === '/vehicle-detail' ? '/button12.svg' : '/button3.svg' }
                    onClick={onButtonIcon1Click}
                />
                <img
                    className="w-[50px] relative rounded-31xl h-[50px] overflow-hidden shrink-0 cursor-pointer"
                    alt=""
                    src={location.pathname === '/customers' || location.pathname === '/customer-detail' ? '/button15.svg' : '/button4.svg' }
                    onClick={onButtonIcon2Click}
                />
                {/* Add more buttons or elements as needed for your sidebar navigation */}
            </div>
        </div>
    );
};

export default Sidebar;