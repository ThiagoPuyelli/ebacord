import styled from "@emotion/styled"
import logoEbacord from '../public/img/logo.png'
import Link from "next/link"
import Image from "next/image"

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
          color: white;
          text-decoration: none;
          font-family: pixelRand;
          font-size: 25px;
          transition: 300ms all;
        }
        .link:hover {
          transform: scale(1.2, 1.2);
        }
      }
      .links.left {
        margin-right: 100px;
      }
      .links.right {
        margin-left: 100px;
      }
    }
  `

  const rotate = (reverse: boolean) => {
    const img: HTMLElement|null = document.querySelector('.logo img')
    if (img) {
      img.style.animation = (!reverse ? 'rotateLogo' : 'rotateLogoReverse') + ' 300ms linear both'
    }
  }
  
  return (
    <HeaderStyled>
      <div className="complete">
        <div className="links left">
          <Link passHref href='/' className='link'>Cursos</Link>
        </div>
        <Link href='/' className='logo'>
          <div className="imgLogo">
            <Image src={logoEbacord} alt='Logo bacord' onMouseOver={() => rotate(false)} onMouseOut={() => rotate(true)} />
          </div>
        </Link>
        <div className="links right">
        <Link href='/' className='link'>Nosotros</Link>
        </div>
      </div>  
    </HeaderStyled>
  )
}

export default Header