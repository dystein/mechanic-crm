import { FunctionComponent, useState, useCallback } from "react";
import ScreenColumnsBG from "../components/ScreenColumnsBG";
import TypeRightIconStylePrimary from "../components/TypeRightIconStylePrimary";
import { useNavigate } from "react-router-dom";
import TypeDefaultStyleWhite from "../components/TypeDefaultStyleWhite";
import Badge from "../components/Badge";
import Base from "../components/Base";

const Dashboard: FunctionComponent = () => {
  const [isAddNewOpen, setAddNewOpen] = useState(false);
  const navigate = useNavigate();

  const onViewAllTextClick = useCallback(() => {
    navigate("/vehicles");
  }, [navigate]);

  const onDealContainerClick = useCallback(() => {
    navigate("/vehicle-detail");
  }, [navigate]);

  const onDashboardCustomersCountClick = useCallback(() => {
    navigate("/customers");
  }, [navigate]);

  const onDashboardVehiclesCountClick = useCallback(() => {
    navigate("/vehicles");
  }, [navigate]);

  const onDealContainer2Click = useCallback(() => {
    navigate("/vehicle-detail");
  }, [navigate]);

  const onViewAllText2Click = useCallback(() => {
    navigate("/customers");
  }, [navigate]);

  const onButtonIcon1Click = useCallback(() => {
    navigate("/vehicles");
  }, [navigate]);

  const onButtonIcon2Click = useCallback(() => {
    navigate("/customers");
  }, [navigate]);

  return (
    <div className="w-[1366px] bg-grey-grey-10 max-w-full h-[910px] overflow-y-auto text-left text-5xl text-primary-navy font-heading-h5-bold">
      <div className="absolute w-[calc(100%_-_90px)] top-[90px] right-[0px] left-[90px] flex flex-col items-start justify-start">
        <div className="absolute w-[calc(100%_-_417px)] top-[0px] right-[417px] left-[0px] h-[820px]">
          <div className="absolute w-[calc(100%_-_48px)] top-[20px] right-[24px] left-[24px] flex flex-row items-start justify-start gap-[24px]">
            <div className="flex-1 rounded-xl bg-primary-white box-border h-[392px] flex flex-col items-start justify-start border-[1px] border-solid border-grey-grey-30">
              <div className="self-stretch relative h-[78px]">
                <b className="absolute top-[24px] left-[24px] leading-[30px]">
                  Recent Vehicles
                </b>
                <div
                  className="absolute top-[24px] right-[24px] text-sm leading-[30px] font-medium text-olive text-right cursor-pointer"
                  onClick={onViewAllTextClick}
                >
                  View All
                </div>
              </div>
              <div className="self-stretch h-[314px] overflow-y-auto shrink-0 flex flex-col items-start justify-start gap-[4px] text-base">
                <div className="self-stretch overflow-hidden shrink-0 flex flex-row items-start justify-start py-[9px] px-6">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="w-11 relative rounded-6xl h-11 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                        <b className="flex-1 relative leading-[27px]">
                          2011 Nissan Altima
                        </b>
                        <div className="self-stretch flex flex-row items-start justify-end text-sm">
                          <b className="relative leading-[27px]">$</b>
                          <b className="relative leading-[27px]">5750</b>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[12px] text-sm text-grey-grey-70">
                        <div className="flex-1 flex flex-row items-start justify-start">
                          <div className="relative leading-[27px]">WEI0302</div>
                          <div className="w-2.5 relative leading-[27px] inline-block shrink-0">{`, `}</div>
                          <div className="relative leading-[27px]">NY</div>
                          <div className="w-[42px] relative leading-[27px] hidden">
                            12345
                          </div>
                        </div>
                        <div className="relative leading-[27px] text-right">
                          Nov 15, 08:00 AM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden shrink-0 flex flex-row items-start justify-start py-[9px] px-6">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="w-11 relative rounded-6xl h-11 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/image1@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                        <b className="flex-1 relative leading-[27px]">
                          2001 Honda Civic
                        </b>
                        <div className="self-stretch flex flex-row items-start justify-end text-sm">
                          <b className="relative leading-[27px]">$</b>
                          <b className="relative leading-[27px]">5750</b>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[12px] text-sm text-grey-grey-70">
                        <div className="flex-1 flex flex-row items-start justify-start">
                          <div className="relative leading-[27px]">DPV3012</div>
                          <div className="w-2.5 relative leading-[27px] inline-block shrink-0">{`, `}</div>
                          <div className="relative leading-[27px]">NJ</div>
                          <div className="w-[42px] relative leading-[27px] hidden">
                            12345
                          </div>
                        </div>
                        <div className="relative leading-[27px] text-right">
                          Nov 16, 09:00 AM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden shrink-0 flex flex-row items-start justify-start py-[9px] px-6">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="w-11 relative rounded-6xl h-11 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/image2@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                        <b className="flex-1 relative leading-[27px]">
                          2019 Ford Fusion
                        </b>
                        <div className="self-stretch flex flex-row items-start justify-end text-sm">
                          <b className="relative leading-[27px]">$</b>
                          <b className="relative leading-[27px]">5750</b>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[12px] text-sm text-grey-grey-70">
                        <div className="flex-1 flex flex-row items-start justify-start">
                          <div className="relative leading-[27px]">3052350</div>
                          <div className="w-2.5 relative leading-[27px] inline-block shrink-0">{`, `}</div>
                          <div className="relative leading-[27px]">CA</div>
                          <div className="w-[42px] relative leading-[27px] hidden">
                            12345
                          </div>
                        </div>
                        <div className="relative leading-[27px] text-right">
                          Nov 17, 10:00 AM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[268px] relative rounded-xl bg-goldenrod-200 box-border h-[392px] text-sm text-primary-white border-[1px] border-solid border-grey-grey-30">
              <img
                className="absolute top-[210px] left-[69.1px] w-[300px] h-[300px] overflow-hidden"
                alt=""
                src="/frame-1.svg"
              />
              <div className="absolute top-[78px] left-[0px] w-[369.1px] h-[314px] overflow-hidden">
                <div className="absolute h-full w-[calc(100%_-_101.1px)] top-[0px] right-[101.1px] bottom-[0px] left-[0px] flex flex-col items-start justify-start">
                  <div
                    className="w-[268px] relative h-[314px] overflow-hidden shrink-0 cursor-pointer"
                    onClick={onDealContainerClick}
                  >
                    <div className="absolute top-[0px] left-[24px] w-[220px] flex flex-row items-center justify-start gap-[12px]">
                      <div className="w-11 relative rounded-6xl bg-primary-blue-light h-11 overflow-hidden shrink-0" />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start">
                          <b className="relative leading-[27px]">
                            2020 Mercedes-Benz
                          </b>
                        </div>
                        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start">
                          <div className="relative leading-[27px]">S550</div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[78px] left-[24px] w-[220px] flex flex-col items-start justify-start">
                      <div className="relative leading-[27px]">
                        Appointment Date
                      </div>
                      <b className="w-[220px] relative leading-[27px] inline-block h-[27px] shrink-0">
                        Nov 18 2021, 17:00
                      </b>
                    </div>
                    <div className="absolute top-[236px] left-[24px] w-[73px] flex flex-col items-start justify-start">
                      <div className="relative leading-[27px]">Price</div>
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <b className="relative leading-[27px]">$</b>
                        <b className="relative leading-[27px]">5750</b>
                      </div>
                    </div>
                    <div className="absolute top-[156px] right-[24px] w-[100px] h-[54px] flex flex-col items-start justify-start">
                      <div className="relative leading-[27px]">State</div>
                      <b className="self-stretch relative leading-[27px]">NJ</b>
                    </div>
                    <div className="absolute top-[156px] left-[24px] w-[103px] h-[54px] flex flex-col items-start justify-start">
                      <div className="relative leading-[27px]">Mileage</div>
                      <div className="self-stretch flex flex-row items-center justify-start">
                        <b className="w-[59px] relative leading-[27px] flex items-center shrink-0">
                          123,456
                        </b>
                      </div>
                    </div>
                    <TypeDefaultStyleWhite
                      buttonText="See Detail"
                      typeDefaultStyleWhitePosition="absolute"
                      typeDefaultStyleWhiteTop="238px"
                      typeDefaultStyleWhiteRight="24px"
                      typeDefaultStyleWhiteWidth="132px"
                      typeDefaultStyleWhiteOverflow="hidden"
                      typeDefaultStyleWhiteBottom="unset"
                      typeDefaultStyleWhiteLeft="unset"
                      typeDefaultStyleWhiteBackgroundColor="#fff"
                      typeDefaultStyleWhiteBorder="1px solid #eaeef4"
                      typeDefaultStyleWhiteFlex="unset"
                      buttonColor="#092c4c"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px] w-[369.1px] h-[78px] overflow-hidden text-lg">
                <div className="absolute top-[0px] left-[0px] w-[268px] h-[78px]">
                  <b className="absolute top-[24px] left-[24px] leading-[30px]">
                    Next Appointment
                  </b>
                  <div className="absolute top-[34px] right-[28px] rounded-3xs bg-primary-white w-2.5 h-2.5" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_48px)] top-[436px] right-[24px] left-[24px] flex flex-row items-start justify-start gap-[24px] text-grey-grey-70">
            <div className="w-[268px] h-[360px] flex flex-col items-start justify-start gap-[24px]">
              <div
                className="self-stretch relative rounded-xl bg-primary-white box-border h-[168px] cursor-pointer border-[1px] border-solid border-grey-grey-30"
                onClick={onDashboardCustomersCountClick}
              >
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden">
                  <div className="absolute top-[24px] left-[24px] leading-[30px] font-medium">
                    Customers
                  </div>
                  <div className="absolute top-[64px] left-[24px] text-29xl leading-[80px] font-semibold font-manrope text-primary-navy">
                    78
                  </div>
                  <img
                    className="absolute top-[44px] left-[164px] rounded-81xl w-20 h-20 overflow-hidden"
                    alt=""
                    src="/icon1.svg"
                  />
                </div>
              </div>
              <div
                className="self-stretch relative rounded-xl bg-primary-white box-border h-[168px] cursor-pointer border-[1px] border-solid border-grey-grey-30"
                onClick={onDashboardVehiclesCountClick}
              >
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden">
                  <div className="absolute top-[24px] left-[24px] leading-[30px] font-medium">
                    Vehicles
                  </div>
                  <div className="absolute top-[64px] left-[24px] text-29xl leading-[80px] font-semibold font-manrope text-primary-navy">
                    136
                  </div>
                  <img
                    className="absolute top-[44px] left-[164px] rounded-81xl w-20 h-20 overflow-hidden"
                    alt=""
                    src="/icon2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-primary-white box-border h-[360px] flex flex-col items-start justify-start text-sm border-[1px] border-solid border-grey-grey-30">
              <div
                className="self-stretch flex-1 flex flex-col items-start justify-start cursor-pointer"
                onClick={onDealContainer2Click}
              >
                <div className="self-stretch relative bg-primary-white h-[86px] overflow-hidden shrink-0">
                  <Badge
                    statusLabel="IN PROGRESS"
                    badgeBackgroundColor="#fffdc3"
                    badgePosition="absolute"
                    badgeTop="calc(50% - 20px)"
                    badgeRight="74px"
                    badgeWidth="unset"
                    badgeHeight="unset"
                    badgeColor="#825d00"
                    badgeTextTransform="uppercase"
                    badgeFontWeight="500"
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
                  <img
                    className="absolute top-[calc(50%_-_25px)] right-[24px] rounded-31xl w-[50px] h-[50px] overflow-hidden"
                    alt=""
                    src="/button1.svg"
                  />
                </div>
                <div className="self-stretch flex-1 relative">
                  <Base
                    baseWidth="1px"
                    basePosition="absolute"
                    baseRight="unset"
                    baseBottom="unset"
                    baseLeft="45px"
                    baseHeight="207px"
                    baseTop="31px"
                    baseAlignSelf="unset"
                  />
                  <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-y-auto flex flex-col items-start justify-start p-[18px] box-border gap-[18px]">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="w-[54px] relative h-[54px] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_16px)] rounded-81xl bg-primary-white box-border w-8 h-8 overflow-hidden border-[11px] border-solid border-goldenrod-100" />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="self-stretch relative leading-[27px]">
                            17 Nov 2021
                          </div>
                          <div className="self-stretch relative leading-[27px] font-medium text-primary-navy">
                            Installation of the new air conditioning system
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="w-[54px] relative h-[54px] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_16px)] rounded-81xl bg-primary-white box-border w-8 h-8 overflow-hidden border-[11px] border-solid border-goldenrod-100" />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="self-stretch relative leading-[27px]">
                            17 Nov 2021
                          </div>
                          <div className="self-stretch relative leading-[27px] font-medium text-primary-navy">
                            Installation of the new air conditioning system
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative bg-primary-white h-[46px] overflow-hidden shrink-0 text-center text-base text-olive">
                      <b className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_41.5px)] leading-[30px]">
                        Load More
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] right-[0px] bg-grey-grey-20 w-[417px] h-[820px]">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[316px] flex flex-col items-start justify-start">
            <div className="self-stretch relative h-[78px] overflow-hidden shrink-0">
              <b className="absolute top-[24px] left-[24px] leading-[30px]">
                Customers
              </b>
              <div
                className="absolute top-[24px] right-[24px] text-sm leading-[30px] font-medium text-olive text-right cursor-pointer"
                onClick={onViewAllText2Click}
              >
                View All
              </div>
            </div>
            <div className="self-stretch relative h-[238px] overflow-hidden shrink-0 text-base">
              <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-col items-start justify-start gap-[3px]">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[9px] pr-3.5 pl-6">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="w-11 relative rounded-6xl h-11 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
                        <b className="relative leading-[27px]">Andrea</b>
                        <b className="flex-1 relative leading-[27px]">Willis</b>
                      </div>
                      <div className="self-stretch relative text-sm leading-[27px] text-grey-grey-70">
                        andreawillis@gmail.com
                      </div>
                    </div>
                  </div>
                  <img
                    className="w-[50px] relative rounded-31xl h-[50px] overflow-hidden shrink-0"
                    alt=""
                    src="/edit.svg"
                  />
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[9px] pr-3.5 pl-6">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="w-11 relative rounded-6xl h-11 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar1@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
                        <b className="relative leading-[27px]">Brent</b>
                        <b className="flex-1 relative leading-[27px]">
                          Rodrigues
                        </b>
                      </div>
                      <div className="self-stretch relative text-sm leading-[27px] text-grey-grey-70">
                        brodrigues@gmail.com
                      </div>
                    </div>
                  </div>
                  <img
                    className="w-[50px] relative rounded-31xl h-[50px] overflow-hidden shrink-0"
                    alt=""
                    src="/edit.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[calc(100%_-_316px)] w-full top-[316px] right-[0px] bottom-[0px] left-[0px]">
            <div className="absolute h-[calc(100%_-_48px)] w-[calc(100%_-_48px)] top-[24px] right-[24px] bottom-[24px] left-[24px] rounded-xl bg-grey-grey-10 box-border overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-grey-grey-30">
              <div className="self-stretch relative bg-grey-grey-10 h-[78px] overflow-hidden shrink-0">
                <b className="absolute top-[24px] left-[24px] leading-[30px]">
                  Metrics
                </b>
                <div className="absolute top-[24px] right-[24px] text-sm leading-[30px] font-medium text-olive text-right">
                  View All
                </div>
              </div>
              <div className="self-stretch flex-1 relative overflow-y-auto text-3xl-2 text-base-shade-100">
                <img
                  className="absolute h-[39.68%] w-[43.36%] top-[48.94%] right-[5.15%] bottom-[11.38%] left-[51.49%] rounded-[18.47px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/bounds.svg"
                />
                <img
                  className="absolute h-[39.68%] w-[43.36%] top-[48.94%] right-[50.95%] bottom-[11.38%] left-[5.69%] rounded-[18.47px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/bounds.svg"
                />
                <img
                  className="absolute h-[39.68%] w-[43.36%] top-[4.76%] right-[50.14%] bottom-[55.56%] left-[6.5%] rounded-[18.47px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/bounds.svg"
                />
                <img
                  className="absolute h-[39.68%] w-[43.36%] top-[4.76%] right-[5.15%] bottom-[55.56%] left-[51.49%] rounded-[18.47px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/bounds.svg"
                />
                <div className="absolute top-[49px] left-[39px] w-[130.4px] h-[98.4px]">
                  <b className="absolute h-[25.41%] w-[97.39%] top-[33.54%] left-[4.6%] flex items-center">
                    $2,505
                  </b>
                  <div className="absolute h-[16.26%] top-[-5.49%] bottom-[89.23%] left-[6.5px] flex flex-row items-start justify-start text-smi-9 text-base-shade-70">
                    <div className="relative tracking-[-0.14px] font-medium">
                      Monthly Profit
                    </div>
                  </div>
                  <img
                    className="absolute h-[31.3%] w-[97.24%] top-[69.51%] right-[-2.07%] bottom-[-0.81%] left-[4.83%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/graph.svg"
                  />
                </div>
                <div className="absolute top-[49px] left-[205px] w-[130.4px] h-[98.4px]">
                  <b className="absolute h-[25.41%] w-[97.39%] top-[33.54%] left-[4.6%] flex items-center">
                    $35,037
                  </b>
                  <div className="absolute h-[16.26%] top-[-5.49%] bottom-[89.23%] left-[6.5px] flex flex-row items-start justify-start text-smi-9 text-base-shade-70">
                    <div className="relative tracking-[-0.14px] font-medium">
                      Monthly Revenue
                    </div>
                  </div>
                  <img
                    className="absolute h-[31.3%] w-[97.24%] top-[69.51%] right-[-2.07%] bottom-[-0.81%] left-[4.83%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/graph.svg"
                  />
                </div>
                <div className="absolute top-[214px] left-[36px] w-[130.4px] h-[98.4px]">
                  <b className="absolute h-[25.41%] w-[97.39%] top-[33.54%] left-[4.6%] flex items-center">
                    $32,532
                  </b>
                  <div className="absolute h-[16.26%] top-[-5.49%] bottom-[89.23%] left-[6.5px] flex flex-row items-start justify-start text-smi-9 text-base-shade-70">
                    <div className="relative tracking-[-0.14px] font-medium">
                      Monthly Expenses
                    </div>
                  </div>
                  <img
                    className="absolute h-[31.3%] w-[97.24%] top-[69.51%] right-[-2.07%] bottom-[-0.81%] left-[4.83%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/graph.svg"
                  />
                </div>
                <div className="absolute top-[214px] left-[205px] w-[130.4px] h-[98.4px]">
                  <b className="absolute h-[25.41%] w-[97.39%] top-[33.54%] left-[4.6%] flex items-center">
                    $735,037
                  </b>
                  <div className="absolute h-[16.26%] top-[-5.49%] bottom-[89.23%] left-[6.5px] flex flex-row items-start justify-start text-smi-9 text-base-shade-70">
                    <div className="relative tracking-[-0.14px] font-medium">
                      All Time Revenue
                    </div>
                  </div>
                  <img
                    className="absolute h-[31.3%] w-[97.24%] top-[69.51%] right-[-2.07%] bottom-[-0.81%] left-[4.83%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/graph.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute h-[calc(100%_-_90px)] top-[90px] bottom-[0px] left-[0px] bg-ghostwhite w-[90px]">
        <Base
          baseWidth="1px"
          basePosition="absolute"
          baseRight="0px"
          baseBottom="0px"
          baseLeft="unset"
          baseHeight="100%"
          baseTop="0px"
          baseAlignSelf="unset"
        />
        <div className="absolute top-[20px] left-[calc(50%_-_25px)] flex flex-col items-start justify-start gap-[16px]">
          <img
            className="w-[50px] relative rounded-31xl h-[50px] overflow-hidden shrink-0 cursor-pointer"
            alt=""
            src="/button-1.svg"
          />
          <img
            className="w-[50px] relative rounded-31xl h-[50px] overflow-hidden shrink-0 cursor-pointer"
            alt=""
            src="/button3.svg"
            onClick={onButtonIcon1Click}
          />
          <img
            className="w-[50px] relative rounded-31xl h-[50px] overflow-hidden shrink-0"
            alt=""
            src="/button4.svg"
            onClick={onButtonIcon2Click}
          />
          <img
            className="w-[50px] relative rounded-31xl h-[50px] overflow-hidden shrink-0"
            alt=""
            src="/button5.svg"
          />
          <img
            className="w-[50px] relative rounded-31xl h-[50px] overflow-hidden shrink-0"
            alt=""
            src="/button6.svg"
          />
          <div className="w-[50px] relative rounded-31xl bg-primary-white box-border h-[50px] overflow-hidden shrink-0 border-[1px] border-solid border-grey-grey-30">
            <img
              className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] w-5 h-5"
              alt=""
              src="/icon3.svg"
            />
            <div className="absolute top-[15px] left-[25px] w-2.5 h-2.5">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-primary-blue box-border border-[2px] border-solid border-primary-white" />
            </div>
          </div>
          <img
            className="w-[50px] relative rounded-31xl h-[50px] overflow-hidden shrink-0"
            alt=""
            src="/button7.svg"
          />
        </div>
      </div>
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
