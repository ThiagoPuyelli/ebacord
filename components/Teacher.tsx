import styled from "@emotion/styled";
import Image from "next/image";

type TeacherData = {
  vocation: string,
  img: any,
  name: string,
  phrase: string
}

const Teacher = ({vocation, img, name, phrase}: TeacherData) => {
  const TeacherStyled = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    width: 300px;
    color: white;
    background: var(--principalColor);
    margin-top: 50px !important;
    margin: 20px;
    font-family: pixelRand;
    border-radius: 20px;
    border: 1px solid #ccc;
    .vocation {
      display: block;
      font-weight: normal;
      font-size: 20px;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      width: 100%;
      text-align: center;
      border-radius: 20px 20px 0px 0px;
      background-image: radial-gradient(circle, rgba(137, 120, 211, 0.4) 0%, var(--principalColor) 100%);
    }
    .imgTeacher {
      width: 100px;
      margin-top: 20px;
      * {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      margin: 10px;
      font-size: 18px;
      text-decoration: underline;
    }
    .sentence {
      margin: 10px;
      text-align: center;
    }
  `
  return (
    <TeacherStyled className='teacher'>
      <p className='vocation'>{vocation}</p>
      <div className="imgTeacher">
        <Image src={img} alt={'Profesor ' + name} />
      </div>
      <p className="name">{name}</p>
      <p className='sentence'>{phrase}</p>
    </TeacherStyled>
  )
}

export default Teacher