import React from "react";
import { useTranslation } from "react-i18next";
import arrow from "../../../assets/Subtract.png";
import media from "../../../assets/Group 895.png";
import laptops from "../../../assets/Group.png";
import phones from "../../../assets/Group 1016.png";
import msg from "../../../assets/message 1.png";
import call from "../../../assets/phone-call (1) 1.png";
import budget from "../../../assets/budget (1) 1.png";
import one from "../../../assets/Group 659.png";
import one2 from "../../../assets/Group 664.png";
import one3 from "../../../assets/Group 665.png";
import one4 from "../../../assets/Group 666.png";
import one5 from "../../../assets/Group 667.png";
import one6 from "../../../assets/Group 668.png";
import phone from "../../../assets/Group 1013.png";
import group416 from "../../../assets/Group 416.png";
import group413 from "../../../assets/Group 413.png";
import group414 from "../../../assets/Group 414.png";
import group415 from "../../../assets/Group 415 (1).png";
import group417 from "../../../assets/Group 416 (1).png";
import girl from "../../../assets/1231242112 1 (1).png";
import man from "../../../assets/Ellipse 311.png";
import man1 from "../../../assets/Ellipse 311 (2).png";
import smth from "../../../assets/smth.png";
import infp from "../../../assets/information 1.png";
import arrowB from "../../../assets/back 10.png";

