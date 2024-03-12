function AboutProject() {
  return (
    <section className="aboutProject" id="aboutProject">
      <h2 className="aboutProject__title">О проекте</h2>
      <ul className="aboutProject__items">
        <li className="aboutProject__item">
          <h3 className="aboutProject__itemTitle">Дипломный проект включал 5 этапов</h3>
          <p className="aboutProject__itemText">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="aboutProject__item">
          <h3 className="aboutProject__itemTitle">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__itemText">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="aboutProject__progressScale">
        <p className="aboutProject__progressScale-weeks">1 неделя</p>
        <p className="aboutProject__progressScale-weeks">4 недели</p>
        <p className="aboutProject__progressScale-speciality">Back-end</p>
        <p className="aboutProject__progressScale-speciality">Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;