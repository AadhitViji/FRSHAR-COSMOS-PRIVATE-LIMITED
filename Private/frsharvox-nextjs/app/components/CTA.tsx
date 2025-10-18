'use client';

import Image from 'next/image';

export default function CTA() {
  return (
    <section className="cta" id="launch">
      <div className="container">
        <div className="cta-logo">
          <Image 
            src="/frsharvox-logo.png" 
            className="cta-logo-img" 
            alt="FRSHAR Vox"
            width={80}
            height={80}
          />
        </div>
        <h2>
          Be Part of the <span>Revolution</span>
        </h2>
        <p>
          Join us for the exclusive launch event and be among the first to experience FRSHAR Vox. 
          Limited spots available for the yacht event in Dubai.
        </p>
        <a href="#" className="btn">Register Interest</a>
      </div>
    </section>
  );
}

