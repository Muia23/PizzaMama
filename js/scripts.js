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
  setTimeout(showSlides, 10000); 
}

//Periperi total
var periperiSum = 0
window.onload=function sumtopping(){
const addchoice = document.getElementsByClassName('periperichoice ');
const periperichoice  = document.getElementById('periperiTotal');
 for (var i=0; i < addchoice.length; i++) {
    addchoice[i].onchange = function() {
        var add = this.value * (this.checked ? 1 : -1);
    return periperiSum = periperichoice.innerHTML = parseFloat(periperichoice.innerHTML) + add;
    }
  }
}
