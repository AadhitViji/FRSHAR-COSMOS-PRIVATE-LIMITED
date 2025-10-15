import { useMemo, useEffect, useState, useRef } from 'react';

function NavItem({ href, label, interactive = true }) {
  if (!interactive) {
    return (
      <a href={href} className="text-lime-400 text-sm">
        {label}
      </a>
    )
  }
  return (
    <a href={href} className="group relative h-6 overflow-hidden text-sm inline-flex items-center">
      <span className="absolute inset-x-0 top-0 translate-y-0 text-lime-400 transition-transform duration-300 group-hover:-translate-y-full">
        {label}
      </span>
      <span className="absolute inset-x-0 top-0 translate-y-full text-red-500 transition-transform duration-300 group-hover:translate-y-0">
        {label}
      </span>
      <span className="opacity-0">{label}</span>
    </a>
  )
}

 

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setShow(true)
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${show ? 'reveal-in' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function ScrollToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-50 inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/90 text-black shadow-lg shadow-black/40 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 focus:ring-offset-black hover:bg-sky-400 hover:text-white ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}
    >
      ↑
    </button>
  )
}

function Header() {
  return (
    <header className="border-b border-white/10 bg-black sticky top-0 z-50">
      <div className="mx-auto max-w-[1200px] px-2 sm:px-3 lg:px-4 h-16 flex items-center">
        
        <div className="flex-1" />
        <nav className="hidden md:flex items-center gap-10 text-sm justify-center">
          <NavItem href="#nav-product" label="Product" />
          <NavItem href="#nav-support" label="Support" />
          <NavItem href="#nav-services" label="Services" />
          <NavItem href="#nav-solution" label="Solution" />
          <NavItem href="#about" label="About Us" />
          <NavItem href="#blog" label="Blog" />
        </nav>
        <div className="flex-1" />
        <div className="hidden md:flex items-center gap-2">
          <span className="text-lime-400 text-sm">⌘A English</span>
        </div>
      </div>
    </header>
  )
}

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-[1500px] px-2 sm:px-3 lg:px-4 py-3">
      <ol className="flex items-center gap-2 text-[11px] sm:text-xs text-white/60">
        <li>
          <a href="#" className="hover:text-white transition-colors">Home</a>
        </li>
        <li aria-hidden className="text-white/30">/</li>
        <li>
          <a href="#" className="hover:text-white transition-colors">Services</a>
        </li>
        <li aria-hidden className="text-white/30">/</li>
        <li className="text-white/80 font-medium">Data Protection</li>
      </ol>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-2 sm:px-3 lg:px-4 py-4">
        <img src="/images/hero.jpg" alt="Top banner" className="w-full rounded-md ring-1 ring-white/10" />
      </div>
    </section>
  )
}

function Section({ id, title, children, kicker }) {
  return (
    <section id={id} className="border-t border-white/10">
      <div className="mx-auto max-w-[1500px] px-2 sm:px-3 lg:px-4 py-12 sm:py-16">
        {kicker && (
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-lime-300/90">{kicker}</span>
          </div>
        )}
        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">{title}</h2>
        <div className="mt-6 text-white/80 space-y-6 leading-7">{children}</div>
      </div>
    </section>
  )}

function Responsibilities() {
  const items = [
    'Develop and maintain web applications using React.js and related technologies.',
    'Collaborate with UI/UX designers to translate designs and wireframes into high-quality, responsive code.',
    'Optimize components for maximum performance across various browsers and devices.',
    'Integrate RESTful APIs and third-party services into the application.',
    'Write clean, modular, and testable code following best practices and coding standards.',
    'Participate in code reviews to ensure code quality and share knowledge with the team.',
    'Troubleshoot and debug issues to ensure optimal application performance.',
    'Stay updated on emerging technologies and suggest improvements to existing systems.'
  ]
  return (
    <ul className="list-disc pl-6 marker:text-lime-400 space-y-2">
      {items.map((it) => (
        <li key={it}>{it}</li>
      ))}
    </ul>
  )
}

