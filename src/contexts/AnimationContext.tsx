import React, { createContext, useContext, useState } from 'react'

interface AnimationContextProps {
  isAnimationLoaded: boolean
  setAnimationLoaded: React.Dispatch<React.SetStateAction<boolean>>
}

export const AnimationContext = createContext<AnimationContextProps>({
  isAnimationLoaded: false,
  setAnimationLoaded: () => {}
})

export const AnimationProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [isAnimationLoaded, setAnimationLoaded] = useState(false)

  return (
    <AnimationContext.Provider
      value={{ isAnimationLoaded, setAnimationLoaded }}
    >
      {children}
    </AnimationContext.Provider>
  )
}

export const useAnimation = () => useContext(AnimationContext)
