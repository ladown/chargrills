'use strict';

window.addEventListener('DOMContentLoaded', () => {
  // HAMBURGER MENU

  const hamburgerBtn = document.querySelector(`.header__hamburger`);
  const headerMenu = document.querySelector(`.header__list`);
  const menuItem = document.querySelectorAll(`.header__link`);

  hamburgerBtn.addEventListener(`click`, () => {
    headerMenu.classList.toggle(`header__list_active`);
    hamburgerBtn.classList.toggle(`header__hamburger_active`);
  });

  menuItem.forEach((item) => {
    item.addEventListener(`click`, () => {
      headerMenu.classList.toggle(`header__list_active`);
      hamburgerBtn.classList.toggle(`header__hamburger_active`);
    });
  });

  // SLIDER

  const firstDots = document.querySelectorAll(`.price__circles span`);
  const firstSlides = document.querySelectorAll(`.price__item`);
  const secondDots = document.querySelectorAll(`.othprice__circles span`);
  const secondSlides = document.querySelectorAll(`.othprice__item`);
  const thirdDots = document.querySelectorAll(`.popular__circles span`);
  const thirdSlides = document.querySelectorAll(`.popular__item`);

  function slider(sliderNum, dotsSelector, slidesSelector) {
    let sliderIndex = sliderNum;
    showSlides(sliderIndex);

    function showSlides(n) {
      if (n > slidesSelector.length) {
        sliderIndex = 1;
      }

      if (n < 1) {
        sliderIndex = slidesSelector.length;
      }

      slidesSelector.forEach((item) => {
        item.style.display = `none`;
        item.classList.remove(`fadeOutLeft`);
      });

      slidesSelector[sliderIndex - 1].style.display = `block`;
      slidesSelector[sliderIndex - 1].classList.add(`fadeOutLeft`);

      dotsSelector.forEach((item, index) => {
        item.addEventListener('click', addPlusSlides);

        if (sliderIndex - 1 === index) {
          item.classList.add(`active`);
        } else {
          item.classList.remove(`active`);
        }
      });
    }

    function plusSlides(n) {
      showSlides((sliderIndex += n));
    }

    function addPlusSlides() {
      plusSlides(1);
    }

    if (document.body.clientWidth < 768) {
      showSlides(sliderIndex);
    } else if (document.body.clientWidth > 768) {
      dotsSelector.forEach((item) => {
        item.removeEventListener('click', addPlusSlides);
      });
      slidesSelector.forEach((item) => {
        item.style.display = ``;
        item.classList.remove(`fadeOutLeft`);
      });
    }
  }

  slider(1, firstDots, firstSlides);
  slider(1, secondDots, secondSlides);
  slider(1, thirdDots, thirdSlides);

  window.addEventListener('resize', () => {
    slider(1, firstDots, firstSlides);
    slider(1, secondDots, secondSlides);
    slider(1, thirdDots, thirdSlides);
  });

  // FAQ POPUP

  const faqItem = document.querySelectorAll(`.faq__item`);
  const faqBtn = document.querySelectorAll(`.faq__item-btn`);
  const faqDescr = document.querySelectorAll(`.faq__item-descr`);

  faqBtn.forEach((btn, index) => {
    btn.addEventListener(`click`, () => {
      faqItem[index].classList.toggle(`faq__item-active`);
      btn.classList.toggle(`faq__item-btn-minus`);
      faqDescr[index].classList.toggle(`faq__item-descr-active`);
    });
  });
});
