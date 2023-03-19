import React, { useEffect } from "react";
import { RiUser3Fill } from "react-icons/ri";
import { HiLockClosed } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import userProfileicon from "../../../src/assets/icons/user-Profile-icon.png";
import UploadeImgModel from "./uploade-img-model";
import EditUserNameModel from "./edit-user-name-model";
import EditPasswordModel from "./edit-password-model";
import EditPhoneNumberModel from "./edit-phone-number-model";
import appleIcon from "../../../src/assets/icons/Apple-icon.svg";
import googleIcon from "../../../src/assets/icons/Google-icon.svg";
import facebookIcon from "../../../src/assets/icons/Fcaebook-icon.svg";
import useFilter from "../../hooks/use-filter";
import AddLocationModel from "../create-auction-components/add-location-model";
import { useState } from "react";
import useAxios from "../../hooks/use-axios";
import { authAxios } from "../../config/axios-config";
import { Dimmer, Loader } from "semantic-ui-react";
import api from "../../api";
import { useLanguage } from "../../context/language-context";

const ProfileSettings = () => {
  const [lang] = useLanguage();
  const [open, setOpen] = useState(false);
  const [pofileData, setPofileData] = useState();
  const [locationData, setLocationData] = useState();

  const [forceReload, setForceReload] = useState(false);
  const onReload = React.useCallback(() => setForceReload((p) => !p), []);

  const { run: runPofile, isLoading: isLoadingPofile } = useAxios([]);
  useEffect(() => {
    runPofile(
      authAxios.get(api.app.profile.default).then((res) => {
        setPofileData(res?.data?.data);
      })
    );
  }, [runPofile, forceReload]);

  const { run: runLocationData, isLoading: isLoadingLocationData } = useAxios(
    []
  );
  useEffect(() => {
    runLocationData(
      authAxios.get(api.app.location.get).then((res) => {
        console.log(res);
        setLocationData(res?.data?.data);
      })
    );
  }, [runLocationData, forceReload]);

  console.log(locationData);

  console.log(pofileData);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="mx-4">
      <Dimmer
        className="animate-pulse"
        active={isLoadingPofile || isLoadingLocationData}
        inverted
      >
        <Loader active />
      </Dimmer>
      {/* complete profile */}
      <div className="rounded-lg drop-shadow-complete-profile shadow h-52 ">
        <h1 className="text-black text-base font-medium pt-12 pl-6">
          Complete your profile to make your actions easier
        </h1>
        <p className="pt-4 text-gray-dark pl-6 pr-14">
          "Your account currently offers access to updates, saved items, sale
          details, and other features. To bid, buy and sell with Alle-tre,
          kindly take a moment to fill out your profile information."
        </p>
        <div className="flex justify-end pr-14 pt-8">
          <button className="bg-primary hover:bg-primary-dark text-white rounded-lg w-32 h-8 text-sm font-normal">
            Complete Now
          </button>
        </div>
      </div>
      <div className="bg-background-profile rounded-2xl px-20 pt-16 mt-5 ">
        <div className="flex gap-x-5 pb-8 border-b-[1px] border-gray-veryLight mx-2">
          <img
            className="w-28 h-28"
            src={userProfileicon}
            alt="userProfileicon"
          />
          <div>
            <h1 className="text-gray-dark text-4xl font-medium pt-3">
              {pofileData?.userName}
            </h1>
            <UploadeImgModel />
          </div>
        </div>
        {/*  Personal Details */}
        <div className="pt-3 border-b-[1px] border-gray-veryLight pb-8 ">
          <h1 className="text-gray-dark text-base font-semibold">
            Personal Details
          </h1>
          <div className="flex justify-between pt-9">
            <div>
              <div className="flex ">
                <p className="bg-primary-light/80 text-white w-9 h-9 rounded-full px-2.5 pt-2 mr-5">
                  <RiUser3Fill size={16} />
                </p>
                <p className="text-gray-dark text-base font-medium  ">
                  User Name
                </p>
              </div>
              <p className="text-gray-dark text-base pl-[64px] ">
                {pofileData?.userName}
              </p>
            </div>
            <div>
              <EditUserNameModel />
            </div>
          </div>
          <div className="flex justify-between pt-9">
            <div>
              <div className="flex ">
                <p className="bg-primary-light/80 text-white w-9 h-9 rounded-full px-2.5 pt-2 mr-5">
                  <HiLockClosed size={16} />
                </p>
                <p className="text-gray-dark text-base font-medium  ">
                  Password
                </p>
              </div>
              <p className="text-gray-dark text-base pl-[64px] ">
                *************
              </p>
            </div>
            <div>
              <EditPasswordModel />
            </div>
          </div>
        </div>
        {/* Contact info */}
        <div className="pt-3 border-b-[1px] border-gray-veryLight pb-8 ">
          <h1 className="text-gray-dark text-base font-semibold">
            Contact info
          </h1>
          <div className="flex  pt-9">
            <div>
              <div className="flex ">
                <p className="bg-primary-light/80 text-white w-9 h-9 rounded-full px-2.5 pt-2 mr-5">
                  <MdMail size={16} />
                </p>
                <p className="text-gray-dark text-base font-medium">E-mail</p>
              </div>
              <p className="text-gray-dark text-base pl-[64px] ">
                {pofileData?.email}
              </p>
            </div>
            <div className="flex gap-x-1 text-green-500 ml-[210px]">
              <IoMdCheckmarkCircle size={16} className="mt-0.5" />
              <p className="text-base font-normal">Verified</p>
            </div>
          </div>
          <div className="flex justify-between pt-9">
            <div>
              <div className="flex ">
                <p className="bg-primary-light/80 text-white w-9 h-9 rounded-full px-2.5 pt-2 mr-5">
                  <BsFillTelephoneFill size={16} />
                </p>
                <p className="text-gray-dark text-base font-medium  ">
                  Phone Number
                </p>
              </div>
              <p className="text-gray-dark text-base pl-[64px] ">
                {pofileData?.phone}
              </p>
            </div>
            <div>
              <EditPhoneNumberModel />
            </div>
          </div>
        </div>
        {/* O Auth */}
        <div className="pt-3 border-b-[1px] border-gray-veryLight pb-8 ">
          <h1 className="text-gray-dark text-base font-semibold">
            Login service
          </h1>
          <p className="text-gray-dark text-base font-normal pt-2">
            Your Alla-tre account does not have an external login service.
            Connect accounts now for quick & secure access.
          </p>
          <div>
            <div className="flex mt-8">
              <Loginbutton logo={appleIcon} text="Connected with Apple" />
              <div className="flex gap-x-1 text-green-500 ml-[71px] my-auto">
                <IoMdCheckmarkCircle size={16} className="mt-0.5" />
                <p className="text-base font-normal">Connected</p>
              </div>
            </div>
            <div className="flex ">
              <Loginbutton logo={googleIcon} text="Connect with Google" />
              <div className="flex gap-x-1 text-green-500 ml-[71px] my-auto">
                <IoMdCheckmarkCircle size={16} className="mt-0.5" />
                <p className="text-base font-normal">Connected</p>
              </div>
            </div>
            <div className="flex ">
              <Loginbutton logo={facebookIcon} text="Connect with Facebook" />
              <div className="flex gap-x-1 text-green-500 ml-[71px] my-auto">
                <IoMdCheckmarkCircle size={16} className="mt-0.5" />
                <p className="text-base font-normal">Connected</p>
              </div>
            </div>
          </div>
        </div>

        {/* Address Book */}
        <div className="pt-3 border-b-[1px] border-gray-veryLight pb-8 ">
          <h1 className="text-gray-dark text-base font-semibold">
            Address Book
          </h1>
          <p className="text-gray-dark text-base font-normal pt-2">
            Manage your addresses for a quick and easy checkout experience
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {locationData?.map((e) => (
              <LocationDetailsCard
                key={e?.id}
                Id={e?.id}
                AddressLable={e?.addressLabel}
                Address={e?.address}
                Country={lang === "en" ? e?.country?.nameEn : e?.country.nameAn}
                City={lang === "en" ? e?.city?.nameEn : e?.city.nameAn}
                PostalCode={e?.zipCode}
              />
            ))}
          </div>
          <AddLocationModel
            open={open}
            setOpen={setOpen}
            TextButton={"Add"}
            // onReload={onReload}
          />
        </div>
      </div>
    </div>
  );
};

