import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__container">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard /> 
      </ul>
      <button className="moviesCardList__more-button">Ещё</button>
    </section>
  )
}

export default MoviesCardList;