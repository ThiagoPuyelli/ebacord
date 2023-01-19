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
    margin-top: 80px;
    .teachersTitle {
      display: block;
      width: 90%;
      border-bottom: 2px solid #ccc;
      color: white;
      font-family: pixelRand;
      padding-bottom: 10px;
      text-align: center;
      font-weight: normal;
    }
    .teachers {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
    }
  `
  useEffect(() => {
    for (let i = 1;i < 6;i++) {
      const teachers = document.querySelector(`.teacher:nth-child(${i})`)
      setAnimation(teachers)
    }
  }, [])

  return (
    <TeachersStyled>
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