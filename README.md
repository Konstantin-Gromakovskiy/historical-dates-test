# Historical dates

Test assignment: a page with historical dates, animation, and responsive layout using React + TypeScript + SCSS.

You can try in on [Vercel](https://historical-dates-test.vercel.app/)

## Description

The project implements a page with historical periods and events:
- Animated dates and headings
- Circular navigator for periods
- Event slider with pagination
- Responsive layout for mobile devices
- Modern React and TypeScript practices

## Technologies

- **React 19**
- **TypeScript**
- **Webpack 5**
- **SCSS (Sass)**
- **Swiper.js** (for the slider)
- **ESLint** (code linting)

## Installation and Running

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Konstantin-Gromakovskiy/historical-dates-test.git
   cd historical-dates-test
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **TypeScript type checking:**
   ```bash
   npm run type-check
   ```

## Project Structure

```
only-digital/
├── src/
│   ├── index.tsx          # Application entry point
│   ├── init.tsx           # Application initialization
│   ├── pages/             # Application pages
│   ├── components/        # Reusable components
│   ├── shared/            # Common hooks, utilities, UI components
│   └── styles/            # SCSS variables and global styles
├── webpack.common.js      # Common webpack configuration
├── webpack.dev.js         # Development config
├── webpack.prod.js        # Production config
├── package.json
└── README.md
```

## Features

- Animation for showing/hiding headings and dates
- Custom SCSS variables and mixins
- Strict TypeScript typing
- Code linting with ESLint
- Optimized Webpack build
