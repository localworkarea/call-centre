// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener('DOMContentLoaded', function () {
  // Получить элементы select__options и .price__value
  const selectOptions = document.querySelector('.select__options');
  const priceValues = document.querySelectorAll('.price__value');
  const priceTxtChngOnes = document.querySelectorAll('.price__txt-chng-one');

  // Индекс текущей выбранной опции
  let selectedIndex = -1;

  // Функция для обработки изменений атрибута hidden
  function handleHiddenAttributeChange(mutationsList) {
    const isHidden = selectOptions.hasAttribute('hidden');
    
    if (isHidden) {
      // Получить индекс выбранной опции
      const newSelectedIndex = Array.from(selectOptions.querySelectorAll('.select__option')).findIndex(option => option.getAttribute('hidden') !== null);
      
      // Если индекс опции валидный и не совпадает с предыдущим, удалить классы _show-price и _show-txt со всех элементов
      if (newSelectedIndex >= 0 && newSelectedIndex !== selectedIndex) {
        priceValues.forEach(priceValue => {
          priceValue.classList.remove('_show-price');
        });

        priceTxtChngOnes.forEach(priceTxtChngOne => {
          priceTxtChngOne.classList.remove('_show-txt');
        });

        // Присвоить новому .price__value класс _show-price и новому .price__txt-chng-one класс _show-txt
        priceValues[newSelectedIndex].classList.add('_show-price');
        priceTxtChngOnes[newSelectedIndex].classList.add('_show-txt');

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


// // розкоментувати для робочої версії для CAPTCHA ===============================================
// function SetCaptchaToken() {
//   grecaptcha.execute('6LfuX04oAAAAAIx7M1jALIXUi7N_SjOcKKlfoFFs', {action:'validate_captcha'})
//   .then(function(token) {
//     document.getElementById('recaptcha-resp1').setAttribute("value", token);
//     document.getElementById('recaptcha-resp2').setAttribute("value", token);
//     document.getElementById('recaptcha-resp3').setAttribute("value", token);
//   });
// }
// grecaptcha.ready(function() {
//   SetCaptchaToken();
// });
// setInterval(function () { SetCaptchaToken(); }, 2 * 60 * 1000);
// document.addEventListener('formSent', () => SetCaptchaToken());