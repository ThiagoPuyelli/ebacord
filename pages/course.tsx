import styled from "@emotion/styled";
import courses from '../data/coursesData'
import CourseTitle from "../components/courseComponents/CourseTitle";
import CourseCard from "../components/courseComponents/CourseCard";
import CourseContainer from "../components/courseComponents/CourseContainer";
import CourseContact from "../components/courseComponents/CourseContact";

const CoursePage = () => {
  const CourseStyled = styled.div`
    background: linear-gradient(to left, #1d3258, #111d33);
    padding-bottom: 80px;
  `
  const {name, description, color, price, info, image, learning, content, teachers} = courses[0]
  
  return (
    <CourseStyled>
      <CourseTitle name={name} description={description} color={color} />
      <CourseCard image={image} price={price} info={info} />
      <CourseContainer learning={learning} teachers={teachers} content={content} />
      <CourseContact />
    </CourseStyled>
  )
}

export default CoursePage