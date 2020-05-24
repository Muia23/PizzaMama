//Carousel
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
var totalSum = 0
window.onload=function sumtopping(){
const addchoice = document.getElementsByClassName('choice');
const totalchoice  = document.getElementById('choiceTotal');
 for (var i=0; i < addchoice.length; i++) {
    addchoice[i].onchange = function() {
        var add = this.value * (this.checked ? 1 : -1);
    return totalSum = totalchoice.innerHTML = parseFloat(totalchoice.innerHTML) + add;
    }
  }
}
