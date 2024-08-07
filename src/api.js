const api = {
  auth: {
    login: "/auth/sign-in",
    signup: "/auth/sign-up",
    aAuth: "auth/oAuth",
    forgetPassword: "/auth/forget-password",
    resendVerification: "/auth/resend-verification",
    resetCredentials: "/auth/reset-credentials",
    RefrshToken: "/auth/refresh-token",
  },
  app: {
    allHomecategory: {
      default: "/categories/home",
    },
    category: {
      default: "/categories/all",
    },
    subCategory: {
      default: (categoryId) =>
        `/categories/sub-categories?categoryId=${categoryId}`,
    },
    auctions: {
      default: "/auctions",
      setAssdraft: "/auctions/save-draft",
      setUpdatedraft: (auctionsId) => `auctions/user/${auctionsId}/details`,
      completeUpdatedraft: (auctionsId) =>
        `auctions/user/${auctionsId}/draft-details`,
      getAllOwnesAuctions: "auctions/user/ownes",
      getAlldraft: "auctions/user/ownes?status=DRAFTED",
      getAuctionsDetails: (auctionsId) => `/auctions/user/${auctionsId}`,
      getUserAuctionsDetails: (auctionsId) =>
        `/auctions/user/${auctionsId}/details`,
      delete: (auctionsId) => `/auctions/user/${auctionsId}`,
      getMain: "/auctions/user/main",
      getLiveAuctions: "auctions/user/live",
      getUpComming: "/auctions/user/up-comming",
      getBuyNow: "/auctions/user/buy-now",
      sponsored: "/auctions/user/sponsored",
      totalBids: (auctionsId) => `/auctions/user/${auctionsId}/total-bids`,
      totalBidsDetails: (auctionsId, userId) =>
        `/auctions/user/${auctionsId}/bids-history?userId=${userId}`,
      submitBid: (auctionsId) => `/auctions/user/${auctionsId}/submit-bid`,
      payForAuction: "/auctions/user/pay",
      PayDepositByBidder: (auctionsId) =>
        `/auctions/user/${auctionsId}/bidder-deposit`,
      auctionPurchaseByBidder: (auctionsId) =>
        `/auctions/user/${auctionsId}/bidder-purchase`,
      //
      getAllMyBids: "/auctions/user/joined-auctions",
      bidAnalytics: "auctions/user/joined-auctions/analytics",
      ConfirmDelivery: (auctionsId) =>
        `/auctions/user/${auctionsId}/confirm-delivery`,
      buyNow: (auctionsId) => `/auctions/user/${auctionsId}/buy-now`,
      SimilarAuctions: (auctionsId) =>
        `/auctions/user/similar?auctionId=${auctionsId}`,
    },
    Imagees: {
      upload: (auctionsId) => `auctions/user/${auctionsId}/upload-image`,
      delete: (auctionsId, imageId) =>
        `/auctions/user/${auctionsId}/remove-image?imageId=${imageId}`,
    },
    customField: {
      ByCategoryId: (categoryId) =>
        `/categories/custom-fields?categoryId=${categoryId}`,
      BySubCategoryId: (subCategoryId) =>
        `/categories/custom-fields?subCategoryId=${subCategoryId}`,
      systemField: `categories/system-fields`,
    },
    brand: {
      default: (categoryId) => `/categories/brands?categoryId=${categoryId}`,
      all: "/categories/brands",
    },
    location: {
      post: "/users/locations",
      get: "/users/my-locations",
      edit: (locationsId) => `/users/locations/${locationsId}/set-main`,
      delete: (locationsId) => `/users/locations/${locationsId}`,
    },
    countries: {
      default: "/regions/countries",
    },
    cities: {
      default: (countryId) => `/regions/cities?countryId=${countryId}`,
    },
    profile: {
      default: "users/my-profile",
      editPersonalInfo: "/users/personal-info",
      editCredentialsInfo: "/users/credentials-info",
      analytics: "/auctions/user/ownes/analytics",
      purchased: "/auctions/user/purchased-auctions",
    },
    WatchList: {
      get: "/watch-lists/saved",
      add: "/watch-lists/save",
      delete: (auctionsId) => `/watch-lists/un-save?auctionId=${auctionsId}`,
    },
  },
};

export default api;
