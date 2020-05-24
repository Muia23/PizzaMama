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

//Margherita total
var margheritaSum = 0;
summargherita();

function summargherita(){
const addmargherita = document.getElementsByClassName('margheritachoice');
const margheritachoice  = document.getElementById('margheritaTotal');
 for (var i=0; i < addmargherita.length; i++) {
    addmargherita[i].onchange = function() {
        var add = this.value * (this.checked ? 1 : -1);
    return margheritaSum = margheritachoice.innerHTML = parseFloat(margheritachoice.innerHTML) + add;
    }
  }
}

//Hawaiian total
var hawaiianSum = 0;
sumhawaiian();

function sumhawaiian(){
const addhawaiian = document.getElementsByClassName('hawaiianchoice');
const hawaiianchoice  = document.getElementById('hawaiianTotal');
 for (var i=0; i < addhawaiian.length; i++) {
    addhawaiian[i].onchange = function() {
        var add = this.value * (this.checked ? 1 : -1);
    return hawaiianSum = hawaiianchoice.innerHTML = parseFloat(hawaiianchoice.innerHTML) + add;
    }
  }
}

//Mexican total
var mexicanSum = 0;
summexican();

function summexican(){
const addmexican = document.getElementsByClassName('mexicanchoice');
const mexicanchoice  = document.getElementById('mexicanTotal');
 for (var i=0; i < addmexican.length; i++) {
    addmexican[i].onchange = function() {
        var add = this.value * (this.checked ? 1 : -1);
    return mexicanSum = mexicanchoice.innerHTML = parseFloat(mexicanchoice.innerHTML) + add;
    }
  }
}

//Crust Supreme total
var mexicanSum = 0;
sumsupreme();

function sumsupreme(){
const addsupreme = document.getElementsByClassName('supremechoice');
const supremechoice  = document.getElementById('supremeTotal');
 for (var i=0; i < addsupreme.length; i++) {
    addsupreme[i].onchange = function() {
        var add = this.value * (this.checked ? 1 : -1);
    return supremeSum = supremechoice.innerHTML = parseFloat(supremechoice.innerHTML) + add;
    }
  }
}

//Meat Deluxe total
var deluxeSum = 0;
sumdeluxe();

function sumdeluxe(){
const adddeluxe = document.getElementsByClassName('deluxechoice');
const deluxechoice  = document.getElementById('deluxeTotal');
 for (var i=0; i < adddeluxe.length; i++) {
    adddeluxe[i].onchange = function() {
        var add = this.value * (this.checked ? 1 : -1);
    return deluxeSum = deluxechoice.innerHTML = parseFloat(deluxechoice.innerHTML) + add;
    }
  }
}

//Pepperoni total
var pepperoniSum = 0;
sumpepperoni();

function sumpepperoni(){
const addpepperoni = document.getElementsByClassName('pepperonichoice');
const pepperonichoice  = document.getElementById('pepperoniTotal');
 for (var i=0; i < addpepperoni.length; i++) {
    addpepperoni[i].onchange = function() {
        var add = this.value * (this.checked ? 1 : -1);
    return pepperoniSum = pepperonichoice.innerHTML = parseFloat(pepperonichoice.innerHTML) + add;
    }
  }
}
