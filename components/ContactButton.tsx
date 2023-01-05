import logoContact from '../public/img/logoContact.png'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const ContactButton = () => {
  const ContactStyled = styled.div`
    width: 60px;
    height: 60px;
    background: var(--principalColor);
    position: fixed;
    bottom: 10px;
    right: 10px;
    padding: 10px;
    border-radius: 99px;
    transition: 300ms all;
    border: 1px solid #111;
    box-shadow: 0px 0px 2px black inset;
    :hover {
      transform: scale(1.1, 1.1);
      .imgContact {
        animation: contact 300ms;
      }
    }
    .imgContact {
        width: 100%;
        height: 100%;
    }
    .imgContact * {
      width: 100%;
      height: 100%;
    }
  `

  return (
    <Link href='/contact'>
      <ContactStyled>
        <div className="imgContact">
          <Image src={logoContact} alt="Contacto" />
        </div>
      </ContactStyled>
    </Link>
  )
}

export default ContactButton