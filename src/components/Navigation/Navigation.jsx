import { NavLink } from 'react-router-dom';
import closeButtonPath from '../../images/menu-close.svg';

function Navigation({ isOpen, onClose }) {
  
  return (
    <>
      <div className={`darkLayer ${isOpen ? 'darkLayer_visible' : ''}`}></div>
      <div className={`navigation ${isOpen ? 'navigation_opened' : ''}`}>
        <button
          type='button'
          aria-label='Закрыть'
          onClick={onClose}
          className='navigation__closeButton'>

          <img src={closeButtonPath} alt="Кнопка закрытия меню" />
        </button>
        <nav className='navigation__links'>
          <NavLink className='navigation__link' to='/' onClick={onClose}>Главная</NavLink>
          <NavLink className='navigation__link' to='/movies' onClick={onClose}>Фильмы</NavLink>
          <NavLink className='navigation__link' to='/saved-movies' onClick={onClose}>Сохранённые фильмы</NavLink>
          <NavLink to='/profile' className='profileButton profileButton_type_menu' onClick={onClose}>Аккаунт</NavLink>
        </nav>
      </div>
    </>
  )
}

export default Navigation;