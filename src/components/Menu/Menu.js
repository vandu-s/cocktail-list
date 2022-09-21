import React, { useState, useEffect } from 'react';
import './menu.css';
import axios from 'axios';

const Menu = ({ menu, setMenu, setCocktails, setLoading }) => {
  const [menuList, setmenuList] = useState([]);
  const getMenu = async () => {
    await axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
      .then((res) => {
        setmenuList(res.data.drinks);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const loadCocktails = async () => {
    await axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${menu}`)
      .then((res) => {
        setLoading(true);

        setCocktails(res.data.drinks);
        setLoading(false);
        console.log(res.data.drinks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <div className="menu">
        <h3>Menu</h3>
        {menuList.map((item) => {
          return (
            <p
              key={item.strCategory}
              onClick={async () => {
                await setMenu(item.strCategory);
                loadCocktails();
              }}
            >
              {item.strCategory}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
