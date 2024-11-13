import Views from "./Views.js";
import { loadImage } from "../helpers.js";

class ImageView extends Views {
  #targetImgs;

  initLazyLoad() {
    this.#targetImgs = document.querySelectorAll("img[data-src]");

    const handleLazyLoad = function (entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      const imageName = entry.target.getAttribute("data-src");
      const fullImagePath = loadImage(imageName);

      if (!fullImagePath) return;

      entry.target.src = fullImagePath;

      entry.target.addEventListener("load", () => {
        entry.target.classList.replace("lazy_img", "lazy_img--loaded");
      });

      observer.unobserve(entry.target);
    };

    const imgObserver = new IntersectionObserver(handleLazyLoad, {
      root: null,
      threshold: 0,
      rootMargin: "50px",
    });

    this.#targetImgs.forEach((img) => imgObserver.observe(img));
  }
}

export default new ImageView();
