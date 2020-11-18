const container = document.querySelector(".spinner__container");
const dishes = document.querySelectorAll(".spinner__dish");
const wheel = document.querySelector(".spinner__wheel");
const activeDish = document.querySelector(".dish");

let i = 0;
const colors = ["#ffeedc", "#EAFFE2"];

const center = {
  x: parseFloat(getComputedStyle(dishes[0]).left), //take the distance from the left
  y: parseFloat(getComputedStyle(dishes[0]).top), ////take the distance from the top
};

let angle = Math.PI / 4.0; //45 deg
let newAngle = 0.0;
let newX = 0.0;
let newY = 0.0;
let spinRadius = 280.0; //radius distance from the center
let shift = 0.0;

dishes.forEach((dish, i) => {
  newAngle = angle * i;
  newX = Math.cos(newAngle) * spinRadius;
  newY = -1.0 * Math.sin(newAngle) * spinRadius;

  dish.style.left = `${center.x + newX}px`;
  dish.style.top = `${center.y + newY}px`;
});

let shiftLeft = document.querySelector(".shift__left");
let shiftRight = document.querySelector(".shift__right");

shiftRight.addEventListener("click", (event) => {
  let initShift = 360 / 8;
  shift += initShift;
  wheel.style.transform = `translate(-50%, -50%) rotate(${shift}deg)`;
  changeBgColor();
});

shiftLeft.addEventListener("click", (event) => {
  let initShift = 360 / 8;
  shift -= initShift;
  wheel.style.transform = `translate(-50%, -50%) rotate(${shift}deg)`;
  changeBgColor();
});

function changeBgColor() {
  if (container.style.background == "#EAFFE2")
    container.style.background = "#ffeede";
  else container.style.background = "#EAFFE2";
  if (container.style.background == "#ffeede")
    container.style.background = "#EAFFE2";
  else container.style.background = "#ffeede";
}
