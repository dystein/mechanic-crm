import { FunctionComponent, useState, useCallback } from "react";
import ScreenColumnsBG from "../components/ScreenColumnsBG";
import InfoAndFilters from "../components/InfoAndFilters";
import TableHeader from "../components/TableHeader";
import { useNavigate } from "react-router-dom";
import CustomerRowIgnore from "../components/CustomerRowIgnore";
import TypeDefaultStyleWhite from "../components/TypeDefaultStyleWhite";
import Base from "../components/Base";
import TypeRightIconStylePrimary from "../components/TypeRightIconStylePrimary";
import Sidebar from "../components/Sidebar";

const Customers: FunctionComponent = () => {
  const [isAddNewCustomerOpen, setAddNewCustomerOpen] = useState(false);
  const navigate = useNavigate();

  const onCustomerRowRepeatLinkClick = useCallback(() => {
    navigate("/customer-detail");
  }, [navigate]);

  const onButtonIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onButtonIcon1Click = useCallback(() => {
    navigate("/vehicles");
  }, [navigate]);

  const onLogoClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="w-full relative bg-grey-grey-10 h-[910px] text-left text-base text-primary-navy font-heading-h5-bold">
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
          <InfoAndFilters totalInfoRowCount="78" customers="customers" />
          <div className="self-stretch rounded-xl overflow-hidden flex flex-col items-start justify-start py-0 px-6">
            <TableHeader
              icon="/icon19.svg"
              name1="Name"
              deals="Deals"
              email="Email"
              phone="Phone"
              address="Address"
              dealsColumn={false}
            />
            <div
              className="self-stretch relative h-20 overflow-hidden shrink-0 cursor-pointer"
              onClick={onCustomerRowRepeatLinkClick}
            >
              <div className="absolute h-[calc(100%_-_1px)] w-full top-[0px] right-[0px] bottom-[1px] left-[0px] flex flex-row items-center justify-start py-0 pr-6 pl-3 box-border gap-[24px]">
                <div className="w-11 relative rounded-6xl bg-grey-grey-30 h-11 overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-81xl bg-grey-grey-30" />
                </div>
                <div className="flex-1 relative h-[30px] overflow-hidden">
                  <div className="absolute top-[calc(50%_-_14.5px)] left-[0px] overflow-hidden flex flex-row items-start justify-start gap-[5px]">
                    <div className="relative leading-[30px]">Deanna</div>
                    <div className="relative leading-[30px]">Annis</div>
                  </div>
                </div>
                <div className="w-[60px] relative h-[30px] overflow-hidden shrink-0 hidden">
                  <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px]">
                    1
                  </div>
                </div>
                <div className="flex-1 relative h-[30px] overflow-hidden">
                  <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px]">
                    deannannis@gmail.com
                  </div>
                </div>
                <div className="w-[140px] relative h-[30px] overflow-hidden shrink-0">
                  <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px]">
                    999-999-9999
                  </div>
                </div>
                <div className="flex-1 relative h-[30px] overflow-hidden">
                  <div className="absolute top-[calc(50%_-_14.5px)] left-[0px] h-[30px] overflow-hidden flex flex-row items-start justify-start gap-[5px]">
                    <div className="relative leading-[30px]">
                      475 Spruce Drive,
                    </div>
                    <div className="relative leading-[30px]">Pittsburgh,</div>
                    <div className="relative leading-[30px]">PA</div>
                    <div className="relative leading-[30px]">23592</div>
                  </div>
                </div>
                <img
                  className="w-[60px] relative rounded-3xs h-[60px] overflow-hidden shrink-0"
                  alt=""
                  src="/edit-cell1.svg"
                />
              </div>
              <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-grey-grey-30 h-px" />
            </div>
            <CustomerRowIgnore
              avatar="/avatar7@2x.png"
              firstName="George"
              lastName="Gamble"
              deals="4"
              email="goeorgegamble@gmail.com"
              street="2213 Thorn Street,"
              city="Glenrock,"
              state="WY"
              zipCode="12345"
            />
            <CustomerRowIgnore
              avatar="/avatar8@2x.png"
              firstName="Andrea"
              lastName="Willis"
              deals="1"
              email="andreawillis@gmail.com"
              street="1952 Chicago Avenue,"
              city="Fresno,"
              state="PA"
              zipCode="93711"
            />
            <CustomerRowIgnore
              avatar="/avatar8@2x.png"
              firstName="Andrea"
              lastName="Willis"
              deals="0"
              email="andreawillis@gmail.com"
              street="1952 Chicago Avenue,"
              city="Fresno,"
              state="PA"
              zipCode="93711"
            />
            <CustomerRowIgnore
              avatar="/avatar8@2x.png"
              firstName="Andrea"
              lastName="Willis"
              deals="1"
              email="andreawillis@gmail.com"
              street="1952 Chicago Avenue,"
              city="Fresno,"
              state="PA"
              zipCode="93711"
            />
            <CustomerRowIgnore
              avatar="/avatar8@2x.png"
              firstName="Andrea"
              lastName="Willis"
              deals="2"
              email="andreawillis@gmail.com"
              street="1952 Chicago Avenue,"
              city="Fresno,"
              state="PA"
              zipCode="93711"
            />
            <CustomerRowIgnore
              avatar="/avatar8@2x.png"
              firstName="Andrea"
              lastName="Willis"
              deals="2"
              email="andreawillis@gmail.com"
              street="1952 Chicago Avenue,"
              city="Fresno,"
              state="PA"
              zipCode="93711"
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
            Customers
          </b>
        </div>
        <div className="absolute top-[0px] right-[0px] bg-ghostwhite w-[417px] h-[90px] overflow-hidden">
          <img
            className="absolute top-[calc(50%_-_25px)] right-[94px] rounded-31xl w-[50px] h-[50px] overflow-hidden"
            alt=""
            src="/button.svg"
          />
          <TypeRightIconStylePrimary
            button="Add New Customer"
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

export default Customers;
