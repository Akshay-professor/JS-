// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click',function(e){
// console.log(e);
// console.log(e.target);
// if(e.target.id ==='grey'){
//     body.style.backgroundColor  = e.target.id;
// }
// if(e.target.id ==='white'){
//     body.style.backgroundColor  = e.target.id;
// }
// if(e.target.id ==='yellow'){
//     body.style.backgroundColor  = e.target.id;
// }
// if(e.target.id ==='blue'){
//     body.style.backgroundColor  = e.target.id;
// }
//   });
// });

// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// // Define the color toggle mapping
// const colorToggles = {
//   grey: 'white',
//   white: 'blue',
//   yellow: 'grey',
//   blue: 'yellow',
// };

// buttons.forEach(function (button) {
//   button.addEventListener('click', function (e) {
//     const clickedColor = e.target.id; // Get the ID of the clicked button
//     const toggleColor = colorToggles[clickedColor]; // Find the toggle color

//     // If a toggle color exists, change the background color
//     if (toggleColor) {
//       body.style.backgroundColor = toggleColor;
//     }
//   });
// });

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// Function to generate a random color
function getRandomColor(excludeColor) {
  let randomColor;
  do {
    randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Generate random hex color
  } while (randomColor === excludeColor); // Ensure it doesn't match the excluded color
  return randomColor;
}

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    const clickedColor = e.target.style.backgroundColor; // Get the current button's color
    const randomColor = getRandomColor(clickedColor); // Generate a random color excluding the current button's color

    // Set the body's background color to the random color
    body.style.backgroundColor = randomColor;
  });
});

