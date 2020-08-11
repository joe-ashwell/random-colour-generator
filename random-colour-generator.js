const generateColourButton = document.querySelector('button.randomColourGenerator');
const goBack = document.querySelector('button.goBack');
const hexValues = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const body = document.querySelector('body.randomColourGenerator');
let memory = [];

let generateRandomFunction = () => {

  let hexCodeValue;
  let hexCode = [];

  // Loops through the hexValues array and adds 6 random value into hexCode
  for (let i = 0; i < 6; i++) {
    hexCodeValue = Math.floor(Math.random() * hexValues.length);
    hexCode.push(hexValues[hexCodeValue]);
  }

  // This is then joined into a string
  hexString = hexCode.join('');

  // Then added to hexColour with added # value
  let hexColour = "#" + hexString;

  // Adds to memory
  memory.push(hexColour);

  // Sets background colour
  body.style.backgroundColor = hexColour;

  // Display value
  let p = document.querySelector('p.randomColourGenerator');
  p.innerHTML = hexColour;

}

let disabledTrueFalse = () => {

  if ( memory.length <= 1 ) {
    goBack.disabled = true;
    goBack.classList.add("disabled");
  }  else {
    goBack.disabled = false;
    goBack.classList.remove("disabled");
  }

}

generateColourButton.addEventListener('click', () => {
  
  generateRandomFunction();

  disabledTrueFalse();

});


// Calls the getWord function on load
window.addEventListener('load', () => {

  disabledTrueFalse();

});

goBack.addEventListener('click', () => {

  disabledTrueFalse();

  let lastItem = memory.pop();

  body.style.backgroundColor = lastItem;
  p.innerHTML = lastItem;

    

});