import React from "react";
import arrow from "../../../assets/Subtract.png";
import media from "../../../assets/Group 895.png";
import laptopss from "../../../assets/Без имени-1 1 (1).png";
import pic1 from "../../../assets/analysis 1.png";
import pic2 from "../../../assets/idea 1.png";
import pic3 from "../../../assets/benchmark 1.png";
import pic4 from "../../../assets/inventory 1.png";
import pic5 from "../../../assets/clipboards 1.png";
import pic6 from "../../../assets/bullhorn 1.png";
import pic7 from "../../../assets/Group 655 (1).png";
import pic8 from "../../../assets/benchmark 1 (1).png";
import pic9 from "../../../assets/product 1 (1).png";
import pic10 from "../../../assets/idea 1 (1).png";
import pic11 from "../../../assets/design 1 (1).png";
import pic12 from "../../../assets/copywriting 1.png";
import pic13 from "../../../assets/ppc 1.png";
import girl from "../../../assets/1231242112 1.png";
import one11 from "../../../assets/picc.png";
import one111 from "../../../assets/piccc.png";
import one1111 from "../../../assets/picccc.png";
import one11111 from "../../../assets/piccccc.png";
import { useTranslation } from "react-i18next";
import man from "../../../assets/Ellipse 311.png";
import man1 from "../../../assets/Ellipse 311 (2).png";
import smth from "../../../assets/smth.png";

