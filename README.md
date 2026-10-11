# Mohan Tanuj Ponnasanapalli — The Series

A personal portfolio built on the original streaming-inspired React template. Its typography, motion, profile selector, project overlays, and responsive navigation remain in place.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the URL printed by Vite, usually http://localhost:5173.

To validate and preview a production build:

```bash
npm run build
npm run preview
```

The deployable static site is generated in `dist/`.

## Content and assets

Portfolio facts are centralized in [src/data/portfolio.ts](src/data/portfolio.ts). The current public résumé is [public/assets/Mohan_Tanuj_Ponnasanapalli_Resume.pdf](public/assets/Mohan_Tanuj_Ponnasanapalli_Resume.pdf). The transparent portrait source is `pic.png` in the project root; run `npm run images` after replacing it to rebuild responsive WebP images and the social image.

## Facts needing review

- The résumé says **Mohan Tanuj Ponasanapalli**, while the supplied portfolio name says **Mohan Tanuj Ponnasanapalli**. The site uses the name from the portfolio brief.
- The résumé lists the GITAM Data & Insights Associate role as May 2025–June 2026. The portfolio brief provides a distinct Data Management Intern role for April–September 2025 and a Data Insights Associate role starting September 2025. The site uses the brief's dates and separates the roles.
- The résumé does not specify dates, technologies, or responsibilities for the Tekwissen internship; dates for Deepak Automobiles and the Zendesk volunteer role; or the start date of the Meta Developer Communities presidency. These are marked for confirmation.
- The Farmer’s Companion repository implements browser-side analysis of crop and irrigation CSV data. No machine learning model, live weather integration, soil input analysis, or backend was found in the public source.
- The Driver Drowsiness Detection System has no verified public repository or demo. The résumé has no certifications. Individual contributions to the Meta Developer Communities website repository and any live deployment need confirmation.

The site intentionally omits the phone number from the public interface. The résumé download retains the original document.
