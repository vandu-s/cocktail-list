import React, { useState, useEffect } from 'react';
import './menu.css';
import axios from 'axios';

const Menu = ({ menu, setMenu }) => {
  const [menuName, setMenuName] = useState([]);
  const getMenu = async () => {
    await axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
      .then((res) => {
        setMenuName(res.data.drinks);
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
        {menuName.map((item) => {
          return <p onClick={setMenu(item.strCategory)}>{item.strCategory}</p>;
        })}
      </div>
    </>
  );
};

export default Menu;
