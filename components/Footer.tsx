import styled from "@emotion/styled";
import phone from '../public/img/phoneWhite.png'
import mail from '../public/img/mailWhite.png'
import Image from "next/image"

const Footer = () => {
  const FooterStyled = styled.div`
    /*margin-top: 90px;*/
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    height: 200px;
    .contacts {
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      .contact {
        display: flex;
        flex-flow: row wrap;
        width: 300px;
        .imgContact {
          width: 60px;
          * {
            width: 100%;
            height: 100%;
          }
        }
        .textContact {
          margin-left: 10px;
          color: white;
        }
      }
    }
  `
  return (
    <div className="contentFooter">
      <FooterStyled className='footer'>
        <div className="contacts">
            <div className="contact">
              <div className="imgContact">
                <Image src={phone} alt='contact phone' />
              </div>
              <p className='textContact'>
                5555555555
              </p>
            </div>
            <div className="contact">
              <div className="imgContact">
                <Image src={mail} alt='contact phone' />
              </div>
              <p className='textContact'>
                ejemplo@gmail.com
              </p>
            </div>
        </div>
      </FooterStyled>
    </div>
  )
}

export default Footer