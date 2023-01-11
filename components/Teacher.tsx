import styled from "@emotion/styled";
import Image from "next/image";

type TeacherData = {
  vocation: string,
  img: any,
  name: string,
  sentence: string
}

const Teacher = ({vocation, img, name, sentence}: TeacherData) => {
  const TeacherStyled = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    width: 400px;
    color: white;
    .vocation {
      font-family: pixelRand;
    }
    .imgTeacher {
      width: 100px;
      * {
        width: 100%;
        height: 100%;
      }
    }
  `
  return (
    <TeacherStyled className='teacher'>
      <p className='vocation'>{vocation}</p>
      <div className="imgTeacher">
        <Image src={img} alt={'Profesor ' + name} />
      </div>
      <p className='sentence'>{sentence}</p>
    </TeacherStyled>
  )
}

export default Teacher