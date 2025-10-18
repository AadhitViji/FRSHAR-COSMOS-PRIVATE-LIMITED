'use client';

export default function Features() {
  const features = [
    {
      icon: 'fa-satellite-dish',
      title: 'Offline Functionality',
      description: 'Chat without internet connection using advanced peer-to-peer technology'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Military-Grade Security',
      description: 'End-to-end encryption ensures your conversations remain private'
    },
    {
      icon: 'fa-palette',
      title: 'Retro Design',
      description: "Experience the nostalgia of 1980's interface with modern functionality"
    },
    {
      icon: 'fa-bolt',
      title: 'Lightning Fast',
      description: 'Optimized for speed with minimal data usage and battery consumption'
    },
    {
      icon: 'fa-users',
      title: 'Group Chats',
      description: 'Connect with multiple people simultaneously in secure group conversations'
    },
    {
      icon: 'fa-file-export',
      title: 'File Sharing',
      description: 'Share images, documents and other files directly between devices'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">
          Powerful <span>Features</span>
        </h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

