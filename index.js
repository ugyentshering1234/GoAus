// Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

ScrollReveal({ 
  reset: true,
  distance: '60px',
  duration: 2000,
});

ScrollReveal().reveal('#line1,#img2', { delay: 200, origin: 'right'});
ScrollReveal().reveal('#line2,#img1', { delay: 200, origin: 'left'});


