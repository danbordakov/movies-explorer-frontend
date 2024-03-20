import logoPath from '../../images/logo.svg';
import burgerMenuPath from '../../images/menu-burger.svg';
import React from "react";
import { Routes, Route, Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

function Header({ onOpenNavigation }) {
  const location = useLocation();
  const navigate = useNavigate();
  const login = () => {
    navigate('/signin');
  }
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
                <button onClick={login} className="header__loginButton">Войти</button>
              </>
            }
          />
          <Route path={location.pathname} element={
              <>
                <div>
                <NavLink to='/movies' className='header__movieLink'>Фильмы</NavLink>
                <NavLink to='/saved-movies' className='header__movieLink'>Сохраненные фильмы</NavLink>
                </div>
                <NavLink to='/profile' className='profileButton'>Аккаунт</NavLink>
                <button className='header__burgerMenu' aria-label='Открыть меню' onClick={onOpenNavigation}><img src={burgerMenuPath} alt="Кнопка меню" /></button>
              </>
          } />
        </Routes>
      </header>
    )
  } else {
    return null;
}
}

export default Header;