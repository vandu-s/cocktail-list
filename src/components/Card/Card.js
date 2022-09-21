import React from 'react';
import './Card.css';
import { Grid, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Card = ({ strDrinkThumb, strDrink, strCategory, idDrink }) => {
  return (
    <>
      <Link to={`/cocktail/${idDrink}`}>
        <div className="card">
          <div className="left_item">
            <img src={strDrinkThumb} alt="cocktail" className="dish_img" />
            <div className="dish_name">
              <h4>{strDrink}</h4>
              <p className="price">{strCategory}</p>
            </div>
          </div>
          <div className="right_item">
            <Button variant="outlined">Add</Button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
