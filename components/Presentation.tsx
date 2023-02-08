import type { NextPage } from 'next'
import styled from '@emotion/styled'
import logoEBacord from '../public/img/LogoEBacord.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import BackStars from '../components/BackStars/BackStars'

const Presentation: NextPage = () => {
  const PresentationStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding-left: 100px;
    padding-right: 100px;
    align-items: center;
    height: 100%;
    min-height: 700px;
    overflow: hidden !important;
    width: 100%;
    /*background: linear-gradient(to left, #1d3258, #111d33);*/
    .logoPresentation {
      width: 550px;
      overflow: hidden;
      display: flex;
      flex-flow: row wrap;
      animation: updown 2s ease-in-out infinite alternate-reverse both;
      .imgLogo {
        width: 489px;
        overflow: hidden;
        animation: machine 2s infinite alternate;
        animation-timing-function: step-end;
        .imgContent {
          width: 500px;
          * {
            width: 100%;
            height: 100%;
          }
        }
      }
      .barMachine {
        width: 5px;
        height: 70px;
        border-left: 3px solid white;
        animation: flickerMachine 0.7s linear infinite ease-in-out both alternate-reverse;
        margin-top: 108px;
      }
    }
    .textPresentation {
      display: block;
      width: 500px;
      color: white;
      font-size: 20px;
    }
    @media (max-width: 1250px) {
      justify-content: center;
    }
    @media (max-width: 754px) {
      padding-left: 20px;
      padding-right: 20px;
      .contentLogo {
        position: absolute;
        margin-top: -250px;
      }
      .textPresentation {
        margin-top: 200px;
        width: 100%;
        text-align: center;
      }
    }
    @media (max-width: 555px) {
      .contentLogo {
        transform: scale(0.7, 0.7);
      }
    }
    @media (max-width: 431px) {
      .textPresentation {
        font-size: 17px;
      }
    }
    @media (max-width: 421px) {
      .contentLogo {
        transform: scale(0.5, 0.5);
      }
    }
  `

  useEffect(() => {
    const content: HTMLElement|null = document.querySelector('.contentPresentation')
    const height = window.screen.height
    if (content && height > 700) {
      content.style.height = height + 'px'
    } else {
      if (content) content.style.height = '700px'
    }
    window.addEventListener('resize', () => {
      const content: HTMLElement|null = document.querySelector('.contentPresentation')
      const height = window.screen.height
      if (content && height > 700) {
        content.style.height = height + 'px'
      } else {
        if (content) content.style.height = '700px'
      }
    })
    
  }, [])

  return (
    <div className="contentPresentation">
      <PresentationStyled className='presentation'>
        <div className="contentBack">
          <BackStars />
        </div>
        <div className="contentLogo">
          <div className="logoPresentation">
            <div className="imgLogo">
              <div className="imgContent">
                <Image src={logoEBacord} alt="Logo de e-bacord" />
              </div>
            </div>
            <div className="barMachine"></div>
          </div>
        </div>
        <p className='textPresentation'>Ebacord es un proyecto educativo hecho por y para gente que hace videojuegos. Buscamos crear una “escuela online” que profundice sobre cómo es “trabajar en la industria” y a adaptarse a las necesidades y particularidades que presenta a nivel local e internacional.</p>
      </PresentationStyled>
    </div>
  )
}

export default Presentation