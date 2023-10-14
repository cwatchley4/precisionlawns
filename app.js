"use strict";

// Responsive Nav Bar

const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

const changeDropDownMenuIcon = function () {
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

const toggleDropDownMenu = function () {
  dropDownMenu.classList.toggle("open");
};

toggleBtn.addEventListener("click", function () {
  toggleDropDownMenu();
  changeDropDownMenuIcon();
});

document.querySelector("main").addEventListener("click", function () {
  dropDownMenu.classList.remove("open");
  changeDropDownMenuIcon();
});

// Modal

const closeModalButton = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");

const userHasViewedModal = function () {
  console.log("modal viewed");
  return sessionStorage.getItem("viewedModal") === "true";
};

const closeModal = function () {
  modal.classList.add("hidden");
  modalOverlay.classList.add("hidden");
  document.querySelector("body").classList.remove("no-scroll");
  sessionStorage.setItem("viewedModal", "true");
};

const openModal = function () {
  if (!userHasViewedModal()) {
    modal.classList.remove("hidden");
    modalOverlay.classList.remove("hidden");
    document.querySelector("body").classList.add("no-scroll");
    userHasViewedModal();
  }
};

document.addEventListener("DOMContentLoaded", function () {
  openModal();
});

if (!modal.classList.contains("hidden")) {
  closeModalButton.addEventListener("click", function () {
    closeModal();
  });
  document.querySelector("body").addEventListener("click", function () {
    closeModal();
  });
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
