import localizationKeys from "./localization-keys";

const en = {
  // auth
  [localizationKeys.login]: "Login",
  [localizationKeys.signup]: "Sign up",
  [localizationKeys.loginWithApple]: "Login With Apple",
  [localizationKeys.loginwithGoogle]: "Login With Google",
  [localizationKeys.loginwithFacebook]: "Login With Facebook",
  [localizationKeys.signupwithApple]: "Sign up With Apple",
  [localizationKeys.signupwithGoogle]: "Sign up With Google",
  [localizationKeys.signupwithFacebook]: "Sign up With Facebook",
  [localizationKeys.rememberPassword]: "Remember Password",
  [localizationKeys.forgetPassword]: "Forget Password",
  [localizationKeys.somethingWentWrongPleaseTryAgainLater]:
    "Something went wrong, please try again later",
  [localizationKeys.name]: "Name",
  [localizationKeys.email]: "E-mail",
  [localizationKeys.phone]: "Phone",
  [localizationKeys.password]: "Password",
  [localizationKeys.iAgreetotheTermsConditions]:
    "I agree to the Terms & Conditions",
  [localizationKeys.createAccount]: "Create Account",
  [localizationKeys.aVerificationMailHasBeenSent]:
    "A verification mail has been sent to your mail please check it....",
  [localizationKeys.thePasswordHasBeenSuccessfullyChanged]:
    "The password has been successfully changed.",
  [localizationKeys.backToHome]: "Back to Home",
  [localizationKeys.resetPassword]: "Reset Password",
  [localizationKeys.newPassword]: "New Password",
  [localizationKeys.reEnterPassword]: "Re-Enter Password",
  [localizationKeys.theEmailAddressForThisAccountHasNotYetBeenVerified]:
    "The email address for this account has not yet been verified. Please check your inbox. If you cannot find this email,",
  [localizationKeys.resendMailAgain]: "Resend mail again",
  [localizationKeys.or]: "OR",
  [localizationKeys.backToLogin]: "Back to Login",
  [localizationKeys.sentVerification]: "send verification",
  // home
  [localizationKeys.myBids]: "My Bids",
  [localizationKeys.categories]: "Categories",
  [localizationKeys.watchlist]: "Watchlist",
  [localizationKeys.faqs]: "FAQs",
  [localizationKeys.support]: "Support",
  [localizationKeys.arabic]: "Arabic",
  [localizationKeys.english]: "English",
  [localizationKeys.sellNow]: "Sell Now",
  [localizationKeys.search]: "Search...",
  [localizationKeys.registerNow]: "Register Now",
  [localizationKeys.profile]: "Profile",
  [localizationKeys.viewDetails]: "View Details",
  [localizationKeys.bidNow]: "Bid Now",
  [localizationKeys.popularCategories]: "Popular Categories",
  [localizationKeys.results]: "Results",
  [localizationKeys.seeAll]: "See all",
  [localizationKeys.brand]: "Brand",
  [localizationKeys.sellingType]: "Selling Type",
  [localizationKeys.auction]: "Auction",
  [localizationKeys.buyNow]: "Buy Now",
  [localizationKeys.auctionState]: "Auction State",
  [localizationKeys.comingSoon]: "Coming Soon",
  [localizationKeys.liveAuction]: "Live Auction",
  [localizationKeys.location]: "Location",
  [localizationKeys.condition]: "Condition",
  [localizationKeys.new]: "New",
  [localizationKeys.used]: "Used",
  [localizationKeys.openBox]: "Open Box",
  [localizationKeys.price]: "Price",
  [localizationKeys.createAuctionNow]: "Create Auction Now",
  [localizationKeys.weAreAlwaysHereToHelpYou]:
    "We're Always Here To Help You...",
  [localizationKeys.subscribeNowToGetNewOffersAndUpdates]:
    "Subscribe Now to Get new offers and updates",
  [localizationKeys.writeYourMail]: "Write Your Mail...",
  [localizationKeys.subscribe]: "Subscribe",
  [localizationKeys.sellingOnAllatre]: "Selling on Allatre",
  [localizationKeys.sellerCenter]: "Seller Center",
  [localizationKeys.sellForCharity]: "Sell for charity",
  [localizationKeys.businessTools]: "Business tools",
  [localizationKeys.createAuction]: "Create Auction",
  [localizationKeys.myAccount]: "My Account",
  [localizationKeys.iamBiddingOn]: "I'm Bidding On",
  [localizationKeys.iHaveBought]: "I've Bought",
  [localizationKeys.bidsIHaveReceived]: "Bids I've Received",
  [localizationKeys.iHaveSold]: "I've Sold",
  [localizationKeys.allRightsReserved]: "All rights reserved.",
  [localizationKeys.upComingAuctions]: "Up-coming Auctions",
  [localizationKeys.totalBids]: "Total Bids",
  [localizationKeys.bid]: "Bid",
  [localizationKeys.endingTime]: "Ending Time",
  [localizationKeys.days]: "days",
  [localizationKeys.hrs]: "hrs",
  [localizationKeys.min]: "min",
  // status
  [localizationKeys.activeNow]: "Active Now",
  [localizationKeys.Scheduled]: "  Scheduled",
  [localizationKeys.sold]: "Sold",
  [localizationKeys.pending]: "Pending",
  [localizationKeys.expired]: "Expired",
  // Breadcrumb
  [localizationKeys.home]: "Home",
  [localizationKeys.productDetails]: "product Details",
  [localizationKeys.auctionDetails]: "Auction Details",
  [localizationKeys.shippingDetails]: "Shipping Details",
  [localizationKeys.paymentDetails]: "Payment Details",
  [localizationKeys.myAuctions]: "My Auctions",
  [localizationKeys.activeAuctions]: "Active Auctions",
  [localizationKeys.scheduledAuctions]: "Scheduled Auctions",
  [localizationKeys.soldAuctions]: "Sold Auctions",
  [localizationKeys.pendingAuctions]: "Pending Auctions",
  [localizationKeys.expiredAuctions]: "Expired Auctions",
  // create auctions
  [localizationKeys.drafts]: "Drafts",
  [localizationKeys.proceed]: "Proceed",
  [localizationKeys.successDelete]:
    "Your auction has been deleted for you from drafting successfully",
  [localizationKeys.errorDelete]:
    "oops, sorry something with wrong please make sure everything is correct and try again",
  [localizationKeys.areYouSureYouWantToDeleteThisDraft]:
    "Are you sure you want to delete this draft",
  [localizationKeys.cancel]: "Cancel",
  [localizationKeys.yesDelete]: "Yes,delete",
  [localizationKeys.locationIsRequired]: "Location is required",
  [localizationKeys.inOrderToFinishTheProcedureWeHaveToGetAccessTo]:
    "In order to finish the procedure, we have to get access to",
  [localizationKeys.yourLocationYouCanManageThemLater]:
    "your location. you can manage them later .",
  [localizationKeys.manageYouAddresses]: "Manage you addresses",
  [localizationKeys.country]: "Country",
  [localizationKeys.city]: "City",
  [localizationKeys.address]: "Address",
  [localizationKeys.addressLabel]: "Address Label",
  [localizationKeys.zipCode]: "Postal code",
  [localizationKeys.successAddLocatons]: "locaton add success",
  [localizationKeys.add]: "Add",
  [localizationKeys.selectCountry]: "Select Country",
  [localizationKeys.selectCity]: "Select City",
  [localizationKeys.wirteYourAddress]: "Wirte your address",
  [localizationKeys.exHome]: "ex: Home",
  [localizationKeys.enterPostalZipCode]: "Enter postal/Zip code",
  // product details
  [localizationKeys.itemDetails]: "Item Details",
  [localizationKeys.itemName]: "Item Name",
  [localizationKeys.category]: "Category",
  [localizationKeys.subCategory]: "Sub Category",
  [localizationKeys.itemDescription]: "Item Description",
  [localizationKeys.writeItemDescription]: "Write Item Description....",
  [localizationKeys.addMedia]: "Add Media",
  [localizationKeys.from3upto5photos]: "( from 3 up to 5 photos )",
  [localizationKeys.itemCondition]: "Item Condition",
  [localizationKeys.saveAsDraft]: "Save As Draft",
  [localizationKeys.next]: "Next",
  // auction details
  [localizationKeys.quickAuction]: "Quick Auction",
  [localizationKeys.maximumDurationMustBeDay]: "Maximum duration must be day",
  [localizationKeys.longAuction]: "Long Auction",
  [localizationKeys.durationMoreThanOneDayFromStartingDate]:
    "Duration more than one day from starting date",
  [localizationKeys.longAuction]: "Long Auction",
  [localizationKeys.Hrs]: "Hrs.",
  [localizationKeys.Hrs]: "Hrs.",
  [localizationKeys.auctionDuration]: "Auction Duration",
  [localizationKeys.scheduleBid]: "Schedule Bid",
  [localizationKeys.optional]: "(Optional)",
  [localizationKeys.unlessStartTimeAndDateAreChosenYourListingBecomesActiveImmediately]:
    "Unless a start time and date are chosen, your listing becomes active immediately.",
  [localizationKeys.startDate]: "Start Date",
  [localizationKeys.time]: "Time",
  [localizationKeys.pricing]: "Pricing",
  [localizationKeys.minimumPrice]: "Minimum Price",
  [localizationKeys.purchasingPrice]: "Purchasing Price",
  [localizationKeys.minimum30MoreThanStartingBid]:
    "Minimum: 30% more than starting bid",
  [localizationKeys.purchasingPriceMustBeMoreThanOrEqual30OfMinimumPrice]:
    "Purchasing price must be more than or equal 30% of minimum price",
  // shiping details
  [localizationKeys.locationDetails]: "Location Details",
  [localizationKeys.addAddress]: "Add Address",
  // profile
  [localizationKeys.online]: "Online",
  [localizationKeys.logout]: "Logout",
  [localizationKeys.profileSettings]: "Profile Settings",
  [localizationKeys.completeYourProfileToMakeYourActionsEasier]:
    "Complete your profile to make your actions easier",
  [localizationKeys.completeNowMasg]:
    "Your account currently offers access to updates, saved items, sale  details, and other features. To bid, buy and sell with Alle-tre,   kindly take a moment to fill out your profile information.",
  [localizationKeys.completeNow]: " Complete Now",
  [localizationKeys.editPhoto]: "Edit Photo",
  [localizationKeys.uploadPhoto]: "Upload Photo",
  [localizationKeys.dropYourPhotoHereToInstantlyUploadIt]:
    " Drop your photo here to instantly upload it",
  [localizationKeys.save]: "Save",
  [localizationKeys.selectAfile]: "Select a file",
  [localizationKeys.edit]: "Edit",
  [localizationKeys.editUserName]: "Edit User name",
  [localizationKeys.personalDetails]: "Personal Details",
  [localizationKeys.userName]: "User Name",
  [localizationKeys.changePassword]: "Change Password",
  [localizationKeys.editPassword]: "Edit Password",
  [localizationKeys.oldPassword]: "Old Password",
  [localizationKeys.newPassword]: "new Password",
  [localizationKeys.verified]: "Verified",
  [localizationKeys.eMail]: "E-Mail",
  [localizationKeys.phoneNumber]: "Phone Number",
  [localizationKeys.editPhoneNumber]: "Edit Phone Number",
  [localizationKeys.loginService]: "Login Service",
  [localizationKeys.loginServiceMaseg]:
    "Your Alla-tre account does not have an external login service. Connect accounts now for quick & secure access.",
  [localizationKeys.connected]: "Connected",
  [localizationKeys.connectedWithApple]: "Connected with Apple",
  [localizationKeys.connectWithGoogle]: "Connect with Google",
  [localizationKeys.connectWithFacebook]: "Connect with Facebook",
  [localizationKeys.addressBook]: "Address Book",
  [localizationKeys.addressBookmasg]:
    "Manage your addresses for a quick and easy checkout experience",
  [localizationKeys.default]: "Default",
  [localizationKeys.delete]: "Delete",
  [localizationKeys.makeDefault]: " Make Default",
  [localizationKeys.the]: " The",

  // err
  [localizationKeys.required]: "Required",
  [localizationKeys.makeSureThatYouChooseItemConditionValue]:
    "Make sure that you choose Item Condition value",
  [localizationKeys.makeSureThatYouChooseAtLeastThreeOrMorePhotos]:
    "Make sure that you choose at least three or more photos",
  [localizationKeys.oops]:
    "oops, sorry something with wrong please make sure everything is correct and try again",
  // success
  [localizationKeys.thePasswordHasBeenEditSuccessfully]:
    "ُhe Password Has Been Edit Successfully",
  [localizationKeys.hasBeenDeleteSuccessfully]: "has been delete successfully",
  [localizationKeys.hasBeenMakeDefaultSuccessfully]:
    "has been Make Default successfully",
  [localizationKeys.uploadImageHasbeenSuccessfully]:
    "Upload image has been successfully",
  [localizationKeys.nameHasBeenEditSuccessfully]:
    "Name has been edit successfully",
  [localizationKeys.yourAuctionSaveAsDraftedSuccess]:
    "Your Auction Save As Draft Success",
  [localizationKeys.yourAuctionIsCreatedSuccess]:
    "your Auction is Created success",
  [localizationKeys.makeSureThatYouChooseTheAuctionLocationOrCreateAnotherOne]:
    "Make sure that you choose the auction location or create another one",
};

export default en;
