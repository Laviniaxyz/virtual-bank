import React, {useState} from 'react'
import {HeroContainer, 
  HeroBg, 
  VideoBg, 
  HeroContent, 
  HeroH1, 
  HeroP, 
  HeroBtnWrapper, 
  ArrowForward,
  ArrowRight 
} from './HeroElements'
import {Button} from '../ButtonElement'
import Video from '../../videos/video.mp4'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted  type='video/mp4' src={Video}/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>Sign up for a new account and receive 250$ credit on your first payment</HeroP>
        <HeroBtnWrapper>
          <Button primary dark to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
            Get started {hover? <ArrowForward/> : <ArrowRight/>}
          </Button >
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection 
