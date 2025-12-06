# Modern Pest Control Website

A modern, enterprise-level single-page application for a pest control company built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean, professional design with deep navy/dark blue primary colors and bright green/lime accents
- 📱 **Fully Responsive**: Flawless experience on desktop, tablet, and mobile devices
- ✨ **Smooth Animations**: Framer Motion animations and micro-interactions throughout
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML
- ♿ **Accessible**: WCAG AA compliant with proper ARIA labels
- ⚡ **Fast Performance**: Optimized for fast page load times (<3 seconds)

## Sections

1. **Navigation Bar**: Sticky header with smooth scroll navigation and mobile hamburger menu
2. **Hero Section**: Full-width background with compelling CTAs
3. **Services Section**: Grid layout showcasing 6 main services
4. **Why Choose Us**: Key differentiators with animated statistics counters
5. **Process Section**: 4-step visual timeline
6. **Testimonials**: Interactive carousel with customer reviews
7. **Service Areas**: Searchable list of service locations
8. **Contact/CTA**: Contact form with validation and business information
9. **Footer**: Comprehensive footer with links, contact info, and trust badges

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Netlify

This project is configured for deployment on Netlify. The repository is already set up at: https://github.com/hackerloum/modernpestcontrol.git

### Automatic Deployment via Netlify UI

1. **Sign up/Login to Netlify**: Go to [netlify.com](https://www.netlify.com) and sign in

2. **Import your site**:
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select the `modernpestcontrol` repository
   - Netlify will automatically detect the `netlify.toml` configuration

3. **Build Settings** (should auto-detect):
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18

4. **Environment Variables** (if needed in the future):
   - Go to Site settings → Environment variables
   - Add any required environment variables
   - Currently, no environment variables are required

5. **Deploy**: Click "Deploy site" and Netlify will build and deploy your site

### Manual Deployment via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
netlify deploy --prod
```

### Post-Deployment

After deployment, your site will be available at a Netlify subdomain (e.g., `your-site.netlify.app`). You can:
- Add a custom domain in Netlify settings
- Configure SSL certificates (automatic with Netlify)
- Set up continuous deployment (automatic with GitHub integration)

### Netlify Configuration

The project includes `netlify.toml` with:
- Next.js plugin configuration (`@netlify/plugin-nextjs`)
- Build settings optimized for Next.js 14
- Security headers
- Cache optimization for static assets
- Proper redirects for Next.js routing

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── Navigation.tsx      # Sticky navigation bar
│   ├── Hero.tsx            # Hero section with CTAs
│   ├── Services.tsx        # Services grid
│   ├── WhyChooseUs.tsx    # Differentiators and stats
│   ├── Process.tsx         # 4-step process timeline
│   ├── Testimonials.tsx    # Customer reviews carousel
│   ├── ServiceAreas.tsx    # Service areas with search
│   ├── ContactCTA.tsx      # Contact form and info
│   └── Footer.tsx          # Footer with links and badges
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: '#0A1929', // Deep navy
    dark: '#051422',
    light: '#1A3A5A',
  },
  accent: {
    DEFAULT: '#4ADE80', // Bright green
    light: '#86EFAC',
    dark: '#22C55E',
  },
}
```

### Content

- Update service areas in `components/ServiceAreas.tsx`
- Modify testimonials in `components/Testimonials.tsx`
- Edit company information in `components/ContactCTA.tsx` and `components/Footer.tsx`
- Update metadata in `app/layout.tsx`

### Images

Replace placeholder images with your own:
- Hero background: Update the URL in `components/Hero.tsx`
- Testimonial images: Update URLs in `components/Testimonials.tsx`

## Form Submission

The contact form currently logs to console. To integrate with a backend:

1. Create an API route in `app/api/contact/route.ts`
2. Update the `onSubmit` handler in `components/ContactCTA.tsx`

## Performance Optimization

- Images use Next.js Image optimization (when using Next.js Image component)
- Lazy loading for animations using Intersection Observer
- Code splitting with Next.js automatic code splitting
- CSS optimization with TailwindCSS purging

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes.

## Support

For questions or issues, please contact the development team.



