import SearchForm from "../Movies/SearchForm/SearchForm";
import SavedMoviesCardList from "./SavedMoviesCardList/SavedMoviesCardList";

function SavedMovies() {
  return (
    <main className="movies">
      <SearchForm />
      <SavedMoviesCardList />
    </main>
  )
}

export default SavedMovies;