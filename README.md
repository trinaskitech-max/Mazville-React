# Stagecoach Inn - React Clone

A 1:1 React clone of the Stagecoach Inn website using Vite, React, Tailwind CSS, and Swiper.

## Features

- ✅ **Responsive Design**: Fully responsive layout matching the original website
- ✅ **Custom Tailwind Configuration**: Custom colors, fonts, and fluid typography
- ✅ **Component-Based Architecture**: Reusable components (Header, Hero, TextMedia, Carousel, Footer)
- ✅ **Interactive Navigation**: Mobile menu with smooth animations
- ✅ **Video Background**: Vimeo video integration in hero section
- ✅ **Swiper Carousel**: Touch-enabled carousel for event spaces
- ✅ **Custom Styling**: "Scooped" border effects and custom CSS utilities

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Swiper** - Modern touch slider
- **React Router DOM** - Client-side routing (ready to implement)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd react_clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Project Structure

```
react_clone/
├── public/
│   ├── fonts/        # Custom fonts (to be added)
│   └── images/       # Images from original site (to be added)
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── TextMedia.jsx
│   │   ├── Carousel.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
└── package.json
```

## Custom Tailwind Configuration

### Colors
- `navy-dark`: #192743
- `navy`: #1f3153
- `blue`: #92acc9
- `white`: #faf7f2
- `gray`: #ede9e4

### Fonts
- **Sans**: Interstate (from Adobe Typekit)
- **Serif**: Spectral
- **Headings**: Nicola
- **Mono**: Pitch

### Fluid Typography
All typography scales smoothly between mobile and desktop:
- `fluid-xl`: 1.875rem to 3rem
- `fluid-lg`: 1.5rem to 2.25rem
- `fluid-md`: 1.5rem to 2rem
- `fluid`: 0.9375rem to 1.25rem
- `fluid-sm`: 0.8125rem to 1rem

### Fluid Spacing
- `fluid`: 2rem to 5.625rem
- `fluid-sm`: 0.875rem to 4rem
- `fluid-lg`: 4.25rem to 7.75rem

## Components

### Header
- Sticky navigation with scroll behavior
- Mobile menu overlay with animations
- Responsive logo and navigation

### Hero
- Full-screen Vimeo video background
- Gradient overlay
- Centered content with fluid typography

### TextMedia
- Alternating image/text layout
- Responsive grid system
- WYSIWYG content support

### Carousel
- Swiper.js integration
- Touch-enabled slides
- Responsive breakpoints
- Animated slide descriptions

### Footer
- Multi-column responsive layout
- Contact information
- Newsletter signup form
- Social media links
- Affiliate logos section

## Next Steps

### Assets to Add
1. **Fonts**: Download custom fonts to `public/fonts/`
   - Spectral (serif)
   - Nicola (headings)
   - Pitch (monospace)

2. **Images**: Copy images from original site to `public/images/`
   - Room photos
   - Restaurant photos
   - Event space photos
   - Logo assets

3. **Additional Features**:
   - Booking form integration with WebRez
   - Date picker component
   - Room availability calendar
   - Event request forms
   - Google Maps integration
   - Page transitions
   - Smooth scrolling
   - Scroll animations

## Original Website

View the original at: https://www.stagecoachsalado.com

## License

Educational clone project.

