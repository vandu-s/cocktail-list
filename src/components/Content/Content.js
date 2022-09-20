import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@mui/material';

import Menu from '../Menu/Menu';
import './content.css';
import Card from '../Card/Card';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
const Content = () => {
  const [cocktails, setCocktails] = useState([]);
  const [cocktailName, setcocktailName] = useState('');
  const [menu, setMenu] = useState('');
  const loadCocktails = async () => {
    await axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
      .then((res) => {
        // console.log(res.data.drinks);
        setCocktails(res.data.drinks);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const loadCocktailsOnSearch = async () => {
    await axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
      )
      .then((res) => {
        setCocktails(res.data.drinks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(cocktailName);
  const getInput = (e) => {
    setcocktailName(e.target.value);
  };
  useEffect(() => {
    loadCocktails();
  }, []);
  console.log('menu', menu);

  return (
    <>
      <Container fixed>
        <div className="main_container">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <div className="left_container">
                <Menu menu={menu} setMenu={setMenu} />
              </div>
            </Grid>
            <Grid item xs={1} />

            <Grid item xs={8}>
              {/* <div className="input">
                <input
                  type="text"
                  onChange={getInput}
                  value={cocktailName}
                  placeholder="search your favourite items..."
                  name="search"
                />
                <button type="submit">
                  <SearchIcon />
                </button>
              </div> */}

              <FormControl
                sx={{ m: 1, width: '100%', backgroundColor: 'white' }}
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-password"
                  onChange={getInput}
                  value={cocktailName}
                  placeholder="search your favourite items..."
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={loadCocktailsOnSearch} edge="end">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              {cocktails.map((item) => {
                return (
                  <Card
                    strDrinkThumb={item.strDrinkThumb}
                    strDrink={item.strDrink}
                    strCategory={item.strCategory}
                    key={item.idDrink}
                  />
                );
              })}
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Content;
