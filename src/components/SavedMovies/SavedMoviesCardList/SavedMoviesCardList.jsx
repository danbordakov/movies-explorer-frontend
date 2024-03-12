import SavedMoviesCard from "../SavedMoviesCard/SavedMoviesCard";

function SavedMoviesCardList() {
  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__container">
        <SavedMoviesCard />
        <SavedMoviesCard /> 
        <SavedMoviesCard /> 
        <SavedMoviesCard /> 
        <SavedMoviesCard /> 
      </ul>
    </section>
  )
}

export default SavedMoviesCardList;