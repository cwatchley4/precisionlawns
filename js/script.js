"use strict";

const toggleBtn = document.querySelector(".navbar__toggle");
const toggleBtnIcon = document.querySelector(".navbar__toggle i");
const dropDownMenu = document.querySelector(".navbar__dropdown");
const closeModalButton = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");
const servicesButtonsContainer = document.querySelector(".services__list");
const servicesButton = document.querySelectorAll(".services__list .button");
const servicesDescription = document.querySelectorAll(".services__description");
const main = document.querySelector("main");
const header = document.querySelector(".header");
const hero = document.querySelector(".hero");
const pageHero = document.querySelector(".page-hero");

// Navbar Button
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

// Modal
/*
const year = 2024;
const month = 9;
const day = 1;
const startDate = new Date(year, month, day);

if (new Date() >= startDate) {
  const closeModal = function () {
    modal.classList.add("hidden");
    modalOverlay.classList.add("hidden");
    document.querySelector("body").classList.remove("no-scroll");
  };

  const openModal = function () {
    document.querySelector("body").classList.add("no-scroll");
    modal.classList.remove("hidden");
    modalOverlay.classList.remove("hidden");
    const expirationTime = 60 * 60 * 1000;
    const currentTime = new Date().getTime();
    localStorage.setItem(
      "viewedModal",
      JSON.stringify({ value: "true", expiry: currentTime + expirationTime })
    );
  };

  document.addEventListener("DOMContentLoaded", function () {
    const viewedModal = JSON.parse(localStorage.getItem("viewedModal"));
    if (!viewedModal || viewedModal.expiry < new Date().getTime()) {
      openModal();
    }
  });

  closeModalButton.addEventListener("click", function () {
    if (!modal.classList.contains("hidden")) closeModal();
  });
  document.querySelector("body").addEventListener("click", function () {
    if (!modal.classList.contains("hidden")) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
  });
}
*/

// Sticky Header

const navHeight = header.getBoundingClientRect().height;
let lastScrollY = window.scrollY;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    if (hero) hero.style.paddingTop = `${navHeight}px`;
  }
};

const mainObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

if (hero) mainObserver.observe(hero);
if (pageHero) mainObserver.observe(pageHero);

// Lazy loading images

const targetImgs = document.querySelectorAll("img[data-src]");
console.log(targetImgs);

const handleLazyLoad = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.add("loaded");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(handleLazyLoad, {
  root: null,
  threshold: 0,
  rootMargin: "50px",
});

targetImgs.forEach((img) => imgObserver.observe(img));

// Services section on home page

if (document.querySelector("[data-page='home']")) {
  const handleResize = function () {
    if (window.innerWidth <= 1130) {
      servicesButton.forEach((b) => (b.style.transform = "translateY(0)"));
    }
  };

  window.addEventListener("resize", handleResize);

  servicesButtonsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".button");

    servicesButton.forEach((b) => {
      b.classList.remove("service--active");
      b.style.transform = "translateY(0)";
    });
    clicked.classList.add("service--active");
    if (window.innerWidth >= 1130) clicked.style.transform = "translateY(-25%)";
    servicesDescription.forEach((d) => d.classList.add("hidden"));
    document
      .querySelector(`.services__description--${clicked.dataset.tab}`)
      .classList.remove("hidden");
  });
}

// Blog
/*
if (document.querySelector("[page='blog']")) {
  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-form input");
    const sortButtonContainer = document.querySelector(".sort-btn-container");
    const clearButton = document.querySelector(".clear-btn");
    const blogPostsContainer = document.querySelector(".grid-container");

    const extractSearchTerms = (post) => {
      const dataAttribute = post.getAttribute("search-terms");
      return dataAttribute
        ? dataAttribute
            .toLowerCase()
            .split(",")
            .map((term) => term.trim())
        : [];
    };

    const compareDates = (a, b) => {
      const dateA = new Date(a.getAttribute("date"));
      const dateB = new Date(b.getAttribute("date"));
      return dateB - dateA;
    };

    let originalBlogPosts = [...blogPostsContainer.children];
    blogPostsContainer.innerHTML = originalBlogPosts
      .sort(compareDates)
      .map((post) => post.outerHTML)
      .join("");

    sortButtonContainer.addEventListener("click", function () {
      const isSortedByNewest =
        sortButtonContainer.querySelector("span").textContent ===
        "Sort by Newest";

      const sortedPosts = originalBlogPosts
        .slice()
        .sort(isSortedByNewest ? compareDates : (a, b) => -compareDates(a, b));

      blogPostsContainer.innerHTML = sortedPosts
        .map((post) => post.outerHTML)
        .join("");

      sortButtonContainer.querySelector("span").textContent = isSortedByNewest
        ? "Sort by Oldest"
        : "Sort by Newest";

      clearButton.classList.add("hidden");
    });

    searchInput.addEventListener("input", function () {
      const searchInputTrimmed = searchInput.value.toLowerCase().trim();
      const searchInputWords = searchInputTrimmed.split(/\s+/);

      blogPostsContainer.innerHTML = originalBlogPosts
        .map((post) => post.outerHTML)
        .join("");

      blogPostsContainer.childNodes.forEach((post) => {
        const searchTerms = extractSearchTerms(post);
        const title = post
          .querySelector(".blog-title")
          .textContent.toLowerCase()
          .trim();

        const matches = searchInputWords.some(
          (word) =>
            searchTerms.some((term) => term.includes(word)) ||
            title.includes(word)
        );

        if (!matches) {
          post.style.display = "none";
        }
      });

      clearButton.classList.remove("hidden");
      sortButtonContainer.classList.add("hidden");
    });

    clearButton.addEventListener("click", function () {
      searchInput.value = "";
      clearButton.classList.add("hidden");
      sortButtonContainer.classList.remove("hidden");

      blogPostsContainer.innerHTML = originalBlogPosts
        .map((post) => post.outerHTML)
        .join("");

      sortButtonContainer.querySelector("span").textContent = "Sort by Newest";
    });
  });
}
*/
