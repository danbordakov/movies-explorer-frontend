import studentPhoto from "../../../images/photo.jpeg"

function AboutMe() {
  return (
    <section className="aboutMe" id="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>
      <h3 className="aboutMe__name">Даниил</h3>
      <h4 className="aboutMe__speciality">Фронтенд-разработчик, 29 лет</h4>
      <p className="aboutMe__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deleniti quasi quasi quasi quasi quasi nesciunt dolores porro aliquid suscipit quibusdam quibusdam quibusdam quibusdam quibusdam nulla, assumenda quisquam libero doloribus consequatur qui quia eum obcaecati, sapiente, rem dolorum incidunt fugit earum? Fuga, laborum.
      </p>
      <a href="https://github.com/danbordakov" className="aboutMe__github" target="_blank" rel="noreferrer">Github</a>
      <img src={studentPhoto} className="aboutMe__photo" alt="Фото студента" />
    </section>
  )
}

export default AboutMe;