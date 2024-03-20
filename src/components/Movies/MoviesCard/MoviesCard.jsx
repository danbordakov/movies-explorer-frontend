import React from "react";

function MoviesCard() {
  const [isAdded, setIsAdded] = React.useState(false);

  function handleAddButton() {
    isAdded ? setIsAdded(false) : setIsAdded(true);
  }

  return (
    <li className="movieCard">
      <img src="https://m.media-amazon.com/images/I/618-nxYP6vL._SL1000_.jpg" alt="альт из пропсов, которых пока нет" className="movieCard__poster"/>
      <h2 className="movieCard__title">33 слова о дизайне</h2>
      <button onClick={handleAddButton} className={`movieCard__add-button ${isAdded ? 'movieCard__add-button_active' : ''}`} aria-label="Сохранить/Удалить"></button>
      <p className="movieCard__duration">1ч45м</p>
    </li>
  )
}

export default MoviesCard;