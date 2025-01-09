import { FlipWords, Header } from '@/components'
import { Arrow } from '@/components/icons'
import ParticleEffect from '@/components/ParticleEffect'

const Content = () => {
  return (
    <section
      className="content-section flex min-h-[max(calc(100%),600px)] flex-col items-center justify-between gap-y-7 rounded-lg bg-mobile px-4 pb-10 md:min-h-[max(calc(100%),900px)] md:bg-desktop md:px-8 lg:gap-y-14"
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
        boxShadow:
          '0 0 20px 5px rgba(54, 35, 50, 0.5), inset 0 0 20px 5px rgba(10, 10, 20, 0.5)',
        position: 'relative'
      }}
    >
      <Header />
      <ParticleEffect />
      <div className="flex flex-col items-center gap-5 md:gap-8">
        <p className="relative max-w-screen-sm text-center text-2xl font-bold md:text-3xl">
          Onboarding the
          <FlipWords words={['World', 'Masses', 'Universe', 'Cults']} />, One
          Wen at a time.
        </p>
        <Arrow className="block animate-bounce invert" />
      </div>
    </section>
  )
}

export default Content
