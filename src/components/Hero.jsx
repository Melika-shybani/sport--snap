import React from 'react'
import basket from '../assets/basketball-bg.png'
import HeroText from '../assets/hero-text.png'
import BasketPlayer from "../assets/basketball-player.png";
import newsData from '../data';
import { Link } from 'react-router-dom';

export default function Hero() {

    const filteredNews=newsData.filter(card=> card.id===1 || card.id===2 );
  return (
    <>
        <div className='bg-left bg-no-repeat w-[100vw] overflow-hidden flex gap-5 m-auto justify-center  flex-wrap  px-7 py-16 ' style={{backgroundImage:`url(${basket})` }}>

            {/* متن سمت چپ  */}
   
                <img className='w-[550px]  lg:w-[470px] h-[300px] ps-8 my-10' src={HeroText} alt="HeroText" />
        
            {/* تصویر وسط صفحه */}
            <div className='flex flex-col'>
                <div className='w-[420px] md:w-[550px] h-[400px]'>
                    <img className='' src={BasketPlayer} alt="BasketPlayer" />
                </div>
                <div className='flex text-center items-center flex-col gap-5'>
                    <p className='text-lg w-[350px]'>The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals</p>
                    <button className='bg-[#EB5E28] w-[240px] h-[60px] text-amber-50 text-xl rounded-md transition-all  hover:bg-[#262626]'>continue reading</button>
                </div>
            </div>
            {/* کارت های سمت راست */}
            <div className='hidden lg:flex flex-col gap-5 '>
                 {filteredNews.map((e)=>(
                    <Link to={`/blog/${e.id}`} key={e.id}>
                        <div className='w-[270px] h-[233px] rounded-lg p-4 relative flex flex-col justify-end overflow-hidden ' style={{backgroundImage:`url(${e.image})`}}>
                            <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F2F2F2]/40 backdrop-blur-sm'></div>
                            <span className='text-xs text-white relative'>{e.date}</span>
                            <p className='text-sm relative'>{e.title}</p>
                        </div>
                    </Link>
                 ))}
            </div>
            </div>
 
    </>
  )
}
