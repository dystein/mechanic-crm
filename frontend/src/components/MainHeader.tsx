import { FunctionComponent, useState, useCallback, useEffect } from "react";
import Base from "./Base";
import { useLocation, useNavigate } from "react-router-dom";
import TypeRightIconStylePrimary from "./TypeRightIconStylePrimary";

const getTitle = (pathname: string) => {
  if (pathname === "/dashboard" || pathname === "/") {
    return "Dashboard";
  } else if (pathname === "/vehicles") {
    return "Vehicles";
  } else if (pathname === "/vehicle-detail") {
    return "Vehicle Details"; // Gray not black
  } else if (pathname === "/customers") {
    return "Customers";
  } else if (pathname === "/customer-detail") {
    return "Customer Details"; // For some reason, the text is in white
  }
  // Return a default title if the pathname doesn't match any condition
  return "";
};
const getButton = (pathname: string) => {
  if (pathname === "/dashboard" || pathname === "/") {
    return "Add New";
  } else if (pathname === "/vehicles") {
    return "Add New Vehicle";
  } else if (pathname === "/customers") {
    return "Add New Customer";
  } // We shouldnt include a button inn /customer-detail and /vehicle-detail because it seems unnecessary, there is already an edit button that can be used to change stuff
  // Return a default title if the pathname doesn't match any condition
  return "";
};
const MainHeader: FunctionComponent = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [buttonName, setButtonName] = useState("");

  useEffect(() => {
    setTitle(getTitle(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    setButtonName(getButton(location.pathname));
  }, [location.pathname]);

  return (
    // changed 5xl to black
    <div className="fixed w-full top-[0px] right-[0px] left-[0px] h-[90px] text-5xl text-black">
      <div className="absolute w-[calc(100%_-_507px)] top-[0px] right-[417px] left-[90px] bg-ghostwhite h-[90px] overflow-hidden">
        <b className="absolute top-[calc(50%_-_20px)] left-[24px] leading-[40px]">
          {title}
        </b>
      </div>
      {location.pathname !== "vehicle-detail" &&
        location.pathname !== "customer-detail" && (
          <div className="absolute top-[0px] right-[0px] bg-ghostwhite w-[417px] h-[90px] overflow-hidden">
            <img
              className="absolute top-[calc(50%_-_25px)] right-[94px] rounded-31xl w-[50px] h-[50px] overflow-hidden"
              alt=""
              src="button.svg"
            />
            <TypeRightIconStylePrimary
              button={buttonName}
              icon="/icon.svg"
              typeRightIconStylePrimaryBackgroundColor="#e8c400"
              typeRightIconStylePrimaryOverflow="unset"
              typeRightIconStylePrimaryPosition="absolute"
              typeRightIconStylePrimaryTop="calc(50% - 25px)"
              typeRightIconStylePrimaryRight="164px"
            />
            <img
              className="absolute top-[calc(50%_-_25px)] right-[24px] rounded-81xl w-[50px] h-[50px] overflow-hidden object-cover"
              alt=""
              src="/user1@2x.png"
            />
          </div>
        )}
      <img
        className="absolute top-[calc(50%_-_45px)] left-[0px] w-[90px] h-[90px] overflow-hidden cursor-pointer"
        alt=""
        src="/logo.svg"
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
