import React from "react";
import small from "../../../assets/Group 97.png";
import globe from "../../../assets/MYbhN8KaaEc.png";
import smalll from "../../../assets/Ellipse 38.png";
import link from "../../../assets/linkedin (1) 1.png";
import link2 from "../../../assets/facebook (1) 1.png";
import link3 from "../../../assets/small-bookmark 1.png";
import bit4 from '../../../assets/MYbhN8KaaEc (6).png'
import bit5 from '../../../assets/MYbhN8KaaEc (7).png'
import bit6 from '../../../assets/MYbhN8KaaEc (8).png'
import { useTranslation } from "react-i18next";

function CoolWatched() {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-start flex justify-start items-start lg:ml-36 ml-2 mt-5">
        {t("breadcrumbb.home")} / {t("breadcrumbb.blog")} /{" "}
        <span className="font-bold">{t("breadcrumbb.title")}</span>
      </h2>
      <section className="lg:ml-[30%] ml-2 mt-10 flex flex-col gap-5">
        <h2 className="font-bold text-start text-2xl">
          {t("content.title")}
        </h2>
        <p className="mt-2">
          ⭐⭐⭐⭐⭐ <span className="text-[#01044D]">{t("content.reviews")}</span>
        </p>
        <div className="text-gray-500 text-xs mt-1 flex gap-2">
          <img src={small} alt="Small Icon" />
          <div>
            <p>{t("content.author")}</p>
            <p className="mt-2">{t("content.date")}</p>
          </div>
        </div>
        <p className="text-[#889196] border-amber-700 border-l-2 lg:w-[500px] text-[15px] px-10">
          {t("content.description")}
        </p>
      </section>

      <section>
        <img src={globe} className="lg:w-full my-5 lg:h-[600px] object-cover" />
        <div className="lg:px-[28%] px-10">
  <strong className="font-bold">
    {t('breadcrumbbbb.type_of_trade')}
  </strong>
  <p className="text-[#889196] my-4 mt-8">
    {t('breadcrumbbbb.crypto_trading_advice')}
  </p>
  <strong className="font-bold mt-20">
    {t('breadcrumbbbb.trading_tracking_news')}
  </strong>
  <p className="text-[#889196] my-5">
    {t('breadcrumbbbb.crypto_trading_description')}
    <br />
    <br />
    <p>
      {t('breadcrumbbbb.stock_exchange_search')}
    </p>
  </p>
  <strong className="font-bold mt-10">
    {t('breadcrumbbbb.psychology')}
  </strong>
  <p className="text-[#889196] my-4 mt-8">
    {t('breadcrumbbbb.short_term_trade')}
  </p>
  <strong className="font-bold mt-10">
    {t('breadcrumbbbb.beginner_cryptotrader_tips')}
  </strong>
  <p className="text-[#889196] my-4 mt-8">
    {t('breadcrumbbbb.beginner_cryptotrader_advice')}
  </p>
</div>

      </section>
      <section>
  <div className="flex lg:px-[28%] flex-col lg:flex-row mt-10 justify-between items-center">
    <div className="flex items-center gap-2">
      <img src={smalll} />
      <div>
        <p className="font-bold">{t('laptop.claps')}</p>
        <p className="text-[#889196]">{t('laptop.applause')}</p>
      </div>
    </div>
    <div className="flex gap-2">
      <img src={link} />
      <img src={link2} />
      <img src={link3} />
    </div>
  </div>
  <button className="text-center m-auto border border-[#FD8D2A] lg:px-60 px-20 py-1 mt-20 lg:mx-[26%] mx-[20%]">
    {t('laptop.writeComment')}
  </button>
</section>


<section>
      <h2 className="font-bold text-4xl text-center mt-20">{t('learnMore.title')}</h2>
      <div className="flex flex-wrap justify-center gap-6 mt-20">
        <div className="rounded-lg lg:w-[22%] min-w-[250px] w-[80%] m-auto lg:m-0 mt-10 lg:mt-0">
          <img src={bit4} className="w-full object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{t('learnMore.card1.title')}</h3>
            <p className="text-gray-500 text-xs mt-5">{t('learnMore.card1.description')}</p>
          </div>
          <div className="text-gray-500 text-xs mt-1 flex gap-2">
            <img src={small} />
            <div>
              <p>{t('learnMore.card1.author')}</p>
              <p className="mt-2">{t('learnMore.card1.date')}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg lg:w-[22%] min-w-[250px] w-[80%] m-auto lg:m-0 mt-10 lg:mt-0">
          <img src={bit5} className="w-full object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{t('learnMore.card2.title')}</h3>
            <p className="text-gray-500 text-xs mt-5">{t('learnMore.card2.description')}</p>
          </div>
          <div className="text-gray-500 text-xs mt-1 flex gap-2">
            <img src={small} />
            <div>
              <p>{t('learnMore.card2.author')}</p>
              <p className="mt-2">{t('learnMore.card2.date')}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg lg:w-[22%] min-w-[250px] w-[80%] m-auto lg:m-0 mt-10 lg:mt-0">
          <img src={bit6} className="w-full object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{t('learnMore.card3.title')}</h3>
            <p className="text-gray-500 text-xs mt-5">{t('learnMore.card3.description')}</p>
          </div>
          <div className="text-gray-500 text-xs mt-1 flex gap-2">
            <img src={small} />
            <div>
              <p>{t('learnMore.card3.author')}</p>
              <p className="mt-2">{t('learnMore.card3.date')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default CoolWatched;
