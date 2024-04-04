import { FunctionComponent, useState, useCallback } from "react";
import ScreenColumnsBG from "../components/ScreenColumnsBG";
import InfoAndFilters from "../components/InfoAndFilters";
import TableHeader from "../components/TableHeader";
import { useNavigate } from "react-router-dom";
import CustomerRowIgnore from "../components/CustomerRowIgnore";
import DefaultButton from "../components/DefaultButton";
import Base from "../components/Base";
import TypeRightIconStylePrimary from "../components/TypeRightIconStylePrimary";
import Sidebar from "../components/Sidebar";
import MainHeader from "../components/MainHeader";

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

  {/*
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/customers');
      const data = await response.json();
      setVehiclesData(data);
    };

    fetchData();
  }, []);
  */}

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
              {/* CALL TO MAP WITH DEAL ROW TO POPULATE VEHICLES PAGE
              {customersData.map((customer) => (
                <CustomerRow
                    customerID={customer.id} //assuming you have a unique ID
                    //avatar={customer.image}
                    firstName={customer.firstName}
                    lastName={customer.lastName}
                    phone={customer.phone}
                    email={customer.email}
                    street={customer.address.split(',')[0].trim()}
                    city={customer.address.split(',')[1].trim()}
                    state={customer.address.split(',')[2].trim()}
                    zipCode={customer.address.split(',')[3].trim()}
                />
               ))} */}
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

export default Customers;
