# Pyazo Web App

Screenshot management application built with React.

## Getting Started

### Prerequisites

- Node.js 24+
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
