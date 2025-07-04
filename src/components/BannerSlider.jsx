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



export default function BannerSlider() {
const [CurrentSlide,SetCurrentSlide]=useState(0)

const nextSlide =()=>{
    SetCurrentSlide((prev)=> (prev+1) % slides.length)
}


const prevSlide =()=>{
    SetCurrentSlide((prev)=> (prev-1 + slides.length )% slides.length)
}
  return (
    <>
    <div className='flex items-center m-auto w-full   px-3 py-6'>
        <div className='container h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[518px] relative bg-cover bg-center rounded-[10px] overflow-hidden' style={{backgroundImage:`url(${slides[CurrentSlide].image})`}}>
            {/* Belur */}
            <div className='absolute bg-black/60 inset-0 rounded-[10px] '></div>


            <button className="absolute top-3 sm:top-3 md:top-4 left-4 sm:left-3 md:left-4 w-[80px] sm:w-[90px] md:w-[107px] h-[24px] sm:h-[30px] md:h-[36px] rounded-md text-xs sm:text-sm text-[#EBEEF3] font-semibold border-[#EBEEF3] border-[1px] z-20">
                   {slides[CurrentSlide].category}
            </button>



            <div className='max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[700px] z-10 absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 p-2 sm:p-3'>
                <span className='text-[#F9FAFC] leading-[1.1] text-xs sm:text-sm md:text-base my-1 sm:my-2'>{slides[CurrentSlide].date}</span>
                <h5 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#F9FAFC] leading-tight sm:leading-snug md:leading-[1.2] my-1 sm:my-2'>
                    {slides[CurrentSlide].title}
                </h5>
                <p className='text-xs sm:text-sm md:text-base lg:text-lg text-[#FFFFFF] leading-relaxed sm:leading-loose my-1 sm:my-2 line-clamp-2 sm:line-clamp-3'>
                    {slides[CurrentSlide].description}
                </p>
            </div>
        </div>
    </div>


    <div className='flex items-center m-auto justify-center py-3 gap-5 cursor-pointer'>
        <div onClick={prevSlide} className='w-[60px] h-[40px] rounded-[7px] bg-[#00000036] items-center flex justify-center text-[#EBEEF3]' >
            <FaLongArrowAltLeft size={20}/>
        </div>

        {slides.map((_,index)=>(
            <p key={index} onClick={()=>SetCurrentSlide(index)} className={`cursor-pointer items-center text-xl font-semibold flex justify-center rounded-full  w-[40px] h-[40px] 
             ${index===CurrentSlide ?'text-[#EBEEF3] bg-[#EB5E28]' : 'text-[#00000036] border-[#00000036] outline-3' } `}>
                {index+1}
            </p>
        ))}

         <div onClick={nextSlide} className='w-[60px] h-[40px] rounded-[7px] bg-[#00000084] text-[#EBEEF3]  items-center flex justify-center cursor-pointer ' >
            <FaLongArrowAltRight size={20}/>
        </div>
    </div>
    </>
  )
}
