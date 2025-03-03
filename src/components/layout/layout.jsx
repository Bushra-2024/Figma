import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom"; 
import logo from "../../assets/лого 1.png";
import menuIcon from "../../assetS/menu (1) 1.png";
import closeIcon from "../../assets/menu (1) 1.png";
import logoo from "../../assets/AMAZMARKET (2) 2.png";
import facebook from "../../assets/facebook-logo (1).png";
import facebook1 from "../../assets/instagram-logo.png";
import facebook2 from "../../assets/instagram-logo (1).png";
import facebook3 from "../../assets/instagram-logo (2).png";
import facebook4 from "../../assets/linkedin-logo 1.png";
import facebook5 from "../../assets/youtube 1.png";
import group115 from "../../assets/Group 115.png";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div>
      <header className="flex lg:justify-center justify-between items-center py-5 lg:px-10 px-10 bg-[#222F3E] gap-0 lg:gap-[30%] relative">
        <img src={logo} alt="Logo" />
        <nav className="hidden lg:flex gap-5">
        <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#B95515] font-bold" : "text-gray-400"
            }
          >
            {t("header.home")}
          </NavLink>
          <NavLink to="/buyaccount" className="text-[#B95515] font-bold">
            {t("header.buy_account")}
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-[#B95515] font-bold" : "text-gray-400"
            }
          >
            {t("header.blog")}
          </NavLink>
          <div className="relative group">
            <button className="text-gray-400 group-hover:text-[#B95515] font-bold">
              {t("header.services")}
            </button>

            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
              <NavLink
                to="/services/cool-watched"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Cool Watched
              </NavLink>
              <NavLink
                to="/services/amazon-watch"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Amazon Watch
              </NavLink>
              <NavLink
                to="/services/utility-bills"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                Utility Bills
              </NavLink>
            </div>
          </div>
          <div className="ml-10">
            <button
              className={`px-2 py-1 rounded-full border-2 font-bold mx-1 ${
                i18n.language === "en"
                  ? "text-[#B95515] border-[#B95515] bg-gray-200"
                  : "text-gray-400 border-gray-400"
              }`}
              onClick={() => TranslateClick("en")}
            >
              EN
            </button>
            <button
              className={`px-2 py-1 rounded-full border-2 font-bold mx-1 ${
                i18n.language === "ru"
                  ? "text-[#B95515] border-[#B95515] bg-gray-200"
                  : "text-gray-400 border-gray-400"
              }`}
              onClick={() => TranslateClick("ru")}
            >
              RU
            </button>
            <button
              className={`px-2 py-1 rounded-full border-2 font-bold mx-1 ${
                i18n.language === "tj"
                  ? "text-[#B95515] border-[#B95515] bg-gray-200"
                  : "text-gray-400 border-gray-400"
              }`}
              onClick={() => TranslateClick("tj")}
            >
              TJ
            </button>
          </div>
        </nav>

        <img
          src={menuOpen ? closeIcon : menuIcon}
          alt="Menu"
          className="lg:hidden w-8 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        {menuOpen && (
          <div className="lg:hidden absolute top-0 left-0 w-[60%] h-screen bg-[#222F3E] text-white flex flex-col gap-6 p-6 shadow-lg">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="py-2 border-b"
            >
              {t("header.home")}
            </NavLink>
            <NavLink
              to="/buyaccount"
              onClick={() => setMenuOpen(false)}
              className="py-2 border-b"
            >
              {t("header.buy_account")}
            </NavLink>
            <NavLink
              to="/blog"
              onClick={() => setMenuOpen(false)}
              className="py-2 border-b"
            >
              {t("header.blog")}
            </NavLink>
            <details className="border-b">
              <summary className="py-2 cursor-pointer font-bold">
                {t("header.services")}
              </summary>

              <NavLink
                to="/services/cool-watched"
                onClick={() => setMenuOpen(false)}
                className="block pl-4 py-1"
              >
                Cool Watched
              </NavLink>
              <NavLink
                to="/services/amazon-watch"
                onClick={() => setMenuOpen(false)}
                className="block pl-4 py-1"
              >
                Amazon Watch
              </NavLink>
              <NavLink
                to="/services/utility-bills"
                onClick={() => setMenuOpen(false)}
                className="block pl-4 py-1"
              >
                Utility Bills
              </NavLink>
            </details>
            <div className="flex gap-4 mt-4">
              <button
                className={`px-3 py-1 border-2 font-bold ${
                  i18n.language === "en"
                    ? "text-[#B95515] border-[#B95515] bg-gray-200"
                    : "text-gray-400 border-gray-400"
                }`}
                onClick={() => TranslateClick("en")}
              >
                EN
              </button>
              <button
                className={`px-3 py-1 border-2 font-bold ${
                  i18n.language === "ru"
                    ? "text-[#B95515] border-[#B95515] bg-gray-200"
                    : "text-gray-400 border-gray-400"
                }`}
                onClick={() => TranslateClick("ru")}
              >
                RU
              </button>
              <button
                className={`px-3 py-1 border-2 font-bold ${
                  i18n.language === "tj"
                    ? "text-[#B95515] border-[#B95515] bg-gray-200"
                    : "text-gray-400 border-gray-400"
                }`}
                onClick={() => TranslateClick("tj")}
              >
                TJ
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="">
        <Outlet />
      </main>
      <footer className="flex flex-col lg:flex-row mx-[10%] justify-evenly mt-[10%] pb-20">
        <div className="leading-10">
          <img src={logoo} alt="Logo" />
          <p className="font-semibold">{t("footer.buy_account")}</p>
          <p className="font-semibold">{t("footer.sell_account")}</p>
          <p className="font-semibold">{t("footer.services")}</p>
          <p className="font-semibold">{t("footer.blog")}</p>
        </div>
        <div>
          <p className="font-semibold">{t("footer.blog")}</p>
          <p className="text-[#889196]">{t("footer.contact_email")}</p>
          <p className="font-semibold mt-10">{t("footer.follow_us")}</p>
          <div className="flex gap-1 mt-5">
            <img src={facebook} alt="Facebook" />
            <img src={facebook1} alt="Facebook 1" />
            <img src={facebook2} alt="Facebook 2" />
            <img src={facebook3} alt="Facebook 3" />
            <img src={facebook4} alt="Facebook 4" />
            <img src={facebook5} alt="Facebook 5" />
            <img src={facebook2} alt="Facebook 2" />
          </div>
        </div>
        <div>
          <h2 className="font-bold mb-5">{t("footer.contact_us")}</h2>
          <div className="flex gap-1 mb-10">
            <input
              type="text"
              placeholder={t("footer.enter_email")}
              className="border border-gray-100 p-2 rounded-xl"
            />
            <button className="bg-[#EB5F07] px-[10px] text-white py-[2px] font-bold">
              {t("footer.submit")}
            </button>
          </div>
          <img src={group115} alt="Group 115" />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
