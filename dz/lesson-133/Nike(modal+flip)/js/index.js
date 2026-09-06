import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";
import { sizesFlipback } from "./sizes_flip_back.js";
import Modal from './modal.js'
import { swiper } from "./slider.js";
import { sizes } from "./sizes.js";

try {
  const headerFixed = new HeaderFixed({
    HEADER: "header",
    HEADER_FIXED: "header--fixed", //====это класс который используется в css header========//
  });

  new BurgerMenu(
    {
      BURGER: "burger", //название класса на кнопке "бургер"
      BURGER_OPEN: "burger--open", //класс открытия "бургер"
      HEADER_MENU: "header__menu",
      HEADER_MENU_OPEN: "header__menu--open",
      lABEL: {
        OPEN: "Открыть меню",
        CLOSE: "Закрыть меню",
      },
      PAGE_BODY: "page__body",
      PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
      MENU_LINK: "menu__link",
      BREAKPOINT: 820,
      MAIN: "main",
    },
    headerFixed,
  );
  new Modal({
    PAGE_BODY: "page__body",
    PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
  });
	
  sizesFlipback();
  swiper();
  sizes();
} catch (error) {
  console.error(error);
}
