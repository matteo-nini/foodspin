//Take elements
const container = document.querySelector(".spinner__container");
const wheel = document.querySelector(".spinner__wheel");
const dishes = document.querySelectorAll(".spinner__dish");

const selectedDish = document.querySelector(".selected__dish");

const shiftLeft = document.querySelector(".shift__left");
const shiftRight = document.querySelector(".shift__right");

const price = document.querySelector("h2");
const name = document.querySelector("h3");
const description = document.querySelector("p");
const orderNow = document.querySelector(".selected__info button");

//Define arrays
const images = [
  "url('assets/images/webp/dish_1.webp')",
  "url('assets/images/webp/dish_2.webp')",
  "url('assets/images/webp/dish_3.webp')",
];

const prices = [];
const names = [];
const descriptions = [];

//arrays index
let imageSelector = 0; //image selector

//boolean for colors control
let isOrange = true;

//define the center for the elements on the spinner
const center = {
  x: parseFloat(getComputedStyle(dishes[0]).left), //take the distance from the left
  y: parseFloat(getComputedStyle(dishes[0]).top), ////take the distance from the top
};

// define the variables needed for positioning
let newAngle = 0.0;
let newX = 0.0;
let newY = 0.0;

//define variables for spinning
let spin = 0.0;

//positioning the elements on the spinner
dishes.forEach((dish, i) => {
  const angle = Math.PI / 4.0; //angle of 45 deg on the wheel
  const spinRadius = 280.0; //distance from the center

  newAngle = angle * i;
  newX = Math.cos(newAngle) * spinRadius;
  newY = -1.0 * Math.sin(newAngle) * spinRadius;

  dish.style.left = `${center.x + newX}px`;
  dish.style.top = `${center.y + newY}px`;

  //add the elements relative bg
  imageSelector++;
  if (imageSelector > images.length - 1) imageSelector = 0;
  dish.style.backgroundImage = images[imageSelector];
});

//button right On click
shiftRight.addEventListener("click", (event) => {
  changeColors();
  rightSliding();
  changeImage();
});

//button left on click
shiftLeft.addEventListener("click", (event) => {
  leftSliding();
  changeColors();
});

function rightSliding() {
  const slice = 360 / 8;
  spin += slice;
  wheel.style.transform = `translate(-50%, -50%) rotate(${spin}deg)`;
}

function leftSliding() {
  const slice = 360 / 8;
  spin -= slice;
  wheel.style.transform = `translate(-50%, -50%) rotate(${spin}deg)`;
}

function changeColors() {
  if (isOrange == true) {
    container.classList.add("bg--green");
    shiftRight.classList.add("btn--green");
    shiftLeft.classList.add("btn--green");
    price.style.color = "#54bf29";
    orderNow.classList.add("btn--green");
    isOrange = false;
  } else {
    container.classList.remove("bg--green");
    shiftRight.classList.remove("btn--green");
    shiftLeft.classList.remove("btn--green");
    price.style.color = "#ff922c";
    orderNow.classList.remove("btn--green");
    isOrange = true;
  }
}
