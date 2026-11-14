# Arise Hope Group website
React + TypeScript + Vite + React Router + Lucide. Plain CSS, no animation library.

## Run locally
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in /dist
    npm run preview

## Photography (required before launch)
Place licensed JPGs in `public/images/`: `hero.jpg` plus one per sector, named by slug:
construction-engineering, civil-engineering, mining-energy-resources, agriculture, property-investment,
automotive-services, wholesale-petroleum-products, banking-financial-services, information-technology.
Sources: Unsplash / Pexels (check each licence). Missing images fall back to a navy panel.

## Contact form
Copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT` to a form service URL that accepts JSON POST
(e.g. Formspree `https://formspree.io/f/xxxx`, forwarding to info@arisehopegroup.co.za). Also set it in the Vercel/Netlify env settings.
Without it, the form shows an honest error and points to email. It never shows false success.

## Deploy
Vercel (`vercel.json`) and Netlify (`public/_redirects`) SPA rewrites are included. Build: `npm run build`, output: `dist`.
