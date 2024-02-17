import axios from "axios";
import React, { useEffect, useState } from "react";

const NewsFeed = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const response = await axios.get(
        "https://finnhub.io/api/v1/news?category=forex&minId=20&token=cn8fdrpr01qocbpg7jt0cn8fdrpr01qocbpg7jtg"
      );
      const data = response.data;
      setNewsData(data);
    };

    getNews();
  }, []);

  return (
    <div className="flex flex-row justify-center items-center flex-wrap gap-10">
      {newsData.map((news, index) => (
        <div
          key={index}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full h-[30rem]"
        >
          <a href={news.url} target="_blank" rel="noopener noreferrer">
            <img
              className="rounded-t-lg w-full h-[220px]"
              src={news.image}
              alt="newsImage"
            />
          </a>
          <div className="p-5">
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {news.headline}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
              {news.summary}
            </p>
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 mt-8 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
