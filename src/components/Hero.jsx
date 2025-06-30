import React from 'react';
import { Link } from 'react-router-dom'; // اضافه کردن Link از react-router-dom
import basket from "../assets/basketball-bg.png";
import heroText from "../assets/hero-text.png";
import basketplayer from "../assets/basketball-player.png";
import newsData from "../data.js";

const Hero = () => {
    // فیلتر کردن داده‌ها برای گرفتن فقط مقالات با id برابر با 1 و 2
    const filteredNews = newsData.filter(card => card.id === 1 || card.id === 2);

    return (
        <div
            className='flex flex-col lg:flex-row items-center justify-start h-screen bg-no-repeat bg-left'
            style={{ backgroundImage: `url(${basket})` }}
        >
            {/* متن سمت چپ */}
            <div className='flex flex-col items-start justify-center ml-16'>
                <img src={heroText} alt="Hero Text" className="z-10 mt-20 lg:w-[500px] lg:mt-[0px]  "  />
            </div>

            {/* تصویر بازیکن نزدیک به متن */}
            <div className='relative  flex flex-col items-center justify-center text-center lg:mt-[300px]
            lg:ml-[-300px]'>
                <img src={basketplayer} alt="Basketball Player" className="w-[620px] h-[480px] z-20 mb-2" />
                <p className='text-[#262626] mb-2 max-w-xs mt-[-100px]'>
                    The EuroLeague Finals Top Scorer is the individual award for the player that
                    gained the highest points in the EuroLeague Finals
                </p>
                <button className='w-[285px] h-[62px] mt-2 text-white bg-[#262626] px-2 py-2 rounded
                '>Continue Reading</button>
            </div>

            {/* دو کارت سمت راست */}
            <div className='hidden lg:flex flex-col gap-4 mr-8 mt-[300px] ml-[100px]'>
                {/* رندر کردن کارت‌ها با استفاده از map */}
                {filteredNews.map((card) => (
                    <Link to={`/blog/${card.id}`} key={card.id}> {/* لینک به صفحه جزئیات مقاله */}
                        <div
                            className='w-[270px] h-[233px] bg-cover bg-center rounded-lg p-4
                             text-white flex flex-col justify-end relative overflow-hidden'
                            style={{ backgroundImage: `url(${card.image})` }}
                        >
                            {/* گرادینت بلور در پایین کارت */}
                            <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t
                             from-black/40 backdrop-blur-sm'></div>
                            <span className='text-xs text-white relative'>{card.date}</span>
                            <p className='text-sm relative'>{card.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Hero;
