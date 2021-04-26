import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection(){
  return(
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted></video>
      <h1>Modern react website</h1>
      <p>This is a modern looking simple react site</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Get started</Button>

        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          Watch <i className="fas fa-play-circle"></i>
          </Button>


      </div>

    </div>
  )
}

export default HeroSection;