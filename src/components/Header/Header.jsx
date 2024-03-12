import logoPath from '../../images/logo.svg';
import burgerMenuPath from '../../images/menu-burger.svg';
import React from "react";
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';

function Header({ onOpenNavigation }) {
  const linksAuthorized = (
    <>
      <div>
      <NavLink to='/movies' className='header__movieLink'>Фильмы</NavLink>
      <NavLink to='/saved-movies' className='header__movieLink'>Сохраненные фильмы</NavLink>
      </div>
      <NavLink to='/profile' className='header__profileButton'>Аккаунт</NavLink>
      <button className='header__burgerMenu' aria-label='Открыть меню' onClick={onOpenNavigation}><img src={burgerMenuPath} alt="Кнопка меню" /></button>
    </>
  )
  const location = useLocation();
  if (['/', '/movies', '/saved-movies', '/profile'].includes(location.pathname)) {
    return (
      <header className="header">
        <Link to='/' className="header__logo">
          <img src={logoPath} alt="Логотип сайта" />
        </Link>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Link to='/signup' className="header__registryLink">Регистрация</Link>
                <Link to='/signin'>
                  <button className="header__loginButton">Войти</button>
                </Link>
              </>
            }
          />
          <Route path="/movies" element={linksAuthorized} />
          <Route path="/saved-movies" element={linksAuthorized} />
          <Route path="/profile" element={linksAuthorized} />
        </Routes>
      </header>
    )
  } else {
    return null;
}
}

export default Header;