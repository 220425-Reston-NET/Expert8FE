//this is the function to change the width on the mobile menu//
function changeStyleWidth(id, percent){
	document.getElementById(id).style.width = `${percent}%`;
}
//end of the funciton to change the width on the mobile menu//

// this is the reveal function//
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible =0;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
//this is the end of the reveal function//
// this is the reveal function//
function reveal2() {
    var reveals = document.querySelectorAll(".reveal2");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible =0;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active2");
      } else {
        reveals[i].classList.remove("active2");
      }
    }
  }
  window.addEventListener("scroll", reveal2);
//this is the end of the reveal function//
// this is the reveal function//
function reveal3() {
    var reveals = document.querySelectorAll(".reveal3");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible =0;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active3");
      } else {
        reveals[i].classList.remove("active3");
      }
    }
  }
  window.addEventListener("scroll", reveal3);
//this is the end of the reveal function//
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var myTopButton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myTopButton.style.display = "block";
  } else {
    myTopButton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// end of function for top button