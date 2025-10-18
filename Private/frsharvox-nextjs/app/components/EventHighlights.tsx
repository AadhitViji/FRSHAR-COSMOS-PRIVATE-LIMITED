'use client';

import Image from 'next/image';

export default function EventHighlights() {
  return (
    <section className="event-highlights" id="event">
      <div className="container">
        <h2 className="section-title">
          Exclusive <span>Launch Event</span>
        </h2>
        <div className="event-container">
          <div className="yacht-image">
            <Image 
              src="/yatch.jpg" 
              alt="Luxury Yacht at Marina, Dubai" 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="event-details">
            <div className="event-item">
              <div className="event-label">Location</div>
              <div className="event-value">
                <i className="fas fa-map-marker-alt" style={{ color: 'var(--secondary)', marginRight: '10px' }}></i> 
                Marina, Dubai, UAE
              </div>
            </div>
            <div className="event-item">
              <div className="event-label">Date</div>
              <div className="event-value">
                <i className="fas fa-calendar-alt" style={{ color: 'var(--secondary)', marginRight: '10px' }}></i> 
                October 26, 2025
              </div>
            </div>
            <div className="event-item">
              <div className="event-label">Attendees</div>
              <div className="event-value">
                <i className="fas fa-users" style={{ color: 'var(--secondary)', marginRight: '10px' }}></i> 
                Only <span className="highlight">50 selected individuals</span>
              </div>
            </div>
            <div className="event-item">
              <div className="event-label">Exclusivity</div>
              <div className="event-value">
                <i className="fas fa-crown" style={{ color: 'var(--secondary)', marginRight: '10px' }}></i> 
                Only the <span className="highlight">luckiest</span> will be there!
              </div>
              <div className="exclusive-badge">Ultra Exclusive Event</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

