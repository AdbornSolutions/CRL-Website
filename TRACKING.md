# Public shipment tracking

React 19 / Vite / React Router / JSX / Tailwind 3 with scoped CSS. `/track` reuses Navbar and Footer, Montserrat and the existing navy/orange palette. Navbar desktop and mobile include Track Shipment. No customer authentication, browser storage, analytics or polling is used.

## Verified backend contract

Source: adjacent `../Crl-Backend/API_DOCUMENTATION.md`, `src/routes/index.js`, `src/validators/schemas.js`, and `src/services/shipment.service.js` (`publicTrack`, `eventDto`).

`GET /api/public/track/:lrNumber` returns `{ success: true, data: { lrNumber, origin, destination, status, currentLocation, bookingDate, expectedDeliveryDate, trackingHistory } }`. Events expose `status`, `location`, `timestamp`; the backend orders them by `createdAt` ascending. The UI preserves order, drops IDs and never displays remarks (not selected by the public query). Missing dates/locations display Not available. No estimated dates or future events are fabricated. Times display in Asia/Kolkata (IST).

When `lrUploadEligible` is true (only at `RECEIVED`), tracking shows a customer-code verification card. A matching 5-digit customer code creates a short-lived token held only in component memory. The token is hashed server-side, invalidates older unused tokens, expires after the backend-configured period, and is consumed atomically by the first successful JPG/PNG/WEBP/PDF upload. After upload, tracking refreshes and the card disappears because status moves to `LR_IMAGE_UPLOADED`.

LR validation mirrors the API: trimmed length 5–50. Uppercase normalization matches backend lookup; internal characters are preserved and the path segment is encoded. Fetch is unauthenticated, credentials omitted, cache disabled, with a 12-second timeout and cleanup on navigation. 400/404/429/server/network/timeout responses have safe messages.

## Local setup

Copy `.env.example` to `.env`, run `npm install` and `npm run dev`. `VITE_API_BASE_URL=/api` uses the development proxy, which targets `https://api.crl-transport.com` by default. Override `API_PROXY_TARGET` only when testing another backend. Use the frontend URL printed by Vite (normally http://localhost:5173).

Open `/track` or `/track?lr=<a-real-LR-number>`. Submitting a valid LR updates the query without reloading; shared links automatically search. Refresh Status performs one new request. Copy actions use the Clipboard API and explain failure when clipboard access is unavailable. Searches are not stored.

## Deployment

`VITE_API_BASE_URL=/api` keeps browser requests same-origin. `vercel.json` forwards `/api/*` to `https://api.crl-transport.com/api/*` before the SPA fallback, so tracking is not dependent on cross-origin browser access. Rebuild after changing Vite variables; never place tokens or secrets in them.

For Nginx serving the SPA, preserve an API location before the frontend fallback:

```nginx
location /api/ {
    proxy_pass http://127.0.0.1:5000;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Proto $scheme;
}
location / {
    try_files $uri $uri/ /index.html;
}
```

Adjust upstream to your deployment; no live server settings were changed. For Apache use equivalent non-file/non-directory SPA fallback with the API path excluded.

Backend `src/app.js` reads the explicit comma-separated `CORS_ORIGIN` allowlist. Add the exact deployed website origin and approved development origins. Do not use wildcard CORS or disable browser protections. Actual production origin/CORS/server configuration must be verified during deployment.

## Validation

`npm test`: Vitest + Testing Library / jsdom (added as the first test stack, using Vite). Tests cover safe normalization, input validation, encoding, unauthenticated requests, statuses, IST, timeout, HTTP/network failures, initial page, manual/query tracking, StrictMode duplicate prevention, skeleton, refresh, mobile menu semantics and cancelled timeline.

`npm run build`, `npm run lint`; targeted new-feature lint: `npx eslint src/api src/Components/tracking src/pages/TrackShipment.jsx src/pages/TrackShipment.test.jsx src/Components/Navbar.jsx vite.config.js`.

Manual release checks, using real safe test shipments: BOOKED, IN_TRANSIT, RECEIVED, COMPLETED, CLOSED, CANCELLED; unknown/invalid LR; offline and slow API; direct query URL; copy/print; viewport widths 320/375/768/1024/1440/1920; Home/Services/Project/Contact links and existing form behavior. jsdom does not verify visual layout. Local backend was unavailable during implementation, so real shipment status checks and production CORS remain unverified.

### Implementation check results

- 35 automated tests passed across API and component suites.
- Production build, feature-scoped ESLint and `git diff --check` passed.
- Full-project ESLint still reports 43 existing unused-variable errors outside the new feature.
- Existing unresolved `/images/mobile-view-2.png` build warning remains.
- Local HTTP checks returned the SPA entry with 200 for Home, Track (with/without LR query), Services, Project, Contact, Blog and Terms. These checks do not prove full rendered page/form behavior.
- Browser automation was unavailable (`missing field sandboxPolicy`), so actual mobile/desktop layout, clipboard and print preview were not visually verified.
- Production backend health and the public tracking response were verified against `https://api.crl-transport.com/api`; deployment of the current website build remains required before the live website uses this integration.
