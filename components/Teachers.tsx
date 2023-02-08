import styled from "@emotion/styled";
import Teacher from "./Teacher";
import { useEffect } from "react";
import setAnimation from "../utils/setAnimation";
import teachersData from "../data/teachersData";

const Teachers = () => {
  const TeachersStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding-bottom: 100px;
    background: var(--principalColor);
    .backTeachers {
      position: absolute;
      width: 100%;
      z-index: 0;
      transform: rotateZ(180deg);
      margin-top: -5px; 
    }
    .teachersTitle {
      display: block;
      width: 90%;
      border-bottom: 1px solid var(--secondaryColor);
      color: white;
      font-family: pixelRand;
      padding-bottom: 10px;
      text-align: center;
      font-weight: normal;
      margin-top: 40px; 
      z-index: 1;
    }
    .teachers {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      width: 90%;
      z-index: 1;
    }
  `
  useEffect(() => {
    for (let i = 1;i < 6;i++) {
      const teachers = document.querySelector(`.teacher:nth-child(${i})`)
      setAnimation(teachers)
    }
    const backTeachers: HTMLElement|null = document.querySelector('.backTeachers.back2')
    const contentTeachers: HTMLElement|null = document.querySelector('.backTeachers')
    if (backTeachers && contentTeachers) {
      if (window.innerWidth >= 1134) {
        backTeachers.style.marginTop = contentTeachers.clientHeight + (2*(280 - contentTeachers.clientHeight)) + 'px'
        backTeachers.style.display = 'block'
      } else if (window.innerWidth >= 756) {
        backTeachers.style.marginTop = contentTeachers.clientHeight + (2*(280 - contentTeachers.clientHeight)) + 400 + 'px'
        backTeachers.style.display = 'block'
      } else if (window.innerWidth >= 375) {
        backTeachers.style.marginTop = contentTeachers.clientHeight + (2*(280 - contentTeachers.clientHeight)) + 730 + 'px'
        backTeachers.style.display = 'block'
      } else {
        backTeachers.style.display = 'none'
      }
    }
    window.addEventListener('resize', () => {
      const backTeachers: HTMLElement|null = document.querySelector('.backTeachers.back2')
      const contentTeachers: HTMLElement|null = document.querySelector('.backTeachers')
      if (backTeachers && contentTeachers) {
        if (window.innerWidth >= 1134) {
          backTeachers.style.marginTop = contentTeachers.clientHeight + (2*(280 - contentTeachers.clientHeight)) + 'px'
          backTeachers.style.display = 'block'
        } else if (window.innerWidth >= 756) {
          backTeachers.style.marginTop = contentTeachers.clientHeight + (2*(280 - contentTeachers.clientHeight)) + 400 + 'px'
          backTeachers.style.display = 'block'
        } else if (window.innerWidth >= 375) {
          backTeachers.style.marginTop = contentTeachers.clientHeight + (2*(280 - contentTeachers.clientHeight)) + 730 + 'px'
          backTeachers.style.display = 'block'
        } else {
          backTeachers.style.display = 'none'
        }
      }
    })
  }, [])

  return (
    <TeachersStyled className='contentTeachers'>
      <div className="backTeachers back1">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 400" preserveAspectRatio="none"><path fill="#0f1829" d="M1293.4,215.6c-341.7,0-589.5-105-653.9-138.6S482.6,0,369.2,0S76.5,75.1,0,190.9c0,23.8,0,47.2,0,69.1 c0,78.1,0,138.2,0,138.2v1.8h1920v-1.8V260V45.5C1920,45.5,1635,215.6,1293.4,215.6z"></path></svg>
      </div>
      <h1 className='teachersTitle'>
        Nuestros profesores
      </h1>
      <div className="teachers">
        {teachersData.map((t: any) => {
          const {name, phrase, vocation, image} = t
          return <Teacher name={name} phrase={phrase} vocation={vocation} img={image} key={name} />
        })}
      </div>
    </TeachersStyled>
  )
}

export default Teachers