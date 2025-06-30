import React from 'react';
import { useLocation } from 'react-router-dom';

const SportsDetails = () => {
  const location = useLocation();
  const { article } = location.state || {}; // گرفتن اطلاعات از state

  if (!article) {
    return <p>خبر پیدا نشد!</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-64 object-cover mb-4 rounded-lg"
          />
        )}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>
        <p className="text-gray-600 mb-4">{article.description}</p>
        <p className="text-gray-500 whitespace-pre-line">{article.content}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-blue-600 hover:underline"
        >
          مطالعه کامل در منبع
        </a>
      </div>
    </div>
  );
};

export default SportsDetails;
