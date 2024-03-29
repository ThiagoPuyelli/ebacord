import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import ContactButton from '../components/ContactButton'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import '../components/BackStars/backStars.css'
import '../components/BackGradient/backGradient.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect (() => {
    let scrollY = window.scrollY
    window.addEventListener('scroll', () => {
      const complete: HTMLElement|null = document.querySelector('.complete')
      const logo: HTMLElement|null = document.querySelector('.logo')
      const logoImg: HTMLElement|null = document.querySelector('.logo .imgLogo')
      if (complete && logo && logoImg && window.scrollY > 400) {
        if (scrollY < window.scrollY) {
          complete.style.top = '-100px'
          if (window.innerWidth > 431) {
            logo.style.transform = 'scale(0.6, 0.6)'
            logoImg.style.transform = 'scale(0.9, 0.9)'
            logo.style.top = '-10px'
          } else {
            logo.style.top = '-180px'
            logoImg.style.top = '-180px'
          }
        } else {
          complete.style.top = '0px'
          if (window.innerWidth > 431) {
            logo.style.transform = 'scale(1, 1)'
            logo.style.top = '0px'
            logoImg.style.top = '0px'
            logoImg.style.transform = 'scale(1, 1)'
          } else {
            logo.style.top = '0px'
            logoImg.style.top = '0px'
          }
        }
        scrollY = window.scrollY
      }
    })
  }, [])
  return (
    <div>
      <Header />
      <ContactButton />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
