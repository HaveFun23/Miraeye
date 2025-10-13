/* Проектор */

const prev = document.querySelector(".all_inner");
const spotlight = document.querySelector(".spotlight");
/* prev.addEventListener("mousemove", function (e) {
  x = e.clientX;
  y = e.clientY;
  console.log(x, y);
  spotlight.style.left = x - 410 + "px";
  spotlight.style.top = y - 360 + "px";
}); */

// cursor-tracker.js
/* class PreviewCursorTracker {
  constructor() {
    this.previewBlock = document.querySelector("#preview");
    this.currentCoords = { x: 0, y: 0 };
    this.isInside = false;

    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Отслеживание движения мыши в блоке preview
    this.previewBlock.addEventListener("mousemove", (e) => {
      this.updateCoords(e);
    });

    // Вход мыши в блок
    this.previewBlock.addEventListener("mouseenter", () => {
      this.isInside = true;
    });

    // Выход мыши из блока
    this.previewBlock.addEventListener("mouseleave", () => {
      this.isInside = false;
    });
  }

  updateCoords(e) {
    const blockRect = this.previewBlock.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Координаты относительно блока
    this.currentCoords = {
      x: e.clientX - blockRect.left + scrollX,
      y: e.clientY - blockRect.top + scrollY,
      absoluteX: e.clientX,
      absoluteY: e.clientY,
      percentX:
        ((e.clientX - blockRect.left + scrollX) / blockRect.width) * 100,
      percentY:
        ((e.clientY - blockRect.top + scrollY) / blockRect.height) * 100,
      blockWidth: blockRect.width,
      blockHeight: blockRect.height,
      isInside: this.isInside,
    };
  }

  // Получить текущие координаты
  getCoords() {
    return this.currentCoords;
  }

  // Получить нормализованные координаты (0-1)
  getNormalizedCoords() {
    return {
      x: this.currentCoords.x / this.currentCoords.blockWidth,
      y: this.currentCoords.y / this.currentCoords.blockHeight,
      isInside: this.isInside,
    };
  }
}

// Создаем глобальный экземпляр
let previewCursorTracker = null;

// Инициализируем когда DOM готов
document.addEventListener("DOMContentLoaded", function () {
  previewCursorTracker = new PreviewCursorTracker();
});

// Экспортируем для использования
window.getCursorCoords = function () {
  return previewCursorTracker ? previewCursorTracker.getCoords() : null;
};

window.getNormalizedCursorCoords = function () {
  return previewCursorTracker
    ? previewCursorTracker.getNormalizedCoords()
    : null;
};

let coords = getCursorCoords();
console.log(previewCursorTracker);
 */
