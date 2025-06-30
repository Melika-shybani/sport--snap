import React from 'react';
import catImg1 from "../assets/category-1.png";
import catImg2 from "../assets/category-2.png";
import catImg3 from "../assets/category-3.png";
import catImg4 from "../assets/category-4.png";
import ctImg1 from "../assets/ct1.png";
import ctImg2 from "../assets/ct2.png";
import ctImg3 from "../assets/ct3.png";
import ctImg4 from "../assets/ct4.png";

const Category = () => {
    return (
        <div className='mx-32 mt-72 md:mx-4 md:mt-32'>
            <h4 className='ml-[-100px] mb-2 text-[28px] leading-[38px]  md:ml-22'>Category</h4>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-7 md:gap-4'>
                <div className='md:flex md:flex-col md:items-center'>
                    <div className='w-[290px] h-[116px] bg-[#EBEEF3] flex items-center justify-center my-4 md:w-full md:max-w-[290px]'>
                        <img className='w-[203px] h-[75px] object-contain' src={ctImg1} />
                    </div>
                    <img className='w-[270px] h-[288px] object-contain md:w-full md:max-w-[270px]' src={catImg1} />
                </div>
                <div className='md:flex md:flex-col md:items-center'>
                    <img className='w-[270px] h-[235px] object-contain md:w-full md:max-w-[270px]' src={catImg2} />
                    <div className='w-[270px] h-[116px] bg-[#EBEEF3] flex items-center justify-center my-4 md:w-full md:max-w-[270px]'>
                        <img className='w-[203px] h-[75px] object-contain' src={ctImg2} />
                    </div>
                </div>
                <div className='md:flex md:flex-col md:items-center'>
                    <div className='w-[270px] h-[169px] bg-[#EBEEF3] flex items-center justify-center my-4 md:w-full md:max-w-[270px]'>
                        <img className='w-[248px] h-[39px] object-contain' src={ctImg3} />
                    </div>
                    <img className='w-[270px] h-[288px] object-contain md:w-full md:max-w-[270px]' src={catImg3} />
                </div>
                <div className='md:flex md:flex-col md:items-center'>
                    <img className='w-[270px] h-[286px] object-contain md:w-full md:max-w-[270px]' src={catImg4} />
                    <div className='w-[270px] h-[118px] bg-[#EBEEF3] flex items-center justify-center my-4 md:w-full md:max-w-[270px]'>
                        <img className='w-[210px] h-[78px] object-contain' src={ctImg4} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;