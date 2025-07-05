import React, { useState } from 'react';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import newsData from "../data.js";

const Article = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const filteredNews = newsData.filter(item => item.id >= 7 && item.id <= 18 );


    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % filteredNews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + filteredNews.length) % filteredNews.length);
    };

    return (
        <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 my-8 sm:my-12 md:my-16 lg:my-20 xl:my-32'>
            <div className='flex flex-col md:flex-row gap-4 sm:gap-5 overflow-hidden'>
                <div className='flex transition-transform duration-500 ease-in-out gap-6 sm:gap-8'  style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
                    {filteredNews.map(news => (
                        <div key={news.id} className='w-full md:w-1/3 flex-shrink-0'>
                            <div className='relative'>
                                <Link to={`/blog/${news.id}`}>
                                    <img 
                                        src={news.image} 
                                        className='w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[248px] object-cover rounded-lg'
                                        alt={news.title} 
                                    />
                                    <button className="absolute top-3 sm:top-4 right-3 sm:right-4 w-[80px] sm:w-[90px] md:w-[107px] h-[28px] sm:h-[32px] md:h-[36px] rounded-md text-xs sm:text-sm text-[#EBEEF3] font-semibold border-[#EBEEF3] border-[1px] z-20">
                                        {news.category}
                                    </button>
                                </Link>
                            </div>

                            <div className='my-3 sm:my-4'>
                                <div className='flex items-center gap-3 sm:gap-4 my-3 sm:my-4 '>
                                    <img 
                                        src={news.profile} 
                                        className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] rounded-full object-cover" 
                                        alt={news.author} 
                                    />
                                    <p className='leading-[1.2] sm:leading-[22px] text-xs sm:text-sm text-[#3E3232]'>
                                        {news.author}
                                    </p>
                                </div>

                                <div className='max-w-full my-3 sm:my-4'>
                                    <span className='text-xs sm:text-sm text-[#262626]/60'>{news.date}</span>
                                    <h5 className='text-base sm:text-lg md:text-xl text-[#262626] my-2 sm:my-3 md:my-4'>
                                        {news.title}
                                    </h5>
                                    <p className='text-[#696868] text-sm sm:text-base my-2 sm:my-3 md:my-4 line-clamp-2 sm:line-clamp-3'>
                                        {news.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <div className='flex justify-center md:justify-end mt-6 sm:mt-8'>
                <div onClick={prevSlide} className='bg-[#EB5E28] w-[50px] rounded-full  flex justify-center items-center cursor-pointer hover:bg-[#2626269a]/90 transition'>
                    <FaLongArrowAltLeft className='text-[#EBEEF3] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'/>
                </div>
                <div onClick={nextSlide} className='bg-[#2626269a] w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer mx-3 sm:mx-4 md:mx-5 hover:bg-[#EB5E28]/90 transition'>
                    <FaLongArrowAltRight className='text-[#EBEEF3] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'/>
                </div>
            </div>
        </div>
    );
};

export default Article;