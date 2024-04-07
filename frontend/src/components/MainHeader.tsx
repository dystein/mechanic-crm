import { FunctionComponent, useState, useCallback, useEffect } from "react";
import Base from "./Base";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./MainHeader.module.css";

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

  // Popup toggle
  const [showPopup, setShowPopup] = useState(0);

  useEffect(() => {
    setTitle(getTitle(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    setButtonName(getButton(location.pathname));
  }, [location.pathname]);

  const handleButtonClick = () => {
    switch (location.pathname) {
      case "/dashboard":
        setShowPopup(1); // Show "Add New" popup
        break;
      case "/vehicles":
        setShowPopup(2); // Show "Add New Vehicle" popup
        break;
      case "/customers":
        setShowPopup(3); // Show "Add New Customer" popup
        break;
      default:
        setShowPopup(0); // No popup
    }
  };
  const closePopup = () => setShowPopup(0);

  return (
    // changed 5xl to black
    <div className="fixed w-full top-[0px] right-[0px] left-[0px] h-[90px] text-5xl text-black">
      {/* Logo */}
      <img
        className="absolute top-[calc(50%_-_45px)] left-[0px] w-[90px] h-[90px] overflow-hidden cursor-pointer"
        alt=""
        src="/logo.svg"
      />
      {/* Header Left */}
      <div className="absolute w-[calc(100%_-_507px)] top-[0px] right-[417px] left-[90px] bg-ghostwhite h-[90px] overflow-hidden">
        <b className="absolute top-[calc(50%_-_20px)] left-[24px] leading-[40px]">
          {title}
        </b>
      </div>
      {/* Header Right */}
      <div className="absolute top-[0px] right-[0px] bg-ghostwhite w-[417px] h-[90px] overflow-hidden">
        {/* Add New (Vehicle or Customer) Button */}
        {location.pathname !== "/vehicle-detail" &&
          location.pathname !== "/customer-detail" && (
            <button
              className="rounded-51xl bg-primary-blue overflow-hidden flex flex-row items-center justify-center py-2.5 pr-4 pl-5 gap-[12px] text-left text-sm text-primary-white font-heading-h5-bold"
              style={{
                backgroundColor: "#e8c400",
                overflow: "unset",
                position: "absolute",
                top: "calc(50% - 25px)",
                right: "164px",
                cursor: "pointer",
              }}
              onClick={handleButtonClick}
            >
              <div className="relative leading-[30px] font-medium">
                {buttonName}
              </div>
              <img className="w-5 relative h-5" alt="" src="/icon.svg" />
            </button>
          )}
        {/* Search Button */}
        <img
          className="absolute top-[calc(50%_-_25px)] right-[94px] rounded-31xl w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="button.svg"
        />
        {/* Account Profile Picture */}
        <img
          className="absolute top-[calc(50%_-_25px)] right-[24px] rounded-81xl w-[50px] h-[50px] overflow-hidden object-cover"
          alt=""
          src="/user1@2x.png"
        />
      </div>
      {showPopup === 1 && (
        <div className={styles.popup}>
          <button onClick={() => setShowPopup(2)}>Add New Vehicle</button>
          <button onClick={() => setShowPopup(3)}>Add New Customer</button>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
      {showPopup === 2 && (
        <div className={styles.popup}>
          Add New Vehicle Form <button onClick={closePopup}>Close</button>
        </div>
      )}
      {showPopup === 3 && (
        <div className={styles.popup}>
          Add New Customer Form <button onClick={closePopup}>Close</button>
        </div>
      )}
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
