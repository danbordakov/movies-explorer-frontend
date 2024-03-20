import arrowPath from '../../../images/portfolio-link_arrow.svg'

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link-container">
          <a href="https://danbordakov.github.io/how-to-learn/" rel="noreferrer" target='_blank' className="portfolio__link">
            Статичный сайт
            <img src={arrowPath} alt='стрелка-ссылка'/>
          </a>
        </li>
        <li className="portfolio__link-container">
          <a href="https://danbordakov.github.io/russian-travel/index.html" rel="noreferrer" target='_blank' className="portfolio__link">
            Адаптивный сайт
            <img src={arrowPath} alt='стрелка-ссылка'/>
          </a>
        </li>
        <li className="portfolio__link-container">
          <a href="https://pr15.bordakov.nomoredomainsmonster.ru/" rel="noreferrer" target='_blank' className="portfolio__link">
            Одностраничное приложение
            <img src={arrowPath} alt='стрелка-ссылка'/>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;