import styled from "@emotion/styled"
import { useEffect } from "react"
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import emailjs from '@emailjs/browser'
import ButtonEffect from "../components/ButtonEffect"
import facebook from '../public/img/facebook.png'
import twitter from '../public/img/twitter.png'
import mailWhite from '../public/img/mailWhite.png'
import Link from "next/link"
import Image from "next/image"

const Contact = () => {
  const ContactStyled = styled.div`
    color: white;
    .textToContact {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      background: linear-gradient(to left, #1d3258, #111d33);
      padding-top: 140px !important;
      padding-bottom: 60px;
      h1 {
        display: block;
        text-align: left;
        width: 800px;
        border-bottom: 3px solid #4467ac;
        padding-bottom: 20px;
        font-family: pixelRand;
        font-weight: normal;
      }
      p {
        width: 800px;
        margin-top: 60px;
      }
      .contacts {
        
      }
    }
    .contentForm {
      padding-top: 100px;
      padding-bottom: 80px;
      border-top: 2px solid black;
      border-bottom: 2px solid black;
      background: linear-gradient(-90deg, black, rgba(0, 0, 0, 0.5), black);
      .form {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        width: 450px;
        margin: 0 auto;
        border: 2px solid var(--secondaryColor);
        /*box-shadow: 0px 0px 4px #666;*/
        border-radius: 20px;
        padding: 20px;
        background: transparent;
        /*background-color: #09111f;*/
        .titleContact {
          display: block;
          width: 100%;
          text-align: center;
          font-family: pixelRand;
          font-weight: normal;
          text-shadow: 0px 0px 2px #111;
          margin-top: 20px;
        }
        .formContact {
          display: flex;
          flex-flow: row wrap;
          width: 300px;
          justify-content: center;
          .inputContact,
          .description {
            width: 100%;
            padding: 10px;
            height: 30px;
            border: 2px solid var(--secondaryColor);
            margin-top: 20px;
            font-size: 16px;
            font-family: Roboto;
            background: transparent;
            color: white;
            font-family: pixelRand;
            font-weight: normal;
          }
          .inputContact {
            border: none;
            border-bottom: 2px solid var(--secondaryColor);
          }
          .description {
            width: 100%;
            height: 80px;
          }
          .buttonContact {
            margin: 0px auto;
          }
          .submitContact {
            padding: 15px;
            border: none;
            border-radius: 20px;
            margin: 0px auto;
            margin-top: 20px;
            background: var(--principalColor);
            color: white;
            font-size: 16px;
            cursor: pointer;
            font-family: Roboto;
          }
        }
      }
    }

    @media (max-width: 835px) {
      .textToContact {
        width: 100%;
        padding: 40px;
        * {
          width: 100% !important;
        }
      }
    }
    
    @media (max-width: 493px) {
      .imgForm {
        width: 95% !important;
        .form {
          width: 100%;
        }
      }
      .formContact {
        width: 100%;
      }
    }
    @media (max-width: 352px) {
      .textToContact {
        padding: 0px;
        .titleTextContact,
        .pToContact {
          padding-left: 40px;
          padding-right: 40px;
        }
        .mailContact {
          margin-bottom: 40px;
        }
      }
    }
  `

  const consultSchema = yup.object({
    name: yup.string().required().max(50),
    lastname: yup.string().required().max(50),
    phone: yup.string().required().max(15),
    message: yup.string().required().max(400),
    email: yup.string().required().max(30).email()
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(consultSchema),
    reValidateMode: 'onSubmit'
  })

  useEffect (() => {
    const phone: any = document.querySelector('.inputContact.phone')
    if (phone) {
      window.addEventListener('keyup', (e: any) => {
        const value = e.target.value
        if (typeof value === 'string') {
          phone.value = value.replace(/[^0-9]/g, '')
        }
      })
    }
  }, [])

  const submitForm = (data: any) => {
    console.log('El pepe')
  }

  return (
    <ContactStyled className='contentContact'>
      <div className="textToContact">
        <h1 className='titleTextContact'>Contacto</h1>
        <p className='pToContact'>
          Para contactarte con nosotros utiliza este formulario o utiliza los datos que estan mas abajo, en el pie de página donde encontraras tanto el numero de teléfono como el correo
        </p>
        
      </div>
      <div className="imgContentForm">
        <div className="contentForm">
          <div className="imgForm">
            <div className="form">
              <h1 className="titleContact">Envia tu mensaje!</h1>
              <form className="formContact" onSubmit={handleSubmit(submitForm)}>
                <input autoComplete="new-password" className='inputContact' maxLength={50} type="text" placeholder='Nombre' {...register('name')} />
                <input autoComplete="new-password" className='inputContact' maxLength={50} type="text" placeholder='Apellido' {...register('lastname')} />
                <input autoComplete="new-password" className='inputContact' maxLength={30} type="email" placeholder='Correo electrónico' {...register('email')} />
                <input autoComplete="new-password" className='inputContact phone' maxLength={15} type="text" placeholder='Numero de teléfono' {...register('phone')} />
                <textarea placeholder="Motivo de consulta" maxLength={400} className="description" {...register('message')}></textarea>
                <ButtonEffect value='Enviar mensaje' color='#ccc' type='submit' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </ContactStyled>
  )
}

export default Contact