import { FunctionComponent, useState, useEffect, useCallback } from "react";
import ScreenColumnsBG from "../components/ScreenColumnsBG";
import InfoAndFilters from "../components/InfoAndFilters";
import TableHeader from "../components/TableHeader";
import Badge from "../components/Badge";
import DealRowIgnore from "../components/DealRowIgnore";
import DefaultButton from "../components/DefaultButton";
import Base from "../components/Base";
import { useNavigate } from "react-router-dom";
import TypeRightIconStylePrimary from "../components/TypeRightIconStylePrimary";
import Sidebar from "../components/Sidebar";
import MainHeader from "../components/MainHeader";

const Vehicles: FunctionComponent = () => {
  const [isSelectCustomerOpen, setSelectCustomerOpen] = useState(false);
  const navigate = useNavigate();

  const onButtonIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onButtonIcon2Click = useCallback(() => {
    navigate("/customers");
  }, [navigate]);

  const onLogoClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  {/*
  const [vehiclesData, setVehiclesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/vehicles');
      const data = await response.json();
      setVehiclesData(data);
    };

    fetchData();
  }, []);
  */}

  return (
    <div className="w-full relative bg-grey-grey-10 h-[910px] overflow-y-auto text-left text-base text-primary-navy font-heading-h5-bold">
      <ScreenColumnsBG
        showRightArea={false}
        screenColumnsBGWidth="100%"
        screenColumnsBGHeight="100%"
        screenColumnsBGPosition="absolute"
        screenColumnsBGTop="0px"
        screenColumnsBGRight="0px"
        screenColumnsBGBottom="0px"
        screenColumnsBGLeft="0px"
        rightAreaOverflow="hidden"
      />
      <div className="absolute w-[calc(100%_-_90px)] top-[90px] right-[0px] left-[90px] flex flex-col items-start justify-start">
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start">
          <InfoAndFilters totalInfoRowCount="136" customers="vehicles" />
          <div className="self-stretch rounded-xl overflow-hidden flex flex-col items-start justify-start py-0 px-6">
            <TableHeader
              icon="/icon17.svg"
              name1="Year Make Model"
              deals="Mileage"
              email="Appointment Date"
              phone="Price"
              address="Status"
              dealsColumn
              propWidth="100px"
              propFlex="unset"
              propWidth1="200px"
              propTop="calc(50% - 15px)"
              propWidth2="120px"
              propFlex1="unset"
              propWidth3="120px"
            />
            {/* CALL TO MAP WITH DEAL ROW TO POPULATE VEHICLES PAGE
            {vehiclesData.map((vehicle) => (
                <VehicleRow
                    key={vehicle.id} //assuming you have a unique ID
                    //image={vehicle.image}
                    year={vehicle.year}
                    make={vehicle.make}
                    model={vehicle.model}
                    mileage={vehicle.mileage}
                    licensePlate={vehicle.licensePlate}
                    licensePlateState={vehicle.state}
                    appointmentDate={vehicle.appointmentDate}
                    price={vehicle.price}
                    status={vehicle.status}
                />
            ))} */}
            <div className="self-stretch relative h-20 overflow-hidden shrink-0">
              <div className="absolute h-[calc(100%_-_1px)] w-full top-[0px] right-[0px] bottom-[1px] left-[0px] flex flex-row items-center justify-start py-0 pr-6 pl-3 box-border gap-[24px]">
                <div className="w-11 relative rounded-6xl bg-grey-grey-50 h-11 overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-81xl bg-grey-grey-30" />
                </div>
                <div className="flex-1 relative h-[30px] overflow-hidden">
                  <div className="absolute top-[calc(50%_-_15px)] left-[0px] flex flex-row items-start justify-start gap-[5px]">
                    <div className="relative leading-[30px]">2020</div>
                    <div className="relative leading-[30px]">Mercedes-Benz</div>
                    <div className="relative leading-[30px]">S550</div>
                    <div className="relative leading-[30px]" />
                  </div>
                </div>
                <div className="w-[100px] relative h-[30px]">
                  <div className="absolute top-[calc(50%_-_15px)] left-[0px] w-[100px] h-[30px] flex flex-row items-center justify-start gap-[2px]">
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
                    Nov 14, 2021 07:00 AM
                  </div>
                </div>
                <div className="w-[120px] relative h-[30px] overflow-hidden shrink-0">
                  <div className="absolute top-[calc(50%_-_15px)] left-[0px] flex flex-row items-start justify-start">
                    <div className="relative leading-[30px]">$</div>
                    <div className="relative leading-[30px]">6000</div>
                  </div>
                </div>
                <Badge
                  statusLabel="IN PROGRESS"
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
              <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-grey-grey-30 h-px" />
            </div>
            <DealRowIgnore
              image="/image4@2x.png"
              street="2013"
              city="Nissan"
              state="Altima"
              appointmentDate="Nov 15, 2021 08:00 AM"
              progress="CLOSED"
            />
            <DealRowIgnore
              image="/image5@2x.png"
              street="2001"
              city="Honda"
              state="Civic"
              appointmentDate="Nov 16, 2021 09:00 AM"
              progress="IN PROGRESS"
              propWidth="unset"
              propFlex="unset"
              propFlex1="unset"
              propMinWidth="unset"
              propFlex2="unset"
              propMinWidth1="unset"
              propPadding="10px 20px"
              propMinWidth2="unset"
            />
            <DealRowIgnore
              image="/image6@2x.png"
              street="2014"
              city="Ford"
              state="Fusion"
              appointmentDate="Nov 17, 2021 10:00 AM"
              progress="CLOSED"
              propWidth="unset"
              propFlex="unset"
              propFlex1="unset"
              propMinWidth="unset"
              propFlex2="unset"
              propMinWidth1="unset"
              propPadding="10px 20px"
              propMinWidth2="unset"
            />
            <DealRowIgnore
              image="/image7@2x.png"
              street="2016"
              city="Lamborghini"
              state="Huracan"
              appointmentDate="Nov 20, 2021 07:00 AM"
              progress="IN PROGRESS"
              propWidth="unset"
              propFlex="unset"
              propFlex1="unset"
              propMinWidth="unset"
              propFlex2="unset"
              propMinWidth1="unset"
              propPadding="10px 20px"
              propMinWidth2="unset"
            />
            <DealRowIgnore
              image="/image6@2x.png"
              street="2024"
              city="BMW"
              state="330i"
              appointmentDate="Nov 17, 2021 10:00 AM"
              progress="CLOSED"
              propWidth="unset"
              propFlex="unset"
              propFlex1="unset"
              propMinWidth="unset"
              propFlex2="unset"
              propMinWidth1="unset"
              propPadding="10px 20px"
              propMinWidth2="unset"
            />
            <DealRowIgnore
              image="/image7@2x.png"
              street="2013"
              city="Toyota"
              state="Camry"
              appointmentDate="Nov 20, 2021 07:00 AM"
              progress="IN PROGRESS"
              propWidth="unset"
              propFlex="unset"
              propFlex1="unset"
              propMinWidth="unset"
              propFlex2="unset"
              propMinWidth1="unset"
              propPadding="10px 20px"
              propMinWidth2="unset"
            />
            <div className="self-stretch relative h-[100px] overflow-hidden shrink-0">
              <DefaultButton
                buttonText="Load More"
                DefaultButtonPosition="absolute"
                DefaultButtonTop="calc(50% - 25px)"
                DefaultButtonRight="unset"
                DefaultButtonWidth="130px"
                DefaultButtonOverflow="hidden"
                DefaultButtonBottom="unset"
                DefaultButtonLeft="calc(50% - 65px)"
                DefaultButtonBackgroundColor="#fff"
                DefaultButtonBorder="1px solid #eaeef4"
                DefaultButtonFlex="unset"
                buttonColor="#092c4c"
              />
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
      
      <MainHeader/>
    </div>
  );
};

export default Vehicles;
