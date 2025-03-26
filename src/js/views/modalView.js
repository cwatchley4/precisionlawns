import Views from "./Views.js";

class ModalView extends Views {
  modal;
  overlay;
  modalCloseBtn;

  constructor() {
    super();
    this.modal = document.querySelector(".modal");
    this.overlay = document.querySelector(".modal__overlay");
    this.modalCloseBtn = document.querySelector(".modal__close");
  }

  addHandlerCloseModal(handler) {
    if (!this.modal) return;
    this.modalCloseBtn.addEventListener("click", handler);
  }

  closeModal() {
    this.modal.classList.add("hidden");
    this.overlay.classList.add("hidden");
  }
}

export default new ModalView();
