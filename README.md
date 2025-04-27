# Brookelle Next.js Website

This is a Next.js version of the Brookelle website, converted from a static HTML site.

## Setup Instructions

1. Make sure you have Node.js installed (version 14.x or later recommended)

2. Install dependencies:
```bash
npm install
```

3. Copy the assets from the original project:
```bash
chmod +x copy-assets.sh
./copy-assets.sh
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Project Structure

- `src/app/` - Main application pages
- `src/components/` - Reusable components
- `public/assets/` - Images and other static assets

## Page Routes

- `/` - Home page
- `/about` - About page
- `/services` - Services page 
- `/contact` - Contact page with form
