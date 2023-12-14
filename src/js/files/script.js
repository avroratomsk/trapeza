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

const btnBurger = document.querySelector(".header__burger");
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

let zoomBtn = document.querySelectorAll(".item-list__zoombtn");

if (zoomBtn) {
  zoomBtn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      let parent = btn.closest(".item-list");
      if (parent) {
        let image = parent.querySelector(".item-list-image").src;
        let title = parent.querySelector(".item-list__name").innerText;
        let info = parent.querySelector(".item-list__charact").innerText;
        let bjy = parent.querySelector(".item-list__bjy").innerText;
        let text = parent.querySelector(".item-list__descr").innerHTML;

        let popup = document.querySelector(".popup-fulldescr");

        popup.querySelector(".popup-image").src = image;
        popup.querySelector(".popup__title").innerText = title;
        popup.querySelector(".popup__price").innerText = info;
        popup.querySelector(".popup__bjy").innerText = bjy;
        popup.querySelector(".popup__descr").innerHTML = text;
      }
    });
  });
}

let menuBtn = document.querySelector(".menu-btn");
if (menuBtn) {
  menuBtn.addEventListener("click", function (e) {
    this.classList.toggle("menu-btn_active");
    document.querySelector(".menu").classList.toggle("menu_active");
  });
}
