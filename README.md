# 🌤️ Weatheryze

A full-stack web app that shows real-time weather for any city, built with Express and the OpenWeatherMap API.

## Overview

Weatheryze takes a city name from a simple form, fetches live weather data from the OpenWeatherMap API, and renders the result — temperature, conditions, and more — on a server-rendered page. If the city can't be found, the app shows a friendly error instead of crashing.

## How it works
- An Express server serves a form (`views/index.ejs`) where the user enters a city name
- On submit, the server calls the OpenWeatherMap API via `axios`, requesting metric units for the given city
- The API key is kept out of source control using `dotenv` and a local `.env` file (`WEATHER_API_KEY`)
- Weather data is passed into the same EJS template and rendered server-side; invalid city names are caught and shown as a clear "City Not Found" message rather than a generic error
- Static assets (CSS) are served from `public/`

## Tech stack
Node.js, Express, EJS, Axios, dotenv, HTML/CSS

## Running locally
```bash
npm install
# create a .env file with:
# WEATHER_API_KEY=your_openweathermap_api_key
node index.js
```
The app runs on `http://localhost:3000`.

## Files
- `index.js` — Express server and route handling
- `views/index.ejs` — form + weather display template
- `public/styles/` — CSS styling
