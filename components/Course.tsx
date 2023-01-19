import styled from "@emotion/styled"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import setAnimation from "../utils/setAnimation"
import ButtonEffect from "./ButtonEffect"

type CourseData = {
  image: any,
  subtitle: string,
  title: string,
  information: string[],
  color: string
}

const Course = ({image, subtitle, information, title, color}: CourseData) => {
  const CourseStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 350px;
    color: white;
    padding: 20px;
    margin-top: 30px;
    padding-bottom: 10px;
    transition: 300ms all;
    background: var(--principalColor);
    height: 330px;
    .topCourse {
      display: flex;
      flex-flow: row wrap;
      justify-content: left;
      border-bottom: 1px solid #eff3f8;
      width: 100%;
      padding-bottom: 10px;
      .imageCourse {
        width: 70px;
        height: 70px;
        * {
          width: 100%;
          height: 100%;
        }
      }
      .topText {
        margin-left: 10px;
        font-family: pixelRand;
        .titleCourse {
          font-size: 20px;
          font-weight: normal;
        }
        .subCourse {
          font-size: 16px;
          color: #eff3f8;
          margin-top: 10px;
        }
      }
    }
    .information {
      font-family: pixelRand;
      font-size: 18px;
      color: #eff3f8;
      width: 100%;
      .lineData {
        display: block;
        margin-top: 20px;
      }
    }
    button {
      font-family: pixelRand;
      font-size: 20px !important;
      padding-top: 15px !important;
      padding-bottom: 15px !important;
    }
    .border {
      position: absolute;
      margin-top: -20px;
      width: 350px;
      height: 330px;
      transition: 300ms all;
    }
    .border.top {
      border-top: 1px solid #ccc;
    }
    .border.right {
      border-right: 1px solid #ccc;
    }
    .border.left {
      border-left: 1px solid #ccc;
    }
    .border.bottom {
      border-bottom: 1px solid #ccc;
    }
    :hover {
      background-image: radial-gradient(circle, rgba(81, 70, 131, 0.4) 0%, #152540 100%);
      transform: scale(1.04, 1.04);
      .border.right {
        margin-left: 10px;
      }
      .border.top {
        margin-top: -30px;
      }
      .border.bottom {
        margin-top: -10px;
      }
      .border.left {
        margin-right: 10px;
      }
    }
  `

  return (
    <CourseStyled className='course'>
      <div className="border top"></div>
      <div className="border right"></div>
      <div className="border bottom"></div>
      <div className="border left"></div>
      <div className="topCourse">
        <div className="imageCourse">
          <Image src={image} alt='Image to course' />
        </div>
        <div className="topText">
          <h1 className="titleCourse">
            {title}
          </h1>
          <p className='subCourse'>
            {subtitle}
          </p>
        </div>
      </div>
      <div className="information">
        {information.map((data) => {
          return (
            <p className="lineData" key={data}>
              {data}
            </p>
          )
        })}
      </div>
      <Link href='/course'>
        <ButtonEffect color={color} value='Aplicar' type='button' />
      </Link>
    </CourseStyled>
  )
}

export default Course