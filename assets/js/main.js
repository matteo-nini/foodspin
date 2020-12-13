const price = document.querySelector(".selected__dish__info h2");
const name = document.querySelector(".selected__dish__info h3");
const description = document.querySelector(".selected__dish__info p");
const orderNow = document.querySelector(".selected__dish__info button");

//const selectedDish = document.querySelector(".selected__dish__image");

//array index
let contentSelector = 0;

//boolean for colors control
let isOrange = true;

//define variables for spinning
let spin = 0.0;

//button right On click
const shiftRight = document.querySelector(".shift__right");
shiftRight.addEventListener("click", (event) => {
  contentSelector++;
  if (contentSelector == dishes.length) contentSelector = 0;

  spinRight();
  changeContent(contentSelector);
  animateContent();
  changeColors();
});

//button left on click
const shiftLeft = document.querySelector(".shift__left");
shiftLeft.addEventListener("click", (event) => {
  if (contentSelector != 0) contentSelector--;
  else {
    contentSelector = dishes.length - 1;
  }
  spinLeft();
  animateContent();
  changeContent(contentSelector);
  changeColors();
});

function spinRight() {
  const wheel = document.querySelector(".spinner__wheel");
  let slice = 45;
  spin += slice;
  wheel.style.transform = `translate(-50%, -50%) rotate(${spin}deg)`;
}

function spinLeft() {
  const wheel = document.querySelector(".spinner__wheel");
  let slice = 45;
  spin -= slice;
  wheel.style.transform = `translate(-50%, -50%) rotate(${spin}deg)`;
}

function changeColors() {
  const container = document.querySelector(".spinner__container");
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
  //Define arrays
  const images = [
    "assets/images/webp/dish_1.webp",
    "assets/images/webp/dish_2.webp",
    "assets/images/webp/dish_3.webp",
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

  selectedDishImg.style.right = "calc(30px + 560px / 2)";
  selectedDishImg.style.top = "calc(100px + 560px / 2)";

  switch (contentSelector) {
    case 0:
    case 3:
      price.innerHTML = prices[0];
      name.innerHTML = names[0];
      description.innerHTML = descriptions[0];
      selectedDishImg.src = images[0];
      selectedDishImg.alt = names[1];
      break;
    case 1:
    case 4:
    case 6:
      price.innerHTML = prices[1];
      name.innerHTML = names[1];
      description.innerHTML = descriptions[1];
      selectedDishImg.src = images[1];
      selectedDishImg.alt = names[1];
      break;
    case 2:
    case 5:
    case 7:
    case 8:
      price.innerHTML = prices[2];
      name.innerHTML = names[2];
      description.innerHTML = descriptions[2];
      selectedDishImg.src = images[2];
      selectedDishImg.alt = names[2];
      selectedDishImg.style.right = "calc(520px / 2)";
      selectedDishImg.style.top = "calc(30px + 560px / 2)";
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

  selectedDishImg.animate(dishAnimate, 300);
  price.animate(textAnimate, 500);
  name.animate(textAnimate, 500);
  description.animate(textAnimate, 500);
  orderNow.animate(textAnimate, 500);
}
