import { FunctionComponent, useCallback } from "react";
import DealRepeatLink from "./DealRepeatLink";
import DealIgnore from "./DealIgnore";
import DashboardCustomersCount from "./DashboardCustomersCount";
import Detail from "./Detail";
import FrameComponent1 from "./FrameComponent1";
import CustomerRepeatLink from "./CustomerRepeatLink";
import CustomerIgnored from "./CustomerIgnored";
import FrameComponent from "./FrameComponent";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  const onDashboardCustomersCountClick = useCallback(() => {
    // Please sync "Customers" to the project
  }, []);

  const onDashboardVehiclesCountClick = useCallback(() => {
    // Please sync "Vehicles" to the project
  }, []);

  const onButtonIcon2Click = useCallback(() => {
    // Please sync "Vehicles" to the project
  }, []);

  const onButtonIcon3Click = useCallback(() => {
    // Please sync "Customers" to the project
  }, []);

  const onViewAllTextClick = useCallback(() => {
    // Please sync "Vehicles" to the project
  }, []);

  const onDealContainerClick = useCallback(() => {
    // Please sync "Vehicle Detail" to the project
  }, []);

  const onDealContainer2Click = useCallback(() => {
    // Please sync "Vehicle Detail" to the project
  }, []);

  const onViewAllText1Click = useCallback(() => {
    // Please sync "Customers" to the project
  }, []);

  return (
    <div className={styles.dashboard}>
      <section className={styles.screenColumnsBgParent}>
        <div className={styles.screenColumnsBg}>
          <div className={styles.base} />
          <div className={styles.rightArea} />
        </div>
        <div className={styles.navigationBar}>
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
          <div className={styles.dashboardWrapper}>
            <h2 className={styles.dashboard1}>Dashboard</h2>
          </div>
          <div className={styles.rightBar}>
            <button className={styles.addNew}>
              <div className={styles.button}>Add New</div>
              <div className={styles.iconWrapper}>
                <img className={styles.icon} alt="" src="/icon.svg" />
              </div>
            </button>
            <div className={styles.buttonParent}>
              <img
                className={styles.buttonIcon}
                loading="lazy"
                alt=""
                src="/button.svg"
              />
              <img
                className={styles.userIcon}
                loading="lazy"
                alt=""
                src="/user@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.buttonGroup}>
              <img
                className={styles.buttonIcon1}
                loading="lazy"
                alt=""
                src="/button-1.svg"
              />
              <img
                className={styles.buttonIcon2}
                loading="lazy"
                alt=""
                src="/button-2.svg"
                onClick={onButtonIcon2Click}
              />
              <img
                className={styles.buttonIcon3}
                loading="lazy"
                alt=""
                src="/button-3.svg"
                onClick={onButtonIcon3Click}
              />
              <img
                className={styles.buttonIcon4}
                loading="lazy"
                alt=""
                src="/button-4.svg"
              />
              <img
                className={styles.buttonIcon5}
                loading="lazy"
                alt=""
                src="/button-5.svg"
              />
              <button className={styles.button1}>
                <img className={styles.icon1} alt="" src="/icon-1.svg" />
                <div className={styles.badge}>
                  <div className={styles.badge1} />
                </div>
              </button>
              <img
                className={styles.buttonIcon6}
                loading="lazy"
                alt=""
                src="/button-6.svg"
              />
            </div>
          </div>
          <div className={styles.baseWrapper}>
            <div className={styles.base1} />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.dashboardRecentDealsParent}>
                <div className={styles.dashboardRecentDeals}>
                  <div className={styles.dashboardRecentDealsInner}>
                    <div className={styles.recentVehiclesParent}>
                      <b className={styles.recentVehicles}>Recent Vehicles</b>
                      <div
                        className={styles.viewAll}
                        onClick={onViewAllTextClick}
                      >
                        View All
                      </div>
                    </div>
                  </div>
                  <div className={styles.dashboardRecentDealsView}>
                    <DealRepeatLink />
                    <DealIgnore
                      image="/image@2x.png"
                      street="2011 Nissan Altima"
                      city="WEI0302"
                      state="NY"
                      appointmentDate="Nov 15, 08:00 AM"
                    />
                    <DealIgnore
                      image="/image-1@2x.png"
                      street="2001 Honda Civic"
                      city="DPV3012"
                      state="NJ"
                      appointmentDate="Nov 16, 09:00 AM"
                      propMinWidth="109px"
                      propWidth="118px"
                      propMinWidth1="118px"
                    />
                    <DealIgnore
                      image="/image-2@2x.png"
                      street="2019 Ford Fusion"
                      city="3052350"
                      state="CA"
                      appointmentDate="Nov 17, 10:00 AM"
                      propMinWidth="105px"
                      propWidth="114px"
                      propMinWidth1="114px"
                    />
                  </div>
                </div>
                <div className={styles.dashboardNextAppointment}>
                  <img
                    className={styles.frameIcon1}
                    alt=""
                    src="/frame-1.svg"
                  />
                  <div className={styles.dashboardNextAppointmentInner}>
                    <div className={styles.nextAppointmentParent}>
                      <b className={styles.nextAppointment}>Next Appointment</b>
                      <div className={styles.badgeWrapper}>
                        <div className={styles.badge2} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.deal} onClick={onDealContainerClick}>
                    <div className={styles.pathProcessor}>
                      <div className={styles.imageWrapper}>
                        <div className={styles.image} />
                      </div>
                      <div className={styles.dropdownMenu}>
                        <b className={styles.street}>2020 Mercedes-Benz</b>
                        <div className={styles.city}>S550</div>
                      </div>
                    </div>
                    <div className={styles.labelParent}>
                      <div className={styles.label}>Appointment Date</div>
                      <b className={styles.appointmentDate}>
                        Nov 18 2021, 17:00
                      </b>
                    </div>
                    <div className={styles.frameDiv}>
                      <div className={styles.labelGroup}>
                        <div className={styles.label1}>Mileage</div>
                        <b className={styles.roomArea}>123,456</b>
                      </div>
                      <div className={styles.labelContainer}>
                        <div className={styles.label2}>State</div>
                        <b className={styles.ofPeople}>NJ</b>
                      </div>
                    </div>
                    <div className={styles.frameParent1}>
                      <div className={styles.labelParent1}>
                        <div className={styles.label3}>Price</div>
                        <div className={styles.unitParent}>
                          <b className={styles.unit}>$</b>
                          <b className={styles.price}>5750</b>
                        </div>
                      </div>
                      <div className={styles.buttonWrapper}>
                        <button className={styles.button2}>
                          <div className={styles.button3}>See Detail</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.sliderController}>
                <div className={styles.progressBar}>
                  <DashboardCustomersCount
                    customers="Customers"
                    customersCount="78"
                    icon="/icon-2.svg"
                    onDashboardCustomersCountClick={
                      onDashboardCustomersCountClick
                    }
                  />
                  <DashboardCustomersCount
                    customers="Vehicles"
                    customersCount="136"
                    icon="/icon-3.svg"
                    propMinWidth="73px"
                    propMinWidth1="78px"
                    onDashboardCustomersCountClick={
                      onDashboardVehiclesCountClick
                    }
                  />
                </div>
                <div className={styles.dashboardVehicleProgressVi}>
                  <div className={styles.deal1} onClick={onDealContainer2Click}>
                    <div className={styles.progressDeal}>
                      <div className={styles.progressDealInner}>
                        <div className={styles.detailParent}>
                          <Detail />
                          <div className={styles.dataHubWrapper}>
                            <div className={styles.dataHub}>
                              <div className={styles.filterTree}>
                                <button className={styles.progress}>
                                  <div className={styles.progress1}>
                                    IN PROGRESS
                                  </div>
                                </button>
                              </div>
                              <img
                                className={styles.buttonIcon7}
                                loading="lazy"
                                alt=""
                                src="/button-7.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.base2} />
                    </div>
                    <FrameComponent1 />
                    <div className={styles.dealInner}>
                      <div className={styles.baseParent}>
                        <div className={styles.base3} />
                        <div className={styles.activityIgnore}>
                          <div className={styles.icon2}>
                            <div className={styles.icon3} />
                          </div>
                          <div className={styles.activity}>
                            <div className={styles.content}>
                              <div className={styles.dateTime}>17 Nov 2021</div>
                              <div className={styles.notes}>
                                Installation of the new air conditioning system
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.orCondition}>
                      <button className={styles.loadMore}>
                        <b className={styles.loadMore1}>Load More</b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightArea1}>
            <div className={styles.frameParent2}>
              <div className={styles.ifStatementWrapper}>
                <div className={styles.ifStatement}>
                  <b className={styles.customers}>Customers</b>
                  <div
                    className={styles.viewAll1}
                    onClick={onViewAllText1Click}
                  >
                    View All
                  </div>
                </div>
              </div>
              <div className={styles.customerList}>
                <CustomerRepeatLink />
                <CustomerIgnored
                  avatar="/avatar@2x.png"
                  firstName="Andrea"
                  lastName="Willis"
                  email="andreawillis@gmail.com"
                />
                <CustomerIgnored
                  avatar="/avatar-1@2x.png"
                  firstName="Brent"
                  lastName="Rodrigues"
                  email="brodrigues@gmail.com"
                  propMinWidth="43px"
                />
              </div>
            </div>
            <div className={styles.trigonometricFunction}>
              <div className={styles.tasks}>
                <div className={styles.title}>
                  <b className={styles.metrics}>Metrics</b>
                  <div className={styles.viewAll2}>View All</div>
                </div>
                <div className={styles.tasksInner}>
                  <div className={styles.frameParent3}>
                    <FrameComponent
                      primaryTitle="Monthly Profit"
                      metric="$2,505"
                      graph="/graph.svg"
                    />
                    <FrameComponent
                      primaryTitle="Monthly Revenue"
                      metric="$35,037"
                      graph="/graph-1.svg"
                      propPadding="25.59999999999991px 11.900000000000006px 19.799999999999955px var(--padding-2xl)"
                      propMinWidth="106px"
                    />
                  </div>
                </div>
                <div className={styles.tasksChild}>
                  <div className={styles.frameParent4}>
                    <FrameComponent
                      primaryTitle="Monthly Expenses"
                      metric="$32,532"
                      graph="/graph-1.svg"
                      propPadding="23.59999999999991px 11.899999999999991px 21.799999999999955px var(--padding-2xl)"
                      propMinWidth="112px"
                    />
                    <FrameComponent
                      primaryTitle="All Time Revenue"
                      metric="$735,037"
                      graph="/graph.svg"
                      propPadding="23.59999999999991px 11.900000000000006px 21.799999999999955px var(--padding-2xl)"
                      propMinWidth="105px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
