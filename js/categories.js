(() => {

    const refs = {
        experienceBtnEl: document.querySelector('.js-experience'),
        personalLifeBtnEl: document.querySelector('.js-personal-life'),
        mediaCareerBtnEl: document.querySelector('.js-media-career'),
        experienceSectionEl: document.querySelector('.js-experience-information'),
        personalLifeSectionEl: document.querySelector('.js-personal-information'),
        mediaCareerSectionEl: document.querySelector('.js-media-information'),
    }
    
    refs.experienceBtnEl.addEventListener('click', onClickExperienceBtn);
    refs.personalLifeBtnEl.addEventListener('click', onClickPersonalLifeBtn);
    refs.mediaCareerBtnEl.addEventListener('click', onClickMediaCareerBtnBtn);
    
    function onClickExperienceBtn (event) {
        if (refs.experienceSectionEl.classList.contains('is-hidden')) {
             refs.experienceSectionEl.classList.remove('is-hidden');
             refs.personalLifeSectionEl.classList.add('is-hidden');
             refs.mediaCareerSectionEl.classList.add('is-hidden');
        }
    }

    function onClickPersonalLifeBtn (event) {
        if (refs.personalLifeSectionEl.classList.contains('is-hidden')) {
            refs.personalLifeSectionEl.classList.remove('is-hidden');
            refs.experienceSectionEl.classList.add('is-hidden');
            refs.mediaCareerSectionEl.classList.add('is-hidden');
        }
    }

    function onClickMediaCareerBtnBtn (event) {
        if (refs.mediaCareerSectionEl.classList.contains('is-hidden')) {
            refs.mediaCareerSectionEl.classList.remove('is-hidden');
            refs.experienceSectionEl.classList.add('is-hidden');
            refs.personalLifeSectionEl.classList.add('is-hidden');
        }
    }

})();