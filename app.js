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

const closeModal = function () {
  modal.classList.add("hidden");
  modalOverlay.classList.add("hidden");
  document.querySelector("body").classList.remove("no-scroll");
};

console.log(sessionStorage);

const openModal = function () {
  modal.classList.remove("hidden");
  modalOverlay.classList.remove("hidden");
  document.querySelector("body").classList.add("no-scroll");
};

// DOM loads the modal

document.addEventListener("DOMContentLoaded", function () {
  if (!sessionStorage.getItem("viewedModal")) openModal();
  sessionStorage.setItem("viewedModal", "true");
});

// Close button, click body, and escape key closes the modal

if (document.querySelector(".modal")) {
  if (!modal.classList.contains("hidden")) {
    closeModalButton.addEventListener("click", function () {
      closeModal();
    });
    document.querySelector("body").addEventListener("click", function () {
      closeModal();
    });
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

// Snow Removal Calculator

const lengthOfDriveway = document.querySelector("#length");
const inchesOfSnow = document.querySelector("#inches");
const saltingCheck = document.querySelector("#checkbox");
const calcButton = document.querySelector(".calculate-button");
const cost = document.querySelector(".cost");
const message = document.querySelector(".message");

const calcPlowDrive = function () {
  if (!lengthOfDriveway.value || !inchesOfSnow.value) {
    message.textContent = "Enter numbers for driveway length and snow depth!";
    return NaN;
  } else {
    message.textContent = "Your snow removal would cost about:";
    if (cost.classList.contains("hidden")) cost.classList.remove("hidden");
    if (inchesOfSnow.value <= 6) {
      cost.textContent = `$${65}`;
      return 65;
    } else {
      cost.textContent = `$${95}`;
      return 95;
    }
  }
};

calcButton.addEventListener("click", function () {
  if (!saltingCheck.checked) {
    calcPlowDrive();
  } else {
    const costWithoutSalting = calcPlowDrive();
    cost.textContent = `$${costWithoutSalting + costWithoutSalting * 0.1}`;
  }
});
