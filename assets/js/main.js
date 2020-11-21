//Take needed elements
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
const prices = ["$32", "$35", "$32"];
const names = [
  "Green Goddess Chicken Salad",
  "Asian Cucumber Salad",
  "Green Goddess Chicken Salad",
];
const descriptions = [
  "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.",
  "Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!",
  "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery. ",
];

//arrays index
let imageSelector = 0; //image selector
let contentSelector = 0; //content selector

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
const slice = 360 / 8;

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

//init the contents
price.innerHTML = prices[contentSelector];
name.innerHTML = names[contentSelector];
description.innerHTML = descriptions[contentSelector];
selectedDish.style.backgroundImage = images[contentSelector];

//button right On click
shiftRight.addEventListener("click", (event) => {
  spin += slice;
  wheel.style.transform = `translate(-50%, -50%) rotate(${spin}deg)`;
  if (contentSelector >= images.length - 1) contentSelector = 0;
  else contentSelector++;
  animateContent();
  changeContent(contentSelector);
  changeColors();
});

//button left on click
shiftLeft.addEventListener("click", (event) => {
  spin -= slice;
  wheel.style.transform = `translate(-50%, -50%) rotate(${spin}deg)`;
  if (contentSelector <= 0) contentSelector = images.length - 1;
  else contentSelector--;
  animateContent();
  changeContent(contentSelector);
  changeColors();
});

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

function changeContent(contentSelector) {
  switch (contentSelector) {
    case 0:
      price.innerHTML = prices[0];
      name.innerHTML = names[0];
      description.innerHTML = descriptions[0];
      selectedDish.style.backgroundImage = images[0];
      break;
    case 1:
      price.innerHTML = prices[1];
      name.innerHTML = names[1];
      description.innerHTML = descriptions[1];
      selectedDish.style.backgroundImage = images[1];
      break;
    case 2:
      price.innerHTML = prices[2];
      name.innerHTML = names[2];
      description.innerHTML = descriptions[2];
      selectedDish.style.backgroundImage = images[2];
      break;
  }
}

function animateContent() {
  //Animation keyframes
  let dishAnimate = [
    { transform: "rotate(-45deg)" },
    { transform: "scale(0.5)" },
    { transform: "scale(1)" },
  ];

  let textAnimate = [
    { transform: "scale(1, 1)" },
    { transform: "scale(0.8, 0.8)" },
    { transform: "scale(0.5, 0.5)" },
    { transform: "scale(0.2, 0.5)" },
    { transform: "scale(0, 0)" },
    { transform: "scale(0.2, 0.5)" },
    { transform: "scale(0.5, 0.5)" },
    { transform: "scale(0.8, 0.8)" },
    { transform: "scale(1, 1)" },
  ];

  selectedDish.animate(dishAnimate, 300);
  price.animate(textAnimate, 500);
  name.animate(textAnimate, 500);
  description.animate(textAnimate, 500);
  orderNow.animate(textAnimate, 500);
}
