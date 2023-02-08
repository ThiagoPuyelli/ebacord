import styled from "@emotion/styled";
import Image from "next/image";
import exitImg from '../../public/img/exit.png'
import arrow from '../../public/img/arrow.png'
import { useEffect } from "react";
import setAnimation from "../../utils/setAnimation";
import emailjs from '@emailjs/browser'

const CourseContact = ({name}: {name: string}) => {
  const ContactStyled = styled.div`
    display: none;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 3;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    background: rgba(0, 0, 0, 0.5);
    .errorMailContact {
      position: fixed;
      bottom: 10px;
      left: 10px;
      background: #92140C;
      color: white;
      padding: 10px 20px 10px 20px;
      font-family: pixelRand;
      display: none;
      transition: 300ms all;
    }
    .forms {
      height: 351px;
      width: 600px;
      background: white;
      position: absolute;
      border-radius: 10px;
      background: var(--principalColor);
      color: white !important;
      z-index: 4;
      overflow: hidden;
      .top {
        display: flex;
        flex-flow: row wrap;
        justify-content: right;
        .exit,
        .arrow {
          width: 40px;
          height: 40px;
          margin: 10px;
          cursor: pointer;
          border-radius: 10px;
          transition: 300ms all;
          * {
            width: 100%;
            height: 100%;
          }
        }
        .arrow {
          padding: 5px;
          transform: rotateZ(180deg);
          display: none;
        }
        .exit:hover,
        .arrow:hover {
          background: rgb(48, 111, 226, 0.5);
        }
      }
      .pagesForm {
        display: flex;
        flex-flow: row wrap;
        width: 1900px;
        /*margin-left: -590px;*/
        transition: 500ms all;
        .firstPage {
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          width: 600px;
          .firstTitle {
            font-size: 26px;
            margin-top: 20px;
            font-family: pixelRand;
            font-weight: normal;
          }
          .inputForm.email {
            margin-top: 40px;
            width: 60%;
            background: none;
            color: white;
            border: none;
            padding: 10px;
            font-size: 17px;
            border-bottom: 2px solid var(--secondaryColor);
            font-family: pixelRand;
            font-weight: normal;
          }
          .buttonForm {
            width: 100px;
            font-size: 17px;
            padding: 10px;
            cursor: pointer;
            background: none;
            color: white;
            border: none;
            border-bottom: 2px solid white;
            margin-top: 22px;
            font-family: pixelRand;
            font-weight: normal;
          }
          .buttonHover {
            position: absolute;
            bottom: 47px;
            overflow: hidden;
            width: 0px;
            left: 250px;
            background: var(--principalColor);
            transition: 400ms all;
            .buttonForm {
              color: var(--secondaryColor);
              border-bottom: 2px solid var(--secondaryColor);
            }
          }
          .contentButton {
            margin-top: 50px;
          }
          .contentButton:hover .buttonHover {
            width: 100px;
          }
        }
        .secondPage {
          margin-left: 60px;
          font-family: pixelRand;
          .secondTitle {
            font-size: 25px;
            font-weight: normal;
          }
          .secondSub {
            margin-top: 20px;
            margin-bottom: 20px;
            font-weight: normal;
            color: #ccc;
          }
          .account {
            margin-top: 10px;
            list-color: var(--secondaryColor);
            color: #ccc;
          }
          .account::marker {
            color: var(--secondaryColor);
          }
        }
      }
    }
    @media (max-width: 624px) {
      .forms {
        width: 95%;
      }
    }
    @media (max-width: 484px) {
      .secondTitle {
        font-size: 20px !important;
      }
    }
    @media (max-width: 368px) {
      .secondPage {
        transform: scale(0.9, 0.9);
      }
    }
  `

  const exit = () => {
    const courseContact: HTMLElement|null = document.querySelector('.courseContact')
    if (courseContact) courseContact.style.display = 'none'
    const pagesForm: HTMLElement|null = document.querySelector('.pagesForm')
    if (pagesForm) pagesForm.style.marginLeft = '0px'
    const buttonHover: HTMLElement|null = document.querySelector('.buttonHover')
    if (buttonHover) buttonHover.style.marginLeft = '0px'
  }

  const changePage = () => {
    const pagesForm: HTMLElement|null = document.querySelector('.pagesForm')
    if (pagesForm) pagesForm.style.marginLeft = '-590px'
    const buttonHover: HTMLElement|null = document.querySelector('.buttonHover')
    if (buttonHover) buttonHover.style.marginLeft = '-590px'
  }

  /*const displayError = (show: boolean) => {
    const error: HTMLElement|null = document.querySelector('.errorMailContact')
    if (error) {
      if (show) {
        error.style.display = 'block'
      } else {
        error.style.display = 'none !important'
      }
    }
  }*/

  const submitEmail = async (e: any) => {
    e.preventDefault()
    const inputMail: HTMLInputElement|null = document.querySelector('.inputForm.email')
    const error: HTMLElement|null = document.querySelector('.errorMailContact')
    if (inputMail && error) {
      const value = inputMail.value
      const verifyPoint = value.split('.')
      const verifyArroba = value.split('@')
      const form: HTMLFormElement|null = document.querySelector('.firstPage')
      if (verifyPoint.length === 2 && verifyArroba.length === 2 && value.length <= 256 && form) {
        const sendMail = await emailjs.sendForm('service_1p97hvn', 'template_oagn1ro', form, 'AL9uUGVCxMXp24hNL')
        if (sendMail.text === 'OK') {
          changePage()
        }
      }
    }
  }

  useEffect(() => {
    const forms = document.querySelector('.forms')
    setAnimation(forms)
    const firstPage: HTMLElement|null = document.querySelector('.firstPage')
    const secondPage: HTMLElement|null = document.querySelector('.secondPage')
    if (firstPage && secondPage && window.innerWidth <= 624) {
      const width = 95 * window.innerWidth / 100
      firstPage.style.width = width + 'px'
      secondPage.style.width = width + 'px'
      if (window.innerWidth >= 427) {
        secondPage.style.marginLeft = (624 - window.innerWidth + 60) + 'px'
      } else if (window.innerWidth >= 368) {
        secondPage.style.marginLeft = (624 - window.innerWidth + 20) + 'px'
      } else {
        secondPage.style.marginLeft = (624 - window.innerWidth + 0) + 'px'
      }
    }
    window.addEventListener('resize', () => {
      const firstPage: HTMLElement|null = document.querySelector('.firstPage')
      const secondPage: HTMLElement|null = document.querySelector('.secondPage')
      if (firstPage && secondPage && window.innerWidth <= 624) {
        const width = 95 * window.innerWidth / 100
        firstPage.style.width = width + 'px'
        secondPage.style.width = width + 'px'
        if (window.innerWidth >= 427) {
          secondPage.style.marginLeft = (624 - window.innerWidth + 60) + 'px'
        } else if (window.innerWidth >= 368) {
          secondPage.style.marginLeft = (624 - window.innerWidth + 20) + 'px'
        } else {
          secondPage.style.marginLeft = (624 - window.innerWidth + 0) + 'px'
        }
      }
    })
  }, [])

  return (
    <ContactStyled className='courseContact'>
      <div className="forms">
        <div className="top">
          <div className="arrow">
            <Image src={arrow} alt='Volver hacia atras' />
          </div>
          <div className="exit" onClick={exit}>
            <Image src={exitImg} alt='Exit button' />
          </div>
        </div>
        <div className="pagesForm">
          <form className='firstPage' onSubmit={(e) => submitEmail(e)}>
            <h1 className='firstTitle'>Ingresa tu email</h1>
            <input className='inputForm email' type="text" name='email' placeholder="Email" required />
            <input type="hidden" value={name} name='course' />
            <div className="contentButton">
              <button type='submit' className='buttonForm'>Siguiente</button>
              <div className="buttonHover">
                <button type='submit' className='buttonForm'>Siguiente</button>
              </div>
            </div>
          </form>
          <div className="secondPage">
            <h1 className="secondTitle">Pagos por cuenta bancaria</h1>
            <h3 className="secondSub">Banco Santander</h3>
            <ul className='accounts'>
              <li className='account'>Fundación Manonville</li>
              <li className='account'>Fundación Manonville</li>
              <li className='account'>Fundación Manonville</li>
              <li className='account'>Fundación Manonville</li>
              <li className='account'>Fundación Manonville</li>
            </ul>
          </div>
        </div>
        <div className="errorMailContact">
          Correo inválido
        </div>
      </div>
    </ContactStyled>
  )
}

export default CourseContact