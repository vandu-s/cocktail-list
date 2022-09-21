import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import './App.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CocktailPage = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState([]);

  const loadCocktail = async () => {
    await axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setCocktail(res.data.drinks);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadCocktail();
  }, []);
  return (
    <Container>
      <div className="wrapper">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="cocktail_img">
              <img src={cocktail[0]?.strDrinkThumb} alt="drink_img" />
            </div>
          </Grid>
          <Grid item xs={1} />

          <Grid item xs={8}>
            <article class="drink-info">
              <h1 class="drink-name">{cocktail[0]?.strDrink}</h1>
              <p class="drink-desc">{cocktail[0]?.strInstructions}</p>
              <br />
              <ul class="drink-ingredients">
                {cocktail[0]?.strIngredient1 && (
                  <li>{cocktail[0]?.strIngredient1}</li>
                )}
                {cocktail[0]?.strIngredient2 && (
                  <li>{cocktail[0]?.strIngredient2}</li>
                )}
                {cocktail[0]?.strIngredient3 && (
                  <li>{cocktail[0]?.strIngredient3}</li>
                )}
                {cocktail[0]?.strIngredient4 && (
                  <li>{cocktail[0]?.strIngredient4}</li>
                )}
                {cocktail[0]?.strIngredient5 && (
                  <li>{cocktail[0]?.strIngredient5}</li>
                )}
              </ul>
            </article>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default CocktailPage;
