import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import small from "../../../../assets/Group 97.png";
import glob from "../../../../assets/MYbhN8KaaEc.png";
import glob1 from "../../../../assets/MYbhN8KaaEc (1).png";
import glob2 from "../../../../assets/MYbhN8KaaEc (2).png";
import bit from "../../../../assets/MYbhN8KaaEc (3).png";
import bit2 from "../../../../assets/MYbhN8KaaEc (4).png";
import bit3 from "../../../../assets/MYbhN8KaaEc (5).png";
import bit4 from "../../../../assets/MYbhN8KaaEc (6).png";
import bit5 from "../../../../assets/MYbhN8KaaEc (7).png";
import bit6 from "../../../../assets/MYbhN8KaaEc (8).png";

const blogPosts = [
  { id: 1, imageSrc: glob, title: "CRYPTO TRADING RECOMMENDATIONS", description: "Usually, there are three main types of trade...", author: "AMAMARKETS", date: "October 2, 2019 • 4 days" },
  { id: 2, imageSrc: glob1, title: "CRYPTO TRADING SYSTEM", description: "The number of existing cryptocurrencies...", author: "AMAMARKETS", date: "October 2, 2019 • 4 days" },
  { id: 3, imageSrc: glob2, title: "CRYPTO TRADING PROGRAMS FAQ AND NEWS", description: "The number of existing cryptocurrencies...", author: "AMAMARKETS", date: "October 2, 2019 • 4 days" },
  { id: 4, imageSrc: bit, title: "How to earn money with crypto trading algorithm?", description: "The number of existing cryptocurrencies...", author: "AMAMARKETS", date: "October 2, 2019 • 4 days" },
  { id: 5, imageSrc: bit2, title: "Best crypto trading groups trading algorithm?", description: "The number of existing cryptocurrencies...", author: "AMAMARKETS", date: "October 2, 2019 • 4 days" },
  { id: 6, imageSrc: bit3, title: "How crypto trading services works?", description: "The number of existing cryptocurrencies...", author: "AMAMARKETS", date: "October 2, 2019 • 4 days" },
  { id: 7, imageSrc: bit4, title: "How to earn money with crypto trading algorithm?", description: "The number of existing cryptocurrencies...", author: "AMAMARKETS", date: "October 2, 2019 • 4 days" },
  { id: 8, imageSrc: bit5, title: "Best crypto trading groups trading algorithm?", description: "The number of existing cryptocurrencies...", author: "AMAMARKETS", date: "October 2, 2019 • 4 days" },
  { id: 9, imageSrc: bit6, title: "How crypto trading services works?", description: "The number of existing cryptocurrencies...", author: "AMAMARKETS", date: "October 2, 2019 • 4 days" },
];

const BlogDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const blogPost = blogPosts.find((post) => post.id === parseInt(id));
    setPost(blogPost);
  }, [id]);
  
  return (
    <div className="min-h-screen">
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold">{t("blog_detail.title")}</h1>
      </div>
      <div className="max-w-4xl mx-auto mb-8 flex flex-col lg:flex-row">
        <img
          src={post.imageSrc}
          className="lg:w-[60%] rounded-t-lg w-[90%] m-auto lg:m-0"
          alt={post.title}
        />
        <div className="p-4">
          <h2 className="text-[17px] font-bold">{post.title}</h2> 
          <p className="text-gray-600 text-sm mt-2">{post.description}</p> 
          <div className="text-gray-500 text-xs mt-5 flex gap-2">
            <img src={small} alt="author" />
            <div>
              <p>{post.author}</p> 
              <p className="mt-2">{post.date}</p> 
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-20">
        {blogPosts.map((postItem) => (
          <div
            key={postItem.id}
            className="rounded-lg lg:w-[22%] min-w-[250px] w-[80%] m-auto lg:m-0 mt-10 lg:mt-0"
          >
            <img
              src={postItem.imageSrc}
              className="w-full object-cover rounded-t-lg"
              alt={postItem.title}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{postItem.title}</h3> 
              <p className="text-gray-500 text-xs mt-5">{postItem.description}</p> 
            </div>
            <div className="text-gray-500 text-xs mt-1 flex gap-2">
              <img src={small} alt="author" />
              <div>
                <p>{postItem.author}</p>
                <p className="mt-2">{postItem.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-32 space-x-1 ">
        <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition">
          {t("blog_detail.pagination.previous")}
        </button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md">1</button>
        <button className="bg-white border-amber-700 border text-black px-4 py-2 rounded-md">2</button>
        <button className="bg-white border-amber-700 border text-black px-4 py-2 rounded-md">3</button>
        <button className="bg-white border-amber-700 border text-black px-4 py-2 rounded-md">4</button>
        <button className="bg-white border-amber-700 border text-black px-4 py-2 rounded-md">...</button>
        <button className="bg-white border-amber-700 border text-black px-4 py-2 rounded-md">15</button>
        <button className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition">
          {t("blog_detail.pagination.next")}
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;
