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
      .titleAbout {
        display: block;
        color: white;
        font-family: pixelRand;
        margin-top: 10px;
        margin-bottom: 30px;
        font-weight: normal;
        text-align: center;
        border-bottom: 1px solid #ccc;
        width: 90%;
        margin-top: 60px;
        padding-bottom: 10px;
      }
      .imgAbout {
        width: 500px;
        box-shadow: 0px 0px 4px #111;
        border: 2px solid #111;
        * {
          width: 100%;
          height: 100%;
        }
      }
      .textAbout {
        width: 400px;
        display: block;
        color: white;
        font-size: 18px;
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consectetur ad voluptates deleniti? Ratione quidem sed libero voluptatum doloremque doloribus, accusamus dolore ab similique animi qui nulla, quaerat porro voluptates, nihil quasi. Minus, iure repellendus aperiam autem consequatur laboriosam. Quisquam ducimus sint, sapiente qui alias aut quo repudiandae suscipit vel dignissimos, totam expedita quibusdam omnis sit dolores ipsum officia explicabo dolore repellat non, a iusto! Veniam vero velit animi fugit illum explicabo, tempore.
        </div>
      </AboutStyled>
    )
}

export default About