import React from 'react';
import './Hero.css';
import heroImage from '../assets/images/hero-image.png';

export default function Hero() {
  return (
    <div className="container hero-wrap">
      <div className="hero-left">
        <div className="hero-badge">MERN Stack</div>
        <h1 className="hero-title">Hey, I'm A Mern Stack Developer.</h1>
        <p className="hero-sub">
          I design intuitive interfaces and product experiences — visual design, prototyping,
          and user-centered workflows.
        </p>
        <div className="hero-ctas">
          <button className="cta-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}>View My Work</button>
          <button className="cta-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>Let's Chat</button>
        </div>
      </div>

      <div className="hero-image-card">
        <div className="image-top-badge">Profile</div>
        <img className="hero-image" src={heroImage} alt="Profile or product screenshot" />
      </div>
    </div>
  );
}
