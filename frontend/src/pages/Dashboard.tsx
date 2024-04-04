import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DashRecentVehicle from "../components/DashRecentVehicle";
import DashLatestRepair from "../components/DashLatestRepair";
import DashRecVehRepairs from "../components/DashRecVehRepairs";
import CustomerVehicleCount from "../components/CustomerVehicleCount";
import DashRecentCustomer from "../components/DashRecentCustomer";
import Sidebar from "../components/Sidebar";
import MainHeader from "../components/MainHeader";

const Dashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onVehiclesClick = useCallback(() => {
    navigate("/vehicles");
  }, [navigate]);

  const onCustomersClick = useCallback(() => {
    navigate("/customers");
  }, [navigate]);

  return (
    <div className="w-[1366px] bg-grey-grey-10 max-w-full h-[910px] overflow-y-auto text-left text-5xl text-primary-navy font-heading-h5-bold">
      <div className="absolute w-[calc(100%_-_90px)] top-[90px] right-[0px] left-[90px] flex flex-col items-start justify-start  bottom-[0px]">
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
        <div className="absolute top-[0px] right-[0px] bg-grey-grey-20 w-[417px] bottom-[0px]">
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
      <MainHeader />
    </div>
  );
};

export default Dashboard;
