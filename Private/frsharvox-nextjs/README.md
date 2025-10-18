# FRSHAR Vox - Next.js Frontend

This is a Next.js implementation of the FRSHAR Vox landing page with the exact same design and content as the original HTML version.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** integration
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Modern React Components** - Modular and reusable
- **Image Optimization** - Using Next.js Image component
- **Smooth Animations** - All original animations preserved
- **Live Countdown Timer** - Real-time countdown to Oct 26, 2025
- **Smooth Scrolling Navigation** - Interactive navigation with scroll effects

## 📁 Project Structure

```
frsharvox-nextjs/
├── app/
│   ├── components/
│   │   ├── Header.tsx         # Fixed header with navigation
│   │   ├── Hero.tsx           # Hero section with countdown
│   │   ├── EventHighlights.tsx # Event details section
│   │   ├── ContentCards.tsx   # About cards section
│   │   ├── Features.tsx       # Features grid
│   │   ├── CTA.tsx            # Call-to-action section
│   │   └── Footer.tsx         # Footer with links
│   ├── globals.css            # Global styles (all original CSS)
│   ├── layout.tsx             # Root layout with metadata
│   └── page.tsx               # Main page composition
├── public/
│   ├── frsharvox-logo.png     # Brand logo
│   └── yatch.jpg              # Yacht event image
└── package.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The application will be available at: **http://localhost:3000**

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 🎨 Design Features

### Color Palette
- **Primary:** #ff2e63 (Hot Pink)
- **Secondary:** #08d9d6 (Cyan)
- **Dark:** #0f172a (Navy Blue)
- **Background:** Gradient from #0a0f1c to #0f172a

### Typography
- **Headings:** Orbitron (Futuristic, bold)
- **Body:** Poppins (Modern, clean)

### Key Sections
1. **Header** - Fixed navigation with scroll effects
2. **Hero** - Main banner with live countdown timer
3. **Event Highlights** - Exclusive yacht launch details
4. **About Cards** - Information about products
5. **Features** - 6 key features of FRSHAR Vox
6. **CTA** - Call-to-action for registration
7. **Footer** - Links and contact information

## 🔧 Technologies Used

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Font Awesome** - Icon library
- **Google Fonts** - Poppins & Orbitron fonts

## 📱 Responsive Breakpoints

- **Mobile:** < 576px
- **Tablet:** 576px - 768px
- **Desktop Small:** 768px - 992px
- **Desktop Large:** > 992px

## ⚡ Performance Optimizations

- Image optimization with Next.js Image component
- Component-based architecture for code splitting
- CSS-in-JS with proper scoping
- Lazy loading for images
- Smooth animations with CSS transitions

## 🌐 Deployment

This Next.js app can be deployed to:
- **Vercel** (Recommended - zero config)
- **Netlify**
- **AWS Amplify**
- **Digital Ocean**
- **Any Node.js hosting**

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📄 License

© 2025 FRSHAR Vox. All rights reserved.

## 👥 Contact

- **Email:** info@frsharvox.com
- **Location:** Marina, Dubai, UAE

## 🎉 Event Details

- **Date:** October 26, 2025
- **Location:** Marina, Dubai, UAE
- **Attendees:** Only 50 selected individuals
- **Type:** Exclusive Yacht Launch Event

---

Built with ❤️ using Next.js
