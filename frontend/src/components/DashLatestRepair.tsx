import React, { useCallback, useEffect, useState } from "react";
import DefaultButton from "./DefaultButton";
import { useNavigate } from "react-router-dom";

interface Vehicle {
  vehicleId: number;
  make: string;
  model: string;
  year: number;
  mileage: number;
  state: string;
}

interface RepairWithVehicle {
  repairId: number;
  description: string;
  startDate: string | null;
  cost: number;
  status: string;
  vehicle: Vehicle;
}

const DashLatestRepair = () => {
  const navigate = useNavigate();
  const [latestRepair, setLatestRepair] = useState<RepairWithVehicle | null>(
    null
  );

  useEffect(() => {
    const fetchLatestRepair = async () => {
      // Update these values to your real credentials
      const username = "admin";
      const password = "password";
      const basicAuth = `Basic ${btoa(`${username}:${password}`)}`;

      try {
        const response = await fetch(
          "https://mechanicshopcrm-fff7703161a3.herokuapp.com/repairs/latest",
          {
            headers: {
              Authorization: basicAuth,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: RepairWithVehicle = await response.json();
        setLatestRepair(data);
      } catch (error) {
        console.error("Fetching latest repair failed:", error);
      }
    };

    fetchLatestRepair();
  }, []);

  const onDealContainerClick = useCallback(() => {
    if (latestRepair) {
      navigate(`/repair-detail/${latestRepair.repairId}`);
    }
  }, [navigate, latestRepair]);

  return (
    <div className="w-[268px] relative rounded-xl bg-goldenrod-200 box-border h-[392px] text-sm text-primary-white border-[1px] border-solid border-grey-grey-30">
      {/* Latest Repair Header */}
      <div className="absolute top-[0px] left-[0px] w-[268px] h-[78px] overflow-hidden text-lg">
        <div className="absolute top-[0px] left-[0px] w-[268px] h-[78px]">
          <b className="absolute top-[24px] left-[24px] leading-[30px]">
            Latest Repair
          </b>
          <div className="absolute top-[34px] right-[28px] rounded-3xs bg-primary-white w-2.5 h-2.5" />
        </div>
      </div>
      {/* Latest Repair Details */}
      {latestRepair ? (
        <div className="absolute top-[78px] left-[0px] w-[268px] h-[314px] overflow-hidden">
          <div className="absolute top-[0px] left-[24px] w-[220px] flex flex-row items-center justify-start gap-[12px]">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start">
                <b className="relative leading-[27px]">{`${latestRepair.vehicle.year} ${latestRepair.vehicle.make}`}</b>
              </div>
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start">
                <div className="relative leading-[27px]">
                  {latestRepair.vehicle.model}
                </div>
              </div>
            </div>
          </div>
          {/* State and Mileage */}
          <div className="absolute top-[78px] right-[80px]">
            <div className="relative leading-[27px]">State</div>
            <b className="relative leading-[27px]">
              {latestRepair.vehicle.state}
            </b>
          </div>
          <div className="absolute top-[78px] left-[24px]">
            <div className="relative leading-[27px]">Mileage</div>
            <b className="relative leading-[27px]">
              {latestRepair.vehicle.mileage.toLocaleString()}
            </b>
          </div>
          {/* Appointment Date */}
          <div className="absolute top-[156px] left-[24px]">
            <div className="relative leading-[27px]">Start Date</div>
            <b className="relative leading-[27px]">
              {latestRepair.startDate
                ? new Date(latestRepair.startDate).toLocaleDateString()
                : "Not set"}
            </b>
          </div>
          {/* Cost */}
          <div className="absolute top-[156px] right-[40px]">
            <div className="relative leading-[27px]">Repair Cost</div>
            <b className="relative leading-[27px]">
              ${latestRepair.cost.toFixed(2)}
            </b>
          </div>
          {/* See Detail Button */}
          <div className="absolute bottom-[24px] right-[24px]">
            <DefaultButton
              buttonText="See Detail"
              DefaultButtonPosition="sticky"
              DefaultButtonTop="unset"
              DefaultButtonRight="0px"
              DefaultButtonWidth="unset"
              DefaultButtonOverflow="hidden"
              DefaultButtonBackgroundColor="#fff"
              DefaultButtonBorder="0px solid #eaeef4"
              buttonColor="#092c4c"
              onClick={onDealContainerClick}
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          Loading latest repair...
        </div>
      )}
    </div>
  );
};

export default DashLatestRepair;
