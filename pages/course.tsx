import styled from "@emotion/styled";
import courses from '../data/coursesData'
import CourseTitle from "../components/courseComponents/CourseTitle";
import CourseCard from "../components/courseComponents/CourseCard";
import CourseContainer from "../components/courseComponents/CourseContainer";
import CourseContact from "../components/courseComponents/CourseContact";
import { useRouter } from "next/router";

export type ICourse = {
  name: string,
  description: string,
  color: string,
  price: string,
  info: string[],
  difficulty: 'intermedio'|'basica'|'avanzado',
  image: any,
  learning: string[],
  content: string[],
  teachers: number[]
}

const CoursePage = () => {
  const CourseStyled = styled.div`
    background: linear-gradient(to left, #1d3258, #111d33);
    padding-bottom: 80px;
  `
  
  const router = useRouter()
  const { id }: any = router.query
  const course = courses[id]
  return (
    <CourseStyled className='contentCourse'>
      {id && course ? (
      <div><CourseTitle image={course ? course.image : 'pepe'} price={course ? course.price : 'pepe'} info={course ? course.info : 'pepe'} name={course ? course.name : 'pepe'} description={course ? course.description : 'pepe'} color={course ? course.color : 'pepe'} />
      <CourseCard image={course ? course.image : 'pepe'} price={course ? course.price : 'pepe'} info={course ? course.info : ['pepe']} />
      <CourseContainer learning={course ? course.learning : 'pepe'} teachers={course ? course.teachers : 'pepe'} content={course ? course.content : 'pepe'} /> </div>) : ''}
      <CourseContact name={course ? course.name : 'pepe'} />
    </CourseStyled>
  )
}

export default CoursePage