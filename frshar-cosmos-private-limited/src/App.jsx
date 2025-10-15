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

function Header() {
  return (
    <header className="border-b border-white/10 bg-black sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        
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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-xs text-white/60">
      Home / Services / Data Protection
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <img src="/images/hero.jpg" alt="Top banner" className="w-full rounded-md ring-1 ring-white/10" />
      </div>
    </section>
  )
}

function Section({ id, title, children, kicker }) {
  return (
    <section id={id} className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {kicker && (
          <p className="text-xs uppercase tracking-widest text-lime-400/80">{kicker}</p>
        )}
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold">{title}</h2>
        <div className="mt-6 text-white/80 space-y-4">{children}</div>
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
    <div className="border-t border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-auto">
        <div className="flex gap-8 text-sm">
          {tabs.map((t, i) => (
            <button key={t} className={`py-4 ${i === 0 ? 'text-white border-b-2 border-lime-400' : 'text-white/70 hover:text-white'}`}>{t}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

function FeatureColumns() {
  const items = [
    {
      title: 'Reliable ransomware safeguard, ensuring quick recovery',
      body: "Don't let criminals hold your data hostage. Eliminate the malware, delete attacker‑encrypted files, and restore a secure copy of your valuable data.",
    },
    {
      title: 'Affordable and user‑friendly data protection',
      body: 'Simple to configure and manage with an all‑in‑one solution that provides total peace of mind.',
    },
    {
      title: 'Flexible on‑premises and cloud replication for any environment',
      body: 'Securely backs up and recovers data across virtual and physical environments.',
    },
  ]
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <div key={it.title} className="rounded-xl bg-neutral-900/60 p-6 ring-1 ring-white/10">
          <h3 className="text-xl font-semibold">{it.title}</h3>
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
        <h3 className="text-2xl font-bold">Secure Your Data with Advanced Ransomware Defense</h3>
        <p className="mt-3 text-white/80">Most cybersecurity experts agree that the top priority in ransomware protection is the ability to recover from an attack with a secure backup.</p>
        <ul className="mt-5 list-disc pl-6 marker:text-lime-400 space-y-2">
          <li>Irreversible Data Backups</li>
          <li>Multi‑Layered Login Protection</li>
          <li>End‑to‑End Data Protection</li>
          <li>Role‑Defined Access Security</li>
          <li>Block Unauthorized Network Sharing</li>
        </ul>
      </div>
      <figure className="text-center">
        <img src="/images/ui-1.png" alt="Streamlined Interface for Quick and Simple Data Restoration" className="rounded-md ring-1 ring-white/10 mx-auto" />
        <figcaption className="mt-2 text-sm text-white/60">Streamlined Interface for Quick and Simple Data Restoration</figcaption>
      </figure>
    </div>
  )
}

function CostEffective() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 items-start">
      <figure className="order-last lg:order-first text-center">
        <img src="/images/ui-2.png" alt="Simplified Data Display for Easy Access and Understanding" className="rounded-md ring-1 ring-white/10 mx-auto" />
        <figcaption className="mt-2 text-sm text-white/60">Simplified Data Display for Easy Access and Understanding</figcaption>
      </figure>
      <div>
        <h3 className="text-2xl font-bold">Efficient, Cost‑Effective Data Protection Made Easy</h3>
        <p className="mt-3 text-white/80">Flexible backup options with no hidden fees. Choose the deployment that works best for your environment:</p>
        <ul className="mt-5 list-disc pl-6 marker:text-lime-400 space-y-2">
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
        <h3 className="text-2xl font-bold">Effortless Data Replication in the Cloud or On‑Premises</h3>
        <p className="mt-3 text-white/80">User error, malicious deletion, natural disasters, and cyberattacks can threaten your data. Back up and recover across physical and virtual environments such as:</p>
        <ul className="mt-5 list-disc pl-6 marker:text-lime-400 space-y-2">
          <li>VMware vSphere and Microsoft Hyper‑V</li>
          <li>Windows, Linux, macOS, Microsoft SQL, and Exchange</li>
          <li>Network‑attached storage</li>
        </ul>
      </div>
      <figure className="text-center">
        <img src="/images/ui-3.png" alt="Replication UI" className="rounded-md ring-1 ring-white/10 mx-auto" />
      </figure>
    </div>
  )
}

function Support24h() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 items-center">
      <div className="flex justify-center">
        <img src="/images/badge-24h.png" alt="24h support" className="h-40 w-40" />
      </div>
      <div>
        <p className="text-sm text-white/60">Keep Your Most Valuable Data Safe</p>
        <h3 className="mt-2 text-2xl font-bold">Asif Firewall: The Trusted Choice for Cyber Protection</h3>
        <p className="mt-3 text-white/80">Get uninterrupted, expert support from our in‑house engineers, with no phone trees, around the clock.</p>
        <ul className="mt-5 list-disc pl-6 marker:text-lime-400 space-y-2">
          <li>Cloud‑to‑Cloud Backup for Microsoft 365</li>
          <li>Protects emails, attachments, calendars, contacts, tasks</li>
          <li>Supports Teams, SharePoint, OneDrive, OneNote, Entra ID</li>
        </ul>
      </div>
    </div>
  )
}
function RelatedArticles() {
  const articles = [1, 2, 3, 4].map((i) => ({
    id: i,
    title: ' ',
    excerpt: ' ',
    image: `/images/article-${i}.jpg` // placeholder paths; replace once assets are provided
  }))
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Related Articles</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((a) => (
            <article key={a.id} className="rounded-2xl overflow-hidden shadow-lg shadow-black/40 ring-1 ring-white/5">
              <img src={a.image} alt="" className="h-56 w-full object-cover" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function NewsletterSignup() {
  return (
    <section className="relative border-t border-white/10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_0%_0%,#0f172a,transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-bold">Join Us For Security Insights, Threat Spotlights, And More.</h3>
          <p className="mt-2 text-white/70">Get the newest insights, research, and news sent directly to you.</p>
          <form className="mt-6 flex max-w-xl gap-3" onSubmit={(e)=>e.preventDefault()}>
            <input className="flex-1 rounded-lg bg-black/60 ring-1 ring-white/10 px-4 py-3 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-lime-400" placeholder="example@frsharmail.com" type="email" />
            <button className="rounded-lg bg-gradient-to-r from-indigo-400 to-violet-400 text-black font-semibold px-5 py-3 shadow">🔔 SUBSCRIBE</button>
          </form>
        </div>
        <div className="w-56 h-56 md:w-64 md:h-64 shrink-0">
          <img src="/images/newsletter-illus.png" alt="Newsletter illustration" className="w-full h-full object-contain" />
        </div>
      </div>
    </section>
  )
}

function ContactCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-400/40 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_600px_at_50%_120%,#5dd0ff,transparent)] opacity-60" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold">Let’s Secure Together<br/>Contact Us for Firewall Solutions</h2>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">Connect with us to explore how we can secure your digital world. We’re here to help!</p>
        <div className="mt-8">
          <a href="#contact" className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/90 text-black shadow">→</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <h4 className="text-xl font-semibold">Company name</h4>
            <p className="mt-4 text-sm text-white/70">Subscribe to Our Newsletter:</p>
            <p className="mt-1 text-xs text-white/50">Receive updates on Asif firewall and special promotions!</p>
            <form className="mt-4 flex max-w-md gap-2" onSubmit={(e)=>e.preventDefault()}>
              <input className="flex-1 rounded-lg bg-black/60 ring-1 ring-white/10 px-3 py-2 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-lime-400" placeholder="Your email here" type="email" />
              <button className="rounded-lg bg-gradient-to-r from-sky-400 to-indigo-400 text-black font-semibold px-4">Submit</button>
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
              <li className="mt-4 font-semibold text-white">Support</li>
              <li className="text-white/70">Get Help</li>
              <li className="mt-4 font-semibold text-white">About us</li>
              <li className="text-white/70">Company</li>
              <li className="text-white/70">Blog</li>
              <li className="text-white/70">News</li>
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
      <Header />
      <Breadcrumbs />
      <Hero />

      <TabsBar />

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <FeatureColumns />
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <DefenseWithImage />
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <CostEffective />
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Replication />
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Support24h />
        </div>
      </section>

      <RelatedArticles />
      <NewsletterSignup />
      <ContactCTA />

      <Footer />
    </div>
  )
}
