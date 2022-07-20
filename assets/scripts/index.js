// Header
// Show dropdown content
function myFunction(){
  document.getElementById("myDropdown").classList.toggle("show");
}

// Hide dropdown content
window.onclick = function(e){
  if (!e.target.matches('.dropbtn')){
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')){
      myDropdown.classList.remove('show');
    }
  }
}

// textSlide
var textSlideIndex = 0; textSlide();
function textSlide(){
  var i; var x = document.getElementsByClassName("textSlide");
  for(i = 0; i < x.length; i++){x[i].style.display = "none";}
  textSlideIndex++;
  if(textSlideIndex > x.length){textSlideIndex = 1} 
  x[textSlideIndex-1].style.display = "block"; 
  setTimeout(textSlide, 7500);
}

// Scroll Up
var scrollUp = document.getElementById("scrollUp");
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
  if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollUp.style.display = "block";
  }else{
    scrollUp.style.display = "none";
  }
}

// Scroll Focus
// window.onscroll = function() {myFunction()};
// function myFunction() {
//   if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
//     document.queryselector(".carHub").className = "navbar";
//   } else if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 400){
//     document.queryselector(".carHub").className = "";
//     document.queryselector(".about").className = "navbar";
//   } else if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 800){
//     document.queryselector(".about").className = "";
//     document.queryselector(".shop").className = "navbar";
//   } else if(document.body.scrollTop > 700 || document.documentElement.scrollTop > 850){
//     document.queryselector(".shop").className = "";
//     document.queryselector(".blog").className = "navbar";
//   } else if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 850){
//     document.queryselector(".blog").className = "";
//     document.queryselector(".contactUs").className = "navbar";
//   } else {
//     document.queryselector(".contactUs").className = "";
//   }
// }

// Shop Section
// carSlide
var carSlideIndex = 0; carSlide();
function carSlide(){
  var i; var x = document.getElementsByClassName("carSlide");
  for(i = 0; i < x.length; i++){x[i].style.display = "none";}
  carSlideIndex++;
  if(carSlideIndex > x.length){carSlideIndex = 1} 
  x[carSlideIndex-1].style.display = "flex"; 
  setTimeout(carSlide, 5000);
}

// Car Modals
// 1
var btnI = document.getElementById("carSlideBtnI");
var modalI = document.getElementById("carI");
var spanI = document.getElementsByClassName("modalSvgI")[0];
btnI.onclick = function(){modalI.style.display = "block";}
spanI.onclick = function(){modalI.style.display = "none";}

// 2
var btnII = document.getElementById("carSlideBtnII");
var modalII = document.getElementById("carII");
var spanII = document.getElementsByClassName("modalSvgII")[0];
btnII.onclick = function(){modalII.style.display = "block";}
spanII.onclick = function(){modalII.style.display = "none";}

// 3
var btnIII = document.getElementById("carSlideBtnIII");
var modalIII = document.getElementById("carIII");
var spanIII = document.getElementsByClassName("modalSvgIII")[0];
btnIII.onclick = function(){modalIII.style.display = "block";}
spanIII.onclick = function(){modalIII.style.display = "none";}

// modalImgs
// 1
var modalImgIndexI = 0; modalImgI();
function modalImgI(){
  var i; var x = document.getElementsByClassName("modalImgI");
  for(i = 0; i < x.length; i++){x[i].style.display = "none";}
  modalImgIndexI++;
  if(modalImgIndexI > x.length){modalImgIndexI = 1} 
  x[modalImgIndexI-1].style.display = "flex"; 
  setTimeout(modalImgI, 3000);
}

// 2
var modalImgIndexII = 0; modalImgII();
function modalImgII(){
  var i; var x = document.getElementsByClassName("modalImgII");
  for(i = 0; i < x.length; i++){x[i].style.display = "none";}
  modalImgIndexII++;
  if(modalImgIndexII > x.length){modalImgIndexII = 1} 
  x[modalImgIndexII-1].style.display = "flex"; 
  setTimeout(modalImgII, 3000);
}

// 3
var modalImgIndexIII = 0; modalImgIII();
function modalImgIII(){
  var i; var x = document.getElementsByClassName("modalImgIII");
  for(i = 0; i < x.length; i++){x[i].style.display = "none";}
  modalImgIndexIII++;
  if(modalImgIndexIII > x.length){modalImgIndexIII = 1} 
  x[modalImgIndexIII-1].style.display = "flex"; 
  setTimeout(modalImgIII, 3000);
}

// Blog Section
// blogSlide
var blogSlideIndex = 0; blogSlide();
function blogSlide(){
  var i; var x = document.getElementsByClassName("mySlides3");
  for(i = 0; i < x.length; i++){x[i].style.display = "none";}
  blogSlideIndex++;
  if(blogSlideIndex > x.length){blogSlideIndex = 1} 
  x[blogSlideIndex-1].style.display = "flex";
  setTimeout(blogSlide, 7500);
}
