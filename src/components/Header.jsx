import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMenu, IoClose } from "react-icons/io5";
export default function Header() {

    const [isOpen,setIsOpen]=useState(false)
  return (
    <>
        <header className="shadow-xl  w-full h[60px] bg-light/20 relative py-6 px-5 z-50">
            <div className="container  flex justify-between py-1 items-center mx-5 ">
               <h1 className="lg:text-[#EB5E28] text-[#262626ba] lg:text-3xl text-2xl font-semibold font-serif lg:ms-0 ms-7 lg:px-0 ">Sport News</h1 >

               <ul className="hidden lg:flex gap-5 cursor-pointer ">
                    <li className="text-[#EB5E28]">Home</li>
                    <li className="text-[#262626d9]">Category</li>
                    <li className="text-[#262626d9]">Trending</li>
                    <li className="text-[#262626d9]">Recent News</li>
                    <li className="text-[#262626d9]">Clubs Ranking</li>
                    <li className="text-[#262626d9]">Sports Article</li>
               </ul>

               <div className="hidden lg:flex ">
                <button className="cursor-pointer bg-[#EB5E28]/80 text-amber-50 font-semibold flex gap-1 rounded-[15px] items-center py-2 px-4">
                    <CiSearch size={24}/>Search
                </button>
               </div>

               {/* منو موبایل */}
               <div className="lg:hidden flex gap-5 items-center justify-center me-8">
                     <button>
                        <CiSearch size={24} />
                    </button>
                    <button onClick={()=>{setIsOpen(!isOpen)}}>
                        {isOpen ? <IoClose size={24}/>: <IoMenu color="#EB5E28" size={24}/>}
                    </button>
               </div>
            </div>

            {/* لیست موبایل */}

            {isOpen &&(
                <ul className="flex flex-col py-2 gap-3 text-center font-semibold mt-2 ">
                    <li className="text-[#EB5E28] py-2  bg-[#EBEEF3] ">Home</li>
                    <li className="text-[#262626d9] ">Category</li>
                    <li className="text-[#262626d9] py-2 bg-[#EBEEF3]">Trending</li>
                    <li className="text-[#262626d9]">Recent News</li>
                    <li className="text-[#262626d9] py-2 bg-[#EBEEF3]">Clubs Ranking</li>
                    <li className="text-[#262626d9]">Sports Article</li>
                </ul>
            )}
        </header>
    
    </>
  )
}
