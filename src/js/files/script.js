// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// document.addEventListener('DOMContentLoaded', function () {
//   // Получить элементы select__options и .price__value
//   const selectOptions = document.querySelector('.select__options');
//   const priceValues = document.querySelectorAll('.price__value');

//   // Функция для обработки изменений атрибута hidden
//   function handleHiddenAttributeChange(mutationsList) {
//     const isHidden = selectOptions.hasAttribute('hidden');

//     // Получить индекс выбранной опции
//     const selectedIndex = Array.from(selectOptions.querySelectorAll('.select__option')).findIndex(option => option.getAttribute('hidden') !== null);

//     // Удалить класс _show-price со всех .price__value
//     priceValues.forEach(priceValue => {
//       priceValue.classList.remove('_show-price');
//     });

//     // Если атрибут hidden есть, добавить класс _show-price к соответствующему .price__value
//     if (isHidden && selectedIndex >= 0 && selectedIndex < priceValues.length) {
//       priceValues[selectedIndex].classList.add('_show-price');
//     } 
//   }

//   // Следить за изменениями в атрибуте hidden у select__options
//   const observer = new MutationObserver(handleHiddenAttributeChange);
//   observer.observe(selectOptions, { attributes: true });

//   // Вызвать функцию для обработки начального состояния
//   handleHiddenAttributeChange();
// });


document.addEventListener('DOMContentLoaded', function () {
  // Получить элементы select__options и .price__value
  const selectOptions = document.querySelector('.select__options');
  const priceValues = document.querySelectorAll('.price__value');

  // Индекс текущей выбранной опции
  let selectedIndex = -1;

  // Функция для обработки изменений атрибута hidden
  function handleHiddenAttributeChange(mutationsList) {
    const isHidden = selectOptions.hasAttribute('hidden');
    
    if (isHidden) {
      // Получить индекс выбранной опции
      const newSelectedIndex = Array.from(selectOptions.querySelectorAll('.select__option')).findIndex(option => option.getAttribute('hidden') !== null);
      
      // Если индекс опции валидный и не совпадает с предыдущим, удалить класс _show-price со всех .price__value
      if (newSelectedIndex >= 0 && newSelectedIndex !== selectedIndex) {
        priceValues.forEach(priceValue => {
          priceValue.classList.remove('_show-price');
        });

        // Присвоить новому .price__value класс _show-price
        priceValues[newSelectedIndex].classList.add('_show-price');

        // Обновить индекс выбранной опции
        selectedIndex = newSelectedIndex;
      }
    }
  }

  // Следить за изменениями в атрибуте hidden у select__options
  const observer = new MutationObserver(handleHiddenAttributeChange);
  observer.observe(selectOptions, { attributes: true });

  // Вызвать функцию для обработки начального состояния
  handleHiddenAttributeChange();
});

gsap.registerPlugin(ScrollTrigger);

// GSAP Animation title ======================
const titleElements = document.querySelectorAll(".title-second__wrapper");
if (titleElements.length > 0) {
  titleElements.forEach((titleElement) => {
    gsap.to(titleElement, {
      scrollTrigger: {
        trigger: titleElement,
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
      duration: 1,
      backgroundSize: "100% 100%",
      ease: "none",
    });
  });
}

// Split text ====================================
const splitText = new SplitType('.split-text', { types: 'lines'});
window.addEventListener("resize", function() {
  splitText.split();
});

gsap.to(".hero__bg", {
  scrollTrigger: {
    trigger: '.hero__bg',
    start: "top top",
    scrub: true,
  },
  yPercent: -10,
})

// gsap.to(".wrapper-spoller", {
//   scrollTrigger: {
//     trigger: '.possibilities__spollers',
//     start: "bottom bottom",
//     end: "top top",
//     scrub: true,
//   },
//   ease: "back",
//   x: 0,
//   stagger: 0.1,
//   opacity: 1,
// })