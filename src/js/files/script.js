// Подключение функционала "Чертогов Фрилансера"
import { bodyLock, isMobile, bodyUnlock } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const anchorLink = document.querySelectorAll("[data-anchor]");
if (anchorLink) {
  anchorLink.forEach((item) => {
    item.addEventListener("click", function (e) {
      let dataAttrDate = item.dataset.anchor;
      let section = document.getElementById(dataAttrDate);
      let topBorderSection = section.getBoundingClientRect().top;
      let headerHeight = document.querySelector("header").clientHeight;
      let scrollHeight = topBorderSection - headerHeight;

      window.scrollBy({
        top: scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    });
  });
}

const btnBurger = document.querySelector("#burger");
if (btnBurger) {
  btnBurger.addEventListener("click", function (e) {
    scrollLock();
    document.documentElement.classList.add("lock");
    btnBurger.classList.add("active");
    document.querySelector(".popup-menu").classList.add("show");
  });
}

const closeMenuPopup = document.querySelector(".popup-menu__close");
if (closeMenuPopup) {
  closeMenuPopup.addEventListener("click", function (e) {
    document.documentElement.classList.remove("lock");
    scrollUnlock();
    btnBurger.classList.remove("active");
    document.querySelector(".popup-menu").classList.remove("show");
  });
}

function scrollLock() {
  let scrollWidth = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
  document.querySelector("body").style.paddingRight = scrollWidth;
  document.querySelector(".header").style.paddingRight = scrollWidth;
}

function scrollUnlock() {
  let scrollWidth = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
  document.querySelector("body").style.paddingRight = "0px";
  document.querySelector(".header").style.paddingRight = "0px";
}

let headerLogo = document.querySelector(".header__logo");

let rightBorder = headerLogo.getBoundingClientRect();
let leftBorder = headerLogo.getBoundingClientRect().left;

console.log(rightBorder);
// document.querySelector(".side-menu").style.width = rightBorder + leftBorder + "px";
