# �️ Trip. - Adventure Travel Platform

> **Find Your Next Unforgettable Adventure!**
> 
> A modern, fully-responsive travel and adventure booking platform built with Next.js, React, and TypeScript. Discover curated destinations, hidden gems, and incredible hiking/camping experiences with offline maps, AR-guided trails, and community recommendations.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwind-css)
![Swiper](https://img.shields.io/badge/Swiper-12.1.1-6332F6?style=flat-square&logo=swiper)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Page Sections](#page-sections)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Components Guide](#components-guide)
- [Data & Configuration](#data--configuration)
- [Contributing](#contributing)

---

## 🎯 Overview

Trip. is a comprehensive travel platform designed for adventure seekers, hikers, and campers. The website showcases featured camping destinations, provides travel guides, highlights app features, and drives conversions through mobile app downloads on iOS and Android.

**Key Highlights:**
- 🗺️ Curated camping & hiking destinations
- 🚀 Progressive adventure planning tools
- 📱 Native iOS & Android app integration
- 🌐 World-class navigation with offline support
- ⭐ Community-driven experience sharing

---

## ✨ Features

### Core Platform Features

- **Hero Landing Section** - Captivating headline: "Find your next unforgettable adventure"
  - 5-star ratings display
  - Stunning background imagery
  - Clear value proposition

- **Camp Destinations Carousel** - Hot-scrollable showcase of 3 featured camps:
  - 🏔️ Mountain Camp (Above the treeline)
  - 🏞️ Lake Camp (Wake up to the water)
  - ⛰️ Peak Base (Miles up, views forever)
  - Real-time visitor count with profile pictures

- **Travel Guide Section** - "Guide You To Easy Path"
  - Beautiful background imagery
  - Floating information cards with metrics
  - Inspiring copy about ease of trip planning

- **App Features Showcase** - 4 key features with icons:
  - 📍 Real offline maps
  - 📅 Adventure scheduling
  - 🔮 AR technology guidance
  - 🌍 Monthly new locations

- **Mobile App Download** - CTA-driven section:
  - App Store button
  - Google Play Store button
  - Phone mockup imagery
  - "Available on iOS and Android"

- **Responsive Navigation** - Mobile-first navigation:
  - Logo & branding
  - Navigation links (Home, How it Works, Services, Pricing, Contact)
  - Register button
  - Mobile hamburger menu

- **Footer** - Comprehensive footer with:
  - Quick links (Learn More, Community)
  - Contact information
  - Social media links

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 16.1.6 | Production-grade React framework with SSR |
| **React** | 19.2.3 | UI component library |
| **TypeScript** | 5.x | Type-safe JavaScript development |
| **Tailwind CSS** | 4.x | Utility-first CSS framework |
| **Swiper.js** | 12.1.1 | Touch-enabled carousel & sliders |
| **Next Image** | Built-in | Optimized image rendering |
| **ESLint** | 9.x | Code quality & consistency |

**Styling Approach:**
- Custom Tailwind utilities in `globals.css`
- Responsive design with mobile-first approach
- CSS Grid and Flexbox layouts
- Visual hierarchy with custom font weights (bold-16, regular-16, etc.)

---

## 📁 Project Structure

```
travelling-website/
├── 📂 app/                          # Next.js 13+ App Router
│   ├── layout.tsx                   # Root layout (Navbar + Footer wrapper)
│   ├── page.tsx                     # Home page with all sections
│   └── globals.css                  # Global styles & Tailwind directives
│
├── 📂 components/                   # Reusable React components
│   ├── Navbar.tsx                   # Navigation header with mobile menu
│   ├── Hero.tsx                     # Landing section with CTA
│   ├── Camp.tsx                     # Horizontal scrollable camp cards
│   ├── Guide.tsx                    # Travel guide with floating overlays
│   ├── Features.tsx                 # Grid of app features with icons
│   ├── GetApp.tsx                   # App download section with buttons
│   ├── Footer.tsx                   # Site footer with links & contact
│   └── Btn.tsx                      # Reusable button component
│
├── 📂 constants/                    # Configuration & static data
│   └── constants.ts                 # NAV_LINKS, CAMPS, FEATURES, FOOTER_*
│
├── 📂 types/                        # TypeScript definitions
│   └── types.ts                     # ButtonProps interface
│
├── 📂 public/                       # Static assets
│   ├── /hilink-logo.svg             # Brand logo
│   ├── /camp-*.svg                  # Camp icons
│   ├── /phones.png                  # Phone mockups
│   ├── /star.svg                    # Rating stars
│   ├── person-*.png                 # User avatars
│   └── [other icons & images]
│
├── 📄 next.config.ts                # Next.js configuration
├── 📄 tsconfig.json                 # TypeScript compiler settings
├── 📄 tailwind.config.ts            # Tailwind CSS theme & plugins
├── 📄 postcss.config.mjs            # PostCSS with Tailwind
├── 📄 eslint.config.mjs             # ESLint rules
├── 📄 package.json                  # Dependencies & scripts
└── 📄 README.md                     # This file
```

---

## 📄 Page Sections

The home page (`app/page.tsx`) is composed of 5 main sections in order:

```jsx
<Hero />       // "Find your next unforgettable adventure"
<Camp />       // Featured camping destinations carousel
<Guide />      // Travel guide with helpful tips
<Features />   // App capabilities showcase
<GetApp />     // Mobile app download CTA
```

Each section is independently styled and can be updated in its respective component file.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ 
- **npm** or **yarn** (npm comes with Node.js)
- **Git** (to clone the repository)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/travelling-website.git
   cd travelling-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - Page auto-reloads on code changes (Fast Refresh)

---

## 📜 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Create optimized production build
npm run build

# Start production server (requires build first)
npm start

# Run ESLint to check code quality
npm run lint
```

**Development Workflow Tips:**
- Use `npm run dev` for fast iteration
- Check for linting issues: `npm run lint`
- Before deploying: `npm run build && npm start`

---

## 🧩 Components Guide

### Component Breakdown

#### **Navbar** (`components/Navbar.tsx`)
- Responsive navigation header
- Mobile-friendly hamburger menu toggle
- Navigation links from constants
- Register button call-to-action
- Uses flexBetween utility for alignment

#### **Hero** (`components/Hero.tsx`)
- Landing section with headline and description
- 5-star rating display using mapped SVGs
- Email signup form UI
- User stat counters (50K+ amazing reviews)
- Background pattern decoration

#### **Camp** (`components/Camp.tsx`)
- Horizontal scrollable carousel of camp cards
- Uses Swiper.js for touch interaction
- Each card shows:
  - Background image (dynamically applied)
  - Camp title & subtitle
  - Real visitor avatars
  - Visitor count
- `"use client"` directive for client-side interactivity

#### **Guide** (`components/Guide.tsx`) 
- Full-width section with background image
- Floating information card overlay
- Shows adventure metrics
- Inspiring copy about the platform

#### **Features** (`components/Features.tsx`)
- 2-column grid on desktop (responsive to 1-column on mobile)
- Feature cards with:
  - Icon in colored circle
  - Title & description
  - Dynamic color variants (green/orange)
- Phone mockup image on right

#### **GetApp** (`components/GetApp.tsx`)
- CTA section for mobile app downloads
- App Store & Play Store buttons
- Phone mockup imagery
- Full-width responsive layout

#### **Footer** (`components/Footer.tsx`)
- Multi-column footer layout
- Links grouped by category
- Contact information
- Social media icons
- Responsive grid on mobile

#### **Btn** (`components/Btn.tsx`)
- Reusable button component with TypeScript props
- Supports:
  - Custom text & icons
  - Multiple style variants
  - Full width option
  - Button type (button, submit, reset)
- Uses `ButtonProps` interface from types

---

## 📊 Data & Configuration

### Constants (`constants/constants.ts`)

**NAV_LINKS** - Navigation menu items
```typescript
[
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "how_hilink_work", label: "How Hilink Work?" },
  // ... etc
]
```

**CAMPS** - Featured destinations (3 camps)
```typescript
{ bg: "bg-camp-1", title: "Mountain Camp", sub: "Above the treeline", id: 1 }
// ... more camps
```

**FEATURES** - App capability highlights (4 features)
```typescript
{
  title: "Real maps can be offline",
  icon: "/map.svg",
  variant: "green",
  description: "...",
}
// ... more features
```

**PEOPLE_URL** - User avatars for camp cards

**FOOTER_LINKS** - Footer navigation structure

**FOOTER_CONTACT_INFO** - Contact details

**SOCIALS** - Social media links

### Types (`types/types.ts`)

**ButtonProps** - Defines Btn component interface:
```typescript
interface ButtonProps {
  text: string;
  icon?: string;
  style: string;
  type?: "button" | "submit" | "reset";
  full?: boolean;
}
```

---

## 🎨 Styling & Customization

### Tailwind CSS Setup
- **Version**: 4.x
- **Config File**: `tailwind.config.ts`
- **Directives**: In `app/globals.css`

### Custom Utilities

The project uses custom Tailwind utilities:
- `flexCenter` - Flex center alignment
- `flexBetween` - Space-between with flex
- `padding-container` - Standard padding
- `max-container` - Max width constraint
- `bold-52`, `bold-40`, etc. - Custom font sizes
- `regular-16`, `regular-14` - Regular font sizes
- `hide-scrollbar` - Hide scrollbars on overflow

### Responsive Breakpoints

Uses Tailwind's default breakpoints:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

---

## 🐛 Troubleshooting

### Development Issues

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies not installing?**
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
rm -rf .next
npm run build
```

**TypeScript errors?**
- Run `npm run lint` to check
- Ensure all types are imported from `types/types.ts`

### Common Fixes

- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (Ctrl+C then `npm run dev`)
- Check Node version: `node --version` (should be 18+)

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Auto-deploys on every push to main

### Docker

```bash
docker build -t trip-adventure .
docker run -p 3000:3000 trip-adventure
```

### Manual Deployment

```bash
npm run build
npm start  # Runs on port 3000
```

---

## 📝 Development Best Practices

1. **Keep Components Focused** - Each component = one responsibility
2. **Use TypeScript** - Define props interfaces for type safety
3. **Leverage Constants** - Update `constants/constants.ts` for static data
4. **Responsive First** - Mobile design first, then expand
5. **ESLint Compliance** - Run `npm run lint` before committing
6. **Component Reusability** - Create utilities like `Btn` once, use everywhere
7. **Image Optimization** - Use Next Image component for all images
8. **Performance** - Monitor bundle size and use dynamic imports for heavy components

---

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. **Fork** the repository
2. **Create a branch** for your feature
   ```bash
   git checkout -b feature/AwesomeFeature
   ```
3. **Commit** your changes
   ```bash
   git commit -m 'Add AwesomeFeature'
   ```
4. **Push** to your fork
   ```bash
   git push origin feature/AwesomeFeature
   ```
5. **Open a Pull Request** with description of changes

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🎯 Next Steps

- [ ] Connect backend API for real camp data
- [ ] Add booking functionality
- [ ] Implement user authentication
- [ ] Create blog for travel guides
- [ ] Add search & filtering for destinations
- [ ] Setup analytics & conversion tracking
- [ ] Deploy to production

---

## 💬 Questions or Feedback?

Feel free to:
- Open an issue for bugs
- Submit a PR for improvements
- Reach out for questions

**Happy Adventures! 🏕️ 🥾 ⛺**







<!-- 
# 🌍 Travelling Website

> A modern, responsive travel exploration platform built with Next.js, React, and TypeScript. Discover amazing destinations and plan your next adventure!

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwind-css)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Components](#components)
- [Installation](#installation)
- [Contributing](#contributing)

---

## ✨ Features

- **Hero Section** - Stunning landing page to capture user attention
- **Camp Destinations** - Showcase of amazing camping and travel spots
- **Travel Guide** - Comprehensive tips and guides for travelers
- **Features Showcase** - Highlight what makes your platform special
- **Mobile App Integration** - Call-to-action for app downloads
- **Responsive Design** - Beautiful UI across all devices
- **Modern Animations** - Smooth transitions with Swiper.js
- **Type-Safe** - Full TypeScript support for better code quality

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 16.1.6 | React framework for production |
| **React** | 19.2.3 | UI library |
| **TypeScript** | 5 | Type safety and better DX |
| **Tailwind CSS** | 4 | Utility-first CSS framework |
| **Swiper** | 12.1.1 | Touch sliders and carousels |
| **ESLint** | 9 | Code quality & style consistency |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd travelling-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website in action!

---

## 📁 Project Structure

```
travelling-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout wrapper
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # Reusable React components
│   ├── Navbar.tsx          # Navigation header
│   ├── Hero.tsx            # Landing hero section
│   ├── Camp.tsx            # Camp destinations showcase
│   ├── Guide.tsx           # Travel guide section
│   ├── Features.tsx        # Features highlight
│   ├── GetApp.tsx          # App download section
│   ├── Footer.tsx          # Footer component
│   └── Btn.tsx             # Reusable button component
├── constants/              # Constants & configuration
│   └── constants.ts        # App-wide constants
├── types/                  # TypeScript type definitions
│   └── types.ts            # Custom types & interfaces
├── public/                 # Static assets (images, icons, etc.)
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── eslint.config.mjs       # ESLint rules
└── package.json            # Project dependencies
```

---

## 📜 Available Scripts

Run these commands in the project root directory:

```bash
# Development server (hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint to check code quality
npm run lint
```

### Development Workflow

- **Local Development**: `npm run dev` - Start the dev server with fast refresh
- **Testing Build**: `npm run build` - Create production build locally
- **Production**: `npm start` - Run the optimized production build

---

## 🧩 Components

### Core Components

| Component | Purpose |
|-----------|---------|
| **Navbar** | Top navigation bar with links |
| **Hero** | Eye-catching landing section |
| **Camp** | Feature carousel for camping destinations |
| **Guide** | Travel tips and guides section |
| **Features** | Highlight key features |
| **GetApp** | Download app CTA section |
| **Footer** | Site footer with links |
| **Btn** | Reusable button component |

---

## 🎨 Styling

This project uses **Tailwind CSS** for styling with the following setup:

- **Framework**: Tailwind CSS v4
- **PostCSS**: Configured for CSS processing
- **Responsive**: Mobile-first approach
- **Colors**: Customizable via `tailwind.config.ts`

---

## 🔧 Configuration Files

- **`next.config.ts`** - Next.js build and runtime configuration
- **`tsconfig.json`** - TypeScript compiler options
- **`tailwind.config.ts`** - Tailwind CSS theme and plugins
- **`postcss.config.mjs`** - PostCSS configuration
- **`eslint.config.mjs`** - Code quality rules

---

## 🐛 Troubleshooting

### Port 3000 is already in use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Dependencies not installing
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Clean Next.js cache
rm -rf .next
npm run build
```

---

## 📝 Development Tips

1. **Use TypeScript** - Leverage type safety for better error catching
2. **Component Structure** - Keep components in `/components` folder
3. **Constants** - Store reusable data in `/constants/constants.ts`
4. **Types** - Define interfaces in `/types/types.ts`
5. **Hot Reload** - Changes are instant with `npm run dev`

---

## 🚢 Deployment

Ready to deploy? Check out [Next.js deployment docs](https://nextjs.org/docs/deployment):

- **Vercel** (Recommended) - Deploy with one click
- **Docker** - Containerize your application
- **Self-hosted** - Deploy to your own server

---

## 📄 License

This project is licensed under the MIT License - feel free to use it for your own projects!

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 💡 Questions?

If you have questions or need help, feel free to open an issue or reach out!

**Happy Travelling! 🌴✈️**

 -->