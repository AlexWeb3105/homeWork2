//!!===============моя версия======================
//export const sizesFlipback = () => {
//  const sizesList = document.querySelector('[data-sizes="sizes-row_list"]');
//  const sizesButtons = document.querySelectorAll('[data-sizes="button"]');

//  const handleSizeClick = (event) => {
//    const target = event.target;

//    if (!target?.classList.contains("size-badge")) return;

//    sizesButtons.forEach((button) =>
//      button.classList.remove("size-badge--active")
//    );
//    target.classList.add("size-badge--active");
//  };

//  sizesList.addEventListener("click", handleSizeClick);
//};
//=============================================================

//====================================ИИ===============================
export const sizesFlipback = () => {
  // Получаем все списки размеров
  const sizesLists = document.querySelectorAll('[data-sizes="sizes-row_list"]');
  // Получаем все кнопки размеров
  const sizesButtons = document.querySelectorAll('[data-sizes="button"]');

  // Функция обработки клика
  const handleSizeClick = (event) => {
    const target = event.target;

    if (!target?.classList.contains("size-badge")) return;

    // Снимаем активный класс со всех кнопок
    sizesButtons.forEach((button) => 
      button.classList.remove("size-badge--active")
    );
    
    // Добавляем активный класс на нажатую кнопку
    target.classList.add("size-badge--active");
  };

  // Добавляем обработчик на каждый список размеров
  sizesLists.forEach(list => {
    list.addEventListener("click", handleSizeClick);
  });
};
//================================================================