function AmazonWatch() {
  const { t } = useTranslation();
  return (
    <div>
      <section className="bg-[#0F1319] max-w-[1400px] lg:p-10 h-auto lg:h-auto  lg:pl-[15%] flex flex-col lg:flex-row items-center">
        <div className="flex flex-col items-start gap-10">
          <p className="text-white m-3 lg:m-0">
            {t("breadcrumb.home")} / {t("breadcrumb.services")} / <span className="font-bold">{t("breadcrumb.complex_launch")}</span>
          </p>
          <h1 className="text-white font-semibold lg:text-[44px] text-[28px] lg:pl-0 text-center px-10 lg:text-start lg:mt-10 mt-10">
            {t("amazon_complex_launch.title")}
          </h1>
          <p className="text-[#797171] lg:text-[27px] text-[20px] px-10 lg:px-0 lg:pl-0 text-center lg:text-start">
            {t("amazon_complex_launch.description")}
          </p>
          <button className="bg-[#EC670C] text-white flex font-bold gap-5 py-4 mx-4 lg:ml-0 px-6 rounded-lg w-[60%] lg:w-[40%] ml-10">
            <img src={arrow} />
            {t("get_started")}
          </button>
          <div className="hidden lg:flex gap-10 ml-10 lg:ml-0 my-2">
            <img src={media} />
          </div>
        </div>
        <img
          className="lg:w-[40%] w-[90%] mt-10 lg:mr-0 lg:mt-0 mb-10 lg:mb-0"
          src={laptopss}
        />
      </section>
      
      <section className="max-w-[1400px] flex flex-col lg:flex-row justify-center gap-5 mt-20">
        <div className="flex flex-col justify-center items-center border-2 border-white shadow-2xl shadow-gray-300 lg:w-[17%] text-start p-5">
          <img src={pic1} className="text-center m-auto" />
          <h3 className="font-bold text-center m-auto">{t("services.analytics")}</h3>
          <p className="text-[#889196] mt-3">
            {t("services.analytics_1")}
          </p>
          <p className="text-[#889196] mt-3">
            {t("services.analytics_2")}
          </p>
          <p className="text-[#889196] mt-3">{t("services.analytics_3")}</p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-white shadow-2xl shadow-gray-300 lg:w-[17%] text-start p-5">
          <img src={pic2} className="text-center m-auto" />
          <h3 className="font-bold text-center m-auto">{t("services.analytics")}</h3>
          <p className="text-[#889196] mt-3">
            {t("services.analytics_1")}
          </p>
          <p className="text-[#889196] mt-3">
            {t("services.analytics_2")}
          </p>
          <p className="text-[#889196] mt-3">{t("services.analytics_3")}</p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-white shadow-2xl shadow-gray-300 lg:w-[17%] text-start p-5">
          <img src={pic3} className="text-center m-auto" />
          <h3 className="font-bold text-center m-auto">{t("services.analytics")}</h3>
          <p className="text-[#889196] mt-3">
            {t("services.analytics_1")}
          </p>
          <p className="text-[#889196] mt-3">
            {t("services.analytics_2")}
          </p>
          <p className="text-[#889196] mt-3">{t("services.analytics_3")}</p>
        </div>
      </section>
      
      <section className="max-w-[1400px] flex flex-col lg:flex-row justify-center gap-5 mt-20">
        <div className="flex flex-col justify-center items-center border-2 border-white shadow-2xl shadow-gray-300 lg:w-[17%] text-start p-5">
          <img src={pic6} className="text-center m-auto" />
          <h3 className="font-bold text-center m-auto">{t("services.analytics")}</h3>
          <p className="text-[#889196] mt-3">
            {t("services.analytics_1")}
          </p>
          <p className="text-[#889196] mt-3">
            {t("services.analytics_2")}
          </p>
          <p className="text-[#889196] mt-3">{t("services.analytics_3")}</p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-white shadow-2xl shadow-gray-300 lg:w-[17%] text-start p-5">
          <img src={pic4} className="text-center m-auto" />
          <h3 className="font-bold text-center m-auto">{t("services.analytics")}</h3>
          <p className="text-[#889196] mt-3">
            {t("services.analytics_1")}
          </p>
          <p className="text-[#889196] mt-3">
            {t("services.analytics_2")}
          </p>
          <p className="text-[#889196] mt-3">{t("services.analytics_3")}</p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-white shadow-2xl shadow-gray-300 lg:w-[17%] text-start p-5">
          <img src={pic5} className="text-center m-auto" />
          <h3 className="font-bold text-center m-auto">{t("services.analytics")}</h3>
          <p className="text-[#889196] mt-3">
            {t("services.analytics_1")}
          </p>
          <p className="text-[#889196] mt-3">
            {t("services.analytics_2")}
          </p>
          <p className="text-[#889196] mt-3">{t("services.analytics_3")}</p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-between items-center">
        <img src={pic7} className="w-[70%]" />
        <div>
          <p className="font-bold mb-20 text-3xl text-center lg:text-start">
            {t("meet_team.title")}
          </p>
          <div className="flex flex-wrap gap-5 px-3 pl-10 lg:pl-10 lg:px-0">
            <div className="flex items-center gap-2">
              <img src={pic8} />
              <p className="text-[#01044D]">{t("meet_team.account_manager")}</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={pic9} />
              <p className="text-[#01044D]">{t("meet_team.account_manager")}</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={pic10} />
              <p className="text-[#01044D]">{t("meet_team.account_manager")}</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={pic12} />
              <p className="text-[#01044D]">{t("meet_team.account_manager")}</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={pic11} />
              <p className="text-[#01044D]">{t("meet_team.account_manager")}</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={pic13} />
              <p className="text-[#01044D]">{t("meet_team.account_manager")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col-reverse lg:flex-row justify-between items-center mt-28 px-20">
        <img src={girl} alt="Girl" />
        <div>
          <h2 className="font-bold text-[33px] mb-5">
            {t("leave_request_section.title")}
          </h2>
          <p className="text-[#889196] w-[70%]">
            {t("leave_request_section.description")}
          </p>
          <form className="max-w-md mx-auto bg-white lg:mr-[40%] mt-10">
            <label className="block text-gray-700 font-medium mb-1">
              {t("leave_request_section.email_label")}
            </label>
            <input
              type="email"
              placeholder={t("leave_request_section.email_placeholder")}
              className="w-full border-b-2 border-gray-300 outline-none py-2 text-gray-500"
            />
            <label className="block text-gray-700 font-medium mt-4 mb-1">
              {t("leave_request_section.phone_label")}
            </label>
            <input
              type="text"
              placeholder={t("leave_request_section.phone_placeholder")}
              className="w-full border-b-2 border-gray-300 outline-none py-2 text-gray-500"
            />
            <label className="block text-gray-700 font-medium mt-4 mb-1">
              {t("leave_request_section.message_label")}
            </label>
            <input
              type="text"
              placeholder={t("leave_request_section.message_placeholder")}
              className="w-full border-b-2 border-gray-300 outline-none py-2 text-gray-500"
            />
            <button className="w-full bg-orange-500 text-white font-semibold py-3 mt-6 rounded">
              {t("leave_request_section.send_button")}
            </button>
          </form>
        </div>
      </section>

      <section>
        <h2 className="font-bold text-[33px] text-center mt-32">
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
}

export default AmazonWatch;
