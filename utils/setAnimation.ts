export default function setAnimation (element: HTMLElement|null|any) {
    if (typeof window === 'object') {
      const observerContainer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (element) element.style.animation = 'mostrarElemento 0.5s linear'
          }
        })
      })
      if (element) observerContainer.observe(element)
    }
  }