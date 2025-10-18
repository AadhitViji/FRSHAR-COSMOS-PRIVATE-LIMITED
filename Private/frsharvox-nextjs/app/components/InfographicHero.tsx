'use client';

import Image from 'next/image';

export default function InfographicHero() {
  return (
    <section className="infographic-hero">
      <div className="infographic-container">
        <div className="logo-section">
          <Image 
            src="/frsharvox-logo.png" 
            alt="FRSHAR Vox Logo"
            width={80}
            height={80}
            className="hero-logo-small"
          />
          <div className="logo-text-hero">FRSHAR Vox</div>
        </div>
        
        <div className="hero-content-infographic">
          <h1 className="hero-title-green">
            Create seamless<br />
            offline chat in<br />
            minutes
          </h1>
          <p className="hero-subtitle-green">
            Experience a pro-standard AI-based offline connectivity, but<br />
            most useful in future, because, we use Replicache DB. We have<br />
            inbuilt AI to manage local actions.
          </p>
        </div>
        
        <div className="chat-bubbles-icon">
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
        </div>
      </div>
    </section>
  );
}

