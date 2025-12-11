# SauceDemo Playwright Automation

This project contains Playwright automated tests for https://www.saucedemo.com/.

## Requirements
- Node.js (>=14)
- npm

## Setup
```bash
# install dependencies
npm install

# install browsers
npx playwright install
```

## Run tests
Run all tests (headless):
```bash
npm test
```

Run tests with browser visible (headed):
```bash
npm run test:headed
```

Open HTML report after test run:
```bash
npm run report
```

## Project structure
```
saucedemo-playwright/
  ├─ tests/
  │   ├─ login.spec.js
  │   ├─ add_to_cart.spec.js
  │   ├─ remove_from_cart.spec.js
  │   ├─ logout.spec.js
  │   ├─ inventory.spec.js
  │   ├─ product-detail.spec.js
  │   ├─ checkout.spec.js
  │   └─ e2e.spec.js
  ├─ package.json
  └─ playwright.config.js
```

## Notes
- Tests use CommonJS (`require`) so they work with plain Node/npm.
- If you prefer TypeScript or ES modules, adjust files and `package.json` accordingly.