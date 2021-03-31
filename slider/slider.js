'use strict';

let slider = document.querySelector('.slider');

// Создать иконку

let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement("afterbegin", loadIcon);

//  дувая стрелка
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement("beforeend", leftArrow);

//  Правая стрелка
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
slider.insertAdjacentElement("beforeend", rightArrow);

// ждем когда весь контент загрузится
window.addEventListener('load', () => {
    loadIcon.style.display = 'none';
    images.init();
    leftArrow.addEventListener('click', () => {
        images.setNextLeftImage();
    });
    rightArrow.addEventListener('click', () => {
        images.setNextRightImage();
    });
});

// Объект слайдера
let images = {
  currentIdx: 0,
  slides: [],

    init() {
      this.slides = document.querySelectorAll('.slider-item');
      this.showImageWithCurrentIdx();
    },

    showImageWithCurrentIdx() {
      this.slides[this.currentIdx].classList.remove('hidden-slide');
    },

    hideVisibleImage() {
      this.slides[this.currentIdx].classList.add('hidden-slide');
    },

    setNextLeftImage() {
      this.hideVisibleImage();
      if (this.currentIdx === 0) {
          this.currentIdx = this.slides.length - 1;
      } else {
          this.currentIdx--;
      }
      this.showImageWithCurrentIdx();
    },

    setNextRightImage() {
      this.hideVisibleImage();
      if (this.currentIdx === this.slides.length - 1) {
          this.currentIdx = 0;
      } else {
          this.currentIdx++;
      }
      this.showImageWithCurrentIdx();
    }
};

function setSizes(slider) {
    let width = slider.getAttribute('data-width');
    let height = slider.getAttribute('data-height');
    if (width !== null && width !== '') {
        slider.style.width = width;
    }
    if (height !== null && height !== '') {
        slider.style.height = height;
    }
}
setSizes(slider);