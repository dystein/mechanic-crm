import { useCallback, useEffect, useState } from "react";
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

interface Repair {
  repairId: number;
  startDate: string | null;
  cost: number;
  status: string;
  vehicle: Vehicle;
}

const DashLatestRepair = () => {
  const navigate = useNavigate();
  const [latestRepair, setLatestRepair] = useState<Repair | null>(null);

  useEffect(() => {
    const fetchLatestRepair = async () => {
      const username = 'admin'; // Replace with the correct username
      const password = 'password'; // Replace with the correct password
      const basicAuth = `Basic ${btoa(`${username}:${password}`)}`;

      try {
        const response = await fetch('https://mechanicshopcrm-fff7703161a3.herokuapp.com/repairs/latest', {
          headers: {
            'Authorization': basicAuth,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setLatestRepair(data);
      } catch (error) {
        console.error("Fetching latest repair failed: ", error);
      }
    };

    fetchLatestRepair();
  }, []);

  const onDealContainerClick = useCallback(() => {
    if (latestRepair) {
      navigate(`/repair-detail/${latestRepair.repairId}`);
    }
  }, [navigate, latestRepair]);

  // Handle loading and error states as needed
  if (!latestRepair) {
    return <div>Loading latest repair...</div>;
  }

  return (
    <div className="w-[268px] relative rounded-xl bg-goldenrod-200 box-border h-[392px] text-sm text-primary-white border-[1px] border-solid border-grey-grey-30">
      <div className="absolute top-[0px] left-[0px] w-[268px] h-[78px] overflow-hidden text-lg">
        <div className="absolute top-[0px] left-[0px] w-[268px] h-[78px]">
          <b className="absolute top-[24px] left-[24px] leading-[30px]">Latest Repair</b>
          <div className="absolute top-[34px] right-[28px] rounded-3xs bg-primary-white w-2.5 h-2.5" />
        </div>
      </div>
      <div
        className="absolute top-[78px] left-[0px] w-[268px] h-[314px] overflow-hidden cursor-pointer"
        onClick={onDealContainerClick}
      >
        <div className="absolute top-[24px] left-[24px] leading-[27px]">
          <b>{latestRepair.vehicle.make} {latestRepair.vehicle.model}</b>
        </div>
        <div className="absolute top-[78px] left-[24px]">
          <div className="relative leading-[27px]">Start Date</div>
          <b className="relative leading-[27px]">
            {latestRepair.startDate ? new Date(latestRepair.startDate).toLocaleDateString() : 'Not set'}
          </b>
        </div>
        <div className="absolute top-[156px] left-[24px]">
          <div className="relative leading-[27px]">Mileage</div>
          <b className="relative leading-[27px]">{latestRepair.vehicle.mileage.toLocaleString()}</b>
        </div>
        <div className="absolute top-[156px] right-[24px]">
          <div className="relative leading-[27px]">State</div>
          <b className="relative leading-[27px]">{latestRepair.vehicle.state}</b>
        </div>
        <div className="absolute top-[236px] left-[24px]">
          <div className="relative leading-[27px]">Cost</div>
          <b className="relative leading-[27px]">${latestRepair.cost.toFixed(2)}</b>
        </div>
        <DefaultButton
          buttonText="See Detail"
          DefaultButtonPosition="absolute"
          DefaultButtonTop="238px"
          DefaultButtonRight="24px"
          DefaultButtonWidth="84px"
          DefaultButtonOverflow="hidden"
          DefaultButtonBackgroundColor="#fff"
          DefaultButtonBorder="1px solid #eaeef4"
          buttonColor="#092c4c"
        />
      </div>
    </div>
  );
};

export default DashLatestRepair;
