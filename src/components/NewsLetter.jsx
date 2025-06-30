import React from 'react';
import newsbg from "../assets/news-bg.png";
import newsText from "../assets/news-text.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import arrow from "../assets/arrow.png";

const NewsLetter = () => {
    return (
        <div className='mx-auto my-8 md:my-16 lg:my-32 max-h-auto lg:max-h-[385px] w-full max-w-[1168px] bg-[#262626]/10'>
            {/* Desktop Version (exactly as original) */}
            <div className='hidden lg:flex gap-5'>
                <div className='m-20'>
                    <img className='w-[614px] h-[120px] my-10 object-contain' src={newsText} alt="Newsletter" />
                    <div className="relative">
                        <input
                            placeholder="example@gmail.com"
                            type="email"
                            className="w-[480px] h-[58px] rounded-md border border-[#262626] text-[#262626]/60 p-3 text-lg"
                        />
                        <img
                            src={arrow}
                            className="absolute right-[50px] top-1/2 transform -translate-y-1/2 bg-[#262626] text-white w-[70px] h-[58px] p-4 rounded-md object-contain"
                            alt="Submit"
                        />
                    </div>
                </div>
                <div>
                    <img className='w-[520px] h-[385px]' src={newsbg} alt="Newsletter background" />
                </div>
            </div>
            
            {/* Mobile Version */}
            <div className='lg:hidden flex flex-col p-6'>
                <img className='w-full max-w-[614px] h-auto my-6 object-contain' src={newsText} alt="Newsletter" />
                
                <div className="relative mb-6">
                    <input
                        placeholder="example@gmail.com"
                        type="email"
                        className="w-full h-[48px] rounded-md border border-[#262626] text-[#262626]/60 p-3 text-base"
                    />
                    <img
                        src={arrow}
                        className="absolute right-0 top-0 h-full bg-[#262626] w-[60px] p-3 rounded-r-md object-contain"
                        alt="Submit"
                    />
                </div>
                
                <img className='w-full h-auto mb-6 object-cover rounded-lg' src={newsbg} alt="Newsletter background" />
                
                <div className='flex text-white gap-4'>
                    <img src={facebook} className='bg-[#262626] w-10 h-10 object-contain p-2 rounded-md' alt="Facebook" />
                    <img src={instagram} className='bg-[#262626] w-10 h-10 object-contain p-2 rounded-md' alt="Instagram" />
                    <img src={twitter} className='bg-[#262626] w-10 h-10 object-contain p-2 rounded-md' alt="Twitter" />
                </div>
            </div>

            {/* Social Icons (Desktop) */}
            <div className='hidden lg:flex text-white gap-4 my-5'>
                <img src={facebook} className='bg-[#262626] w-[44px] h-[44px] object-contain p-2 rounded-md' alt="Facebook" />
                <img src={instagram} className='bg-[#262626] w-[44px] h-[44px] object-contain p-2 rounded-md' alt="Instagram" />
                <img src={twitter} className='bg-[#262626] w-[44px] h-[44px] object-contain p-2 rounded-md' alt="Twitter" />
            </div>
        </div>
    );
}

export default NewsLetter;