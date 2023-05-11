// Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

  // get references to the search input, button, form, and results elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchForm = document.getElementById('search-form');
const searchResults = document.getElementById('search-results');

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

// add a click event listener to the search button
searchBtn.addEventListener('click', () => {
  // get the search term entered by the user
  const searchTerm = searchInput.value;

  // perform the search by calling the built-in search method of the window object
  const searchResult = window.find(searchTerm);

  // display a message if no matching words are found
  if (!searchResult) {
    searchResults.textContent = 'No results found';
  } else {
    searchResults.textContent = '';
  }
});

// add a submit event listener to the form element
searchForm.addEventListener('submit', (event) => {
  // prevent the default form submission behavior
  event.preventDefault();

  // get the search term entered by the user
  const searchTerm = searchInput.value;

  // perform the search by calling the built-in search method of the window object
  const searchResult = window.find(searchTerm);

  // display a message if no matching words are found
  if (!searchResult) {
    searchResults.textContent = 'No results found';
  } else {
    searchResults.textContent = '';
  }
});