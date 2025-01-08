import { useEffect } from 'react'

const ParticleEffect = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div')
      particle.classList.add('particle')

      const contentSection = document.querySelector('.content-section')
      if (contentSection) {
        const rect = contentSection.getBoundingClientRect()

        const xPos = Math.random() * rect.width
        const yPos = Math.random() * rect.height

        particle.style.left = `${xPos}px`
        particle.style.top = `${yPos}px`
      }

      contentSection?.appendChild(particle)

      setTimeout(() => {
        particle.style.transform = 'scale(0.5)'
        particle.style.opacity = '0'
      }, 0)

      setTimeout(() => {
        particle.remove()
      }, 3000)
    }

    const interval = setInterval(createParticle, 200)

    return () => clearInterval(interval)
  }, [])

  return null
}

export default ParticleEffect
