import { FunctionComponent, useState, useCallback } from "react";
import TypeRightIconStylePrimary from "../components/TypeRightIconStylePrimary";
import { useNavigate } from "react-router-dom";
import DashRecentVehicle from "../components/DashRecentVehicle";
import Base from "../components/Base";
import DashLatestRepair from "../components/DashLatestRepair";
import DashRecVehRepairs from "../components/DashRecVehRepairs";
import CustomerVehicleCount from "../components/CustomerVehicleCount";
import DashRecentCustomer from "../components/DashRecentCustomer";
import Sidebar from "../components/Sidebar";

const Dashboard: FunctionComponent = () => {
  const [isAddNewOpen, setAddNewOpen] = useState(false);
  const navigate = useNavigate();

  const onVehiclesClick = useCallback(() => {
    navigate("/vehicles");
  }, [navigate]);

  const onCustomersClick = useCallback(() => {
    navigate("/customers");
  }, [navigate]);

  return (
    <div className="w-[1366px] bg-grey-grey-10 max-w-full h-[910px] overflow-y-auto text-left text-5xl text-primary-navy font-heading-h5-bold">
      <div className="absolute w-[calc(100%_-_90px)] top-[90px] right-[0px] left-[90px] flex flex-col items-start justify-start">
        {/* Inner dashboard content */}
        <div className="absolute w-[calc(100%_-_417px)] top-[0px] right-[417px] left-[0px] h-[820px]">
          {/* Inner dashboard content: Upper section */}
          <div className="absolute w-[calc(100%_-_48px)] top-[20px] right-[24px] left-[24px] flex flex-row items-start justify-start gap-[24px]">
            {/* Recent Vehicles */}
            <div className="flex-1 rounded-xl bg-primary-white box-border h-[392px] flex flex-col items-start justify-start border-[1px] border-solid border-grey-grey-30">
              <div className="self-stretch relative h-[78px]">
                <b className="absolute top-[24px] left-[24px] leading-[30px]">
                  Recent Vehicles
                </b>
                <div
                  className="absolute top-[24px] right-[24px] text-sm leading-[30px] font-medium text-olive text-right cursor-pointer"
                  onClick={onVehiclesClick}
                >
                  View All
                </div>
              </div>
              <div className="self-stretch h-[314px] overflow-y-auto shrink-0 flex flex-col items-start justify-start gap-[4px] text-base">
                {/* Add map functionality for 4 recent vehicles from db: repairs/startdate */}
                <DashRecentVehicle />
                <DashRecentVehicle />
                <DashRecentVehicle />
                <DashRecentVehicle />
              </div>
            </div>
            {/* Latest Repair */}
            <DashLatestRepair />
          </div>
          {/* Inner dashboard content: Lower section */}
          <div className="absolute w-[calc(100%_-_48px)] top-[436px] right-[24px] left-[24px] flex flex-row items-start justify-start gap-[24px] text-grey-grey-70">
            {/* Customer & Vehicle Count */}
            <div className="w-[268px] h-[360px] flex flex-col items-start justify-start gap-[24px]">
              <CustomerVehicleCount customerOrVehicle="Customers" />
              <CustomerVehicleCount customerOrVehicle="Vehicles" />
            </div>
            {/* Recent Vehicle Repairs */}
            <DashRecVehRepairs />
          </div>
        </div>
        {/* Right Sidebar: Dashboard Customers */}
        <div className="absolute top-[0px] right-[0px] bg-grey-grey-20 w-[417px] h-[820px]">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[316px] flex flex-col items-start justify-start">
            <div className="self-stretch relative h-[78px] overflow-hidden shrink-0">
              <b className="absolute top-[24px] left-[24px] leading-[30px]">
                Customers
              </b>
              <div
                className="absolute top-[24px] right-[24px] text-sm leading-[30px] font-medium text-olive text-right cursor-pointer"
                onClick={onCustomersClick}
              >
                View All
              </div>
            </div>
            <div className="self-stretch relative shrink-0 text-base">
              <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-col items-start justify-start gap-[3px]">
                {/* Add map functionality for 8 recent customers from db: repairs/startdate/customers */}
                <DashRecentCustomer />
                <DashRecentCustomer />
                <DashRecentCustomer />
                <DashRecentCustomer />
                <DashRecentCustomer />
                <DashRecentCustomer />
                <DashRecentCustomer />
                <DashRecentCustomer />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left Sidebar */}
      <Sidebar />
      {/* Header */}
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[90px] text-5xl">
        <div className="absolute w-[calc(100%_-_507px)] top-[0px] right-[417px] left-[90px] bg-ghostwhite h-[90px] overflow-hidden">
          <b className="absolute top-[calc(50%_-_20px)] left-[24px] leading-[40px]">
            Dashboard
          </b>
        </div>
        <div className="absolute top-[0px] right-[0px] bg-ghostwhite w-[417px] h-[90px] overflow-hidden">
          <img
            className="absolute top-[calc(50%_-_25px)] right-[94px] rounded-31xl w-[50px] h-[50px] overflow-hidden"
            alt=""
            src="/button.svg"
          />
          <TypeRightIconStylePrimary
            button="Add New"
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
    </div>
  );
};

export default Dashboard;
