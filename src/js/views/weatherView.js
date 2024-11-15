import Views from "./Views.js";

class WeatherView extends Views {
  _parentElement;

  constructor() {
    super();
    this._parentElement = document.querySelector(".footer__weather");
  }

  _generateMarkup() {
    return `
    <p class="footer__weather-text">Feels like ${this._data.current.feelsLike}.</p>
    <p class="footer__weather-text">${this._data.minutely}</p>
    `;
  }

  renderError(message = "Something went wrong while fetching weather data.") {
    this._parentElement.textContent = message;
  }
}

export default new WeatherView();
