// Cart
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('buy-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Your order has been received.')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}
function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            return
    }
}
var cartRowContents = `
        <div class="cart-item cart-column">
          <img class="cart-item-image" src= ${imageSrc} width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('KES', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = 'KES ' + total
}

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

//Delivery SERVICE
$(document).ready(function(){
      $('#delivery').click(function(){
          if($(this).prop("checked")){
              alert("Delivery service will be an additional cost of KES 100");
              const location = prompt("Enter your current location");
              alert("Your order will be delivered to your location in 20 Minutes. Enjoy ☺️");
              const title="Delivery to "+location;
              const price="100";
              const imageSrc="images/delivery.png";
              addItemToCart(title, price, imageSrc)
              updateCartTotal();
          } else {
            alert("You are opting out of our Delivery Service. Remember to remove manually from the cart");
          }
      });
});
