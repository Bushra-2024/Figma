import React from "react";
import arrow from "../../../assets/Subtract.png";
import media from "../../../assets/Group 895.png";
import laptops from "../../../assets/Group.png";
import map1 from "../../../assets/image 29.png";
import map2 from "../../../assets/image 30.png";
import map3 from "../../../assets/image 31.png";
import usa from "../../../assets/united-states (1) 1.png";
import blueArrow from "../../../assets/back 1.png";
import iphone from "../../../assets/Group 385.png";
import very from "../../../assets/verified-account 1.png";
import very1 from "../../../assets/shield (4) 1.png";
import very2 from "../../../assets/conversation 1.png";
import group from "../../../assets/Group 408.png";
import group1 from "../../../assets/wifi 1.png";
import group2 from "../../../assets/deal 1.png";
import group3 from "../../../assets/money-bag 1.png";
import group4 from "../../../assets/Group 775.png";
import arrowB from "../../../assets/back 10.png";
import one from "../../../assets/Group 370.png";
import one2 from "../../../assets/Group 371.png";
import one3 from "../../../assets/Group 372.png";
import one4 from "../../../assets/Group 373.png";
import girl from "../../../assets/1231242112 1.png";
import man from "../../../assets/Ellipse 311.png";
import man1 from "../../../assets/Ellipse 311 (2).png";
import smth from "../../../assets/smth.png";
import infp from "../../../assets/information 1.png";
import "../../../App.css";
import { useTranslation } from "react-i18next";
function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <section className=" max-w-[1400px] bg-[#0F1319] lg:w-screen p-10 h-auto lg:h-auto m-[-20px] pl-[15%] flex flex-col lg:flex-row items-center">
        <div className="flex flex-col items-start gap-10">
          <h1 className="text-white font-semibold lg:text-[44px] text-[28px] lg:px-0 px-20 pl-10 lg:pl-0 text-center lg:text-start lg:mt-10">
            {t("home.title")}
          </h1>
          <p className="text-[#797171] lg:text-[27px] text-[22px] px-20 lg:px-0 pl-9 lg:pl-0 text-center lg:text-start">
            {t("home.description")}
          </p>
          <button className="bg-[#EC670C] text-white flex font-bold gap-5 py-4 ml-14 lg:ml-0 px-6 rounded-lg w-[60%] lg:w-[40%]">
            <img src={arrow} />
            {t("home.get_started")}
          </button>
          <div className="flex gap-10 ml-4 lg:ml-0 my-2">
            <img src={media} />
            <img src={media} />
          </div>
        </div>
        <img className="w-[50%] mr-10 mt-10 lg:mr-0 lg:mt-0" src={laptops} />
      </section>

      <section className="mt-32">
        <h2 className="font-semibold text-center m-auto pb-10 text-3xl lg:px-[34%] px-[18%]">
          {t("home.amazon_global_selling")}
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-20">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[26px] font-semibold">{t("home.americas")}</h3>
            <img src={map1} className="mt-10" />
            <p className="text-[#889196]">{t("home.amazon_com")}</p>
            <p className="text-[#889196]">{t("home.amazon_ca")}</p>
            <p className="text-[#889196]">{t("home.amazon_com_mx")}</p>
            <p className="text-[#889196]">{t("home.amazon_com_br")}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[26px] font-semibold">{t("home.europe")}</h3>
            <img src={map2} className="mt-10" />
            <p className="text-[#889196]">{t("home.amazon_com")}</p>
            <p className="text-[#889196]">{t("home.amazon_ca")}</p>
            <p className="text-[#889196]">{t("home.amazon_com_mx")}</p>
            <p className="text-[#889196]">{t("home.amazon_com_br")}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[26px] font-semibold">
              {t("home.asia_pacific")}
            </h3>
            <img src={map3} className="mt-10" />
            <p className="text-[#889196]">{t("home.amazon_com")}</p>
            <p className="text-[#889196]">{t("home.amazon_ca")}</p>
            <p className="text-[#889196]">{t("home.amazon_com_mx")}</p>
            <p className="text-[#889196]">{t("home.amazon_com_br")}</p>
          </div>
        </div>
        <div className="flex justify-center my-32 items-center text-center">
          <div className="flex flex-col lg:flex-row justify-center lg:items-start items-center gap-16">
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-black text-[63px] leading-tight">
                13
              </h3>
              <p className="text-[23px] mb-10">{t("home.marketplaces")}</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-black text-[63px] leading-tight">
                175+
              </h3>
              <p className="text-[23px] mb-10 max-w-xs">
                {t("home.fulfillment_centers")}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-black text-[63px] leading-tight">
                180+
              </h3>
              <p className="text-[23px] mb-10 max-w-xs">
                {t("home.countries_with_customers")}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-black text-[63px] leading-tight">
                30+
              </h3>
              <p className="text-[23px] mb-10 max-w-xs">
                {t("home.product_categories")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-semibold text-center m-auto lg:text-3xl text-2xl px-[24%] lg:px-0  ">
          List of aged accounts for sale
        </h2>
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold mb-6 lg:ml-2 ml-20 text-[#889196]">
            Selling
          </h2>

          <div className=" p-4 mr-24 lg:mr-2">
            <div className="hidden md:flex border-b  border-gray-200 py-2 font-semibold bg-gray-100 px-4 text-[#889196]">
              <p className="w-1/4">Business Name</p>
              <p className="w-1/6">Market</p>
              <p className="w-1/6">Type</p>
              <p className="w-1/6">Account Age</p>
              <p className="w-1/6">Reviews</p>
              <p className="w-1/6">Ratio</p>
              <p className="w-1/6">Price</p>
              <p className="w-1/6">Account Details</p>
            </div>
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row border-b  border-gray-200 py-4 px-4">
              {/* Desktop View */}
              <p className="hidden lg:block w-1/4">Flagman_Shop</p>
              <p className="hidden lg:flex items-center gap-2 w-1/6 ">
                <img className="w-[20px]" src={usa} /> US
              </p>
              <p className="hidden lg:block w-1/6">Pro Account</p>
              <p className="hidden lg:block w-1/6">2019</p>
              <p className="hidden lg:block w-1/6">6 reviews</p>
              <p className="hidden lg:block w-1/6">100% positive</p>
              <p className="hidden lg:block w-1/6">$1,000</p>
              <p className="hidden lg:flex gap-1 items-center w-1/6 text-blue-600 cursor-pointer">
                More Info <img src={blueArrow} />
              </p>

              {/* Mobile View */}
              <div className="lg:hidden flex flex-col leading-6 w-full m-auto justify-start items-start ml-30">
                <div className="flex justify-between gap-7 px-4 py-1">
                  <span className="font-semibold">Business Name:</span>
                  <p>Flagman_Shop</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Market:</span>
                  <p className="flex gap-2">
                    <img className="w-[20px]" src={usa} /> US
                  </p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Type:</span>
                  <p>Pro Account</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Account Age:</span>
                  <p>2019</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Ratio:</span>
                  <p>100% positive</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Reviews:</span>
                  <p>6 reviews</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Price:</span>
                  <p>$1,000</p>
                </div>
                <p className="text-blue-600 cursor-pointer mt-4 flex justify-center gap-1 ml-24">
                  More Info <img src={blueArrow} />
                </p>
              </div>
            </div>
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row border-b  border-gray-200 py-4 px-4">
              {/* Desktop View */}
              <p className="hidden lg:block w-1/4">Flagman_Shop</p>
              <p className="hidden lg:flex items-center gap-2 w-1/6 ">
                <img className="w-[20px]" src={usa} /> US
              </p>
              <p className="hidden lg:block w-1/6">Pro Account</p>
              <p className="hidden lg:block w-1/6">2019</p>
              <p className="hidden lg:block w-1/6">6 reviews</p>
              <p className="hidden lg:block w-1/6">100% positive</p>
              <p className="hidden lg:block w-1/6">$1,000</p>
              <p className="hidden lg:flex gap-1 items-center w-1/6 text-blue-600 cursor-pointer">
                More Info <img src={blueArrow} />
              </p>

              {/* Mobile View */}
              <div className="lg:hidden flex flex-col leading-6 w-full m-auto justify-start items-start ml-30">
                <div className="flex justify-between gap-7 px-4 py-1">
                  <span className="font-semibold">Business Name:</span>
                  <p>Flagman_Shop</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Market:</span>
                  <p className="flex gap-2">
                    <img className="w-[20px]" src={usa} /> US
                  </p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Type:</span>
                  <p>Pro Account</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Account Age:</span>
                  <p>2019</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Ratio:</span>
                  <p>100% positive</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Reviews:</span>
                  <p>6 reviews</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Price:</span>
                  <p>$1,000</p>
                </div>
                <p className="text-blue-600 cursor-pointer mt-4 flex justify-center gap-1 ml-24">
                  More Info <img src={blueArrow} />
                </p>
              </div>
            </div>
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row border-b  border-gray-200 py-4 px-4">
              {/* Desktop View */}
              <p className="hidden lg:block w-1/4">Flagman_Shop</p>
              <p className="hidden lg:flex items-center gap-2 w-1/6 ">
                <img className="w-[20px]" src={usa} /> US
              </p>
              <p className="hidden lg:block w-1/6">Pro Account</p>
              <p className="hidden lg:block w-1/6">2019</p>
              <p className="hidden lg:block w-1/6">6 reviews</p>
              <p className="hidden lg:block w-1/6">100% positive</p>
              <p className="hidden lg:block w-1/6">$1,000</p>
              <p className="hidden lg:flex gap-1 items-center w-1/6 text-blue-600 cursor-pointer">
                More Info <img src={blueArrow} />
              </p>

              {/* Mobile View */}
              <div className="lg:hidden flex flex-col leading-6 w-full m-auto justify-start items-start ml-30">
                <div className="flex justify-between gap-7 px-4 py-1">
                  <span className="font-semibold">Business Name:</span>
                  <p>Flagman_Shop</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Market:</span>
                  <p className="flex gap-2">
                    <img className="w-[20px]" src={usa} /> US
                  </p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Type:</span>
                  <p>Pro Account</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Account Age:</span>
                  <p>2019</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Ratio:</span>
                  <p>100% positive</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Reviews:</span>
                  <p>6 reviews</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Price:</span>
                  <p>$1,000</p>
                </div>
                <p className="text-blue-600 cursor-pointer mt-4 flex justify-center gap-1 ml-24">
                  More Info <img src={blueArrow} />
                </p>
              </div>
            </div>
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row border-b  border-gray-200 py-4 px-4">
              {/* Desktop View */}
              <p className="hidden lg:block w-1/4">Flagman_Shop</p>
              <p className="hidden lg:flex items-center gap-2 w-1/6 ">
                <img className="w-[20px]" src={usa} /> US
              </p>
              <p className="hidden lg:block w-1/6">Pro Account</p>
              <p className="hidden lg:block w-1/6">2019</p>
              <p className="hidden lg:block w-1/6">6 reviews</p>
              <p className="hidden lg:block w-1/6">100% positive</p>
              <p className="hidden lg:block w-1/6">$1,000</p>
              <p className="hidden lg:flex gap-1 items-center w-1/6 text-blue-600 cursor-pointer">
                More Info <img src={blueArrow} />
              </p>

              {/* Mobile View */}
              <div className="lg:hidden flex flex-col leading-6 w-full m-auto justify-start items-start ml-30">
                <div className="flex justify-between gap-7 px-4 py-1">
                  <span className="font-semibold">Business Name:</span>
                  <p>Flagman_Shop</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Market:</span>
                  <p className="flex gap-2">
                    <img className="w-[20px]" src={usa} /> US
                  </p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Type:</span>
                  <p>Pro Account</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Account Age:</span>
                  <p>2019</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Ratio:</span>
                  <p>100% positive</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Reviews:</span>
                  <p>6 reviews</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Price:</span>
                  <p>$1,000</p>
                </div>
                <p className="text-blue-600 cursor-pointer mt-4 flex justify-center gap-1 ml-24">
                  More Info <img src={blueArrow} />
                </p>
              </div>
            </div>
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row border-b  border-gray-200 py-4 px-4">
              {/* Desktop View */}
              <p className="hidden lg:block w-1/4">Flagman_Shop</p>
              <p className="hidden lg:flex items-center gap-2 w-1/6 ">
                <img className="w-[20px]" src={usa} /> US
              </p>
              <p className="hidden lg:block w-1/6">Pro Account</p>
              <p className="hidden lg:block w-1/6">2019</p>
              <p className="hidden lg:block w-1/6">6 reviews</p>
              <p className="hidden lg:block w-1/6">100% positive</p>
              <p className="hidden lg:block w-1/6">$1,000</p>
              <p className="hidden lg:flex gap-1 items-center w-1/6 text-blue-600 cursor-pointer">
                More Info <img src={blueArrow} />
              </p>

              {/* Mobile View */}
              <div className="lg:hidden flex flex-col leading-6 w-full m-auto justify-start items-start ml-30">
                <div className="flex justify-between gap-7 px-4 py-1">
                  <span className="font-semibold">Business Name:</span>
                  <p>Flagman_Shop</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Market:</span>
                  <p className="flex gap-2">
                    <img className="w-[20px]" src={usa} /> US
                  </p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Type:</span>
                  <p>Pro Account</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Account Age:</span>
                  <p>2019</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Ratio:</span>
                  <p>100% positive</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Reviews:</span>
                  <p>6 reviews</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Price:</span>
                  <p>$1,000</p>
                </div>
                <p className="text-blue-600 cursor-pointer mt-4 flex justify-center gap-1 ml-24">
                  More Info <img src={blueArrow} />
                </p>
              </div>
            </div>
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row border-b  border-gray-200 py-4 px-4">
              {/* Desktop View */}
              <p className="hidden lg:block w-1/4">Flagman_Shop</p>
              <p className="hidden lg:flex items-center gap-2 w-1/6 ">
                <img className="w-[20px]" src={usa} /> US
              </p>
              <p className="hidden lg:block w-1/6">Pro Account</p>
              <p className="hidden lg:block w-1/6">2019</p>
              <p className="hidden lg:block w-1/6">6 reviews</p>
              <p className="hidden lg:block w-1/6">100% positive</p>
              <p className="hidden lg:block w-1/6">$1,000</p>
              <p className="hidden lg:flex gap-1 items-center w-1/6 text-blue-600 cursor-pointer">
                More Info <img src={blueArrow} />
              </p>

              {/* Mobile View */}
              <div className="lg:hidden flex flex-col leading-6 w-full m-auto justify-start items-start ml-30">
                <div className="flex justify-between gap-7 px-4 py-1">
                  <span className="font-semibold">Business Name:</span>
                  <p>Flagman_Shop</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Market:</span>
                  <p className="flex gap-2">
                    <img className="w-[20px]" src={usa} /> US
                  </p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Type:</span>
                  <p>Pro Account</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Account Age:</span>
                  <p>2019</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Ratio:</span>
                  <p>100% positive</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Reviews:</span>
                  <p>6 reviews</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Price:</span>
                  <p>$1,000</p>
                </div>
                <p className="text-blue-600 cursor-pointer mt-4 flex justify-center gap-1 ml-24">
                  More Info <img src={blueArrow} />
                </p>
              </div>
            </div>
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row border-b  border-gray-200 py-4 px-4">
              {/* Desktop View */}
              <p className="hidden lg:block w-1/4">Flagman_Shop</p>
              <p className="hidden lg:flex items-center gap-2 w-1/6 ">
                <img className="w-[20px]" src={usa} /> US
              </p>
              <p className="hidden lg:block w-1/6">Pro Account</p>
              <p className="hidden lg:block w-1/6">2019</p>
              <p className="hidden lg:block w-1/6">6 reviews</p>
              <p className="hidden lg:block w-1/6">100% positive</p>
              <p className="hidden lg:block w-1/6">$1,000</p>
              <p className="hidden lg:flex gap-1 items-center w-1/6 text-blue-600 cursor-pointer">
                More Info <img src={blueArrow} />
              </p>

              {/* Mobile View */}
              <div className="lg:hidden flex flex-col leading-6 w-full m-auto justify-start items-start ml-30">
                <div className="flex justify-between gap-7 px-4 py-1">
                  <span className="font-semibold">Business Name:</span>
                  <p>Flagman_Shop</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Market:</span>
                  <p className="flex gap-2">
                    <img className="w-[20px]" src={usa} /> US
                  </p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Type:</span>
                  <p>Pro Account</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Account Age:</span>
                  <p>2019</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Ratio:</span>
                  <p>100% positive</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Reviews:</span>
                  <p>6 reviews</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Price:</span>
                  <p>$1,000</p>
                </div>
                <p className="text-blue-600 cursor-pointer mt-4 flex justify-center gap-1 ml-24">
                  More Info <img src={blueArrow} />
                </p>
              </div>
            </div>
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row border-b  border-gray-200 py-4 px-4">
              {/* Desktop View */}
              <p className="hidden lg:block w-1/4">Flagman_Shop</p>
              <p className="hidden lg:flex items-center gap-2 w-1/6 ">
                <img className="w-[20px]" src={usa} /> US
              </p>
              <p className="hidden lg:block w-1/6">Pro Account</p>
              <p className="hidden lg:block w-1/6">2019</p>
              <p className="hidden lg:block w-1/6">6 reviews</p>
              <p className="hidden lg:block w-1/6">100% positive</p>
              <p className="hidden lg:block w-1/6">$1,000</p>
              <p className="hidden lg:flex gap-1 items-center w-1/6 text-blue-600 cursor-pointer">
                More Info <img src={blueArrow} />
              </p>

              {/* Mobile View */}
              <div className="lg:hidden flex flex-col leading-6 w-full m-auto justify-start items-start ml-30">
                <div className="flex justify-between gap-7 px-4 py-1">
                  <span className="font-semibold">Business Name:</span>
                  <p>Flagman_Shop</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Market:</span>
                  <p className="flex gap-2">
                    <img className="w-[20px]" src={usa} /> US
                  </p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Type:</span>
                  <p>Pro Account</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Account Age:</span>
                  <p>2019</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Ratio:</span>
                  <p>100% positive</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Reviews:</span>
                  <p>6 reviews</p>
                </div>
                <div className="flex justify-between px-4 py-1">
                  <span className="font-semibold">Price:</span>
                  <p>$1,000</p>
                </div>
                <p className="text-blue-600 cursor-pointer mt-4 flex justify-center gap-1 ml-24">
                  More Info <img src={blueArrow} />
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 mt-6 lg:px-0 px-[15%]">
            <button className="border border-orange-500 text-orange-500 lg:px-28 py-2 rounded-md w-full md:w-auto">
              To learn more about the process click here →
            </button>
            <button className="border border-orange-500 text-orange-500 lg:px-28 py-2 rounded-md w-full md:w-auto">
              Interested in Selling Account Visit page →
            </button>
          </div>
        </div>
      </section>

      <section className="px-[10%]">
        <h2 className="font-bold text-[33px] text-center m-auto mt-20">
          {t("benefits_section.title")} 
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <img src={iphone} alt="iPhone" />
          <div className="flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row ml-10 lg:ml-0 items-start gap-5">
              <img src={very} alt="Benefit 1" />
              <div>
                <h3 className="font-bold">
                  {t("benefits_section.benefit_1_title")}
                </h3>{" "}
                <p className="text-[#889196] ">
                  {t("benefits_section.benefit_1_description")}{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row ml-10 lg:ml-0 items-start gap-5">
              <img src={very1} alt="Benefit 2" />
              <div>
                <h3 className="font-bold">
                  {t("benefits_section.benefit_2_title")}
                </h3>{" "}
                <p className="text-[#889196] ">
                  {t("benefits_section.benefit_2_description")}{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row ml-10 lg:ml-0 items-start gap-5">
              <img src={very2} alt="Benefit 3" />
              <div>
                <h3 className="font-bold">
                  {t("benefits_section.benefit_3_title")}
                </h3>{" "}
                <p className="text-[#889196] ">
                  {t("benefits_section.benefit_3_description")}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[10%]">
        <h2 className="font-bold lg:text-[33px] text-[29px] text-center lg:text-start mt-20 mx-5 lg:mx-0">
          {t("amazon_verified_accounts.title")}
        </h2>
        <p className="text-[#889196] text-center lg:text-start px-10 lg:px-0">
          {t("amazon_verified_accounts.description")}
        </p>
        <div className="flex flex-col lg:flex-row-reverse justify-center items-center">
          <img src={group} alt="Amazon Verified Account" />
          <div className="flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row ml-10 lg:ml-0 items-start gap-5">
              <img src={group1} alt="Work around the world" />
              <div>
                <h3 className="font-bold">
                  {t("amazon_verified_accounts.benefit_1_title")}
                </h3>
                <p className="text-[#889196] ">
                  {t("amazon_verified_accounts.benefit_1_description")}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row ml-10 lg:ml-0 items-start gap-5">
              <img src={group2} alt="All types of selling" />
              <div>
                <h3 className="font-bold">
                  {t("amazon_verified_accounts.benefit_2_title")}
                </h3>
                <p className="text-[#889196] ">
                  {t("amazon_verified_accounts.benefit_2_description")}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row ml-10 lg:ml-0 items-start gap-5">
              <img src={group3} alt="Money flow" />
              <div>
                <h3 className="font-bold">
                  {t("amazon_verified_accounts.benefit_3_title")}
                </h3>
                <p className="text-[#889196] ">
                  {t("amazon_verified_accounts.benefit_3_description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:px-[10%] px-[20%] ">
        <h2 className="font-bold lg:text-[33px] text-[29px] text-center lg:text-start lg:ml-[50%] m-auto mt-20">
          {t("buy_account_section.title")}
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <img src={group4} />
          <div className="flex flex-col gap-10">
            <div className="flex flex-col ml-10 lg:ml-10 items-start gap-5">
              <div>
                <h3 className="font-bold text-center lg:text-start text-2xl">
                  {t("buy_account_section.aged_account_title")}
                </h3>
                <p className="text-[#889196] ">
                  {t("buy_account_section.aged_account_description")}
                </p>
              </div>
              <div>
                <h3 className="font-bold mt-10 text-center lg:text-start text-2xl">
                  {t("buy_account_section.new_account_title")}
                </h3>
                <p className="text-[#889196] ">
                  {t("buy_account_section.new_account_description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-bold text-3xl my-20 m-auto text-center">
          {t("pricing.title")}
        </h2>
        <div className="flex justify-between lg:w-[30%] w-[40%] mt-10 rounded-2xl items-center m-auto p-3 border border-gray-200 ">
          <p className="font-bold">{t("pricing.new_amazon_seller_account")}</p>
          <img src={arrowB} />
        </div>
        <div className="flex justify-between lg:w-[30%] w-[40%] rounded-2xl  items-center m-auto p-3 border border-gray-200  mt-10">
          <p className="font-bold">{t("pricing.aged_amazon_seller_account")}</p>
          <img src={arrowB} />
        </div>
      </section>

      <section className="max-w-[1400px] m-auto">
        <h2 className="font-bold text-3xl text-center mt-32 ">
          {t("process.title")}
        </h2>
        <div className="flex flex-col lg:flex-row justify-center gap-10 lg:mx-[10%] mx-[20%] mt-20">
          <div>
            <div className="flex flex-col justify-center items-center text-center">
              <img src={one} />
              <h3 className="font-bold">{t("process.step_1.title")}</h3>
              <p className="text-[#889196]">
                {t("process.step_1.description")}
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center text-center">
              <img src={one2} />
              <h3 className="font-bold">{t("process.step_2.title")}</h3>
              <p className="text-[#889196]">
                {t("process.step_2.description")}
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center text-center">
              <img src={one3} />
              <h3 className="font-bold">{t("process.step_3.title")}</h3>
              <p className="text-[#889196]">
                {t("process.step_3.description")}
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center text-center">
              <img src={one4} />
              <h3 className="font-bold">{t("process.step_4.title")}</h3>
              <p className="text-[#889196]">
                {t("process.step_4.description")}
              </p>
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
}

export default Home;
