import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Category from '../components/Category';
import TrendingNews from '../components/TrendingNews';
import BannerSlider from '../components/BannerSlider';
import ClubRanking from '../components/ClubRanking';
import Article from '../components/Article';
import NewsLetter from '../components/NewsLetter';
import 
const Home = () => {
    const[Loading,SetLoading]=useState(true)

    React.useEffect(() => {
        
        const timer = setTimeout(() => {
            SetLoading(false); 
        }, 2000); 
        return () => clearTimeout(timer); 

    }, []);

    return (
        
        <>
           {Loading ? (
                <p className="text-center text-gray-600"> <DNA/> </p> // لودر ساده
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
}

export default Home;
