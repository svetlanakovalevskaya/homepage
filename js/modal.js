(() => {
    const refs = {
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      backdrop: document.querySelector("[data-backdrop]"),
    };

    document.body.classList.toggle("modal-open");
  
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("modal-open");
      refs.backdrop.classList.remove("backdrop");
    }
})();