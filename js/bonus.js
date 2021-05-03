(() => {
    const refs = {
        bonusBtnEl: document.querySelector('.bonus-button'),
        bonusSectionEl: document.querySelector('.bonus-section'),
        bonusBackdropEl: document.querySelector('#backdrop'),
    }

    refs.bonusBtnEl.addEventListener('click', onClickBonusBtn);

    function onClickBonusBtn () {
        refs.bonusSectionEl.innerHTML = `
          <button class="bonus-close-button" type="button">
            <svg class="bonus-close-icon" width="30" height="30">
              <use href="./pictures/symbol-defs.svg#menu-close"></use>
            </svg>
          </button>
          <video class="video-bonus"
            src="./video/Donald Trump ft. Melania Trump - Golden Dump (The Trump Hump) by Klemen Slakonja.webm"
            width="1040"
            autoplay
            preload="auto"
          ></video>
        `;

        document.body.classList.add("modal-open");

        const bonusCloseBtnEl = document.querySelector('.bonus-close-button');

        bonusCloseBtnEl.addEventListener('click', onClickBonusCloseBtn);
        refs.bonusBackdropEl.classList.add('backdrop');
    }

    function onClickBonusCloseBtn () {
        refs.bonusSectionEl.innerHTML = '';
        document.body.classList.remove("modal-open");
        refs.bonusBackdropEl.classList.toggle('backdrop');
    }
})();