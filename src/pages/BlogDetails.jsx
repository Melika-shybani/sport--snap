import React from 'react';
import { useParams, Link } from 'react-router-dom';
import newsData from "../data.js";
import Header from '../components/Header.jsx';

const BlogDetails = () => {
    const { id } = useParams();
    const news = newsData.find((item) => item.id === parseInt(id));

    if (!news) return <div className="text-center py-10">مقاله پیدا نشد!</div>;

    const relatedNews = newsData.filter((item) => item.category === news.category && item.id !== news.id);

    return (
        <>
        <Header/>
        <div className='flex justify-center mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32
         my-8 sm:my-12 md:my-16 lg:my-20 xl:my-32'>
            <div className='w-full max-w-[900px]'>
                {/* Title and Metadata */}
                <div className='mb-6'>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#262626]">{news.title}</h2>
                    <div className="flex text-xs sm:text-sm text-[#262626]/60 mt-2">
                        <p>{news.date}</p>
                        <p className="mx-2">|</p>
                        <p>{news.category}</p>
                    </div>
                </div>

                {/* Image */}
                <div className="my-4 sm:my-5">
                    <img 
                        src={news.image} 
                        alt={news.title} 
                        className="rounded-md w-full object-contain h-[300px] sm:h-[300px] md:h-[400px]" 
                    />
                </div>

                {/* Content */}
                <div className="prose max-w-none ">
                    <h4 className="text-lg sm:text-xl font-semibold my-3 sm:my-4 text-[#EB5E28]">Introduction</h4>
                    <p className="text-sm sm:text-base text-black/70">{news.introduction}</p>

                    {/* Content Parts */}
                    {news.desc_part1 && news.title_part1 && (
                        <div className="my-4 sm:my-5">
                            <h4 className="font-semibold text-base sm:text-lg text-[#EB5E28]">{news.title_part1}</h4>
                            <p className="text-sm sm:text-base text-black/70">{news.desc_part1}</p>
                        </div>
                    )}

                    {news.desc_part2 && news.title_part2 && (
                        <div className="my-4 sm:my-5">
                            <h4 className="font-semibold text-base sm:text-lg text-[#EB5E28]">{news.title_part2}</h4>
                            <p className="text-sm sm:text-base text-black/70">{news.desc_part2}</p>
                        </div>
                    )}

                    {news.desc_part3 && news.title_part3 && (
                        <div className="my-4 sm:my-5">
                            <h4 className="font-semibold text-base sm:text-lg text-[#EB5E28]">{news.title_part3}</h4>
                            <p className="text-sm sm:text-base text-black/70">{news.desc_part3}</p>
                        </div>
                    )}

                    {news.desc_part4 && news.title_part4 && (
                        <div className="my-4 sm:my-5">
                            <h4 className="font-semibold text-base sm:text-lg text-[#EB5E28]">{news.title_part4}</h4>
                            <p className="text-sm sm:text-base text-black/70">{news.desc_part4}</p>
                        </div>
                    )}

                    {news.desc_part5 && news.title_part5 && (
                        <div className="my-4 sm:my-5">
                            <h4 className="font-semibold text-base sm:text-lg text-[#EB5E28]">{news.title_part5}</h4>
                            <p className="text-sm sm:text-base text-black/70">{news.desc_part5}</p>
                        </div>
                    )}
                </div>

                {/* Related News Section */}
                {relatedNews.length > 0 && (
                    <div className="my-8 sm:my-10">
                        <h3 className="text-xl sm:text-2xl font-semibold text-[#262626]">Related News</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4
                         sm:gap-5 mt-4 sm:mt-5">
                            {relatedNews.map((related) => (
                                <div 
                                    key={related.id} 
                                    className="w-full h-auto sm:h-[400px] bg-white rounded-md 
                                    shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                                >
                                    <Link to={`/blog/${related.id}`}>
                                        <img 
                                            src={related.image}
                                            alt={related.title}
                                            className="w-full h-[150px] sm:h-[200px] object-cover
                                             rounded-t-md"
                                        />
                                        <div className="p-3 sm:p-4">
                                            <h5 className="text-base sm:text-lg font-semibold
                                             text-[#262626] line-clamp-2">{related.title}</h5>
                                            <p className="text-xs sm:text-sm text-[#696868] my-1 sm:my-2">
                                                
                                                {related.date}
                                            
                                            </p>
                                            <span className="inline-block bg-[#262626] text-xs sm:text-sm 
                                            font-semibold 
                                            text-white px-3 py-1 rounded-2xl">
                                                {related.category}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
        </>
    );
}

export default BlogDetails;