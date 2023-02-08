import styled from '@emotion/styled'
import teachersData from '../../data/teachersData'
import Teacher from '../Teacher'

const CourseContainer = ({learning, teachers, content}: any) => {
  const ContainerStyled = styled.div`
    color: white;
    padding-left: 120px;
    .learning {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      width: 600px;
      margin-top: 80px;
      padding: 20px;
      border: 2px solid #1d3258;
      .titleLearning {
        display: block;
        text-decoration: underline;
        width: 100%;
      }
      .dataLearning {
        display: block;
        margin-top: 30px;
        font-size: 17px;
        width: 45%;
      }
    }
    h3 {
      font-family: pixelRand;
      font-weight: normal;
      font-size: 23px;
    }
    .contentCourse {
      margin-top: 80px;
      width: 600px;
      .contentData {
        margin-top: 20px;
        .data {
          display: block;
          padding: 20px;
          border: 2px solid #1d3258;
          border-top: none;
          font-family: pixelRand;
        }
        .data:nth-child(1) {
          border-top: 2px solid #1d3258;
        }
      }
    }
    .teachersContainer {
      display: flex;
      flex-flow: row wrap;
      width: 800px;
      justify-content: space-between;
      margin-top: 80px;
      .titleTeachers {
        display: block;
        width: 100%;
        text-align: left;
      }
      .teacher {
        margin: 0px;
      }
    }
    @media (max-width: 1140px) {
      padding-left: 30px;
      padding-right: 30px;
    }
    @media (max-width: 964px) {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      .teachersContainer {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        .titleTeachers {
          text-align: center;
        }
      }
    }
    @media (max-width: 836px) {
      padding-left: 30px;
      padding-right: 30px;
      .teachersContainer {
        width: 100%;
      }
    }
    @media (max-width: 686px) {
      .learning,
      .contentCourse {
        width: 100%;
      }
    }
    @media (max-width: 408px) {
      .learning .dataLearning {
        width: 100%;
      }
    }
    @media (max-width: 372px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  ` 

  return (
    <ContainerStyled>
      <div className="learning">
        <h3 className='titleLearning'>
          Lo que verás
        </h3>
        {learning.map((l: string) => {
          return <p className='dataLearning' key={l}>{l}</p>
        })}
      </div>
      <div className="contentCourse">
        <h3 className='titleContent'>Contenido del curso</h3>
        <div className="contentData">
          {content.map((c: string) => {
            return <p className="data" key={c}>{c}</p>
          })}
        </div>
      </div>
      <div className="teachersContainer">
        <h3 className='titleTeachers'>Profesores del curso</h3>
        {teachers.map((t: number) => {
          const {name, vocation, phrase, image} = teachersData[t]
          return <Teacher name={name} vocation={vocation} phrase={phrase} img={image} key={name} />
        })}
      </div>
    </ContainerStyled>
  )
}

export default CourseContainer