import { FunctionComponent, useState, useCallback } from "react";
import ScreenColumnsBG from "../components/ScreenColumnsBG";
import InfoAndFilters from "../components/InfoAndFilters";
import TableHeader from "../components/TableHeader";
import Badge from "../components/Badge";
import DealRowIgnore from "../components/DealRowIgnore";
import TypeDefaultStyleWhite from "../components/TypeDefaultStyleWhite";
import Base from "../components/Base";
import { useNavigate } from "react-router-dom";
import TypeRightIconStylePrimary from "../components/TypeRightIconStylePrimary";
import Sidebar from "../components/Sidebar";

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
              <TypeDefaultStyleWhite
                buttonText="Load More"
                typeDefaultStyleWhitePosition="absolute"
                typeDefaultStyleWhiteTop="calc(50% - 25px)"
                typeDefaultStyleWhiteRight="unset"
                typeDefaultStyleWhiteWidth="130px"
                typeDefaultStyleWhiteOverflow="hidden"
                typeDefaultStyleWhiteBottom="unset"
                typeDefaultStyleWhiteLeft="calc(50% - 65px)"
                typeDefaultStyleWhiteBackgroundColor="#fff"
                typeDefaultStyleWhiteBorder="1px solid #eaeef4"
                typeDefaultStyleWhiteFlex="unset"
                buttonColor="#092c4c"
              />
            </div>
          </div>
        </div>
      </div>
      <div
          className="w-[1366px] bg-grey-grey-10 max-w-full h-[910px] overflow-y-auto text-left text-5xl text-primary-navy font-heading-h5-bold">
        <Sidebar/>
        <div
            className="absolute w-[calc(100%_-_90px)] top-[90px] right-[0px] left-[90px] flex flex-col items-start justify-start">
        </div>
      </div>
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[90px] text-5xl">
        <div
            className="absolute w-[calc(100%_-_507px)] top-[0px] right-[417px] left-[90px] bg-ghostwhite h-[90px] overflow-hidden">
          <b className="absolute top-[calc(50%_-_20px)] left-[24px] leading-[40px]">
            Vehicles
          </b>
        </div>
        <div className="absolute top-[0px] right-[0px] bg-ghostwhite w-[417px] h-[90px] overflow-hidden">
          <img
            className="absolute top-[calc(50%_-_25px)] right-[94px] rounded-31xl w-[50px] h-[50px] overflow-hidden"
            alt=""
            src="/button.svg"
          />
          <TypeRightIconStylePrimary
            button="Add New Deal"
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
          onClick={onLogoClick}
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

export default Vehicles;
