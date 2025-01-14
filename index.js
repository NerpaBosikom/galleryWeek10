function showMessage(message) {
  return "Я учу JavaScript!";
}
console.log(showMessage());

const galleryImage = document.getElementById("gallery-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

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
nextButton.onclick = () => updateImage("next");
