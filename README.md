# WeatherApp

The WeatherApp is a user-friendly application designed for checking the current weather at a specified location. Powered by data from the OpenWeather API, this app was developed using Next.js with TypeScript and Tailwind for enhanced code quality and improved legibility. To maintain a consistent code pattern, Prettier and ESLint, along with Conventional Commit Lint, have been integrated.

Utilizing the new app router from Next.js, the WeatherApp boasts server components and an enhanced routing experience. For error handling, the project incorporates API routing with corresponding error catches, enhancing the debugging process. Additionally, the app router facilitates error bounds, triggering an error page in case of any failures.

While test support has been incorporated into the project, the implementation of tests is pending due to time constraints.

The project is deployed live using Vercel.

- [WeatherApp Live Preview](https://weatherapp-opal-nine.vercel.app/)

## Built with

<div>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" height="64" width="64"/>
    <img    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" height="64" width="64"/>
    <img    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="64" width="64"/>
    <img    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="64" width="64"/>
    <img    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="64" width="64"/>
</div>

## Features

- Temperature
- Condition,
- Weather description
- Humidity
- Wind speed and direction
- Search for different locations
- Toggle between Celsius and Fahrenheit
- Toggle between Dark and Light mode
- Jest setup for future tests
- Vercel deploy

## Installation and Setup

To run the WeatherApp on your local machine, follow these steps:

Ensure you have Node.js and npm (Node Package Manager) installed on your system. It's recommended to use Node v18.17.0 or higher.

### Clone the repository:

```bash
git clone git@github.com:vilmarfonseca/weatherapp.git

cd weatherapp
```

### Install the required dependencies:

```bash
pnpm install
```

### Create a copy from `.env.example` and rename it to `.env.local`

```bash
cp .env.example .env.local
```

**Note:** The `.env` file require a OpenWeather API key.

### Start the development server:

```bash
pnpm dev
```

Open your web browser and visit http://localhost:3000 to access the WeatherApp.

## Deployment

This project has a Vercel setup for handling production deployments. All commits to `main` branch will be automatically deployed to production.

## Available Scripts

In the project directory, you can run:

### `pnpm dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `pnpm test`

Launches the test runner in the interactive via Jest.

### `pnpm run build`

Builds the app for production using `next build`

## Future Work

We have a few items listed for future work that weren't addressed for now due to the availability.

- Add test cases into individual components.
- Add paid API from OpenWeather to improve data provided
- Get user current location

## License

WeatherApp is released under the MIT License. You are free to use, modify, and distribute this project as per the terms of the license.

Happy reading with WeatherApp! If you have any questions or need assistance, please don't hesitate to reach out to us. Enjoy exploring the bestseller lists from the New York Times!
