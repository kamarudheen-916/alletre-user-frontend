import React from "react";

import routes from "../../routes";
import { Tab } from "semantic-ui-react";
import useTab from "../../hooks/use-tab";

import WatingForDeliveryBids from "./wating-for-delivery-bids";
import InProgressBids from "./in-progress-bids";
import CompletedBids from "./completed-bids";
import PendingBids from "./pending-bids";
import ExpiredBids from "./expired-bids";

import { useLanguage } from "../../context/language-context";
import content from "../../localization/content";
import localizationKeys from "../../localization/localization-keys";

const MyBidsTabs = () => {
  const [lang] = useLanguage("");
  const selectedContent = content[lang];

  const panes = [
    {
      menuItem: `In progress`,
      route: routes.app.profile.myBids.inPogress,
      render: () => (
        <div>
          <Tab.Pane className="border-none w-full h-full bg-backgroundGray dark:bg-darkMood-backgroundBlack animate-in">
            <InProgressBids />
          </Tab.Pane>
        </div>
      ),
    },
    {
      menuItem: `Pending`,
      route: routes.app.profile.myBids.pending,
      render: () => (
        <div>
          <Tab.Pane className="border-none w-full h-full bg-backgroundGray dark:bg-darkMood-backgroundBlack animate-in">
            <PendingBids />
          </Tab.Pane>
        </div>
      ),
    },
    {
      menuItem: `Waiting for delivery`,
      route: routes.app.profile.myBids.waitingForDelivery,
      render: () => (
        <div>
          <Tab.Pane className="border-none w-full h-full bg-backgroundGray dark:bg-darkMood-backgroundBlack animate-in">
            <WatingForDeliveryBids />
          </Tab.Pane>
        </div>
      ),
    },
    {
      menuItem: `Expired`,
      route: routes.app.profile.myBids.expired,
      render: () => (
        <div>
          <Tab.Pane className="border-none w-full h-full bg-backgroundGray dark:bg-darkMood-backgroundBlack animate-in">
            <ExpiredBids />
          </Tab.Pane>
        </div>
      ),
    },
    {
      menuItem: `Completed`,
      route: routes.app.profile.myBids.completed,
      render: () => (
        <div>
          <Tab.Pane className="border-none w-full h-full bg-backgroundGray dark:bg-darkMood-backgroundBlack animate-in">
            <CompletedBids />
          </Tab.Pane>
        </div>
      ),
    },
  ];
  const { activeIndex, onTabChange } = useTab({ panes });

  return (
    <div className="">
      <div className="h-auto edit-For-my-auctions-tabs  animate-in ">
        <Tab
          menu={{
            secondary: true,
            pointing: true,
            className: "flex overflow-x-scroll scrollbar-hide",
          }}
          activeIndex={activeIndex}
          onTabChange={onTabChange}
          panes={panes}
        />
      </div>
    </div>
  );
};

export default MyBidsTabs;