import styled from "@emotion/styled";

const CourseTitle = ({name, description, color}: any) => {
  const TitleStyled = styled.div`
    display: flex;
    flex-flow: column wrap;
    padding: 80px;
    padding-top: 120px;
    padding-left: 120px;
    color: white;
    background: ${color};
    box-shadow: 0px 0px 4px ${color};
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
    </TitleStyled>
  )
}

export default CourseTitle