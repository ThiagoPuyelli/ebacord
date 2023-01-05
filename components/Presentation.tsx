import type { NextPage } from 'next'
import styled from '@emotion/styled'
import logoEBacord from '../public/img/LogoEBacord.png'
import Image from 'next/image'

const Presentation: NextPage = () => {
  const PresentationStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding-left: 100px;
    padding-right: 100px;
    align-items: center;
    height: 610px;
    /*background: linear-gradient(to left, #1d3258, #111d33);*/
    .logoPresentation {
      width: 550px;
      overflow: hidden;
      display: flex;
      flex-flow: row wrap;
      .imgLogo {
        width: 483px;
        overflow: hidden;
        animation: machine 2s infinite alternate steps(7);
        .imgContent {
          width: 500px;
          * {
            width: 100%;
            height: 100%;
          }
        }
      }
      .barMachine {
        width: 20px;
        height: 180px;
        border-bottom: 10px solid white;
        animation: flickerMachine 0.7s linear infinite;
      }
    }
    .textPresentation {
      display: block;
      width: 500px;
      color: white;
      font-size: 20px;
    }
  `

  return (
    <div className="contentPresentation">
      <PresentationStyled className='presentation'>
        <div className="logoPresentation">
          <div className="imgLogo">
            <div className="imgContent">
              <Image src={logoEBacord} alt="Logo de e-bacord" />
            </div>
          </div>
          <div className="barMachine"></div>
        </div>
        <p className='textPresentation'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ipsum. Saepe commodi, tempora a facere facilis quis eaque. Quis illo harum sunt quo tempore sint velit cum, mollitia asperiores odio enim. Repudiandae minima sint excepturi quam laboriosam, quibusdam, accusamus quas nostrum sed illum porro, incidunt vel temporibus a officia voluptatem.</p>
      </PresentationStyled>
    </div>
  )
}

export default Presentation