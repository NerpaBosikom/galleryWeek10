// Первое задание
function showMessage(message) {
  return "Я учу JavaScript!";
}
console.log(showMessage());

// Второе задание

const galleryImage = document.getElementById("gallery-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next"); // Задаём переменные

let currentIndex = 1; // Номер текущей картинки

function updateImage(direction) {
  if (direction === "next") {
    currentIndex++; // Переход к следующей картинке
    if (currentIndex > 4) currentIndex = 1; // Если картинка последняя, переходим к первой
  } else if (direction === "prev") {
    currentIndex--; // Переход к предыдущей картинке
    if (currentIndex < 1) currentIndex = 4; // Если картинка первая, переходим к последней
  }
  galleryImage.src = `./assets/images/${currentIndex}.jpeg`; // Меняем атрибут src у картинки
}

prevButton.onclick = () => updateImage("prev");
nextButton.onclick = () => updateImage("next"); // Вызываем функцию по клику на кнопки

// Третье задание

function calculateTotalPrice(quantity = 2, price = 15000000) {
  let sum = quantity * price;
  return sum.toLocaleString("ru-RU"); // Форматирую значение в рубли
}

//alert(`Стоимость покупки: ${calculateTotalPrice(244, 200)} рублей`); // Вызываем алерт (работает и с пустыми скобками)

// Так же повесела алерт на кнопку, в итоге так и оставила его там

console.log(calculateTotalPrice());
// Проверяем

// Дополнительно в задании со звёздочкой ***
// Сделала на отдельную кнопку

const calculateButton = document.getElementById("calculate");
const outputParagraph = document.getElementById("output"); // Получаем элементы

// Добавляем обработчик события на кнопку
calculateButton.onclick = function () {
  const totalPrice = calculateTotalPrice(244, 200); // Рассчитываем стоимость
  outputParagraph.textContent = `Стоимость покупки: ${totalPrice} рублей`; // Выводим результат в <p>
};
