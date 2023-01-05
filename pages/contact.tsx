import styled from "@emotion/styled"
import { useEffect } from "react"
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const ContactStyled = styled.div`
    padding-top: 80px;
    color: white;
    .textToContact {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      background: linear-gradient(to left, #1d3258, #111d33);
      padding-top: 60px;
      padding-bottom: 60px;
      h1 {
        display: block;
        text-align: left;
        width: 800px;
        border-bottom: 3px solid #4467ac;
        padding-bottom: 20px;
      }
      p {
        width: 800px;
      }
    }
    .contentForm {
      padding-top: 100px;
      padding-bottom: 80px;
      border-top: 2px solid black;
      border-bottom: 2px solid black;
      background-color: rgba(0, 0, 0, 0.7);
      .form {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        width: 450px;
        margin: 0 auto;
        border: 1px solid #666;
        /*box-shadow: 0px 0px 4px #666;*/
        border-radius: 20px;
        padding: 20px;
        background: transparent;
        background-color: rgba(0, 0, 0, 0.7);
        .titleContact {
          display: block;
          width: 100%;
          text-align: center;
        }
        .formContact {
          display: flex;
          flex-flow: row wrap;
          width: 300px;
          justify-content: space-between;
          .inputContact,
          .description {
            width: 100%;
            padding: 10px;
            height: 30px;
            border: 1px solid #ccc;
            margin-top: 20px;
            font-size: 16px;
            font-family: Roboto;
            background: transparent;
            color: white;
          }
          .inputContact {
            border: none;
            border-bottom: 1px solid white;
          }
          .description {
            width: 100%;
            height: 80px;
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
        console.log()
        if (typeof value === 'string') {
          phone.value = value.replace(/\s/g, '').replace(/\D/g, '')
        }
      })
    }
  }, [])

  const submitForm = (data: any) => {
    console.log('data')
  }

  return (
    <ContactStyled className='contentContact'>
      <div className="textToContact">
        <h1>Contacto</h1>
        <p className='text'>
          Para contactarte con nosotros utiliza este formulario o utiliza los datos que estan mas abajo, en el pie de página donde encontraras tanto el numero de teléfono como el correo
        </p>
      </div>
      <div className="imgContentForm">
        <div className="contentForm">
          <div className="imgForm">
            <div className="form">
              <h1 className="titleContact">Envia tu contacto!</h1>
              <form className="formContact" onSubmit={handleSubmit(submitForm)}>
                <input className='inputContact' maxLength={50} type="text" placeholder='Nombre' {...register('name')} />
                <input className='inputContact' maxLength={50} type="text" placeholder='Apellido' {...register('lastname')} />
                <input className='inputContact' maxLength={30} type="email" placeholder='Correo electrónico' {...register('email')} />
                <input className='inputContact phone' maxLength={15} type="text" placeholder='Numero de teléfono' {...register('phone')} />
                <textarea placeholder="Motivo de consulta" maxLength={400} className="description" {...register('description')}></textarea>
                <input type='submit' className='submitContact' value='Enviar consulta' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </ContactStyled>
  )
}

export default Contact