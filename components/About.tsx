import styled from "@emotion/styled"
import Image from "next/image"
import { useEffect } from "react"
import aboutImg from '../public/img/about.png'
import setAnimation from "../utils/setAnimation"

const About = () => {
    const AboutStyled = styled.div`
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      padding-bottom: 180px;
      background: var(--principalColor);
      color: white;
      z-index: 3;
      .titleAbout {
        display: block;
        font-family: pixelRand;
        margin-top: 10px;
        margin-bottom: 30px;
        font-weight: normal;
        text-align: center;
        border-bottom: 1px solid var(--secondaryColor);
        width: 90%;
        margin-top: 60px;
        padding-bottom: 10px;
      }
      .imgAbout {
        width: 500px;
        box-shadow: 0px 0px 4px #111;
        border: 2px solid #111;
        margin: 20px;
        * {
          width: 100%;
          height: 100%;
        }
      }
      .textAbout {
        width: 400px;
        display: block;
        font-size: 18px;
        margin: 20px;
      }
      @media (max-width: 431px) {
        .textAbout {
          font-size: 17px;
        }
      }
    `

    useEffect(() => {
      const imgAbout = document.querySelector('.imgAbout')
      const textAbout = document.querySelector('.textAbout')
      setAnimation(imgAbout)
      setAnimation(textAbout)
    }, [])
    return (
      <AboutStyled>
        <h1 className='titleAbout'>Sobre Nosotros</h1>
        <div className="imgAbout">
          <Image src={aboutImg} alt='about' />
        </div>
        <div className="textAbout">
        El proyecto Ebacord es parte de Bacord, una empresa que hace videojuegos desde Argentina, trabajamos en la creación y desarrollo de contenidos para plataformas móviles y PC. Nuestro negocio está enfocado en hacer juegos por encargo, nos encanta trabajar ayudando y colaborando con hacer realidad los sueños de los demás.

Sentimos que la educación en desarrollo de videojuegos que se brinda en Argentina es muy buena y de alta calidad. Además el país está muy bien posicionado a nivel regional y mundial como un potencia dentro de la “economía del conocimiento”, por lo que seguimos entendiendo que estamos en una posición privilegiada frente a otros países.

        </div>
      </AboutStyled>
    )
}

export default About