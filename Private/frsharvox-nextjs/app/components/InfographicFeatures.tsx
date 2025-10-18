'use client';

export default function InfographicFeatures() {
  const features = [
    {
      title: "What We Bring to the Table",
      subtitle: "Future Timestamp messaging",
      description: "Users can schedule messages (text, image, or file) with a future timestamp. Message will only be delivered to the receiver at the scheduled time.",
      icon: "clock"
    },
    {
      title: "Sender-controlled privacy",
      description: "When a sender shares an image, the receiver can only view it inside the app. The image cannot be downloaded, saved, or exported. If the receiver wants to see it again, the sender must re-send it.",
      icon: "lock"
    },
    {
      title: "Groups that vanish on time",
      description: "In group chats, messages automatically disappear after all members have seen them. The sender can track who has seen it. Once everyone has seen the message, it vanishes from all devices.",
      icon: "users-vanish"
    },
    {
      title: "Touch to Connect",
      description: "Allows two users to instantly add each other as contacts by physically tapping their phones together using NFC.",
      icon: "nfc"
    },
    {
      title: "Wi-Fi Only Chat",
      description: "Enables communication within the same physical space using local Wi-Fi or hotspot without internet. Messages are temporary and erased when the session ends or user leaves range.",
      icon: "wifi"
    },
    {
      title: "Auto-Vanish Chat",
      description: "Messages are accessible for a maximum of 12 hours (5 days) and then automatically deleted from the system.",
      icon: "timer"
    },
    {
      title: "Offline Messaging",
      description: "Send messages without internet; they are stored locally and sent when connection is restored. Receiver gets them when online.",
      icon: "offline"
    },
    {
      title: "TrackShare",
      description: "Share real-time GPS location as a clickable map link or embedded view for easy navigation.",
      icon: "location"
    },
    {
      title: "Bad G's Reporting System",
      description: "If a person behaves badly, other users can report them. The app uses Bad F's — visual bad emojis/tags attached to that person's profile. Profiles show Bad G's score in warn status.",
      icon: "warning"
    }
  ];

  const getIcon = (iconType: string) => {
    switch(iconType) {
      case 'clock':
        return (
          <svg className="feature-svg" viewBox="0 0 100 100">
            <rect x="20" y="40" width="60" height="50" fill="currentColor" rx="5"/>
            <polygon points="50,20 35,40 65,40" fill="currentColor"/>
            <circle cx="50" cy="65" r="15" fill="#000" stroke="currentColor" strokeWidth="3"/>
            <line x1="50" y1="65" x2="50" y2="55" stroke="currentColor" strokeWidth="3"/>
            <line x1="50" y1="65" x2="58" y2="65" stroke="currentColor" strokeWidth="3"/>
          </svg>
        );
      case 'lock':
        return (
          <svg className="feature-svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="35" fill="currentColor"/>
            <text x="50" y="65" fontSize="40" fill="#000" textAnchor="middle" fontWeight="bold">i</text>
          </svg>
        );
      case 'users-vanish':
        return (
          <svg className="feature-svg" viewBox="0 0 100 100">
            <circle cx="30" cy="35" r="12" fill="currentColor"/>
            <circle cx="50" cy="35" r="12" fill="currentColor"/>
            <circle cx="70" cy="35" r="12" fill="currentColor"/>
            <path d="M20,55 Q30,45 40,55 Q30,65 20,55" fill="currentColor"/>
            <path d="M40,55 Q50,45 60,55 Q50,65 40,55" fill="currentColor"/>
            <path d="M60,55 Q70,45 80,55 Q70,65 60,55" fill="currentColor"/>
          </svg>
        );
      case 'nfc':
        return (
          <svg className="feature-svg" viewBox="0 0 100 100">
            <path d="M30,30 L30,50 L50,50 L50,30 Z" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
            <path d="M50,50 L50,70 L70,70 L70,50 Z" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
            <circle cx="40" cy="40" r="3" fill="currentColor"/>
            <circle cx="60" cy="60" r="3" fill="currentColor"/>
          </svg>
        );
      case 'wifi':
        return (
          <svg className="feature-svg" viewBox="0 0 100 100">
            <path d="M50,70 Q30,50 50,30 Q70,50 50,70" fill="none" stroke="currentColor" strokeWidth="5"/>
            <path d="M50,60 Q38,50 50,40 Q62,50 50,60" fill="none" stroke="currentColor" strokeWidth="5"/>
            <path d="M50,50 Q45,47 50,45 Q55,47 50,50" fill="none" stroke="currentColor" strokeWidth="5"/>
            <circle cx="50" cy="65" r="4" fill="currentColor"/>
          </svg>
        );
      case 'timer':
        return (
          <svg className="feature-svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="5"/>
            <line x1="50" y1="50" x2="50" y2="30" stroke="currentColor" strokeWidth="4"/>
            <line x1="50" y1="50" x2="65" y2="50" stroke="currentColor" strokeWidth="4"/>
            <path d="M30,25 L35,20 M70,25 L65,20" stroke="currentColor" strokeWidth="4"/>
          </svg>
        );
      case 'offline':
        return (
          <svg className="feature-svg" viewBox="0 0 100 100">
            <path d="M30,30 Q50,10 70,30" fill="none" stroke="currentColor" strokeWidth="5"/>
            <path d="M35,40 Q50,25 65,40" fill="none" stroke="currentColor" strokeWidth="5"/>
            <path d="M40,50 Q50,40 60,50" fill="none" stroke="currentColor" strokeWidth="5"/>
            <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="6"/>
          </svg>
        );
      case 'location':
        return (
          <svg className="feature-svg" viewBox="0 0 100 100">
            <path d="M30,40 L50,20 L70,40 L70,60 L50,80 L30,60 Z" fill="none" stroke="currentColor" strokeWidth="5"/>
            <circle cx="50" cy="50" r="10" fill="currentColor"/>
            <polyline points="60,35 70,35 70,45" fill="none" stroke="currentColor" strokeWidth="4"/>
          </svg>
        );
      case 'warning':
        return (
          <svg className="feature-svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="35" fill="currentColor"/>
            <text x="50" y="65" fontSize="50" fill="#000" textAnchor="middle" fontWeight="bold">!</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="infographic-features">
      <div className="infographic-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-block">
            <div className="feature-content-left">
              <div className="feature-title-bar">{feature.title}</div>
              {feature.subtitle && (
                <div className="feature-subtitle-green">{feature.subtitle}</div>
              )}
              <div className="feature-description-box">
                {feature.description}
              </div>
            </div>
            <div className="feature-icon-right">
              {getIcon(feature.icon)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

