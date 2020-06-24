let generateColourButton = document.getElementById('generateRandom');

// Why doesnt this work outside of the click event?
// let hexValues = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const body = document.getElementById('bodyColor');
// let hexCodeValue;
// let hexCode = [];
// let hexString; --> why does this cause a syntax error?

generateColourButton.addEventListener('click', function() {
  

  let hexValues = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const body = document.getElementById('bodyColor');
  let hexCodeValue;
  let hexCode = [];

  for (let i = 0; i < 6; i++) {
    hexCodeValue = Math.floor(Math.random() * hexValues.length);
    hexCode.push(hexValues[hexCodeValue]);
  }

  hexString = hexCode.join('');
  body.style.backgroundColor = "#" + hexString;

  let p = document.getElementsByTagName('p')[0];
  p.innerHTML = "#" + hexString;
});





