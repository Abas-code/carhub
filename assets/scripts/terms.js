var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 10000); 
}

// // This Keyword
// var person = {
//   firstName: `John`,
//   lastName: `Doe`,
//   [`yearOfAge`]: 1996,
//   [`maritalStatus`]: true,
//   calAge(){this.age = 2021 - this.yearOfAge;}
// };

// person.calAge();
// console.log(person.age);

// var linkText = document.createElement(`a`);
// linkText.href = `https://example.com`;
// linkText.innerHTML = `Click Me!`;

// var button = document.createElement(`button`);
// button.innerHTML = `<a href='https://example.com'>CLICK ME</a>`;
// document.body.appendChild(button);
