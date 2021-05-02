'use strict';

const experienceBtnEl = document.querySelector('.js-experience');
const personalLifeBtnEl = document.querySelector('.js-personal-life');
const mediaCareerBtnEl = document.querySelector('.js-media-career');
const experienceSectionEl = document.querySelector('.js-experience-information');
const personalLifeSectionEl = document.querySelector('.js-personal-information');
const mediaCareerSectionEl = document.querySelector('.js-media-information');

experienceBtnEl.addEventListener('click', onClickExperienceBtn);
personalLifeBtnEl.addEventListener('click', onClickPersonalLifeBtn);
mediaCareerBtnEl.addEventListener('click', onClickMediaCareerBtnBtn);

function onClickExperienceBtn (event) {
console.log('Hello');

  if (experienceSectionEl.classList.contains('is-hidden')) {
      experienceSectionEl.classList.remove('is-hidden');
      personalLifeSectionEl.classList.add('is-hidden');
      mediaCareerSectionEl.classList.add('is-hidden');
  }
}

function onClickPersonalLifeBtn (event) {
    console.log('Hello Malo');
    if (personalLifeSectionEl.classList.contains('is-hidden')) {
        personalLifeSectionEl.classList.remove('is-hidden');
        experienceSectionEl.classList.add('is-hidden');
        mediaCareerSectionEl.classList.add('is-hidden');
    }
}

function onClickMediaCareerBtnBtn (event) {
    console.log('Hello Talo');
    if (mediaCareerSectionEl.classList.contains('is-hidden')) {
        mediaCareerSectionEl.classList.remove('is-hidden');
        experienceSectionEl.classList.add('is-hidden');
        personalLifeSectionEl.classList.add('is-hidden');
    }
}