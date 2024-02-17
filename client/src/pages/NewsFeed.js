import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";


const NewsFeed = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(
          "https://finnhub.io/api/v1/news?category=forex&minId=20&token=cn8fdrpr01qocbpg7jt0cn8fdrpr01qocbpg7jtg"
        );
        const data = response.data;
        // Filter out the news article with ID 7343367
        const filteredData = data.filter(news => news.id !== 7343367);
        setNewsData(filteredData);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
  
    getNews();
  }, []);
  

  return (
    <div className="flex flex-row justify-center items-center flex-wrap gap-10">
      {loading ? ( // Render spinner if loading is true
        <Spinner />
      ) : (
        newsData.map((news, index) => (
          <div
            key={index}
            className="w-full md:w-[30%] bg-white border border-gray-200 rounded-lg sm:h-[450px]"
          >
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              <img
                className="rounded-t-lg w-full h-[220px]"
                src={news.image}
                alt="newsImage"
              />
            </a>
            <div className="py-2 px-4">
              <a href={news.url} target="_blank" rel="noopener noreferrer">
                <h5 className="mb-2 text-sm sm:text-base md:text-lg font-bold tracking-tight text-gray-900">
                  {news.headline.slice(0, 100)}
                </h5>
              </a>
              <p className="font-normal text-sm text-gray-700 dark:text-gray-400 line-clamp-4">
                {news.summary.slice(0, 150)}
              </p>
              <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 my-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        ))
      )}
    </div>
  );
};

export default NewsFeed;
