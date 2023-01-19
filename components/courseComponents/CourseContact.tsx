import styled from "@emotion/styled";
import Image from "next/image";
import exitImg from '../../public/img/exit.png'

const CourseContact = () => {
  const ContactStyled = styled.div`
    display: flex;
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
    .forms {
      height: 400px;
      width: 600px;
      background: white;
      position: absolute;
      border-radius: 20px;
      background: var(--principalColor);
      color: white !important;
      z-index: 4;
      .top {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        .pages {
          display: flex;
          flex-flow: row wrap;
          .page {
            padding: 20px;
            border-right: 1px solid var(--secondaryColor); 
            border-bottom: 1px solid var(--secondaryColor);
            padding-left: 40px;
            padding-right: 40px;
          }
          .page.page1 {
            color: var(--secondaryColor);
            border-radius: 20px 0px 0px 0px;
          }
        }
        .exit {
          width: 40px;
          height: 40px;
          margin: 10px;
          cursor: pointer;
          * {
            width: 100%;
            height: 100%;
          }
        }
      }
      .pagesForm {
        padding: 20px;
        .firstPage {
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          .firstTitle {
            font-size: 26px;
            margin-top: 20px;
          }
          .inputForm.email {
            margin-top: 60px;
            width: 90%;
            background: none;
            color: white;
            border: none;
            padding: 10px;
            font-size: 17px;
            border-bottom: 2px solid var(--secondaryColor);
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
          }
          .buttonHover {
            position: absolute;
            bottom: 76px;
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
      }
    }
  `

  const exit = () => {
    const courseContact: HTMLElement|null = document.querySelector('.courseContact')
    if (courseContact) courseContact.style.display = 'none'
  }

  return (
    <ContactStyled className='courseContact'>
      <div className="forms">
        <div className="top">
          <div className="pages">
            <div className="page page1">Page 1</div>
            <div className="page page2">Page 2</div>
          </div>
          <div className="exit" onClick={exit}>
            <Image src={exitImg} alt='Exit button' />
          </div>
        </div>
        <div className="pagesForm">
          <div className='firstPage'>
            <h1 className='firstTitle'>Ingresa tu email para seguir con la inscripción</h1>
            <input className='inputForm email' type="email" placeholder="Email" />
            <div className="contentButton">
              <button type='button' className='buttonForm'>Siguiente</button>
              <div className="buttonHover">
                <button type='button' className='buttonForm'>Siguiente</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactStyled>
  )
}

export default CourseContact