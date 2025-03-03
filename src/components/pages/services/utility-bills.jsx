import React from "react";
import arrow from "../../../assets/Subtract.png";
import media from "../../../assets/Group 895.png";
import laptops from "../../../assets/Group.png";
import { useTranslation } from "react-i18next";
import man from "../../../assets/Ellipse 311.png";
import man1 from "../../../assets/Ellipse 311 (2).png";
import smth from "../../../assets/smth.png";
import main from "../../../assets/Group 728.png";
import bulb from "../../../assets/bulb 1.png";
import bulb2 from "../../../assets/stove 1.png";
import bulb3 from "../../../assets/web 1.png";
import bill from "../../../assets/photo_2020-01-21_19-07-40.png";
import right from "../../../assets/Group 305.png";
import left from "../../../assets/Group 77.png";
import paper from "../../../assets/Group 1010.png";
import usa from "../../../assets/image 20.png";
import lock from "../../../assets/Group 1002.png";
import phone from "../../../assets/Group 1014.png";
import bill2 from "../../../assets/photo_2020-01-21_19-07-40 (1).png";

const UtilityBills = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="bg-[#0F1319] max-w-[1400px] lg:p-10 h-auto lg:h-auto lg:pl-[15%] flex flex-col lg:flex-row items-center">
        <div className="flex flex-col items-start gap-10">
          <h1 className="text-white font-semibold lg:text-[44px] text-[22px] lg:pl-0 text-center px-10 lg:text-start lg:mt-10 mt-10">
            {t("section1.title")}
          </h1>
          <p className="text-[#797171] lg:text-[27px] text-[20px] px-10 lg:px-0 lg:pl-0 text-center lg:text-start">
            {t("section1.description")}
          </p>
          <button className="bg-[#EC670C] text-white flex font-bold gap-5 py-4 mx-4 lg:ml-0 px-6 rounded-lg w-[60%] lg:w-[40%] ml-10">
            <img src={arrow} />
            {t("home.get_started")}
          </button>
          <div className="flex gap-10 ml-10 lg:ml-0 my-2">
            <img src={media} />
          </div>
        </div>
        <img
          className="lg:w-[50%] w-[90%] mt-10 lg:mr-0 lg:mt-0"
          src={laptops}
        />
      </section>

      <div className="flex flex-col max-w-[1400px] items-center justify-center min-h-screen bg-gray-50 px-6">
        <h2 className="text-3xl font-semibold text-gray-800 lg:mb-20 my-20 lg:my-0 text-center lg:text-start">
          {t("documentsReadyToSend")}
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center bg-white shadow-md p-4 rounded-lg">
              <span className="text-red-500 text-xl">
                <img src={bulb} alt="Electricity" />
              </span>
              <span className="ml-2 text-gray-700 font-medium">
                {t("electricityBill")}
              </span>
            </div>
            <div className="flex items-center bg-white shadow-md p-4 rounded-lg">
              <span className="text-red-500 text-xl">
                <img src={bulb2} alt="Gas/Water" />
              </span>
              <span className="ml-2 text-gray-700 font-medium">
                {t("gasWaterBill")}
              </span>
            </div>
            <div className="flex items-center bg-white shadow-md p-4 rounded-lg">
              <span className="text-red-500 text-xl">
                <img src={bulb3} alt="Internet" />
              </span>
              <span className="ml-2 text-gray-700 font-medium">
                {t("internetBill")}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img src={main} className="lg:w-64 h-auto shadow-lg" alt="Main" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center bg-white shadow-md p-4 rounded-lg">
              <span className="text-red-500 text-xl">
                <img src={bulb3} alt="Rapidity" />
              </span>
              <span className="ml-2 text-gray-700 font-medium">
                {t("rapidity")}
              </span>
            </div>
            <div className="flex items-center bg-white shadow-md p-4 rounded-lg">
              <span className="text-red-500 text-xl">
                <img src={bulb} alt="English" />
              </span>
              <span className="ml-2 text-gray-700 font-medium">
                {t("englishLanguage")}
              </span>
            </div>
            <div className="flex items-center bg-white shadow-md p-4 rounded-lg">
              <span className="text-red-500 text-xl">
                <img src={bulb2} alt="Manual" />
              </span>
              <span className="ml-2 text-gray-700 font-medium">
                {t("manual")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        <div className="flex flex-col lg:flex-row lg:w-full max-w-5xl">
          <div className="flex flex-col items-center lg:w-1/2">
            <div className="relative w-full flex justify-center">
              <img src={bill} className="lg:w-80 h-auto w-full shadow-lg" />
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="p-2 border border-orange-500 text-orange-500 rounded-md">
                <img src={left} />
              </button>
              <button className="p-2 border border-orange-500 text-orange-500 rounded-md">
                <img src={right} />
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              {t("learnIt.leaveRequest")}
            </h2>
            <p className="text-gray-600 mb-6">{t("learnIt.description")}</p>

            <div className="mb-4">
              <label className="text-gray-700 block text-sm mb-1">
                {t("learnIt.emailLabel")}
              </label>
              <input
                type="email"
                placeholder={t("learnIt.emailPlaceholder")}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-6">
              <label className="text-gray-700 block text-sm mb-1">
                {t("learnIt.telephoneLabel")}
              </label>
              <input
                type="text"
                placeholder={t("learnIt.telephonePlaceholder")}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button className="w-full bg-orange-500 text-white py-2 rounded-md font-medium">
              {t("learnIt.sendButton")}
            </button>
          </div>
        </div>
      </div>

      <section className="flex flex-col lg:flex-row px-[10%] items-center justify-center gap-10">
        <div className="lg:w-1/2 p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">
            {t("invoicesHeading")}
          </h2>
          <p className="text-gray-600 mb-6">{t("invoicesDescription")}</p>
          <button className="w-[50%] bg-orange-500 text-white py-2 rounded-md font-medium">
            {t("getInvoice")}
          </button>
        </div>
        <img src={paper} alt="Invoice" />
      </section>

      <section className="flex flex-col lg:flex-row px-[10%] items-center justify-center gap-10">
      <div className="lg:w-1/2 p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">
          {t('invoicesFromUSSupplier')}
        </h2>
        <p className="text-gray-600 mb-6">
          {t('invoiceDescription1')}
          <br />
          <br />
          {t('invoiceDescription2')}
        </p>
      </div>
      <img src={usa} alt="US Supplier" />
    </section>

     <section>
  <h2 className="text-3xl px-10 lg:px-0 font-semibold text-gray-800 mt-20 text-center">
    {t('documentsReadyToSend')}
  </h2>
  <p className="mt-2 text-center lg:px-[35%] px-10">
    {t('invoiceRequestText')}
  </p>
  <div className="flex flex-col lg:flex-row gap-10 mt-10 px-10 justify-center">
    <div className="lg:w-[20%] text-center justify-center items-center">
      <img src={lock} className="w-[30%] m-auto" />
      <p className="text-[#889196]">
        {t('invoiceRequestDescription')}
      </p>
    </div>
    <div className="lg:w-[20%] mt-10 text-center justify-center items-center">
      <img src={lock} className="w-[30%] m-auto" />
      <p className="text-[#889196]">
        {t('invoiceRequestDescription')}
      </p>
    </div>
    <div className="lg:w-[20%] mt-10 text-center justify-center items-center">
      <img src={lock} className="w-[30%] m-auto" />
      <p className="text-[#889196]">
        {t('invoiceRequestDescription')}
      </p>
    </div>
  </div>
</section>

<section className="flex flex-col lg:flex-row px-[10%] items-center justify-center gap-20 mt-32">
      <img src={phone} className="lg:w-[50%]" alt="phone" />
      <div className="lg:w-1/2 p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">
          {t('alif.title')}
        </h2>
        <p className="text-gray-600 mb-6">
          {t('alif.description')}
        </p>
      </div>
    </section>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        <div className="flex w-full flex-col lg:flex-row  max-w-5xl">
          <div className="flex flex-col items-center lg:w-1/2">
            <div className="relative w-full flex justify-center">
              <img src={bill2} className="w-80 h-auto shadow-lg" />
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="p-2 border border-orange-500 text-orange-500 rounded-md">
                <img src={left} />
              </button>
              <button className="p-2 border border-orange-500 text-orange-500 rounded-md">
                <img src={right} />
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              {t("learnIt.leaveRequest")}
            </h2>
            <p className="text-gray-600 mb-6">{t("learnIt.description")}</p>

            <div className="mb-4">
              <label className="text-gray-700 block text-sm mb-1">
                {t("learnIt.emailLabel")}
              </label>
              <input
                type="email"
                placeholder={t("learnIt.emailPlaceholder")}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-6">
              <label className="text-gray-700 block text-sm mb-1">
                {t("learnIt.telephoneLabel")}
              </label>
              <input
                type="text"
                placeholder={t("learnIt.telephonePlaceholder")}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button className="w-full bg-orange-500 text-white py-2 rounded-md font-medium">
              {t("learnIt.sendButton")}
            </button>
          </div>
        </div>
      </div>
      <section>
        <h2 className="font-bold text-[33px] text-center mt-20">
          {t("clients_say.title")}
        </h2>
        <div className="flex justify-center mx-32 gap-10 mt-10">
          <div className="flex items-start gap-4">
            <img src={man} alt="Client 1" />
            <div className="flex flex-col gap-3 items-start">
              <img src={smth} alt="Testimonial 1" />
              <p className="text-[#889196]">
                {t("clients_say.testimonial_1.text")}
              </p>
              <b className="font-bold text-sm mt-10">
                {t("clients_say.testimonial_1.name")}
              </b>
            </div>
          </div>
          <div className="hidden lg:flex items-start gap-4">
            <img src={man1} alt="Client 2" />
            <div className="flex flex-col gap-3 items-start">
              <img src={smth} alt="Testimonial 2" />
              <p className="text-[#889196]">
                {t("clients_say.testimonial_2.text")}
              </p>
              <b className="font-bold text-sm mt-10">
                {t("clients_say.testimonial_2.name")}
              </b>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UtilityBills;
