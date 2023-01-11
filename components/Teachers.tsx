import styled from "@emotion/styled";
import Teacher from "./Teacher";
import gonzalo from '../public/img/GonzaloCantarelli.jpg'
import { useEffect } from "react";
import setAnimation from "../utils/setAnimation";

const Teachers = () => {
  const TeachersStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
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
        <Teacher vocation='Unity programmer' img={gonzalo} name='Gonzalo Cantarelli' sentence='El conocimiento es poder' />
        <Teacher vocation='Unity programmer' img={gonzalo} name='Gonzalo Cantarelli' sentence='El conocimiento es poder' />
        <Teacher vocation='Unity programmer' img={gonzalo} name='Gonzalo Cantarelli' sentence='El conocimiento es poder' />
        <Teacher vocation='Unity programmer' img={gonzalo} name='Gonzalo Cantarelli' sentence='El conocimiento es poder' />
        <Teacher vocation='Unity programmer' img={gonzalo} name='Gonzalo Cantarelli' sentence='El conocimiento es poder' />
        <Teacher vocation='Unity programmer' img={gonzalo} name='Gonzalo Cantarelli' sentence='El conocimiento es poder' />
      </div>
    </TeachersStyled>
  )
}

export default Teachers