function TabsBar() {
  const tabs = ['Overview', 'Features', 'Models', 'FAQs']
  return (
    <div className="bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/70 border-y border-white/10 sticky top-16 z-40">
      <div className="mx-auto max-w-[1500px] px-2 sm:px-3 lg:px-4">
        <div className="grid grid-cols-[auto,1fr,auto] items-center">
          <div className="py-3 text-[11px] text-white/70">Asif Firewall Data Protection</div>
          <div className="py-1 flex items-center gap-6 sm:gap-8 text-sm whitespace-nowrap overflow-x-auto">
            {tabs.map((t, i) => (
              <button key={t} className={`relative py-3 px-1 transition-colors ${i === 0 ? 'text-sky-400' : 'text-white/70 hover:text-white'}`}>
                {t}
                {i === 0 && <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-[3px] bg-sky-400" />}
              </button>
            ))}
          </div>
          <div />
        </div>
      </div>
    </div>
  )
}

function IntroBlurb() {
  return (
    <div className="mx-auto max-w-[1200px] px-2 sm:px-3 lg:px-4 py-12 text-center">
      <p className="text-white text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
        Asif Firewall Backup provides businesses with a flexible, reliable, and cost‑effective solution for data
        backup and restoration. Deployable as a physical or virtual appliance on‑premises, Asif Firewall Backup
        serves as a backup target for data from various sources, including servers, virtual machines, databases,
        and applications.
      </p>
    </div>
  )
}

function FeatureColumns() {
  const items = [
    {
      title: 'Reliable ransomware safeguard, ensuring quick recovery',
      body: "Don't let criminals hold your data hostage. With Asif Firewall, data recovery is straightforward eliminate the malware, delete attacker‑encrypted files, and restore a secure copy of your valuable data.",
    },
    {
      title: 'Affordable and user‑friendly data protection',
      body: 'Simple to configure and manage, Asif Firewall Backup is a secure, all‑in‑one solution that provides total peace of mind. With a capacity‑based, all‑inclusive subscription model, you pay only for the protection you need today avoiding large upfront hardware costs all essentials included.',
    },
    {
      title: 'Flexible on‑premises and cloud replication for any environment',
      body: 'With cloud‑based subscriptions, Asif Firewall Backup securely backs up and recovers data across virtual and physical environments.',
    },
  ]
  return (
    <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <div key={it.title} className="group rounded-2xl glass gradient-border p-6 shadow-lg shadow-black/30 transition-transform hover:-translate-y-1 hover-tilt shine">
          <div className="h-10 w-10 rounded-lg bg-sky-400/20 ring-1 ring-white/10 flex items-center justify-center text-sky-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sky-300">
              <path d="M12 3l2.4 4.86 5.4.78-3.9 3.8.92 5.36L12 15.9l-4.82 2.54.92-5.36-3.9-3.8 5.4-.78L12 3z" fill="currentColor"/>
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-white">{it.title}</h3>
          <p className="mt-3 text-white/70">{it.body}</p>
        </div>
      ))}
    </div>
  )
}

function DefenseWithImage() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 items-start">
      <div>
        <h3 className="text-2xl font-bold text-white">Secure Your Data with Advanced Ransomware Defense</h3>
        <p className="mt-3 text-white/80">Most cybersecurity experts agree that the top priority in ransomware protection is the ability to recover from an attack with a secure backup.</p>
        <ul className="mt-5 list-disc pl-6 marker:text-white space-y-2 leading-7">
          <li>Irreversible Data Backups</li>
          <li>Multi‑Layered Login Protection</li>
          <li>End‑to‑End Data Protection</li>
          <li>Role‑Defined Access Security</li>
          <li>Block Unauthorized Network Sharing</li>
        </ul>
      </div>
      <figure className="text-center">
        <img src="/images/ui-1.png" alt="Streamlined Interface for Quick and Simple Data Restoration" className="rounded-xl ring-1 ring-white/10 mx-auto shadow-xl shadow-black/40" loading="lazy" />
        <figcaption className="mt-2 text-sm italic text-white/70">Streamlined Interface for Quick and Simple Data Restoration</figcaption>
      </figure>
    </div>
  )
}

