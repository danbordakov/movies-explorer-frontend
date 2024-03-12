import logoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom'

function Login() {
  return (
    <section className='reglog'>
      <Link to='/' className='reglog__logo header__logo'>
        <img src={logoPath} alt="Логотип сайта" />
      </Link>
      <h1 className='reglog__title'>Рады видеть!</h1>
      <form className='reglog__form'>
        <span className='reglog__label'>E-mail</span>
        <input
          className='reglog__input'
          required
          id='email'
          type="email"
          name='email'
          minLength='2'
          maxLength='50'
          placeholder='Введите адрес электронной почты'          
        />
        <span className='reglog__label'>Пароль</span>
        <input
          className='reglog__input'
          required
          id='password'
          type="password"
          name='password'
          minLength="2"
          maxLength="200"
          placeholder='Придумайте пароль'
        />
        <span className='reglog__error reglog__error_visible'>Текст ошибки</span>
        <button className='reglog__submitButton reglog__submitButton_type_login' type='submit'>Войти</button>
      </form>
      <p className='reglog__link'>
        Ещё не зарегистрированы?&nbsp;
        <Link to='/signup' className='reglog__link_type_link'>
          Регистрация
        </Link>
      </p>
    </section>
  )
}

export default Login;