const BuyAccount = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="bg-[#0F1319] max-w-[1400px] lg:p-10 h-auto lg:h-auto m-[-20px] lg:pl-[15%] flex flex-col lg:flex-row items-center">
        <div className="flex flex-col items-start gap-10">
          <h1 className="text-white font-semibold lg:text-[40px] text-[22px] lg:pl-0 text-center px-10 lg:text-start lg:mt-10 mt-10">
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

      <section className="lg:px-[5%] max-w-[1400px]">
        <h2 className="font-bold lg:text-[33px] text-[30px] text-center m-auto mt-20">
          {t("evaluation_workflow.title")}
        </h2>
        <div className="flex flex-col-reverse lg:flex-row justify-center gap-10 items-center">
          <img src={phones} className="lg:w-[45%] w-full" />
          <div className="flex flex-col gap-10 lg:w-[60%] mt-20 lg:mt-0 px-10 lg:px-0 ">
            <div className="flex flex-col lg:flex-row  items-start text-center lg:text-start gap-5 ">
              <img src={msg} className="m-auto lg:m-0" />
              <div>
                <h3 className="font-bold">{t("evaluation_workflow.key_1")}</h3>
                <p className="text-[#889196] ">
                  {t("evaluation_workflow.steps.step_1.description")}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-10 items-start text-center lg:text-start gap-5">
              <img src={call} className="m-auto lg:m-0" />
              <div>
                <h3 className="font-bold">{t("evaluation_workflow.key_2")}</h3>
                <p className="text-[#889196] lg:w-[70%]">
                  {t("evaluation_workflow.steps.step_2.description")}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-10 text-center lg:text-start items-start gap-5">
              <img src={budget} className="m-auto lg:m-0" />
              <div>
                <h3 className="font-bold">{t("evaluation_workflow.key_3")}</h3>
                <p className="text-[#889196] lg:w-[60%]">
                  {t("evaluation_workflow.steps.step_3.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] flex flex-col lg:flex-row justify-center px-[5%] mt-20 gap-10">
        <div className="lg:w-[40%] ">
          <h1 className="text-3xl font-bold mb-4">{t("evaluation_tool.h1")}</h1>
          <p className="text-gray-600 mb-8">
            {t("evaluation_tool.description")}
          </p>
          <div className="flex flex-col gap-6 mb-12">
            <div className="flex items-center gap-3">
              <img src={one} className="w-14" />
              <p>{t("evaluation_tool.steps.step_1")}</p>
            </div>
            <div className="flex items-start gap-3">
              <img src={one2} className="w-14" />
              <p>{t("evaluation_tool.steps.step_2")}</p>
            </div>
            <div className="flex items-start gap-3">
              <img src={one3} className="w-14" />
              <p>{t("evaluation_tool.steps.step_3")}</p>
            </div>
            <div className="flex items-start gap-3">
              <img src={one4} className="w-14" />
              <p>{t("evaluation_tool.steps.step_4")}</p>
            </div>
          </div>
        </div>
        <div className="bg-white border-gray-200 border p-2 rounded-lg lg:w-[33%]">
          <h2 className="text-2xl font-bold mb-6">
            {t("evaluation_tool.form.title")}
          </h2>
          <div>
            <div>
              <label className="block mb-3 font-medium">
                {t("evaluation_tool.form.registration_date")}
              </label>
              <div className="flex gap-1 border-black border-2 justify-evenly rounded-sm">
                <button className="p-[5px] bg-white rounded-md">2019</button>
                <button className="p-[5px] bg-black text-white">2018</button>
                <button className="p-[5px] bg-white rounded-md">2017</button>
                <button className="p-[5px] bg-white rounded-md">2016</button>
                <button className="p-[5px] bg-white rounded-md">2015</button>
                <button className="p-[5px] bg-white rounded-md">
                  {t("evaluation_tool.form.earlier")}
                </button>
              </div>
            </div>
            <div>
              <label className="block font-medium mt-3">
                {t("evaluation_tool.form.feedbacks")}
              </label>
              <div className="flex gap-1 border-black border-2 justify-evenly rounded-sm">
                <button className="p-[5px] bg-white rounded-md">50</button>
                <button className="p-[5px] px-3 bg-black text-white">
                  50+
                </button>
                <button className="p-[5px] bg-white rounded-md">100+</button>
                <button className="p-[5px] bg-white rounded-md">500+</button>
                <button className="p-[5px] bg-white rounded-md">1000+</button>
              </div>
            </div>
            <div>
              <label className="block mt-5 font-medium">
                {t("evaluation_tool.form.marketplace")}
              </label>
              <div className="flex justify-evenly border-2 rounded-sm mt-[5px]">
                <button className="bg-black text-white p-[5px] px-20">
                  {t("evaluation_tool.form.usa")}
                </button>
                <button className="p-[5px] px-20">
                  {t("evaluation_tool.form.europe")}
                </button>
              </div>
            </div>
            <div>
              <label className="block mt-5 font-medium">
                {t("evaluation_tool.form.violations")}
              </label>
              <div className="flex justify-evenly border-2 rounded-sm mt-[5px]">
                <button className="bg-black text-white p-[5px] px-22">
                  {t("evaluation_tool.form.yes")}
                </button>
                <button className="p-[5px] px-20">
                  {t("evaluation_tool.form.no")}
                </button>
              </div>
            </div>
            <div>
              <label className="block mt-5 font-medium">
                {t("evaluation_tool.form.email")}
              </label>
              <input
                type="email"
                placeholder={t("evaluation_tool.form.email_placeholder")}
                className="w-full p-3 mt-2 border rounded-md outline-none"
              />
            </div>
            <button className="w-full bg-[#EC6D0F] mt-5 text-white py-3">
              {t("evaluation_tool.form.submit")}
            </button>
          </div>
        </div>
      </section>

      <section className="mt-20 flex flex-col lg:flex-row items-center justify-center gap-2">
      <img src={phone} alt="phone" />
      <div className="px-10">
        <h2 className="font-bold lg:text-[33px] mb-10">
          {t("processs.title")}
        </h2>
        <div>
          <div className="flex items-center">
            <img src={one} className="w-14 mr-3" alt="Step 1" />
            <div>
              <p className="font-semibold">{t("processs.step1.title")}</p>
              <p className="font-medium text-sm text-[#889196]">
                {t("processs.step1.desc")}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <img src={one2} className="w-14 mr-3" alt="Step 2" />
            <div>
              <p className="font-semibold">{t("processs.step2.title")}</p>
              <p className="font-medium text-sm text-[#889196]">
                {t("processs.step2.desc")}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <img src={one3} className="w-14 mr-3" alt="Step 3" />
            <div>
              <p className="font-semibold">{t("processs.step3.title")}</p>
              <p className="font-medium text-sm text-[#889196]">
                {t("processs.step3.desc")}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <img src={one4} className="w-14 mr-3" alt="Step 4" />
            <div>
              <p className="font-semibold">{t("processs.step4.title")}</p>
              <p className="font-medium text-sm text-[#889196]">
                {t("processs.step4.desc")}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <img src={one5} className="w-14 mr-3" alt="Step 5" />
            <div>
              <p className="font-semibold">{t("processs.step5.title")}</p>
              <p className="font-medium text-sm text-[#889196]">
                {t("processs.step5.desc")}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <img src={one6} className="w-14 mr-3" alt="Step 6" />
            <div>
              <p className="font-semibold">{t("processs.step6.title")}</p>
              <p className="font-medium text-sm text-[#889196]">
                {t("processs.step6.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
      <section>
        <h2 className="font-bold text-center lg:text-[33px] text-[23px] mt-10 mx-10">
        {t("account_transfer_details.title")}
        </h2>
        <p className="text-[#889196] text-center text-[20px] mt-1">
        {t("account_transfer_details.description")}
        </p>
        <div className="mt-10 flex flex-col px-[10%] lg:px-0 lg:flex-row justify-center gap-10">
          <div className="flex lg:flex-col  lg:justify-center items-center text-center gap-2">
            <img src={group416} className="lg:w-36 w-32" />
            <p className="font-bold">
            {t("account_transfer_details.changes.2.title")}
            </p>
          </div>
          <div className="flex lg:flex-col lg:justify-center items-center text-center gap-2">
            <img src={group413} className="lg:w-36 w-32" />
            <p className="font-bold">{t("account_transfer_details.changes.3.title")}</p>
          </div>
          <div className="flex lg:flex-col lg:justify-center items-center text-center gap-2">
            <img src={group414} className="lg:w-36 w-32" />
            <p className="font-bold">{t("account_transfer_details.changes.4.title")}</p>
          </div>
          <div className="flex lg:flex-col lg:justify-center items-center text-center gap-2">
            <img src={group415} className="lg:w-36 w-32" />
            <p className="font-bold">
            {t("account_transfer_details.changes.1.title")}
            </p>
          </div>
          <div className="flex lg:flex-col lg:justify-center items-center text-center gap-2">
            <img src={group417} className="lg:w-36 w-32" />
            <p className="font-bold">
            {t("account_transfer_details.changes.1.title")}
            </p>
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

      <section>
        <h2 className="font-bold my-20 text-4xl text-center">
          {t("faq.title")}
        </h2>
        <div className="flex justify-between lg:w-[40%] w-[60%] mt-10 rounded-2xl items-center m-auto p-3 border border-gray-200 ">
          <div className="flex items-start gap-4">
            <img src={infp} alt="FAQ Icon" />
            <div>
              <p className="font-bold">{t("faq.inquiries.general.title")}</p>
              <p className="text-sm">
                {t("faq.inquiries.general.description")}
              </p>
            </div>
          </div>
          <img src={arrowB} alt="Arrow Icon" />
        </div>
      </section>
    </div>
  );
};

export default BuyAccount;
