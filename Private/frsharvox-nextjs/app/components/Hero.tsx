'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const countDownDate = new Date("Oct 26, 2025 00:00:00").getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      if (distance < 0) {
        setCountdown("EVENT LAUNCHED!");
      } else {
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-logo">
          <Image 
            src="/frsharvox-logo.png" 
            className="hero-logo-img" 
            alt="FRSHAR Vox"
            width={120}
            height={120}
            priority
          />
        </div>
        <h1>
          REVOLUTIONARY <span>OFFLINE CHAT</span> IS COMING
        </h1>
        <p>
          Experience the future of communication with FRSHAR Vox - blending retro aesthetics with cutting-edge technology
        </p>
        <div id="countdown">{countdown}</div>
        <p className="launch-date">Launching on October 26, 2025</p>
      </div>
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>
    </section>
  );
}

