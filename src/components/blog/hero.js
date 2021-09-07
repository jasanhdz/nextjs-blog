import styled from 'styled-components'
import PropTypes from 'prop-types'

const HeroStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  h1 {
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 10px;
  }
  .date {
    margin: 0;
  }
  .container {
    img {
      object-fit: cover;
      max-width: 100%;
      height: auto;
    }
  }
  .about {
    margin: 0;
    padding: 24px;
    max-width: 500px;
    width: 100%;
  }
  .primary {
    color: #6c5cff;
  }
  @media screen and (min-width: 1050px) {
    .about {
      padding: 24px 40px 24px 24px;
      margin-left: 140px;
    }
  }
  @media screen and (min-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
    .elevate {
      min-height: 459px;
      display: flex;
      align-items: center;
    }
  }
`

function Hero({ frontmatter }) {
  const { cover_image, title, date, excerpt } = frontmatter
  return (
    <HeroStyled>
      <div className="elevate">
        <div className="about">
          <p className="date">{date} — <span className="primary">Post solo disponible en Ingles</span></p>
          <h1>{title}</h1>
          <p>{excerpt}</p>
        </div>
      </div>
      <div className="container">
        <img src={cover_image} alt={title} />
      </div>
    </HeroStyled>
  )
}

Hero.propTypes = {
  frontmatter: PropTypes.object.isRequired
}

export default Hero
