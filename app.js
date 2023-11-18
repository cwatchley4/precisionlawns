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

// document.querySelector("main").addEventListener("click", function () {
//   dropDownMenu.classList.remove("open");
//   changeDropDownMenuIcon();
// });

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

/*

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

*/

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-form input");
  const sortButtonContainer = document.querySelector(".sort-btn-container");
  const clearButton = document.querySelector(".clear-btn");
  const blogPostsContainer = document.querySelector(".grid-container");

  // Extract and split search terms from data attribute
  const extractSearchTerms = (post) => {
    const dataAttribute = post.getAttribute("search-terms");
    return dataAttribute
      ? dataAttribute
          .toLowerCase()
          .split(",")
          .map((term) => term.trim())
      : [];
  };

  // Function to compare blog post dates for sorting
  const compareDates = (a, b) => {
    const dateA = new Date(a.getAttribute("date"));
    const dateB = new Date(b.getAttribute("date"));

    return dateB - dateA;
  };

  // Initial sorting by newest first
  let originalBlogPosts = [...blogPostsContainer.children];
  blogPostsContainer.innerHTML = originalBlogPosts
    .sort(compareDates)
    .map((post) => post.outerHTML)
    .join("");

  // Add click event to the sort button
  sortButtonContainer.addEventListener("click", function () {
    const isSortedByNewest =
      sortButtonContainer.querySelector("span").textContent ===
      "Sort by Newest";

    // Toggle between sorting by newest and sorting by oldest
    const sortedPosts = originalBlogPosts
      .slice()
      .sort(isSortedByNewest ? compareDates : (a, b) => -compareDates(a, b));

    // Update the blog posts container with the sorted posts
    blogPostsContainer.innerHTML = sortedPosts
      .map((post) => post.outerHTML)
      .join("");

    // Change the text of the sort button
    sortButtonContainer.querySelector("span").textContent = isSortedByNewest
      ? "Sort by Oldest"
      : "Sort by Newest";

    // Hide the clear button
    clearButton.classList.add("hidden");
  });

  searchInput.addEventListener("input", function () {
    const searchInputTrimmed = searchInput.value.toLowerCase().trim(); // Trim spaces
    const searchInputWords = searchInputTrimmed.split(/\s+/); // Split by whitespace

    blogPostsContainer.innerHTML = originalBlogPosts
      .map((post) => post.outerHTML)
      .join("");

    blogPostsContainer.childNodes.forEach((post) => {
      const searchTerms = extractSearchTerms(post);
      const title = post
        .querySelector(".blog-title")
        .textContent.toLowerCase()
        .trim(); // Trim spaces

      // Check if any word of the search input matches any search term or the title
      const matches = searchInputWords.some(
        (word) =>
          searchTerms.some((term) => term.includes(word)) ||
          title.includes(word)
      );

      if (!matches) {
        post.style.display = "none";
      }
    });

    // Show the clear button
    clearButton.classList.remove("hidden");
    sortButtonContainer.classList.add("hidden");
  });

  // Add click event to clear the search input
  clearButton.addEventListener("click", function () {
    searchInput.value = ""; // Clear the search input
    clearButton.classList.add("hidden"); // Hide the clear button
    sortButtonContainer.classList.remove("hidden");

    // Show all blog posts
    blogPostsContainer.innerHTML = originalBlogPosts
      .map((post) => post.outerHTML)
      .join("");

    // Change the text of the sort button to "Sort by Newest"
    sortButtonContainer.querySelector("span").textContent = "Sort by Newest";
  });
});
