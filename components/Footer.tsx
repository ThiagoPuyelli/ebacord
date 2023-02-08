import styled from "@emotion/styled";
import phone from '../public/img/phoneWhite.png'
import mailWhite from '../public/img/mailWhite.png'
import twitter from '../public/img/twitter.png'
import linkedin from '../public/img/linkedin.png'
import facebook from '../public/img/facebook.png'
import Image from "next/image"
import Link from "next/link";

const Footer = () => {
  const FooterStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background: var(--principalColor);
    width: 100%;
    padding-bottom: 40px;
    border-top: 2px solid var(--secondaryColor);
    box-shadow: 0px 0px 9px black inset;
    .linksContact {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      width: 200px !important;
      margin-top: 60px;
      margin-right: 10px;
      .linkContact {
        display: block;
        width: 50px !important;
        height: 50px;
        padding: 10px;
        border-radius: 99px;
        overflow: hidden;
        transition: 300ms all;
        * {
          width: 100%;
          height: 100%;
        }
        :hover {
          box-shadow: 0px 0px 4px black inset;
          * {
            animation: hoverButton 600ms;
          }
        }
      }
      .linkContact.twitter:hover {
        background: var(--secondaryColor);
      }
      .linkContact.facebook:hover {
        background: #3b5998;
      }
      .linkContact.linkedin:hover {
        background: #3366c2;
      }
    }
    .mailContact {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      margin-top: 60px;
      box-shadow: 0px 0px 4px black inset;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 20px;
      padding: 10px;
      width: 280px !important;
      height: 60px;
      margin-left: 10px;
      .imgMail {
        width: 40px !important;
        height: 40px;
        * {
          width: 100%;
          height: 100%;
        }
      }
      .textMail {
        display: block;
        width: auto !important;
        margin-top: 0px;
        margin-left: 15px;
        color: white;
      }
    }
  `
  return (
    <div className="contentFooter">
      <FooterStyled className='footer'>
          <div className="linksContact">
            <Link className='linkContact twitter' href='https://twitter.com/BacordGames' target='_blank'>
              <Image src={twitter} alt='Twitter de BacordGames' />
            </Link>
            <Link className='linkContact facebook' href='https://facebook.com/bacordgames' target='_blank'>
              <Image src={facebook} alt='Facebook de bacord BacordGames' />
            </Link>
            <Link className='linkContact linkedin' href='https://www.linkedin.com/company/bacordgames/' target='_blank'>
              <Image src={linkedin} alt='Linkedin de BacordGames' />
            </Link>
          </div>
          <div className="mailContact">
            <div className="imgMail">
              <Image src={mailWhite} alt='mail de bacord' />
            </div>
            <p className='textMail'>bacordgames@gmail.com</p>
          </div>
      </FooterStyled>
    </div>
  )
}

export default Footer