# Vaulto AI Careers Website

A sleek, minimal careers website for Vaulto AI, a leading crypto technology company. Built with React, Vite, and modern web technologies.

## Features

- **Dark/Light Theme**: Switchable theme with system preference detection and localStorage persistence
- **Interactive Job Board**: Responsive grid of job cards with hover effects
- **Job Detail Modal**: Smooth modal transitions with full job descriptions
- **Application Form**: Netlify Forms integration with validation and success states
- **Modern Design**: Bold typography, high contrast, and crypto-themed accents
- **Mobile-First**: Fully responsive design optimized for all devices
- **Accessibility**: Focus states, keyboard navigation, and semantic HTML

## Tech Stack

- **React 18** with Vite for fast development
- **Framer Motion** for smooth animations
- **React Icons** for crypto-themed icons
- **CSS Variables** for theme management
- **Netlify Forms** for application submissions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/charlie-818/vaulto-careers.git
cd vaulto-careers
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Deployment

### Netlify (Recommended)

1. Go to [Netlify](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select `charlie-818/vaulto-careers`
4. The `netlify.toml` file is already configured with:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node.js version: 20
5. Click "Deploy site" - it will deploy automatically on every push to main branch

**Repository URL**: https://github.com/charlie-818/vaulto-careers

### Other Platforms

The built files in `dist` can be deployed to any static hosting service:
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Site header with logo and theme toggle
│   ├── JobBoard.jsx    # Main job listings grid
│   ├── JobCard.jsx     # Individual job card component
│   ├── JobDetailModal.jsx # Job details modal
│   ├── ApplicationModal.jsx # Application form modal
│   └── ThemeToggle.jsx # Theme switcher component
├── data/
│   └── jobs.json       # Static job listings data
├── hooks/
│   └── useTheme.js     # Theme management hook
├── styles/
│   └── globals.css     # Global styles and theme variables
├── App.jsx             # Main app component
└── main.jsx            # App entry point
```

## Customization

### Adding Jobs

Edit `src/data/jobs.json` to add, remove, or modify job listings. Each job should include:

- `id`: Unique identifier
- `title`: Job title
- `location`: Work location
- `type`: Employment type (Full-time, Part-time, etc.)
- `summary`: One-line job summary
- `description`: Detailed job description
- `requirements`: Array of job requirements
- `benefits`: Array of benefits and perks
- `posted`: Date posted (YYYY-MM-DD format)

### Styling

The design system uses CSS variables defined in `src/styles/globals.css`. Key variables:

- `--accent-primary`: Electric blue (#00D9FF)
- `--accent-secondary`: Emerald green (#10B981)
- `--bg-primary`: Background color
- `--text-primary`: Primary text color
- `--border-color`: Border and divider color

### Form Configuration

The application form is configured for Netlify Forms. To customize:

1. Update form fields in `ApplicationModal.jsx`
2. Modify validation logic as needed
3. Update success/error messages

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is proprietary to Vaulto AI.

## Contributing

This is an internal project. For questions or issues, contact the development team.