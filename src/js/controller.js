"use strict";

import "../sass/main.scss";

import * as model from "./model.js";
import modalView from "./views/modalView.js";
import navbarView from "./views/navbarView.js";
import imageView from "./views/imageView.js";
import servicesView from "./views/servicesView.js";
import weatherView from "./views/weatherView.js";

const controlToggleMobileMenu = function () {
  model.toggleMenuState();
  navbarView.render(model.state.isMenuOpen);
};

const controlServices = function (clickedBtn) {
  servicesView.toggleActiveButton(clickedBtn);
};

const controlWeather = async function () {
  try {
    await model.loadWeather();
    weatherView.render(model.state.weather);
  } catch (err) {
    console.error(err);
    weatherView.renderError();
  }
};

const controlCloseModal = function () {
  modalView.closeModal();
};

const init = async function () {
  navbarView.addHandlerToggle(controlToggleMobileMenu);
  navbarView.initStickyNav();

  modalView.addHandlerCloseModal(controlCloseModal);

  imageView.initLazyLoad();
  await controlWeather();

  if (document.querySelector(".services__list"))
    servicesView.addClickHandler(controlServices);
};

init();
