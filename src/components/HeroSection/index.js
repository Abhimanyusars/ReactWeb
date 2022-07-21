import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
// import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper, HeroH1, HeroP, ArrowForward, ArrowRight } from './HeroElements';
import { HeroContainer,  HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElements';


const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
  return (
      <HeroContainer>
          <HeroBg>
              <VideoBg sutoPlay loop muted src={Video} type='video/mp4' ></VideoBg>
          </HeroBg>
          <HeroContent>
              <HeroH1>Making the Virtual Banking Easy</HeroH1>
              <HeroP>
                  Sign up for a new account today and receive $250 credit towards your next payment.
              </HeroP>
              <HeroBtnWrapper>
                  <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} 
                  primary='true'
                  dark='true'>
                      Get started {hover ? <ArrowForward /> : <ArrowRight />}
                  </Button>
              </HeroBtnWrapper>
          </HeroContent>
      </HeroContainer>
      

    
    );
};

export default HeroSection;