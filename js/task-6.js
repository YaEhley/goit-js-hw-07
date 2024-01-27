function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amountInput = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = Number(amountInput.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount)
  }
});

function createBoxes(amount) {
  boxesDiv.innerHTML = "";  

  const initialBoxSize = 30;
  const boxSizeIncrement = 10;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add("box");
    box.style.width = `${initialBoxSize + i * boxSizeIncrement}px`;
    box.style.height = `${initialBoxSize + i * boxSizeIncrement}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);
  }
  amountInput.value = ''; 
}

destroyBtn.addEventListener("click", onDestroyBtnClick);

function onDestroyBtnClick() {
  boxesDiv.innerHTML = "";
}