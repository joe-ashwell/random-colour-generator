const generateColourButton = document.querySelector('button.randomColourGenerator');
const hexValues = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const body = document.querySelector('body.randomColourGenerator');

generateColourButton.addEventListener('click', function() {
  
  let hexCodeValue;
  let hexCode = [];

  for (let i = 0; i < 6; i++) {
    hexCodeValue = Math.floor(Math.random() * hexValues.length);
    hexCode.push(hexValues[hexCodeValue]);
  }

  hexString = hexCode.join('');
  body.style.backgroundColor = "#" + hexString;

  let p = document.querySelector('p.randomColourGenerator');
  p.innerHTML = "#" + hexString;

});
