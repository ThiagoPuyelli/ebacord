import type { NextPage } from 'next'
import Header from '../components/Header'
import styled from '@emotion/styled'
import logoEBacord from '../public/img/LogoEBacord.png'
import Image from 'next/image'
import Presentation from '../components/Presentation'

const Home: NextPage = () => {
  const IndexStyled = styled.div`
    height: 1900px;
    /*display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding-left: 100px;
    padding-right: 100px;
    align-items: center;
    height: 500px;
    background: linear-gradient(to left, var(--principalColor), #111d33);
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
    }*/
  `

  return (
    <IndexStyled>
      <Presentation />
    </IndexStyled>
  )
}

export default Home
