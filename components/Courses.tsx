import styled from "@emotion/styled"
import Course from "./Course"
import unity from '../public/img/unity.png'
import { useEffect } from "react"
import setAnimation from "../utils/setAnimation"
import coursesData from "../data/coursesData"
import BackGradient from "./BackGradient/BackGradient"

const Courses = () => {
  const CoursesStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    color: white;
    overflow: hidden;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
    padding-bottom: 80px;
    .titleCourses {
      display: block;
      font-family: pixelRand;
      border-bottom: 1px solid var(--secondaryColor);
      margin-bottom: 30px;
      width: 100%;
      text-align: center;
      font-weight: normal;
      padding-bottom: 10px;
      margin-top: 60px;
      width: 90%;
      z-index: 1;
    }
    .courses {
      display: flex;
      flex-flow: row wrap;
      width: 100%;
      padding: 40px;
      justify-content: space-evenly;
      z-index: 1;
    }
    @media (max-width: 491px) {
      .courses {
        padding: 0px;
      }
    }
  `

  useEffect(() => {
    for (let i = 1;i < 4;i++) {
      const courses = document.querySelector(`.course:nth-child(${i})`)
      setAnimation(courses)
    }
  }, [])
  let i = 0
  return (
    <div className="contentCourses">
      <CoursesStyled id='courses'>
        <h1 className='titleCourses'>Nuestros cursos</h1>
        <div className="courses">
          {coursesData.map((c: any) => {
            const {difficulty, name, info, image} = c
            i++
            return <Course title={name} information={info} subtitle={difficulty} image={image} color={'#eff3f8'} key={name} id={i - 1}/>
          })}
        </div>
      </CoursesStyled>
    </div>
  )
}

export default Courses