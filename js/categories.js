(() => {

    const refs = {
        experienceBtnEl: document.querySelector('.js-experience'),
        personalLifeBtnEl: document.querySelector('.js-personal-life'),
        mediaCareerBtnEl: document.querySelector('.js-media-career'),
        experienceSectionEl: document.querySelector('.js-experience-information'),
        personalLifeSectionEl: document.querySelector('.js-personal-information'),
        mediaCareerSectionEl: document.querySelector('.js-media-information'),
        dancingCatEl: document.querySelector('.js-dancing-cat'),
    }
    
    refs.experienceBtnEl.addEventListener('click', onClickExperienceBtn);
    refs.personalLifeBtnEl.addEventListener('click', onClickPersonalLifeBtn);
    refs.mediaCareerBtnEl.addEventListener('click', onClickMediaCareerBtnBtn);
    
    function onClickExperienceBtn () {
        if (refs.experienceSectionEl.classList.contains('is-hidden')) {
             refs.experienceSectionEl.classList.remove('is-hidden');
             refs.personalLifeSectionEl.classList.add('is-hidden');
             refs.mediaCareerSectionEl.classList.add('is-hidden');
        }

        refs.dancingCatEl.classList.add('background-image');
        refs.dancingCatEl.classList.remove('background-image-2');
    }

    function onClickPersonalLifeBtn () {
        if (refs.personalLifeSectionEl.classList.contains('is-hidden')) {
            refs.personalLifeSectionEl.classList.remove('is-hidden');
            refs.experienceSectionEl.classList.add('is-hidden');
            refs.mediaCareerSectionEl.classList.add('is-hidden');
        }

        refs.dancingCatEl.classList.remove('background-image');
        refs.dancingCatEl.classList.add('background-image-2');
    }

    function onClickMediaCareerBtnBtn () {
        if (refs.mediaCareerSectionEl.classList.contains('is-hidden')) {
            refs.mediaCareerSectionEl.classList.remove('is-hidden');
            refs.experienceSectionEl.classList.add('is-hidden');
            refs.personalLifeSectionEl.classList.add('is-hidden');
        }

        refs.dancingCatEl.classList.add('background-image');
        refs.dancingCatEl.classList.remove('background-image-2');
    }
})();