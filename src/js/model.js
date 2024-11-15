import { API_KEY, API_URL } from "./config.js";

export const state = {
  isMenuOpen: false,
  weather: {
    current: {},
    minutely: {},
  },
};

export function toggleMenuState() {
  state.isMenuOpen = !state.isMenuOpen;
}

const createCurrentWeatherObject = function (data) {
  const { current } = data;
  return {
    feelsLike: `${Math.round(current.feels_like)}°F in Canton`,
    description: current.weather[0].description,
    icon: current.weather[0].icon,
  };
};

const createMinutelyWeatherString = function (data) {
  const { minutely } = data;
  const rainMinute = minutely?.find((minute) => minute.precipitation > 0);

  if (rainMinute) {
    const currentTime = Math.floor(Date.now() / 1000);
    const minutesUntilRain = Math.round((rainMinute.dt - currentTime) / 60);
    return `Rain starting in ${minutesUntilRain} minutes.`;
  } else {
    return "No rain expected in the next hour.";
  }
};

export const loadWeather = async function () {
  try {
    const res = await fetch(`${API_URL}${API_KEY}`);
    const data = await res.json();

    if (!res.ok) throw new Error("Failed to fetch weather data");

    state.weather.current = createCurrentWeatherObject(data);
    state.weather.minutely = createMinutelyWeatherString(data);
  } catch (err) {
    console.error(err);
  }
};
