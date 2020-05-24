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
  setTimeout(showSlides, 2000);
}

//Periperi total
var periperiSum = 0;
sumperiperi();

function sumperiperi(){
const addperiperi = document.getElementsByClassName('periperichoice ');
const periperichoice  = document.getElementById('periperiTotal');
 for (var i=0; i < addperiperi.length; i++) {
    addperiperi[i].onchange = function() {
        var add = this.value * (this.checked ? 1 : -1);
    return periperiSum = periperichoice.innerHTML = parseFloat(periperichoice.innerHTML) + add;
    }
  }
}

//BBQ Chicken total
var bbqSum = 0;
sumbbq();

function sumbbq(){
const addbbq = document.getElementsByClassName('bbqchoice');
const bbqchoice  = document.getElementById('bbqTotal');
 for (var i=0; i < addbbq.length; i++) {
    addbbq[i].onchange = function() {
        var add = this.value * (this.checked ? 1 : -1);
    return bbqSum = bbqchoice.innerHTML = parseFloat(bbqchoice.innerHTML) + add;
    }
  }
}
