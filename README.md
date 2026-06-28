# Weather App

A universal and minimal weather application built with vanilla HTML, CSS, and JavaScript. Search any city to get real-time weather updates.

## Features

- Search weather by city name
- Displays current temperature (°C)
- Shows weather condition with icon
- Displays local date and time
- Default location: New Delhi

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- [WeatherAPI](https://www.weatherapi.com/) for weather data

## Setup

1. Get a free API key from [WeatherAPI](https://www.weatherapi.com/)
2. Open `script.js` and replace the API key in the URL:
   ```
   http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${targetLocation}&aqi=no
   ```
3. Open `index.html` in your browser

## Usage

1. Enter a city name in the search bar
2. Click the **Search** button
3. View the current weather details

## Project Structure

```
WeatherApp/
├── index.html    # Main HTML file
├── style.css     # Styles
├── script.js     # App logic and API calls
└── README.md     # Documentation
```

## License

Free to use.
