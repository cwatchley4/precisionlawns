import Views from "./Views.js";

class NavbarView extends Views {
  #parentElement = document.querySelector(".header");
  #toggleBtn;
  #toggleBtnIcon;
  #mobileMenu;
  #hero;
  #heroBgVideo;
  #pageHero;
  #navHeight;

  constructor() {
    super();
    this.#toggleBtn = this.#parentElement.querySelector(".navbar__toggle-btn");
    this.#toggleBtnIcon = this.#toggleBtn.querySelector(
      ".navbar__toggle-btn-icon"
    );
    this.#mobileMenu = this.#parentElement.querySelector(".navbar__mobile");
    this.#hero = document.querySelector(".hero");
    this.#heroBgVideo = document.querySelector(".hero__video");
    this.#pageHero = document.querySelector(".page-hero");
    this.#navHeight = this.#parentElement.getBoundingClientRect().height;
  }

  render(data) {
    this._data = data;
    console.log("Navbar data:", this._data);
    this._toggleMobileMenuIcon();
  }

  _toggleMobileMenuIcon() {
    if (!this.#toggleBtnIcon || !this.#mobileMenu) return;

    this.#mobileMenu.classList.toggle("navbar__mobile--open", this._data);

    this.#toggleBtnIcon.classList = this._data
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";
  }

  addHandlerToggle(handler) {
    if (!this.#toggleBtn) return;
    this.#toggleBtn.addEventListener("click", handler);
  }

  initStickyNav() {
    const stickyNav = (entries) => {
      const [entry] = entries;

      if (!entry.isIntersecting) {
        this.#parentElement.classList.add("header--sticky");
      } else {
        this.#parentElement.classList.remove("header--sticky");
      }

      if (this.#hero) {
        this.#hero.style.paddingTop = `${this.#navHeight}px`;
        this.#heroBgVideo.style.height = `calc(100vh - ${this.#navHeight}px)`;
      }
    };

    // IntersectionObserver configuration
    const mainObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${this.#navHeight}px`,
    });

    // Observe the hero and pageHero sections
    if (this.#hero) mainObserver.observe(this.#hero);
    if (this.#pageHero) mainObserver.observe(this.#pageHero);
  }
}

export default new NavbarView();
