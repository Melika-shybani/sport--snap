import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Category from '../components/Category';
import TrendingNews from '../components/TrendingNews';
import BannerSlider from '../components/BannerSlider';
import ClubRanking from '../components/ClubRanking';
import Article from '../components/Article';
import NewsLetter from '../components/NewsLetter';
import Lottie from 'lottie-react';
import loderBasketball from '../assets/loaderBasketball.json'; 

const Home = () => {
  const [Loading, SetLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      SetLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {Loading ? (
        <div className="w-full h-screen flex items-center justify-center ">
          <div className="w-[470px] h-[380px] ">
            <Lottie animationData={loderBasketball} loop={true} />
          </div>
        </div>
      ) : (
        <>
          <Header />
          <Hero />
          <Category />
          <TrendingNews />
          <BannerSlider />
          <ClubRanking />
          <Article />
          <NewsLetter />
        </>
      )}
    </>
  );
};

export default Home;
