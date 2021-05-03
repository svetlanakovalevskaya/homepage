(() => {
    const refs = {
      above18ModalBtn: document.querySelector("[data-modal-close]"),
      under18ModalBtn: document.querySelector("[data-modal-under18]"),
      modal: document.querySelector("[data-modal]"),
      backdrop: document.querySelector("[data-backdrop]"),
    };

    document.body.classList.toggle("modal-open");
  
    refs.above18ModalBtn.addEventListener("click", toggleModal);
    refs.under18ModalBtn.addEventListener("click", blockAccess);
  
    function toggleModal(evt) {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("modal-open");
      refs.backdrop.classList.remove("backdrop");
    }

    function blockAccess() {
        location.href = "./under18.html";
    }
})();