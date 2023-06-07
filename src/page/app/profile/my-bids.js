import React, { useEffect, useState } from "react";
import { useLanguage } from "../../../context/language-context";
import content from "../../../localization/content";

import useAxios from "../../../hooks/use-axios";
import { Dimmer } from "semantic-ui-react";
import MyBidsTabs from "../../../components/profile-components/my-bids-tabs";
import TotalMyBids from "../../../components/profile-components/total-my-bids";
import routes from "../../../routes";
import { useHistory } from "react-router-dom";

import { ReactComponent as BidIcon } from "../../../../src/assets/icons/no-Bids-icon.svg";
import { authAxios } from "../../../config/axios-config";
import api from "../../../api";

const MyBids = () => {
  const [lang] = useLanguage();
  const selectedContent = content[lang];
  const history = useHistory();

  const [analyticsData, setAnalyticsData] = useState();
  const { run: runAlyticsData, isLoading: isLoadingAnalyticsData } = useAxios(
    []
  );
  useEffect(() => {
    runAlyticsData(
      authAxios.get(api.app.auctions.bidAnalytics).then((res) => {
        setAnalyticsData(res?.data?.data);
      })
    );
  }, [runAlyticsData]);

  //   IN_PROGRESS,
  //   PENDING_PAYMENT,
  //   WAITING_FOR_DELIVERY,
  //   PAYMENT_EXPIRED,
  //   LOST,
  //   COMPLETED;

  const analyticsDataObject = {};
  let totalCount = 0;
  analyticsData?.forEach((item) => {
    totalCount += item.count;
    if (!analyticsDataObject[item.status]) {
      analyticsDataObject[item.status] = { count: item.count };
    } else {
      analyticsDataObject[item.status].count += item.count;
    }
  });
  const allStatuses = [
    "IN_PROGRESS" || null,
    "PENDING_PAYMENT" || null,
    "WAITING_FOR_DELIVERY" || null,
    "PAYMENT_EXPIRED" || null,
    "LOST" || null,
    "COMPLETED" || null,
  ];
  allStatuses?.forEach((status) => {
    if (!analyticsDataObject[status]) {
      analyticsDataObject[status] = { count: 0 };
    }
  });
  analyticsDataObject.totalcount = totalCount;

  useEffect(() => {
    window.scrollTo({ top: 1, left: 0, behavior: "smooth" });
  }, []);

  console.log("====================================");
  console.log({ analyticsData, allStatuses });
  console.log("====================================");
  return (
    <div className="mx-4 sm:mx-0 sm:ltr:ml-4 sm:rtl:mr-4 relative animate-in  ">
      <Dimmer
        className="animate-pulse"
        active={isLoadingAnalyticsData}
        inverted
      >
        {/* <Loader active /> */}
      </Dimmer>
      {false ? (
        <div className="align-middle pt-52">
          <div>
            <BidIcon className="mx-auto" />
            <p className="text-gray-dark text-center mt-12 ">
              You are not bidding on any items.
            </p>
            <div className="flex justify-center mt-8">
              <button
                onClick={() => history.push(routes.app.home)}
                className="text-white text-sm font-normal bg-primary hover:bg-primary-dark rounded-lg px-6 h-8 "
              >
                Check active auctions to start bidding
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* DoughnutChart */}
          <TotalMyBids
            inProgressAuction={analyticsDataObject?.IN_PROGRESS?.count}
            pendingAuction={analyticsDataObject?.PENDING_PAYMENT?.count}
            completedAuction={analyticsDataObject?.COMPLETED?.count}
            expiredAuctions={
              analyticsDataObject?.PAYMENT_EXPIRED?.count +
              analyticsDataObject?.LOST?.count
            }
            waitingForDeliveryAuctions={
              analyticsDataObject?.WAITING_FOR_DELIVERY?.count
            }
            totalcount={analyticsDataObject?.totalcount}
          />
          <div className="mt-4">
            <MyBidsTabs />
          </div>
        </>
      )}
    </div>
  );
};

export default MyBids;
