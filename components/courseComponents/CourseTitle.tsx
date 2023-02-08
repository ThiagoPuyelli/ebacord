import styled from "@emotion/styled";
import CourseCard from "./CourseCard";

const CourseTitle = ({name, description, color, image, price, info}: any) => {
  const TitleStyled = styled.div`
    display: flex;
    flex-flow: column wrap;
    padding: 80px;
    padding-top: 120px;
    padding-left: 120px;
    color: white;
    background: linear-gradient(var(--principalColor), #09111f);
    box-shadow: 0px 0px 4px ${color};
    .card {
      display: none;
      .courseCard {
        position: relative;
        margin: 0px;
        right: 0px;
        top: 0px;
        margin-top: 60px;
      }
    }
    .titleContent {
      width: 600px;
      .titleCourse {
        font-weight: normal;
        font-family: pixelRand;
      }
      .descriptionCourse {
        margin-top: 30px;
      }
    }
    @media (max-width: 1140px) {
      padding-left: 30px;
    }
    @media (max-width: 964px) {
      display: flex;
      align-items: center;
      padding: 30px;
      padding-top: 180px;
      .card {
        display: block;
        .courseCard {
          display: block !important;
        }
      }
      .titleContent {
        width: 100%;
      }
      .titleContent * {
        text-align: center;
      }
    }
    @media (max-width: 344px) {
      padding: 10px;
      padding-top: 180px;
    }
  `
  return (
    <TitleStyled>
      <div className="titleContent">
        <h1 className="titleCourse">
          {name}
        </h1>
        <p className='descriptionCourse'>
          {description}
        </p>
      </div>
      <div className="card">
        <CourseCard image={image} price={price} info={info}  />
      </div>
    </TitleStyled>
  )
}

export default CourseTitle