function CostEffective() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 items-start">
      <figure className="order-last lg:order-first text-center">
        <img src="/images/ui-2.png" alt="Simplified Data Display for Easy Access and Understanding" className="rounded-xl ring-1 ring-white/10 mx-auto shadow-xl shadow-black/40" loading="lazy" />
        <figcaption className="mt-2 text-sm italic text-white/70">Simplified Data Display for Easy Access and Understanding</figcaption>
      </figure>
      <div>
        <h3 className="text-2xl font-bold text-white">Efficient, Cost‑Effective Data Protection Made Easy</h3>
        <p className="mt-3 text-white/80">Asif Firewall offers flexible backup options, including physical and virtual solutions, with no hidden fees. Each subscription includes the appliance with local storage, software, and support, along with optional cloud storage, a 4‑year hardware refresh, and our Instant Replacement service.</p>
        <p className="mt-4 text-white/90">Choose the deployment that works best for your environment:</p>
        <ul className="mt-4 list-disc pl-6 marker:text-white space-y-2 leading-7">
          <li>Reliable Backup Appliance</li>
          <li>Virtual Backup Solution</li>
        </ul>
      </div>
    </div>
  )
}

function Replication() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 items-start">
      <div>
        <h3 className="text-2xl font-bold text-white">Effortless Data Replication in the Cloud or On‑Premises</h3>
        <p className="mt-3 text-white/80">User error, malicious deletion, natural disasters, and cyberattacks can threaten your data. Back up and recover across physical and virtual environments such as:</p>
        <ul className="mt-5 list-disc pl-6 marker:text-white space-y-2 leading-7">
          <li>VMware vSphere and Microsoft Hyper‑V</li>
          <li>Windows, Linux, macOS, Microsoft SQL, and Exchange</li>
          <li>Network‑attached storage</li>
        </ul>
      </div>
      <figure className="text-center">
        <img src="/images/ui-3.png" alt="Replication UI" className="rounded-xl ring-1 ring-white/10 mx-auto shadow-xl shadow-black/40" loading="lazy" />
        <figcaption className="mt-2 text-sm italic text-white/70">Keep Your Most Valuable Data Safe</figcaption>
      </figure>
    </div>
  )
}

function Support24h() {
  return (
    <div>
      <div className="mt-6 grid gap-10 lg:grid-cols-2 items-center">
        <figure className="flex flex-col items-center justify-center text-center">
          <img src="/images/badge-24h.png" alt="24h support" className="h-40 w-40 sm:h-48 sm:w-48 mx-auto" loading="lazy" />
          <figcaption className="mt-2 p-8 text-sm italic text-white/70">Get uninterrupted, expert support from our in‑house engineers, with no phone trees, around the clock.</figcaption>
        </figure>
        <div>
          <h3 className="text-2xl font-bold text-white">Asif Firewall: The Trusted Choice for Cyber Protection</h3>
          <p className="mt-3 text-white/80">User error, malicious deletion, natural disasters, and cyberattacks can all threaten your data and, ultimately, your business. Asif Firewall can securely back up and recover data, including files located in both physical and virtual environments, such as:</p>
          <ul className="mt-5 list-disc pl-6 marker:text-white space-y-2 leading-7">
            <li>Asif Firewall Cloud‑to‑Cloud Backup. Safeguard your Microsoft 365 environment, including emails, attachments, calendars, contacts, tasks, as well as Teams, SharePoint Online, OneDrive, OneNote, and Entra ID</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
function RelatedArticles() {
  const articles = [1, 2, 3, 4].map((i) => ({
    id: i,
    title: 'How To Protect Threats From Hackers',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: `/images/article-${i}.jpg`
  }))
  return (
    <section>
      <div className="mx-auto max-w-[1500px] px-2 sm:px-3 lg:px-4 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl font-bold">Related Articles</h2>
        <Reveal>
        <div className="mt-8 marquee marquee-fade marquee-group" style={{ ['--marquee-speed']: '35s' }}>
          <div className="marquee-track animate-marquee" dir="rtl">
            {articles.concat(articles).map((a, idx) => (
              <article key={`m1-${a.id}-${idx}`} className="shrink-0 w-[280px] sm:w-[320px] group rounded-2xl glass gradient-border p-3 shadow-lg shadow-black/40 transition-transform hover:-translate-y-1 hover-tilt shine" dir="ltr">
                <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
                  <img src={a.image} alt="" className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" loading="lazy" />
                </div>
                <div className="px-2 pb-4 pt-4 text-center">
                  <h3 className="text-lg font-extrabold leading-snug text-white line-clamp-2">{a.title}</h3>
                  <p className="mt-2 text-sm text-white/70 line-clamp-2">{a.excerpt}</p>
                  <a href="#" className="mt-4 btn btn-sm btn-primary btn-arrow mx-auto">Learn More <span className="icon">→</span></a>
                </div>
              </article>
            ))}
          </div>
          
        </div>
        </Reveal>
      </div>
    </section>
  )
}

function NewsletterSignup() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_0%_0%,#0f172a,transparent)]" />
      <Reveal>
      <div className="mx-auto max-w-[1500px] px-2 sm:px-3 lg:px-4 py-16 sm:py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 w-full">
          <h3 className="text-3xl md:text-4xl font-extrabold">Join Us For Security Insights, Threat Spotlights, And More.</h3>
          <p className="mt-3 text-lg text-white/80">Get the newest insights, research, and news sent directly to you.</p>
          <form className="mt-8 w-full max-w-2xl" onSubmit={(e)=>e.preventDefault()}>
            <label className="block text-sm mb-2 text-white/90">Email Address *</label>
            <div className="flex gap-3">
              <input className="flex-1 h-12 rounded-xl bg-black/70 ring-1 ring-white/10 px-4 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-black" placeholder="example@frsharmail.com" type="email" />
              <button className="btn btn-md btn-primary btn-arrow">
                <span className="icon">🔔</span>
                <span>SUBSCRIBE</span>
                <span className="icon">→</span>
              </button>
            </div>
          </form>
        </div>
        <div className="w-72 h-72 md:w-80 md:h-80 shrink-0">
          <img src="/images/newsletter-illus.png" alt="Newsletter illustration" className="w-full h-full object-contain" loading="lazy" />
        </div>
      </div>
      </Reveal>
    </section>
  )
}

function ContactCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-400/40 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_600px_at_50%_120%,#5dd0ff,transparent)] opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-48 -z-10 bg-gradient-to-b from-transparent to-black/90" />
      <Reveal>
      <div className="mx-auto max-w-[1500px] px-2 sm:px-3 lg:px-4 py-24 text-center">
        <h2 className="text-4xl sm:text-6xl font-extrabold">Let’s Secure Together<br/>Contact Us for Firewall Solutions</h2>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">Connect with us to explore how we can secure your digital world. We’re here to help!</p>
        <div className="mt-8">
          <a href="#contact" className="group inline-flex items-center justify-center h-14 w-14 rounded-full bg-white/90 text-black shadow-lg shadow-black/40 transition-colors duration-300 hover:bg-sky-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 focus:ring-offset-black">
            <span className="transition-transform duration-300 group-hover:rotate-45">→</span>
          </a>
        </div>
      </div>
      </Reveal>
    </section>
  )
}

function BackgroundFX() {
  const { near, far } = useMemo(() => {
    const rnd = (min, max) => Math.random() * (max - min) + min
    const makeDots = (count, sizeMin, sizeMax, durMin, durMax, opacityMin, opacityMax) =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: rnd(0, 100),
        left: rnd(0, 100),
        size: rnd(sizeMin, sizeMax),
        opacity: rnd(opacityMin, opacityMax),
        tx: rnd(-18, 18),
        ty: rnd(-14, 14),
        dur: rnd(durMin, durMax),
        delay: rnd(0, 8),
        tint: Math.random() < 0.12 ? (Math.random() < 0.5 ? 'sky' : 'indigo') : 'white',
      }))
    return {
      near: makeDots(60, 2.2, 4.0, 10, 22, 0.45, 0.9),
      far: makeDots(110, 1.0, 2.0, 18, 36, 0.25, 0.6),
    }
  }, [])

  const dotStyle = (d) => ({
    top: `${d.top}%`,
    left: `${d.left}%`,
    width: `${d.size}px`,
    height: `${d.size}px`,
    opacity: d.opacity,
    ['--tx']: `${d.tx}px`,
    ['--ty']: `${d.ty}px`,
    ['--dur']: `${d.dur}s`,
    background: d.tint === 'white' ? 'rgba(255,255,255,0.95)' : d.tint === 'sky' ? 'rgba(125,211,252,0.9)' : 'rgba(165,180,252,0.9)'
  })

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Far layer */}
      <div className="absolute inset-0">
        {far.map((d) => (
          <span key={`f-${d.id}`} className="particle animate-wander animate-twinkle" style={dotStyle(d)} />
        ))}
      </div>
      {/* Near layer */}
      <div className="absolute inset-0">
        {near.map((d) => (
          <span key={`n-${d.id}`} className="particle animate-wander animate-twinkle" style={dotStyle(d)} />
        ))}
      </div>

      {/* Soft gradient blobs for depth */}
      <div className="absolute -top-24 -left-16 w-[28rem] h-[28rem] rounded-full bg-sky-400/10 blur-3xl animate-float parallax-item" style={{ ['--d']: '.025' }} />
      <div className="absolute top-1/3 -right-24 w-[26rem] h-[26rem] rounded-full bg-indigo-400/10 blur-3xl animate-float [animation-delay:2s] parallax-item" style={{ ['--d']: '.035' }} />
      <div className="absolute bottom-[-10%] left-1/4 w-[22rem] h-[22rem] rounded-full bg-lime-300/10 blur-3xl animate-float [animation-delay:4s] parallax-item" style={{ ['--d']: '.02' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-[1500px] px-2 sm:px-3 lg:px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          <div className="md:col-span-2">
            <h4 className="text-xl font-semibold">Company name</h4>
            <p className="mt-4 text-sm text-white/70">Subscribe to Our Newsletter:</p>
            <p className="mt-1 text-xs text-white/50">Receive updates on Asif firewall and special promotions!</p>
            <form className="mt-4 flex max-w-md gap-2" onSubmit={(e)=>e.preventDefault()}>
              <input className="flex-1 rounded-lg bg-black/60 ring-1 ring-white/10 px-3 py-2 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-lime-400" placeholder="Your email here" type="email" />
              <button className="rounded-lg bg-gradient-to-r from-sky-400 to-indigo-400 text-white font-semibold px-4">Submit</button>
            </form>
          </div>
          <div>
            <h5 className="font-semibold">Product</h5>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>Email Protection</li>
              <li>Data Protection</li>
              <li>Cloud Security</li>
              <li>Network Security</li>
              <li>Application Protection</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Services</h5>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>Managed Security Services</li>
              <li>Support Plan</li>
              <li>Incident Response</li>
              <li>Management Platform</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Solution</h5>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>AI in Cybersecurity</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Support</h5>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>Get Help</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">About us</h5>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>Company</li>
              <li>Blog</li>
              <li>News</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-2">
          <p>©{new Date().getFullYear()} Asif Firewall Ltd. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Website Terms & Conditions</a>
            <a href="#">Accessibility Statement</a>
            <a href="#">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-dvh">
      <BackgroundFX />
      <Header />
      <Breadcrumbs />
      <Hero />

      <TabsBar />
      <IntroBlurb />

      <div className="divider-x mx-auto max-w-[1500px] px-2 sm:px-3 lg:px-4" />

      <section className="section-surface">
        <div className="mx-auto max-w-[1500px] px-2 sm:px-3 lg:px-4 py-12 sm:py-16">
          <Reveal>
            <FeatureColumns />
          </Reveal>
        </div>
      </section>

      <section className="section-surface">
        <div className="mx-auto max-w-[1500px] px-2 sm:px-3 lg:px-4 py-12 sm:py-16">
          <Reveal delay={80}>
            <DefenseWithImage />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1500px] px-2 sm:px-3 lg:px-4 py-12 sm:py-16">
          <Reveal delay={120}>
            <CostEffective />
          </Reveal>
        </div>
      </section>

      <section className="section-surface">
        <div className="mx-auto max-w-[1500px] px-2 sm:px-3 lg:px-4 py-12 sm:py-16">
          <Reveal delay={160}>
            <Replication />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1500px] px-2 sm:px-3 lg:px-4 py-12 sm:py-16">
          <Reveal delay={200}>
            <Support24h />
          </Reveal>
        </div>
      </section>

      <RelatedArticles />
      <NewsletterSignup />
      <ContactCTA />

      <Footer />
      <ScrollToTop />
    </div>
  )
}
