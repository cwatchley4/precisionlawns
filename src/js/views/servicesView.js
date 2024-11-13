import Views from "./Views";

class ServicesView extends Views {
  #parentElement;
  #servicesButtons;
  #servicesDescriptions;

  constructor() {
    super();
    this.#parentElement = document.querySelector(".services__list");
    this.#servicesButtons = document.querySelectorAll(".services__list .btn");
    this.#servicesDescriptions = document.querySelectorAll(
      ".services__description"
    );

    if (!this.#parentElement) return;
    window.addEventListener("resize", this._handleResize.bind(this));
  }

  _handleResize() {
    if (window.innerWidth <= 1130) {
      servicesButton.forEach((b) => (b.style.transform = "translateY(0)"));
    }
  }

  addClickHandler(handler) {
    this.#parentElement.addEventListener("click", function (e) {
      const clicked = e.target.closest(".btn");
      if (!clicked) return;
      handler(clicked);
    });
  }

  toggleActiveButton(clicked) {
    this.#servicesButtons.forEach((button) => {
      button.classList.remove("service--active");
      button.style.transform = "translateY(0)";
    });

    clicked.classList.add("service--active");

    if (window.innerWidth >= 1130) {
      clicked.style.transform = "translateY(-25%)";
    }

    this.#servicesDescriptions.forEach((desc) => {
      desc.classList.add("hidden");
    });

    const targetDescription = document.querySelector(
      `.services__description--${clicked.dataset.tab}`
    );
    if (targetDescription) targetDescription.classList.remove("hidden");
  }
}

export default new ServicesView();
