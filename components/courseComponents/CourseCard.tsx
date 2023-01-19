import styled from "@emotion/styled";
import Image from "next/image";

const CourseCard = ({image, price, info}: any) => {
  const CardStyled = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    width: 280px;
    position: fixed;
    padding: 20px;
    right: 120px;
    background: var(--principalColor);
    color: white;
    top: 100px;
    font-weight: normal;
    box-shadow: 0px 0px 4px var(--principalColor);
    .imgCard {
      width: 100px;
      * {
        width: 100%;
        height: 100%;
      }
    }
    .textCard {
      padding: 10px;
      padding-left: 15px;
      padding-right: 15px;
      .priceCard {
        font-size: 25px;
        margin-top: 10px;
        margin-bottom: 20px;
        font-weight: bold;
        letter-spacing: 3px;
      }
      .buttonCard {
        width: 100%;
        height: 35px;
        font-size: 18px;
        background: #1d3258;
        border: none;
        color: white;
        cursor: pointer;
        font-weight: bold;
        overflow: hidden;
        transition: 300ms all;
        :hover { 
          transform: scale(1.1, 1.1);
          background: #172746;
          p {
            animation: hoverButton 300ms;
          }
        }
      }
      .infoTitle {
        font-weight: normal !important;
        margin-top: 25px;
        font-size: 18px; 
        text-decoration: underline;
      }
      .infoCard {
        margin-top: 10px;
        font-size: 16px;
      }
    }
  `
  
  const clickApply = () => {
    const courseContact: HTMLElement|null = document.querySelector('.courseContact')
    if (courseContact) courseContact.style.display = 'flex'
  }
  
  return (
    <CardStyled>
      <div className="imgCard">
        <Image src={image} alt='Image to course' />
      </div>
      <div className="textCard">
        <p className='priceCard'>${price}</p>
        <button type='button' className='buttonCard' onClick={clickApply}><p>Iniciar</p></button>
        <h5 className='infoTitle'>Este curso incluye:</h5>
        {info.map((i: string) => {
          return <p className='infoCard' key={i}>_ {i}</p>
        })}
      </div>
      
    </CardStyled>
  )
}

export default CourseCard