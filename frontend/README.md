# Healthcare Dashboard Frontend

This is a responsive healthcare dashboard frontend built with **React**, **Vite**, **Tailwind CSS**, **Material UI**, and **Flowbite**. The dashboard features a sidebar, main dashboard content, and right-side schedule/appointments, designed for a modern healthcare application.

## Features

- Responsive layout with sidebar navigation
- Dashboard with health cards and progress bars
- Upcoming appointments and weekly schedule
- Material UI icons and components
- Styled with Tailwind CSS and Flowbite

## Project Structure

```
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── DashboardLeftContent.jsx
│   │   ├── DashboardMainContent.jsx
│   │   ├── DashboardRightContent.jsx
│   │   └── Sidebar.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── ...
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Navigate to the `frontend` directory:

   ```sh
   cd frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Development Server

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view the app.

### Building for Production

```sh
npm run build
# or
yarn build
```

### Preview Production Build

```sh
npm run preview
# or
yarn preview
```

### Linting

Run ESLint to check for code issues:

```sh
npm run lint
# or
yarn lint
```

## Customization

- **Sidebar**: Edit `Sidebar.jsx` for navigation items.
- **Dashboard Content**: Edit `DashboardLeftContent.jsx` and `DashboardRightContent.jsx` for main dashboard features.
- **Styling**: Modify Tailwind classes in component files or update `index.css`.

## License

This project is for demonstration and educational purposes.