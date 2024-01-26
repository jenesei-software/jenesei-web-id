import {
  LOADING_TIME,
  LayoutAnimatedTransitionProps,
  LayoutAnimatedTransitionWrapper,
} from '.'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const LayoutAnimatedTransition: React.FC<
  LayoutAnimatedTransitionProps
> = (props) => {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsTransitioning(true)

    const timeoutId = setTimeout(() => {
      setIsTransitioning(false)
    }, LOADING_TIME + 200)

    return () => clearTimeout(timeoutId)
  }, [location.pathname])
  return (
    <LayoutAnimatedTransitionWrapper
      $loadingTime={LOADING_TIME}
      $isTransitioning={isTransitioning}
    >
      {props.children}
    </LayoutAnimatedTransitionWrapper>
  )
}
