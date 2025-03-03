import React from "react";
import { useTranslation } from "react-i18next";
import glob from "../../../../assets/MYbhN8KaaEc.png";
import glob1 from "../../../../assets/MYbhN8KaaEc (1).png";
import glob2 from "../../../../assets/MYbhN8KaaEc (2).png";
import small from "../../../../assets/Group 97.png";
import bit from "../../../../assets/MYbhN8KaaEc (3).png";
import bit2 from "../../../../assets/MYbhN8KaaEc (4).png";
import bit3 from "../../../../assets/MYbhN8KaaEc (5).png";
import bit4 from "../../../../assets/MYbhN8KaaEc (6).png";
import bit5 from "../../../../assets/MYbhN8KaaEc (7).png";
import bit6 from "../../../../assets/MYbhN8KaaEc (8).png";

const BlogCard = ({ imageSrc, title, description, author, date }) => (
  <div className="rounded-lg lg:w-[22%] min-w-[250px] w-[80%] m-auto lg:m-0 mt-10 lg:mt-0">
    <img src={imageSrc} className="w-full object-cover rounded-t-lg" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-xs mt-5">{description}</p>
    </div>
    <div className="text-gray-500 text-xs mt-1 flex gap-2">
      <img src={small} />
      <div>
        <p>{author}</p>
        <p className="mt-2">{date}</p>
      </div>
    </div>
  </div>
);

function Blog() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="min-h-screen">
        <div className="text-center py-8">
          <h1 className="text-3xl font-bold">{t("blog.title")}</h1>
        </div>
        <div className="flex flex-wrap justify-center space-x-2 mb-6 gap-2 lg:gap-0">
          {["All categories", "Category 1", "Category 2", "Category 3", "Category 4"].map((category, index) => (
            <button
              key={index}
              className={`${
                index === 0
                  ? "bg-orange-400 text-white"
                  : "text-orange-400 bg-white"
              } px-10 py-2 rounded-md border-[1px]`}
            >
              {t(`blog.categories.${category.replace(/\s+/g, "_").toLowerCase()}`)}
            </button>
          ))}
        </div>
        <div className="max-w-4xl mx-auto mb-8 flex flex-col lg:flex-row">
          <img
            src={glob}
            className="lg:w-[60%] rounded-t-lg w-[90%] m-auto lg:m-0"
            alt={t("blog.main_image_alt")}
          />
          <div className="p-4">
            <h2 className="text-[17px] font-bold">{t("blog.main_title")}</h2>
            <p className="text-gray-600 text-sm mt-2">
              {t("blog.main_description")}
            </p>
            <div className="text-gray-500 text-xs mt-5 flex gap-2">
              <img src={small} />
              <div>
                <p>{t("blog.author")}</p>
                <p className="mt-2">{t("blog.date")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-2 ">
          <BlogCard
            id="1"
            imageSrc={glob1}
            title={t("blog.card1_title")}
            description={t("blog.card1_description")}
            author={t("blog.author")}
            date={t("blog.date")}
          />
          <BlogCard
            id="2"
            imageSrc={glob2}
            title={t("blog.card2_title")}
            description={t("blog.card2_description")}
            author={t("blog.author")}
            date={t("blog.date")}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-20">
          <BlogCard
            id="3"
            imageSrc={bit}
            title={t("blog.card3_title")}
            description={t("blog.card3_description")}
            author={t("blog.author")}
            date={t("blog.date")}
          />
          <BlogCard
            id="4"
            imageSrc={bit2}
            title={t("blog.card4_title")}
            description={t("blog.card4_description")}
            author={t("blog.author")}
            date={t("blog.date")}
          />
          <BlogCard
            id="5"
            imageSrc={bit3}
            title={t("blog.card5_title")}
            description={t("blog.card5_description")}
            author={t("blog.author")}
            date={t("blog.date")}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-20">
          <BlogCard
            id="6"
            imageSrc={bit}
            title={t("blog.card6_title")}
            description={t("blog.card6_description")}
            author={t("blog.author")}
            date={t("blog.date")}
          />
          <BlogCard
            id="7"
            imageSrc={bit2}
            title={t("blog.card7_title")}
            description={t("blog.card7_description")}
            author={t("blog.author")}
            date={t("blog.date")}
          />
          <BlogCard
            id="8"
            imageSrc={bit3}
            title={t("blog.card8_title")}
            description={t("blog.card8_description")}
            author={t("blog.author")}
            date={t("blog.date")}
          />
        </div>

        <section>
          <div className="flex flex-wrap justify-center gap-6 mt-20">
            <div className="rounded-lg lg:w-[22%] min-w-[250px] w-[80%] m-auto lg:m-0 mt-10 lg:mt-0">
              <img src={bit4} className="w-full object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  {t("blog.card9_title")}
                </h3>
                <p className="text-gray-500 text-xs mt-5">
                  {t("blog.card9_description")}
                </p>
              </div>
              <div className="text-gray-500 text-xs mt-1 flex gap-2">
                <img src={small} />
                <div>
                  <p>{t("blog.author")}</p>
                  <p className="mt-2">{t("blog.date")}</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg lg:w-[22%] min-w-[250px]  w-[80%] m-auto lg:m-0 mt-10 lg:mt-0">
              <img src={bit5} className="w-full object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  {t("blog.card10_title")}
                </h3>
                <p className="text-gray-500 text-xs mt-5">
                  {t("blog.card10_description")}
                </p>
              </div>
              <div className="text-gray-500 text-xs mt-1 flex gap-2">
                <img src={small} />
                <div>
                  <p>{t("blog.author")}</p>
                  <p className="mt-2">{t("blog.date")}</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg lg:w-[22%] min-w-[250px]  w-[80%] m-auto lg:m-0 mt-10 lg:mt-0">
              <img src={bit6} className="w-full object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  {t("blog.card11_title")}
                </h3>
                <p className="text-gray-500 text-xs mt-5">
                  {t("blog.card11_description")}
                </p>
              </div>
              <div className="text-gray-500 text-xs mt-1 flex gap-2">
                <img src={small} />
                <div>
                  <p>{t("blog.author")}</p>
                  <p className="mt-2">{t("blog.date")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center mt-32 space-x-1 ">
          <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition">
            &lt;
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
            1
          </button>
          <button className="bg-white border-amber-700 border text-black px-4 py-2 rounded-md">
            2
          </button>
          <button className="bg-white border-amber-700 border text-black px-4 py-2 rounded-md">
            3
          </button>
          <button className="bg-white border-amber-700 border text-black px-4 py-2 rounded-md">
            4
          </button>
          <button className="bg-white border-amber-700 border text-black px-4 py-2 rounded-md">
            ...
          </button>
          <button className="bg-white border-amber-700 border text-black px-4 py-2 rounded-md">
            15
          </button>
          <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
