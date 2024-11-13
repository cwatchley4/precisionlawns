"use strict";

import "../sass/main.scss";

import * as model from "./model.js";
import navbarView from "./views/navbarView.js";
import imageView from "./views/imageView.js";
import servicesView from "./views/servicesView.js";

const controlToggleMobileMenu = function () {
  model.toggleMenuState();
  navbarView.render(model.state.isMenuOpen);
};

const controlServices = function (clickedBtn) {
  servicesView.toggleActiveButton(clickedBtn);
};

const init = function () {
  navbarView.addHandlerToggle(controlToggleMobileMenu);
  navbarView.initStickyNav();

  imageView.initLazyLoad();

  if (document.querySelector(".services__list"))
    servicesView.addClickHandler(controlServices);
};

init();
