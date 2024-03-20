function SavedMoviesCard() {
  return (
    <li className="movieCard">
      <img src="https://m.media-amazon.com/images/I/618-nxYP6vL._SL1000_.jpg" alt="альт из пропсов, которых пока нет" className="movieCard__poster"/>
      <h2 className="movieCard__title">33 слова о дизайне</h2>
      <button className="movieCard__remove-button" aria-label="Удалить"></button>
      <p className="movieCard__duration">1ч45м</p>
    </li>
  )
}

export default SavedMoviesCard;