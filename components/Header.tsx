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
      z-index: 1;
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
          transition: 300ms all;
          .linkHref {
            border-bottom: 2px solid white;
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
          :hover {
            .subContent {
              transform: translateY(0px);
              opacity: 1;
              visibility: visible;
            }
          }
          .subContent {
            /*display: none;*/
            padding-top: 20px;
            margin-bottom: -20px;
            transform: translateY(-30px);
            opacity: 0;
            transition: 150ms all;
            visibility: hidden;
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
            transition: 300ms all;
            .subLink {
              color: white;
              margin-bottom: 20px;
              margin-top: 10px;
              font-size: 17px;
              .hoverSub {
                position: absolute;
                background: var(--principalColor);
                color: #4467ac;
                overflow: hidden;
                width: 0px;
                border-right: 2px solid #4467ac;
                transition: 300ms all;
                height: 20px;
                * {
                  margin-left: 8px;
                  height: 32px;
                  overflow: hidden;
                  width: 0px;
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
                  width: 130px;
                  * {
                    width: 130px;
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
          <div className="link">
            <Link passHref href='/' className='linkHref'>Cursos</Link>
            <div className="subContent">
              <div className="subLinks">
                <div className="subLink" style={{marginBottom: '20px'}}>
                  <Link passHref href='/' className="hoverSub">
                    <span>Game design</span>
                  </Link>
                  <div className="barSub"></div>
                  <Link passHref href='/' className='originalSub'>Game design</Link>
                </div>
                <div className="subLink">
                  <Link passHref href='/' className="hoverSub">
                    <span>Diseño</span>
                  </Link>
                  <div className="barSub"></div>
                  <Link passHref href='/' className='originalSub'>Diseño</Link>
                </div>
                <div className="subLink">
                  <Link passHref href='/' className="hoverSub">
                    <span>Programación</span>
                  </Link>
                  <div className="barSub"></div>
                  <Link passHref href='/' className='originalSub'>Programación</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href='/' className='logo'>
          <div className="imgLogo">
            <Image src={logoEbacord} alt='Logo bacord' onMouseOver={() => rotate(false)} onMouseOut={() => rotate(true)} />
          </div>
        </Link>
        <div className="links right">
          <div className="link">
            <Link href='/' className='linkHref'>Nosotros</Link>
            <span className='linkSpan'>Nosotros</span>
          </div>
        </div>
      </div>  
    </HeaderStyled>
  )
}

export default Header