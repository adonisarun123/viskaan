# Visskan Associates Website

A modern, responsive website for Visskan Associates - a leading facility management company established in 1995.

## 🌟 Features

- **Modern Design**: Clean, professional design following the brand guidelines
- **Responsive**: Fully responsive across all devices
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **SEO Friendly**: Proper meta tags and structured data
- **Animations**: Smooth animations using Framer Motion
- **Contact Form**: Interactive contact form with validation
- **Service Showcase**: Detailed service pages with features
- **WhatsApp Integration**: Quick WhatsApp chat button

## 🎨 Design System

### Colors
- **Primary**: #003366 (Navy Blue)
- **Secondary**: #4CAF50 (Green)
- **Accent**: #FFB300 (Amber)
- **Neutral**: #F5F5F5, #E0E0E0, #333333

### Typography
- **Headings**: Montserrat
- **Body**: Open Sans

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## 📁 Project Structure

```
visskan-website/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── services/
│   │   ├── contact/
│   │   ├── page.tsx (Homepage)
│   │   ├── layout.tsx
│   │   └── globals.css
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── WhatsAppButton.tsx
│       └── home/
│           ├── HeroSection.tsx
│           ├── StatsBar.tsx
│           ├── ServicesOverview.tsx
│           └── ...
├── public/
├── package.json
└── README.md
```

## 📄 Pages

1. **Homepage** - Hero section, stats, services overview, certifications, clients
2. **About Us** - Company overview, vision/mission, leadership, timeline
3. **Services** - Overview of all 6 service verticals
4. **Contact** - Contact form, office address, map, phone numbers

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Headless UI** - Unstyled UI components

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Configuration

### Environment Variables (if needed)
Create a `.env.local` file:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
NEXT_PUBLIC_WHATSAPP_NUMBER=918023197874
```

## 🚢 Deployment

The website can be deployed on:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting provider**

### Deploy to Vercel
```bash
npx vercel
```

## 📞 Support

For any queries or support:
- Email: info@viskaneliteservices.com
- Phone: +91 80 23197874

## 📝 License

© 2024 Visskan Associates. All rights reserved.
