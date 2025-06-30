import React, { useState } from 'react';
import slider1 from "../assets/slider-1.png";
import slider2 from "../assets/slider-2.jpg";
import slider3 from "../assets/slider-3.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

const slides = [
    {
        image: slider1,
        date: "Agence France-Presse - 04 June 2023",
        title: "Lionel Messi Leaving Ligue 1 Team Paris Saint-Germain, Club Confirms",
        description: "The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals",
        category: "Football",
    },
    {
        image: slider2,
        date: "John Smith, October 10, 2023",
        title: "Historic Basketball Match Ends in Nail-Biting Finish",
        description: "The city witnessed an unforgettable basketball showdown as the local team clinched victory in the final seconds, leaving fans on the edge of their seats.",
        category: "Basketball",
    },
    {
        image: slider3,
        date: "Emily Davis, October 10, 2023",
        title: "Epic Tennis Final Sets New Records",
        description: "A thrilling five-set tennis final captivated audiences as the world No. 1 claimed victory in a match that will be remembered for years to come.",
        category: "Tennis",
    },
];

const BannerSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 my-8 sm:my-12 md:my-16 lg:my-20 xl:my-32'>
            <div
                className='w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[518px] relative bg-cover bg-center rounded-lg overflow-hidden'
                style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            >
                {/* Blur */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] sm:backdrop-blur-[1.5px]"></div>

                {/* Category */}
                <button className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 w-[80px] sm:w-[90px] md:w-[107px] h-[24px] sm:h-[30px] md:h-[36px] rounded-md text-xs sm:text-sm text-[#EBEEF3] font-semibold border-[#EBEEF3] border-[1px] z-20">
                    {slides[currentSlide].category}
                </button>

                {/* Content */}
                <div className='max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[700px] z-10 absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 p-2 sm:p-3'>
                    <span className='text-[#F9FAFC] leading-[1.1] text-xs sm:text-sm md:text-base my-1 sm:my-2'>{slides[currentSlide].date}</span>
                    <h5 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#F9FAFC] leading-tight sm:leading-snug md:leading-[1.2] my-1 sm:my-2'>
                        {slides[currentSlide].title}
                    </h5>
                    <p className='text-xs sm:text-sm md:text-base lg:text-lg text-[#FFFFFF] leading-relaxed sm:leading-loose my-1 sm:my-2 line-clamp-2 sm:line-clamp-3'>
                        {slides[currentSlide].description}
                    </p>
                </div>
            </div>

            {/* Navigation */}
            <div className='flex justify-center sm:justify-end items-center mt-4 sm:mt-5 gap-2 sm:gap-4 md:gap-5 lg:gap-7 px-2 sm:px-4'>
                <div
                    className='bg-[#BAB8B8] w-[40px] sm:w-[50px] md:w-[60px] lg:w-[70px] h-[30px] sm:h-[40px] md:h-[45px] lg:h-[50px] flex justify-center items-center rounded-sm cursor-pointer'
                    onClick={prevSlide}
                >
                    <FaLongArrowAltLeft className='text-[#EBEEF3] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' />
                </div>
                {slides.map((_, index) => (
                    <p
                        key={index}
                        className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl ${
                            index === currentSlide ? 'text-[#EBEEF3] bg-[#262626]' : 'text-[#262626]/60'
                        } rounded-full w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] md:w-[36px] md:h-[36px] flex justify-center items-center cursor-pointer`}
                        onClick={() => setCurrentSlide(index)}
                    >
                        {index + 1}
                    </p>
                ))}
                <div
                    className='bg-[#262626] w-[40px] sm:w-[50px] md:w-[60px] lg:w-[70px] h-[30px] sm:h-[40px] md:h-[45px] lg:h-[50px] flex justify-center items-center rounded-sm cursor-pointer'
                    onClick={nextSlide}
                >
                    <FaLongArrowAltRight className='text-[#EBEEF3] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' />
                </div>
            </div>
        </div>
    );
};

export default BannerSlider;