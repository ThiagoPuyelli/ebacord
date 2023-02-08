import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import arrow from '../public/img/arrow.png'

const MenuPhone = () => {
  const MenuPhoneStyled = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: var(--principalColor);
    font-family: pixelRand;
    .exitMenu {
      width: 40px;
      background: none;
      border: none;
      transform: rotateZ(180deg);
      padding: 10px;
      * {
        width: 100%;
        height: 100%;
      }
    }
    .contentLinks {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      color: white;
      .titleMenu {
        text-decoration: underline;
        text-decoration-color: var(--secondaryColor);
        font-size: 23px;
        font-weight: normal;
        margin-top: 30px;
        margin-bottom: 30px;
      }
      .linksMenu {
        width: 240px;
        display: flex;
        flex-flow: column wrap;
        align-items: left;
        .menuLink {
          font-weight: normal;
          margin-top: 20px;
          position: relative;
          padding-bottom: 10px;
          display: block;
          :after {
            content: '';
            display: block;
            position: absolute;
            width: 15%;
            border-bottom: 2px solid var(--secondaryColor);
            border-radius: 2px;
            bottom: 0;
            left: 0;
          }
        }
      }
    }
  `

  const exit = () => {
    const menuPhone: HTMLElement|null = document.querySelector('.menuPhone')
    if (menuPhone) menuPhone.style.display = 'none'
  }
  
  return (
    <MenuPhoneStyled className='menuPhone'>
      <button className='exitMenu' onClick={exit}>
        <Image src={arrow} alt='boton para volver para atras'/>
      </button>
      <div className="contentLinks">
        <h1 className='titleMenu'>Cursos</h1>
        <div className="linksMenu">
          <Link passHref href='/' className='menuLink'>Game design</Link>
          <Link passHref href='/' className='menuLink'>Diseño</Link>
          <Link passHref href='/' className='menuLink'>Programacion</Link>
        </div>
        <Link passHref href='/contact' className='titleMenu'>Contacto</Link>
      </div>
    </MenuPhoneStyled>
  )
}

export default MenuPhone