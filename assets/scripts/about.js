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

// Scroll Up
var scrollUp = document.getElementById("scrollUp");
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
  if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
    scrollUp.style.display = "block";
  }else{
    scrollUp.style.display = "none";
  }
}
