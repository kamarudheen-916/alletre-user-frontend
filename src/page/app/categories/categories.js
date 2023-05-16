import React, { useEffect, useRef, useState } from "react";
import useAxios from "../../../hooks/use-axios";
import { authAxios, axios } from "../../../config/axios-config";
import api from "../../../api";
import { useAuthState } from "../../../context/auth-context";
import { useLocation, useParams } from "react-router-dom";
import FilterSections from "../../../components/home-components/filter-sections";
import AuctionCard from "../../../components/home-components/auction-card";
import Category from "../../../components/shared/slider-categories/Category";
import useGetSubGatogry from "../../../hooks/use-get-sub-category";
import SubCategorySlider from "../../../components/shared/slider-categories/sub-category-slider";
import PaginationApp from "../../../components/shared/pagination/pagination-app";
import { Dimmer, Loader } from "semantic-ui-react";

const Categories = () => {
  const { user } = useAuthState();
  const { search } = useLocation();
  const { categoryId } = useParams();
  const myRef = useRef();

  const { SubGatogryOptions, loadingSubGatogry } = useGetSubGatogry(categoryId);

  const [mainAuctions, setMainAuctions] = useState();
  const [totalPages, setTotalPages] = useState();
  const { run: runCategories, isLoading: isLoadingCategories } = useAxios([]);

  useEffect(() => {
    if (!user) {
      runCategories(
        axios.get(`${api.app.auctions.getMain}${search}`).then((res) => {
          setMainAuctions(res?.data?.data);
          setTotalPages(res?.data?.pagination?.totalPages);
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        })
      );
    }
    runCategories(
      authAxios.get(`${api.app.auctions.getMain}${search}`).then((res) => {
        setMainAuctions(res?.data?.data);
        setTotalPages(res?.data?.pagination?.totalPages);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      })
    );
  }, [categoryId, runCategories, search, user]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto mt-36">
      <Dimmer
        className="animate-pulse fixed w-full h-full top-0"
        active={loadingSubGatogry || isLoadingCategories}
        inverted
      >
        <Loader active />
      </Dimmer>
      <div>
        <img
          className="w-full h-[317px] object-cover pb-4"
          src="https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/45527/article_full%401x.jpg"
          alt=""
        />
      </div>
      <div className={SubGatogryOptions.length === 0 ? "hidden" : "h-[238px]"}>
        <SubCategorySlider SubGatogryOptions={SubGatogryOptions} />
      </div>
      <h6 className="max-w-[1440px] mx-auto pb-4 pt-2 text-gray-med text-base font-normal">
        {mainAuctions?.length} Results
      </h6>
      <div className="flex gap-3 max-w-[1440px] lg:mx-auto md:mx-12">
        {/* left filter sections */}
        <FilterSections myRef={myRef} categoryId={categoryId} hiddenGatogry />
        {/* right card sections */}
        <div className="lg:grid lg:grid-cols-4 md:flex lg:flex-nowrap md:flex-wrap gap-5 h-fit mx-auto">
          {mainAuctions?.map((e) => (
            <AuctionCard
              auctionId={e?.id}
              price={e?.acceptedAmount || e?.startBidAmount}
              title={e?.product?.title}
              status={e?.status}
              adsImg={e?.product?.images[0].imageLink}
              totalBods={15}
              WatshlistState={e?.isSaved}
              endingTime={e?.expiryDate}
              isBuyNowAllowed={e?.isBuyNowAllowed}
              isMyAuction={e?.isMyAuction}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-7 pb-12 max-w-[1440px] mx-auto">
        <PaginationApp totalPages={totalPages} perPage={40} myRef={myRef} />
      </div>
    </div>
  );
};

export default Categories;
