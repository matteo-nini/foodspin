const dishes = document.querySelectorAll(".spinner__dish");

//define the center for the elements on the spinner
const center = {
  x: parseFloat(getComputedStyle(dishes[0]).left), //take the distance from the left
  y: parseFloat(getComputedStyle(dishes[0]).top), ////take the distance from the top
};

// define the variables needed for positioning
let newAngle = 0.0;
let newX = 0.0;
let newY = 0.0;

dishes.forEach((dish, i) => {
  const angle = Math.PI / 4.0; //angle of 45 deg on the wheel
  const spinRadius = 280.0; //distance from the center

  newAngle = angle * i;
  newX = Math.cos(newAngle) * spinRadius;
  newY = -1.0 * Math.sin(newAngle) * spinRadius;

  dish.style.left = `${center.x + newX}px`;
  dish.style.top = `${center.y + newY}px`;

  //add the elements relative background
  addDishesBackground(dish, i);
});

function addDishesBackground(dish, i) {
  const images = [
    "url('assets/images/webp/dish_1.webp')",
    "url('assets/images/webp/dish_2.webp')",
    "url('assets/images/webp/dish_3.webp')",
  ];
  switch (i) {
    case 0:
    case 3:
    case 6:
      dish.style.backgroundImage = images[1];
      break;
    case 1:
    case 4:
    case 7:
      dish.style.backgroundImage = images[2];
      break;
    case 2:
    case 5:
    case 8:
      dish.style.backgroundImage = images[0];
      break;
  }
}
