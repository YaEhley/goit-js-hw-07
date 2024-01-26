function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userNumber = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = Number(userNumber.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount)
  }
});

function createBoxes(amount) {
  boxesDiv.innerHTML = "";

  let initialBoxSize = 30;
  let boxSizeIncrement = 10;
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add("box");
    box.style.width = `${initialBoxSize}px`;
    box.style.height = `${initialBoxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);

    initialBoxSize += boxSizeIncrement;
  }
}

destroyBtn.addEventListener("click", onDestroyBtnClick);

function onDestroyBtnClick() {
  boxesDiv.innerHTML = "";
}