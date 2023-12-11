import React from 'react';
import css from './Nav.module.css';

import { NavLink } from 'react-router-dom';
import RentLogo from '../../Img/RentLogo.jpg';

export const Nav = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <img src={RentLogo} alt="Logo" className={css.img} />
        <NavLink  className={`${css.link} ${css.animated}`} to="/">
          Home
        </NavLink>
        <NavLink className={`${css.link} ${css.animated}`} to="/catalog">
          Catalog
        </NavLink>
        <NavLink  className={`${css.link}  ${css.animated}`} to="/favorites">
          Favorites
        </NavLink>
      </div>
    </header>
  );
};
