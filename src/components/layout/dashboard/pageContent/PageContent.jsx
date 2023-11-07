import {
  useTotalEarnings,
  useTodayEarnings,
  useTotalRiders,
  useTotalTrips,
  useTotalDrivers,
  useTodayRiders,
  useTodayTrips,
  useTodayDrivers,
  useSmsBalance,
} from "../../../../api/getCardDetails";
import { ClipLoader } from "react-spinners";

function PageContent() {
  const { data: total_earnings, isLoading: totalEarningsLoading } =
    useTotalEarnings();
  const { data: today_earnings, isLoading: todayEarningsLoading } =
    useTodayEarnings();
  const { data: total_riders, isLoading: totalRidersLoading } =
    useTotalRiders();
  const { data: total_trips, isLoading: totalTripsLoading } = useTotalTrips();
  const { data: total_drivers, isLoading: totalDriversLoading } =
    useTotalDrivers();
  const { data: today_riders, isLoading: todayRidersLoading } =
    useTodayRiders();
  const { data: today_trips, isLoading: todayTripsLoading } = useTodayTrips();
  const { data: today_drivers, isLoading: todayDriversLoading } =
    useTodayDrivers();
  const { data: sms_balance, isLoading: smsBalanceLoading } = useSmsBalance();

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>

      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Total Earnings
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {totalEarningsLoading ? (
                      <ClipLoader color={"#36D7B7"} loading={true} size={15} />
                    ) : total_earnings && total_earnings !== undefined ? (
                      total_earnings
                    ) : (
                      0
                    )}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-dollar-sign fa-2x text-success"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Total Riders
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {totalRidersLoading ? (
                      <ClipLoader color={"#36D7B7"} loading={true} size={15} />
                    ) : total_riders && total_riders !== undefined ? (
                      total_riders
                    ) : (
                      0
                    )}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-user fa-2x text-success"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Total Drivers
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {totalDriversLoading ? (
                      <ClipLoader color={"#36D7B7"} loading={true} size={15} />
                    ) : total_drivers && total_drivers !== undefined ? (
                      total_drivers
                    ) : (
                      0
                    )}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-users-cog fa-2x text-success"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Total Trips
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {todayTripsLoading ? (
                      <ClipLoader color={"#36D7B7"} loading={true} size={15} />
                    ) : today_trips && today_trips !== undefined ? (
                      today_trips
                    ) : (
                      0
                    )}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-car-side fa-2x text-success"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Today Earnings
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {todayEarningsLoading ? (
                      <ClipLoader color={"#36D7B7"} loading={true} size={15} />
                    ) : today_earnings && today_earnings !== undefined ? (
                      today_earnings
                    ) : (
                      0
                    )}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-dollar-sign fa-2x text-success rotate-n-15"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Today Riders
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {todayRidersLoading ? (
                      <ClipLoader color={"#36D7B7"} loading={true} size={15} />
                    ) : today_riders && today_riders !== undefined ? (
                      today_riders
                    ) : (
                      0
                    )}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-users fa-2x text-success rotate-n-15"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Today Drivers
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {todayDriversLoading ? (
                      <ClipLoader color={"#36D7B7"} loading={true} size={15} />
                    ) : today_drivers && today_drivers !== undefined ? (
                      today_drivers
                    ) : (
                      0
                    )}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-users-cog fa-2x text-success rotate-n-15"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Today Trips
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {totalTripsLoading ? (
                      <ClipLoader color={"#36D7B7"} loading={true} size={15} />
                    ) : total_trips && total_trips !== undefined ? (
                      total_trips
                    ) : (
                      0
                    )}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-taxi fa-2x text-success rotate-n-15"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    SMS Balance
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {smsBalanceLoading ? (
                      <ClipLoader color={"#36D7B7"} loading={true} size={15} />
                    ) : sms_balance && sms_balance !== undefined ? (
                      sms_balance
                    ) : (
                      0
                    )}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-coins fa-2x text-success rotate-n-15"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageContent;
