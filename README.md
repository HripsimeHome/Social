# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


###  Pages

- **Home Page:** `/`
- **About Page:** `/about`
- **Contact Page:** `/contact`
- **Projects Page:** `/projects`
- **Services Page:** `/services`
- **Privacy Policy Page:** `/privacyPolicy`
- **Cookie Policy Page:** `/cookiePolicy`
- **Legal Info Page:** `/legalInfo`
# Resources

### Images

The website uses the following image formats:

- **.webp** (primary format)
- **.jpg**
- **.png**
- **.svg**

### Icons

Icons are implemented as `sprite.svg` files.

### Fonts

The site uses the **Montserrat**, **Unbounded** font, installed locally.

---

# State Management

The website uses **Redux Toolkit** for state management.

---

# Types

The website is built using **TypeScript** for strict type checking.

## File Structure

### `package.json`

The `package.json` file contains metadata about your project, including a list of dependencies, scripts for building and running the project, version information, and author details.

- **Dependencies:** A list of libraries and packages required for the app to function.
- **Scripts:** Commands to perform various development tasks, like building and running the app.

### `package-lock.json`

The `package-lock.json` file locks the exact versions of the dependencies installed in the project. This ensures consistency by installing the same versions of packages every time `npm install` is run.



### `src`

The `src` folder contains the source code of your app. This is the main folder where you'll work on the project.

# `src` Folder Documentation

The `src` folder contains the source code of your React app. It organizes various components, utilities, models, and styles necessary for the app's functionality.

## `src` Folder Structure

### `/assets`

The `/assets` folder is for storing static resources of your app.

- **`/assets/fonts`:** Folder for the fonts used in the app.
- **`/assets/images`:** Folder for images.
  - **`/assets/images.ts`:** File for centralized management of image paths. You can export image paths from here for use in the app.
- **`/assets/svg`:** Folder for SVG files.
  - **`/assets/svg/sprite.svg`:** A sprite file containing all your SVG icons in one file.
  - **`/assets/svg.ts`:** File for exporting SVG IDs from the sprite file. This allows you to import SVG icons as React components.

### `/components`

The `/components` folder contains all the React components of your app.

- **`/components/App/App.tsx`:** The main app component, usually containing logic and styles shared across the app.

### `/hooks`

The `/hooks` folder is for custom hooks that can be used in various app components.

### `/models`

The `/models` folder contains data models used in the app.

### `/providers`

The `/providers` folder contains context providers and other elements that provide data or functionality across the app.

### `/router`

The `/router` folder contains files related to routing and navigation within the app.

- **`/router/AppRouter.tsx`:** The component that manages the app routes using `react-router-dom`. Uses the `routes` array to define routes and their corresponding components.
- **`/router/path.ts`:** File that contains route path definitions and exports them for use in the app.

### `/store`

The `/store` folder contains files and folders related to Redux Toolkit for managing the app state.


- **`/store/store.ts`:** The main Redux store file, which configures the store and combines reducers.

### `/store/slices`

The `/store/slices` folder contains slices for managing parts of the app state using Redux Toolkit.

### `/styles`

The `/styles` folder is for storing app styles in SCSS format.

### `/utils`

The `/utils` folder contains helper functions and modules used throughout the app.

- **`/utils/lsProps`:** A module for working with local storage.
- **`/utils/functions`:** Functions for performing various tasks in the app.

### `index.tsx`

The `index.tsx` file is the entry point of your React app, where the root component is initialized and rendered.

### `public`

The `public` folder contains static files that will be accessible at the root level of your app.

- **`index.html`:** The main HTML file of your app, which is loaded when the app starts. It contains the container for your React app.
- **`favicon.ico`:** The icon for your app, displayed on the browser tab.
- **`manifest.json`:** The manifest file for supporting Progressive Web Apps (PWA), if your app supports PWA.

### `node_modules`

The `node_modules` folder contains all the dependencies installed for your project. Do not manually edit this directory; it is managed by the package manager (npm or yarn).

### `build`

The `build` folder is created when the app is built for production. It contains optimized files ready for deployment on a server. Do not manually edit files in this folder.

- **Files in the `build` folder:** Minimized and optimized versions of the app’s source files, ready for deployment.

### constants/

The `constants/` folder contains files that hold static informational variables, such as contact information and translations.


# Managing Translations in the Website

## Translations
The website uses static translations. All translation texts are stored in the `constants/translations.tsx` file. Translations are organized in the following format:

technologiesTxt: {
  RU: "Технологии",
  EN: "Technologies",
  ES: "Tecnologías",
  PL: "Technologie",
},

### How It Works

- **Key**: Represents the translation identifier (e.g., `technologiesTxt`).
- **Language Codes**: Each key contains translations for the supported languages:
  - `RU`: Russian
  - `EN`: English
  - `ES`: Spanish
  - `PL`: Polish

You can add new translation keys or update existing translations in this file to ensure all texts are properly localized across the website.

---

### Updating Existing Translations

To update existing translations:

1. Open the `constants/translations.tsx` file.
2. Locate the translation key you want to edit.
3. Modify the text for the desired language(s). For example:

// Before
technologiesTxt: {
  RU: "Технологии",
  EN: "Technologies",
  ES: "Tecnologías",
  PL: "Technologie",
},

// After
technologiesTxt: {
  RU: "Современные технологии",
  EN: "Modern Technologies",
  ES: "Tecnologías Modernas",
  PL: "Nowoczesne Technologie",
},
