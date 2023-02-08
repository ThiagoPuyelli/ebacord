import styled from "@emotion/styled"
import logoEbacord from '../public/img/logo.png'
import LinkNext from "next/link"
import {Link} from 'react-scroll'
import Image from "next/image"
import { useEffect, useState } from "react"
import MenuImg from '../public/img/menu.png'
import ContactImg from '../public/img/mailWhite.png'
import MenuPhone from "./MenuPhone"

const Header = () => {
  const HeaderStyled = styled.div`
    .complete {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      width: 100%;
      height: 80px;
      background: var(--principalColor);
      align-items: center;
      position: fixed;
      transition: 300ms all;
      border-bottom: 1px solid #111;
      box-shadow: 0px 0px 3px black;
      top: 0px;
      z-index: 3;
      .logo {
        background-color: var(--principalColor);
        padding: 0px;
        border-radius: 999px;
        width: 90px;
        margin-left: 35px;
        margin-right: 35px;
        height: 80px;
        position: fixed;
        transition: 300ms all;
        top: 0px;
        /*box-shadow: 0px 2px 0px #111;
        border-bottom: 1px solid #111;*/
      }
      .logo .imgLogo * {
        width: 100%;
        height: 100%;
      }
      .logo .imgLogo {
        width: 80px;
        position: fixed;
        top: 0px;
        margin-left: 5px;
        transition: 300ms all;
      }
      /*.logo .imgLogo:hover {
        animation: rotateLogo 400ms linear alternate-reverse;
      }*/
      .links {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        .link {
          :hover {
            .subContent {
              transform: translateY(0px);
              opacity: 1 !important;
              visibility: visible;
            }
          }
          transition: 100ms all;
          .linkHref {
            border-bottom: 2px solid white;
            cursor: pointer;
          }
          .courseLink {
            display: block;
            cursor: pointer;
          }
          .linkHref.hover {
            display: none;
          }
          .linkHref,
          .linkSpan {
            color: white;
            text-decoration: none;
            font-family: pixelRand;
            transition: 300ms all;
            font-size: 19px;
          }
          .linkSpan {
            display: block;
            width: 60px;
            overflow: hidden;
            position: absolute;
            margin-left: 0px;
            margin-top: -33px;
            color: #4467ac;
            background: var(--principalColor);
            cursor: pointer;
            width: 0px;
            transition: 300ms all;
            border-bottom: 2px solid #4467ac;
          }
          .linkArrow {
            display: block;
            position: absolute;
            color: white;
            margin-left: 60px;
            margin-top: -30px;
            width: 35px;
            * {
              width: 100%;
              height: 100%;
            }
          }
          
          .subContent {
            /*display: none;*/
            padding-top: 20px;
            margin-bottom: -20px;
            transform: translateY(-30px);
            opacity: 0;
            visibility: hidden;
            transition: 150ms all;
            /*:hover {
              display: block !important;
            }*/
          }
          .subLinks {
            display: flex;
            flex-flow: column wrap;
            align-items: left;
            background: var(--principalColor);
            padding: 10px;
            border: 2px solid #111;
            position: absolute;
            border-top: none;
            padding-top: 10px;
            margin-left: -25px;
            font-family: pixelRand;
            transition: 100ms all;
            width: 210px;
            .subLink {
              color: white;
              margin-bottom: 20px;
              margin-top: 10px;
              font-size: 14px;
              width: 190px;
              .hoverSub {
                position: absolute;
                background: var(--principalColor);
                color: #306fe2;
                overflow: hidden;
                width: 0px;
                border-right: 2px solid #306fe2;
                transition: 300ms all;
                height: 16px;
                overflow: hidden;
                * {
                  margin-left: 4px;
                  height: 10px;
                }
              }
              .originalSub {
                margin-left: 8px;
              }
              /*.barSub {
                width: 5px;
                background: #4467ac;
              }*/
              :hover {
                .hoverSub {
                  width: 180px;
                  * {
                    width: 180px;
                  }
                }
              }
            }
          }
        }
      }
      .links.left {
        margin-right: 100px;
      }
      .links.right {
        margin-left: 100px;
      }
      .menuButton,
      .contactButton {
        display: none;
        width: 30px;
        position: fixed;
        * {
          width: 100%;
          height: 100%;
        }
      }
      .menuButton {
        left: 20px;
      }
      .contactButton {
        right: 20px;
        margin-top: -16px;
      }
    }
    @media (max-width: 431px) {
      .complete {
        height: 50px;
        .logo {
          width: 50px;
          height: 40px; 
          .imgLogo {
            width: 50px;
          }
        }
      }
      .link {
        display: none;
      }
      .complete {
        justify-content: space-evenly;
      }
      .menuButton,
      .contactButton {
        display: block !important;
      }
    }
  `

  const rotate = (reverse: boolean) => {
    const img: HTMLElement|null = document.querySelector('.logo img')
    if (img) {
      img.style.animation = (!reverse ? 'rotateLogo' : 'rotateLogoReverse') + ' 300ms linear both'
    }
  }

  let [menu, setMenu] = useState(false)
  /*let [link, setLink] = useState(true)*/

  useEffect(() => {
    if (window.navigator.userAgent.search('Mobile') >= 0) {
      const link: HTMLElement|null = document.querySelector('.linkHref.link')
      const hover: HTMLElement|null = document.querySelector('.linkHref.hover')
      if (hover) hover.style.display = 'block'
      if (link) link.style.display = 'none'
    }
  })

  const displayMenu = () => {
    //const button: HTMLElement|null = document.querySelector('.menuButton')
    /*if (button) {
      if (menu) {
        setMenu(false)
      } else {
        setMenu(true)
      }
    }*/
    const menuPhone: HTMLElement|null = document.querySelector('.menuPhone')
    if (menuPhone) {
      if (menu) {
        menuPhone.style.display = 'none'
      } else {
        menuPhone.style.display = 'block'
      }
    }
  }
  
  return (
    <HeaderStyled>
      <div className="complete">
        <div className="links left">
          <div className="link toLink">
            <Link to='courses' smooth={true} offset={-70} className='linkHref link'>Cursos</Link>
            <div className="linkHref hover">Cursos</div>
            <div className="subContent">
              <div className="subLinks">
                <div className="subLink" style={{marginBottom: '20px'}}>
                  <div className="hoverSub">
                    <LinkNext passHref href='/course?id=0' style={{width: '210px'}}>
                      <span>Herramientas digitales</span>
                    </LinkNext>
                  </div>
                  <div className="barSub"></div>
                  <LinkNext passHref href='/course?id=0' className='originalSub'>Herramientas digitales</LinkNext>
                </div>
                <div className="subLink">
                  <div className="hoverSub">
                    <LinkNext passHref href='/course?id=1' style={{width: '210px'}}>
                      <span>Diseño gráfico para VJ</span>
                    </LinkNext>
                  </div>
                  <div className="barSub"></div>
                  <LinkNext passHref href='/course?id=1' className='originalSub'>Diseño gráfico para VJ</LinkNext>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menuButton" onClick={displayMenu}>
          <Image src={MenuImg} alt='boton para abrir menu' />
        </div>
        <LinkNext href='/' className='logo'>
          <div className="imgLogo">
            <Image src={logoEbacord} alt='Logo bacord' onMouseOver={() => rotate(false)} onMouseOut={() => rotate(true)} />
          </div>
        </LinkNext>
        <LinkNext href='/contact'>
          <div className="contactButton">
              <Image src={ContactImg} alt='boton para abrir contacto' />
          </div>
        </LinkNext>
        <div className="links right">
          <div className="link">
            <LinkNext href='/contact' className='linkHref'>Contacto</LinkNext>
            <span className='linkSpan'>Contacto</span>
          </div>
        </div>
        <MenuPhone />
      </div>  
    </HeaderStyled>
  )
}

export default Header