import React, { useEffect, useState } from "react";

import api from "../../api";
import routes from "../../routes";
import useAxios from "../../hooks/use-axios";
import { useHistory } from "react-router-dom";
import { authAxios } from "../../config/axios-config";

import { Dimmer, Loader } from "semantic-ui-react";
import { DraftsItem } from "../../page/app/create-auction/create-auction";
import { ReactComponent as AuctionIcon } from "../../../src/assets/icons/Auction-Icon.svg";
import { useLanguage } from "../../context/language-context";
import content from "../../localization/content";
import localizationKeys from "../../localization/localization-keys";
import LodingTestAllatre from "../shared/lotties-file/loding-test-allatre";

const DraftsAuctions = () => {
  const [lang] = useLanguage("");
  const selectedContent = content[lang];
  const [draftAuctionData, setDraftAuctionData] = useState();

  const [forceReload, setForceReload] = useState(false);
  const onReload = React.useCallback(() => setForceReload((p) => !p), []);

  const history = useHistory();

  const { run, isLoading } = useAxios([]);

  useEffect(() => {
    run(
      authAxios.get(api.app.auctions.getAlldraft).then((res) => {
        setDraftAuctionData(res?.data?.data);
      })
    );
  }, [run, forceReload]);

  return (
    <div className="relative ">
      <Dimmer className="animate-pulse" active={isLoading} inverted>
        {/* <Loader active /> */}
        <LodingTestAllatre />
      </Dimmer>
      <div>
        <p className="pb-5 text-gray-med text-xs font-normal">
          {draftAuctionData?.length}{" "}
          {selectedContent[localizationKeys.totalDraft]}
        </p>
      </div>
      {draftAuctionData?.length === 0 ? (
        <div className="flex justify-center mt-32">
          <div>
            <AuctionIcon className="mx-auto" />
            <p className="text-primary-light text-center mt-8 ">
              {selectedContent[localizationKeys.opsDraft]}
              <br></br> {selectedContent[localizationKeys.youCanCreateOne]}
            </p>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => history.push(routes.app.createAuction.default)}
                className="text-white text-sm font-normal bg-primary rounded-lg w-32 h-8 "
              >
                {selectedContent[localizationKeys.createNow]}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 animate-in">
          {draftAuctionData?.map((e) => (
            <DraftsItem
              auctionId={e?.id}
              img={e && e?.product?.images[0]?.imageLink}
              itemName={e?.product?.title}
              date={e?.createdAt}
              onReload={onReload}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DraftsAuctions;
