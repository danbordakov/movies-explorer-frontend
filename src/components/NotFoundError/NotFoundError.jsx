import { Link, useNavigate } from 'react-router-dom'

function NotFoundError() {
  const navigate = useNavigate()
  return (
    <section className='notFound'>
      <h1 className='notFound__title'>404</h1>
      <p className='notFound__text'>Страница не найдена</p>
      <Link
        className='notFound__link'
        to={'..'}
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        Назад
      </Link>
    </section>
  )
}

export default NotFoundError;