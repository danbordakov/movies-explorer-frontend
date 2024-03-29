function SearchForm() {
  return (
    <form id="form" role="search" className="searchForm">
      <input type="search" id="query" name="q" placeholder="Фильм" aria-label="Поиск фильма" className="searchForm__input" />
      <button className="searchForm__button">
        <svg width="80" height="34" viewBox="0 0 80 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="34" rx="17" fill="#FF6838"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M41.7929 18.2638C40.361 19.6957 38.0394 19.6957 36.6075 18.2638C35.1755 16.8318 35.1755 14.5102 36.6075 13.0783C38.0394 11.6464 40.361 11.6464 41.7929 13.0783C43.2248 14.5102 43.2248 16.8318 41.7929 18.2638ZM42.2333 19.6467C40.2731 21.1461 37.4575 20.9994 35.6647 19.2066C33.712 17.254 33.712 14.0881 35.6647 12.1355C37.6173 10.1829 40.7831 10.1829 42.7357 12.1355C44.5285 13.9283 44.6753 16.7437 43.1761 18.7039L46.7428 22.2706L45.8 23.2134L42.2333 19.6467Z" fill="white"/>
        </svg>
      </button>
      <label className="searchForm__shortMeter">
        <input type="checkbox" className="searchForm__shortMeter-toggle"/>
        <span className="searchForm__shortMeter-toggle_visible"></span>
        <span className="searchForm__shortMeter-toggleName">Короткометражки</span>
      </label>
    </form>
  )
}

export default SearchForm;