(() => {
    const refs = {
      above18ModalBtn: document.querySelector("[data-modal-close]"),
      under18ModalBtn: document.querySelector("[data-modal-under18]"),
      modal: document.querySelector("[data-modal]"),
      backdrop: document.querySelector("[data-backdrop]"),
      backgroundAudioEl: document.querySelector('.background-audio'),
      dancingCatEl: document.querySelector('.js-dancing-cat'),
    };

    document.body.classList.toggle("modal-open");
  
    refs.above18ModalBtn.addEventListener("click", toggleModal);
    refs.under18ModalBtn.addEventListener("click", blockAccess);
  
    function toggleModal(evt) {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("modal-open");
      refs.backdrop.classList.remove("backdrop");

      refs.backgroundAudioEl.innerHTML = `
        <audio 
          src="./y2mate.com - 50 Cent  Candy Shop Official Music Video ft Olivia-28.1-249.3.mp3"  
          autoplay 
          loop 
          preload="auto"
        ></audio>
      `;
      
      refs.dancingCatEl.classList.add('background-image');
    }

    function blockAccess() {
        location.href = "./under18.html";
    }
})();