import React from 'react';
import banner from '../../images/banner.png';
import './Banner.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="cafe_info">
          <div>
            {' '}
            <h1>Le Cafe</h1>
            <div className="location">
              <LocationOnIcon className="L_icon" />
              <p>78 Sazz Street, India</p>
            </div>
            <br />
            <Button variant="contained" className="btn">
              Open
            </Button>
          </div>
        </div>

        <div className="text-center">
          <img className="banner_img" src={banner} alt="banner" />
        </div>
      </div>
    </>
  );
};

export default Banner;
