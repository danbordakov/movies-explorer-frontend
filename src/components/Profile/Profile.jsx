import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [isOnRedaction, setIsOnRedaction] = React.useState(false);
  const [name, setName] = React.useState('Даниил');
  const [email, setEmail] = React.useState('email@email.ru');
  const [newName, setNewName] = React.useState(name);
  const navigate = useNavigate();
  const logout = () => {
    navigate('/');
  }

  function enableRedaction() {
    setIsOnRedaction(true);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsOnRedaction(false);
    setNewName(name);
  }


  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {newName}!</h1>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__form-row">
          <span className="profile__form-label">Имя</span>
          <input
            className={`profile__form-input ${isOnRedaction ? 'profile__form-input_focused' : ''}`}
            type="text"
            placeholder="Введите новое имя"
            value={name}
            onChange={handleChangeName}
            readOnly={isOnRedaction ? false : true}
          />
        </div>
        <div className="profile__form-row profile__form-row_type_email">
          <span className="profile__form-label">E-mail</span>
          <input
            className={`profile__form-input ${isOnRedaction ? 'profile__form-input_focused' : ''}`}
            type="email"
            placeholder="Введите новый e-mail"
            value={email}
            onChange={handleChangeEmail}
            readOnly={isOnRedaction ? false : true}
          />
        </div>
        <button
          className={`profile__button profile__button_type_save ${isOnRedaction ? 'profile__button_visible' : ''}`}
        >
          Сохранить
        </button>
      </form>
      <button
        className={`profile__button ${isOnRedaction ? '' : 'profile__button_visible'}`}
        onClick={enableRedaction}
      >
        Редактировать
      </button>
      <button
        className={`profile__button profile__button_type_logout ${isOnRedaction ? '' : 'profile__button_visible'}`}
        onClick={logout}
      >
        Выйти из аккаунта
      </button>
    </section>
  )
}

export default Profile;