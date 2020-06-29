const switchSlider = document.querySelector('.slider');
const h1 = document.querySelector('h1.font');
const p = document.querySelector('p.font');
let switchCounter = 0;

switchSlider.addEventListener('click', function() {
  switchCounter ++;

  if (switchCounter % 2 !== 0) {
    h1.style.color = '#f5f5f5';
    p.style.color = '#f5f5f5';
    generateColourButton.style.backgroundColor = "#f5f5f5";
    generateColourButton.style.color = "#181818";
  } else {
    h1.style.color = '#181818';
    p.style.color = '#181818';
    generateColourButton.style.backgroundColor = "#181818";
    generateColourButton.style.color = "#f5f5f5";
  }

});
