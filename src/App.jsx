import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogDetails from './pages/BlogDetails';
import SportsNews from './pages/SportsNews';

import NotFound from './pages/NotFound';
import SportsDetails from './pages/SportsDetails';



const App = () => {
  return (
    <div className='' >
      <Routes>
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path='/sports-news' element={<SportsNews />} />
        <Route path="/sports-details/:id" element={<SportsDetails />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} /> {/* مسیر 404 */}
      </Routes>
    </div>
  );
}

export default App;
