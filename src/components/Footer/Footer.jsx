import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  if (['/', '/movies', '/saved-movies'].includes(location.pathname)) {
  return (
    <footer className="footer">
      <div className="footer__annotation">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </div>
      <div className="footer__links">
        <p className="footer__copyright">© 2024</p>
        <a href="https://practicum.yandex.ru/" className="footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
        <a href="https://github.com/" className="footer__link" target="_blank" rel="noreferrer">Github</a>
      </div>
    </footer>
  )
} else {
  return null;
}
}

export default Footer;