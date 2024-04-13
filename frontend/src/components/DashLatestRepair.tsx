import { useState, useEffect, useCallback } from 'react';
import DefaultButton from './DefaultButton';
import { useNavigate } from 'react-router-dom';

const DashLatestRepair = () => {
  const navigate = useNavigate();
  const [latestRepair, setLatestRepair] = useState(null);

  useEffect(() => {
    // Replace with your actual API endpoint
    const API_URL = 'https://mechanicshopcrm-fff7703161a3.herokuapp.com/repairs/latest';

    const fetchLatestRepair = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setLatestRepair(data);
      } catch (error) {
        console.error('Failed to fetch latest repair:', error);
      }
    };

    fetchLatestRepair();
  }, []);

  const onDealContainerClick = useCallback(() => {
    // Navigate to the detailed view of the latest repair
    navigate('/repair-detail/' + latestRepair?.id);
  }, [navigate, latestRepair]);

  if (!latestRepair) {
    return <div>Loading latest repair...</div>;
  }

  return (
    <div className="w-[268px] relative rounded-xl bg-goldenrod-200 box-border h-[392px] text-sm text-primary-white border-[1px] border-solid border-grey-grey-30">
      {/* ...rest of your component */}
      <div className="absolute top-[78px] left-[0px] w-[268px] h-[314px] overflow-hidden">
        {/* ... */}
        <div className="absolute top-[78px] left-[24px] w-[220px] flex flex-col items-start justify-start">
          <div className="relative leading-[27px]">Start Date</div>
          <b className="w-[220px] relative leading-[27px] inline-block h-[27px] shrink-0">
            {new Date(latestRepair.startDate).toLocaleString()}
          </b>
        </div>
        {/* ...other details */}
        <div className="absolute top-[236px] left-[24px] w-[73px] flex flex-col items-start justify-start">
          <div className="relative leading-[27px]">Price</div>
          <b className="relative leading-[27px]">$ {latestRepair.cost}</b>
        </div>
        {/* ... */}
        <DefaultButton
          buttonText="See Detail"
          // ...rest of the props
        />
      </div>
    </div>
  );
};

export default DashLatestRepair;
