# Pyazo Web App

Screenshot management application built with React.

## Tech Stack

- **React 19** - UI framework
- **Vite 6** - Build tool and dev server
- **React Router 6** - Client-side routing
- **styled-components 6** - CSS-in-JS styling
- **Twin.macro** - Tailwind CSS classes in styled-components
- **Tailwind CSS 3** - Utility-first CSS framework
- **react-hook-form 7** - Form handling
- **Axios** - HTTP client

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn

### Installation

```bash
yarn install
```

### Development

```bash
yarn dev
```

Opens the app at [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
yarn build
```

### Preview Production Build

```bash
yarn preview
```

## Environment Variables

Create a `.env` file in the project root:

```
VITE_API_BASE_URL=https://pyazo.com
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── styles/         # Global styles
├── utils/          # Utility functions
├── routes.jsx      # Route definitions
└── index.jsx       # App entry point
```
