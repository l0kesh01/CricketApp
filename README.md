# 🏏 Cricket-Weather App 🌤️

This is a SvelteKit-based web application that allows users to search for cricket matches by city, view upcoming, live, and recently completed matches at specific venues, and get the current weather for the venue's location.

---

## 🚀 Features

- 🔍 **Search Matches by City**  
  Type any city to find all relevant matches at nearby venues.

- 🗓️ **Match Categories**  
  - Recent Matches (past 2 days)  
  - Live Matches (ongoing games)  
  - Upcoming Matches (next 5–15 days)

- ☁️ **Live Weather Information**  
  Real-time weather for the selected venue using OpenWeather API.

- 🧾 **Match Details**
  - Team names
  - Scores
  - Match start time
  - Match status (Live / Completed / Upcoming)

- 📡 **Real API Integration**
  - [Cricbuzz Cricket API via RapidAPI](https://rapidapi.com/)
  - [OpenWeather API](https://openweathermap.org/)

---

## 🏗️ Tech Stack

- **Frontend Framework**: [SvelteKit](https://kit.svelte.dev/)
- **Languages**: TypeScript, HTML, CSS
- **APIs**:
  - `cricbuzz-cricket.p.rapidapi.com` for match data
  - `api.openweathermap.org` for weather data

## 🔑 API Keys

- **RapidAPI (Cricbuzz) Key**
  - Used to fetch cricket match data
  - Endpoints used:
    - `/matches/v1/recent`
    - `/matches/v1/live`
    - `/matches/v1/upcoming`

- **OpenWeather API Key**
  - Used to fetch weather data for a venue's city




