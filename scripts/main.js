
document.write("helloworldhelloworldhelloworldhelloworldhelloworld")

const myHeading = document.querySelector('h1');
myHeading.textContent= 'Hello world!';

var iceCream = 'chocolate';
if (iceCream === 'chocolate'){
    alert('Yay, I love chocolate icecream');
} else {
    alert('Awwww, but choclate is my favourite...');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images\firefox-icon.png') {
      myImage.setAttribute('src','images\tree.png');
    } else {
      myImage.setAttribute('src','images\firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
    if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
myButton.onclick = function() {
setUserName();
  }