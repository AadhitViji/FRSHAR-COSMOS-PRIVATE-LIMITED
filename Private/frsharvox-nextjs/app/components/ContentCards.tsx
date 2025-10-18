'use client';

export default function ContentCards() {
  const cards = [
    {
      icon: 'fa-ship',
      title: 'Exclusive Yacht Launch',
      description: 'Join us for the grand launch of FRSHAR Vox on a luxurious yacht at Marina, Dubai, UAE. Only 50 selected individuals will attend this exclusive event. Only the luckiest will be there!'
    },
    {
      icon: 'fa-mobile-alt',
      title: 'About FRSHAR Vox',
      description: "FRSHAR Vox is a revolutionary offline chat app with a 1980's vintage design, powered by cutting-edge safety technologies. It rivals only WhatsApp as an alternative, with no true competitors in its unique blend of nostalgia and security."
    },
    {
      icon: 'fa-chart-line',
      title: 'EternalShares Launch',
      description: 'At the same event, EternalShares, an ecosystem for founders and investors, will be unveiled, fostering unparalleled opportunities for collaboration and growth.'
    },
    {
      icon: 'fa-home',
      title: 'QiTaah Launch',
      description: 'Discover QiTaah, a revolutionary real estate platform launching on Playstore and Appstore. Unlike alternatives like Dubizzle, Bayut, and Property Finder, QiTaah stands alone with its unmatched innovation.'
    }
  ];

  return (
    <section className="container content" id="about">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <div className="card-icon">
            <i className={`fas ${card.icon}`}></i>
          </div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </section>
  );
}

