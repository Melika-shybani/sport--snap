import React from 'react';
import { useNavigate } from 'react-router-dom';
import itemData from "../data.js";

const Trendingitem = () => {


    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/blog/${id}`);
    };

    

    return (
        <div className='flex flex-col bg-[#EBEEF3] lg:flex-row justify-center p-4 md:p-8 lg:m-8 gap-5 xl:m-16 2xl:m-32'>
           {/* سمت چپ IDs 3 to 5 */}

            <div className='lg:mx-5 mb-8 lg:mb-0'>
                <h4 className='text-[#262626] text-xl md:text-2xl lg:text-[28px] leading-[1.2] md:leading-[1.3] lg:leading-[38px] mb-4 lg:mb-6'>
                    Trending item
                </h4>

                {itemData
                    .filter((item) => item.id >= 3 && item.id <= 5)
                    .map((item) => (
                        <div 
                            key={item.id} 
                            className='flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 my-4 md:my-5 cursor-pointer'
                            onClick={() => handleClick(item.id)}
                        >
                            <div className='w-full sm:w-auto'>
                                <img 
                                    src={item.image}
                                    alt={item.title}
                                    className='w-full sm:w-[150px] md:w-[180px] lg:w-[234px] h-[120px] sm:h-[100px] md:h-[130px] lg:h-[150px] rounded-md object-contain'
                                />
                            </div>
                            <div className='w-full sm:max-w-[calc(100%-170px)] md:max-w-[calc(100%-200px)] lg:max-w-[270px]'>
                                <span className='text-xs leading-[109.3%] text-[#262626]/60 my-1 md:my-2'>{item.date}</span>
                                <h5 className='text-base md:text-lg leading-[136.9%] text-[#262626] my-1 md:my-2'>
                                    {item.title}
                                </h5>
                                <p className='text-xs md:text-sm leading-[123.9%] text-[#696868] line-clamp-2'>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>

             {/* سمت راست */}

            {itemData
                .filter((item) => item.id === 6)
                .map((item) => (
                    <div
                        key={item.id}
                        style={{ backgroundImage: `url(${item.image})` }}
                        className="w-full lg:w-[500px] xl:w-[570px] h-[350px] sm:h-[400px] md:h-[500px] lg:h-[609px] relative bg-cover bg-center cursor-pointer rounded-md overflow-hidden"
                        onClick={() => handleClick(item.id)}
                    >
                        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1.5px]"></div>

                        <button className="hover:bg-[#EB5E28]/70 absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 w-[80px] sm:w-[90px] lg:w-[107px] h-[28px] sm:h-[32px] lg:h-[36px] rounded-md text-[#EBEEF3] font-semibold border-[#EBEEF3] border-[1px] z-20 text-xs sm:text-sm">
                            {item.category}
                        </button>

                        <div className="absolute bottom-4 left-4 text-white z-10 p-2 sm:p-4">
                            <span className="text-sm sm:text-base lg:text-lg leading-[109.9%]">{item.date}</span>
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-1 sm:mt-2">
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Trendingitem;

