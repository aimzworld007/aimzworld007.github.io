# Ainul Islam - Professional Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS, showcasing Ainul Islam's professional experience as a Document Controller and Public Relations Officer.

## 🌟 Features

- **Professional Design**: Clean, modern UI with smooth animations
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Contact Form**: Functional contact form integrated with Formspree
- **Interactive Elements**: Smooth scrolling, hover effects, and micro-interactions
- **SEO Optimized**: Proper meta tags and structured data
- **Accessibility**: Semantic HTML5 with proper ARIA labels
- **Dark/Light Theme**: Built-in theme support

## 📋 Sections

1. **Hero Section**: Professional introduction with photo and contact info
2. **About Me**: Career objective and personal information
3. **Professional Experience**: Detailed work history
4. **Education**: Academic qualifications
5. **Skills**: Core and technical skills showcase
6. **Certifications**: Professional certifications
7. **Contact**: Functional contact form

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (New York style)
- **Icons**: Lucide React
- **Form Handling**: Formspree API
- **Animations**: Custom CSS animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Extract the archive**:
   ```bash
   tar -xzf ainul-islam-portfolio.tar.gz
   cd my-project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
my-project/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main portfolio page
│   │   ├── layout.tsx        # Root layout
│   │   ├── globals.css       # Global styles
│   │   └── favicon.ico       # Favicon
│   ├── components/
│   │   └── ui/               # shadcn/ui components
│   ├── hooks/                # Custom React hooks
│   └── lib/                  # Utility functions
├── public/                   # Static assets
├── components.json           # shadcn/ui configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## ⚙️ Configuration

### Formspree Integration

The contact form is integrated with Formspree using the endpoint:
```
https://formspree.io/f/mdkwzgbp
```

To use your own Formspree endpoint:
1. Create an account at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace the endpoint in `src/app/page.tsx`

### Profile Information

Update your personal information in `src/app/page.tsx`:
- Name and title
- Contact information
- Experience details
- Education and certifications
- Skills

### Profile Photo

The profile photo is linked from:
```
https://aimzworld007.github.io/photo.jpg
```

To use your own photo:
1. Replace the URL in `src/app/page.tsx`
2. Or place your photo in `public/` folder and reference it locally

### CV Download

The CV download button links to:
```
https://aimzworld007.github.io/Ainul_islam.cv.pdf
```

To use your own CV:
1. Replace the URL in `src/app/page.tsx`
2. Or place your PDF in `public/` folder and reference it locally

## 🎨 Customization

### Colors

The theme uses Tailwind CSS color variables. Modify `src/app/globals.css` to customize:
- Primary colors
- Background colors
- Text colors

### Animations

Custom animations are defined in `src/app/globals.css`:
- `animate-fade-in`
- `animate-slide-up`
- `animate-slide-in-left`
- `animate-slide-in-right`
- `animate-bounce-in`

### Sections

Add or modify sections in `src/app/page.tsx`:
- Update section data arrays
- Modify component structure
- Add new sections as needed

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO Features

- Optimized meta tags
- Open Graph tags
- Twitter Card tags
- Semantic HTML5 structure
- Proper heading hierarchy

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Railway

## 📧 Contact

- **Email**: Aimctgbd@gmail.com
- **Phone**: +971 52 284 9291
- **Location**: Sharjah, U.A.E
- **Website**: aimnote.wordpress.com
- **LinkedIn**: linkedin.com/in/aimzworld007

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ❤️ for Ainul Islam's Professional Portfolio**