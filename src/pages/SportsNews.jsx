import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SportsNews = () => {
  const [news, setNews] = useState([]);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=sports&apiKey=${apiKey}`
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [apiKey]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        اخبار و بلاگ‌های ورزشی
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {article.urlToImage ? (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                تصویر موجود نیست
              </div>
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <Link
                to={`/sports-details/${index}`}
                state={{ article }} // انتقال داده به صفحه جزئیات
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                بیشتر بخوانید
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsNews;
