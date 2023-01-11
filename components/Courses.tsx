import styled from "@emotion/styled"
import Course from "./Course"
import unity from '../public/img/unity.png'
import { useEffect } from "react"
import setAnimation from "../utils/setAnimation"

const Courses = () => {
  const CoursesStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    .titleCourses {
      display: block;
      font-family: pixelRand;
      border-bottom: 1px solid #eff3f8;
      margin-bottom: 30px;
      width: 100%;
      color: white;
      text-align: center;
      font-weight: normal;
      padding-bottom: 10px;
        margin-top: 60px;
        width: 90%;
    }
    .courses {
      display: flex;
      flex-flow: row wrap;
      width: 100%;
      padding: 40px;
      justify-content: space-evenly;
    }
  `

  useEffect(() => {
    for (let i = 1;i < 4;i++) {
      const courses = document.querySelector(`.course:nth-child(${i})`)
      setAnimation(courses)
    }
  }, [])
  
  return (
    <CoursesStyled>
      <h1 className='titleCourses'>Nuestros cursos</h1>
      <div className="courses">
        <Course title='Unity' subtitle='De básico a avanzado' image={unity} information={[
          'Certificado incluido',
          'Gratis',
          'Clases en vivo'
        ]} color={'#eff3f8'} />

        <Course title='Unity' subtitle='De básico a avanzado' image={unity} information={[
          'Certificado incluido',
          'Gratis',
          'Clases en vivo'
        ]} color={'#eff3f8'} />
        <Course title='Unity' subtitle='De básico a avanzado' image={unity} information={[
          'Certificado incluido',
          'Gratis',
          'Clases en vivo'
        ]} color={'#eff3f8'} />
        <Course title='Unity' subtitle='De básico a avanzado' image={unity} information={[
          'Certificado incluido',
          'Gratis',
          'Clases en vivo'
        ]} color={'#eff3f8'} />
      </div>
    </CoursesStyled>
  )
}

export default Courses