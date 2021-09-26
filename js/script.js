/* Hides the body scrollbar when the overlay menu is opened */

// Get the body element
const body = document.body;

// Get the checkbox element
const hamburguerToggler = document.querySelector(".toggler");

// Set event listener to the hamburger toggler
// so that we can detect when the overlay is opened and hide the body scrollbar
hamburguerToggler.addEventListener("change", (e) => {
  e.target.checked
    ? (body.style.overflowY = "hidden")
    : (body.style.overflowY = "scroll");
});