export const Loginbutton = ({ logo, text, isActive }) => {
  return (
    <div>
      <button
        className={`${
          isActive ? "" : ""
        } flex justify-start w-[298px] h-[48px] border-[1px] rounded-lg border-primary text-primary my-2 py-2 ltr:pl-[45px] rtl:pr-5`}
      >
        <img className="mx-4 mt-0.5" src={logo} alt="logo" />
        <p className="text-lg font-medium pt-0.5 ">{text}</p>
      </button>
    </div>
  );
};

export const LocationDetailsCard = ({
  AddressLable,
  Address,
  Country,
  City,
  PostalCode,
  Id,
  key,
}) => {
  const [locationId, setLocationId] = useFilter("locationId", "");
  return (
    <div
      key={key}
      onClick={() => {
        setLocationId(Id);
      }}
      className={`${
        locationId === `${Id}` ? "border-primary" : "border-gray-med"
      } border-[1px] rounded-lg h-[120px] w-full p-5 cursor-pointer`}
    >
      <h1 className="text-gray-dark text-sm">{AddressLable}</h1>
      <p className="text-gray-med text-sm pt-2">{Address}</p>
      <p className="text-gray-med text-sm pt-1">
        {City}, {Country}
      </p>
      <p className="text-gray-med text-sm pt-1">{PostalCode}</p>
    </div>
  );
};

export default ProfileSettings;
