import React from 'react';
import banner from '../../images/banner.png';
import './Banner.css';
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="text-center">
          <img className="banner_img" src={banner} alt="banner" />
        </div>
      </div>
    </>
  );
};

export default Banner;
