//these funcs open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//this func displays the first img in slideshow when pg loads
var slideIndex= 1;
showSlides(slideIndex);

//this func changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//this func changes the slides when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); //takes all elements w class "mySlides" and stores them in the variable array "slides"
    var dots = document.getElementsByClassName("dot"); //takes all elements w class "dot" and stores them in the variable array "dots"
    if (n > slides.length) {slideIndex = 1}; //If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; //If n (the number passed into the function) is less than 1, te slideIndex is set to the length of the array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //for loop takes each item in array "slides" and sets the display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //for loop takes each item in the array "dots" and removes "active" which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; //displays the img in the slideshow
    dots[slideIndex - 1].className += " active"; //adds active styling to the dot associated with the img
}

// This code will create close the contact form when the user clicks off of it
// The first step is to add an event listener for any clicks on the website
document.addEventListener("click", function(event){
    //if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element with the contact class then call the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )

