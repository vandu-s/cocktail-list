import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import Menu from '../Menu/Menu';
import './content.css';
import Card from '../Card/Card';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import Loader from '../Loader/Loader';
const Content = () => {
  const [cocktails, setCocktails] = useState([]);
  const [cocktailName, setcocktailName] = useState('');
  const [menu, setMenu] = useState('Ordinary Drink');
  const [loading, setLoading] = useState(true);
  const loadCocktails = async () => {
    await axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
      .then((res) => {
        setCocktails(res.data.drinks);
        setLoading(false);
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
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getInput = (e) => {
    setcocktailName(e.target.value);
  };
  useEffect(() => {
    loadCocktails();
  }, []);
  return (
    <>
      <Container fixed>
        <div className="main_container">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <div className="left_container">
                <Menu
                  menu={menu}
                  setMenu={setMenu}
                  setCocktails={setCocktails}
                  setLoading={setLoading}
                />
              </div>
            </Grid>
            <Grid item xs={1} />

            <Grid item xs={8}>
              <FormControl
                sx={{
                  my: 4,
                  width: '100%',
                  backgroundColor: 'white',
                  boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important',
                }}
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-weight"
                  onChange={getInput}
                  value={cocktailName}
                  onKeyDown={loadCocktailsOnSearch}
                  placeholder="search your favourite items..."
                  endAdornment={
                    <InputAdornment
                      onClick={loadCocktailsOnSearch}
                      position="end"
                    >
                      <SearchIcon />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </FormControl>

              {loading ? (
                <Loader />
              ) : (
                <>
                  {cocktails?.map((item) => {
                    return (
                      <Card
                        strDrinkThumb={item.strDrinkThumb}
                        strDrink={item.strDrink}
                        strCategory={item.strCategory}
                        key={item.idDrink}
                        idDrink={item.idDrink}
                      />
                    );
                  })}
                </>
              )}
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Content;
