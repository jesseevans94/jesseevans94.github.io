


// variables
let donutClickers = 0 
let price = 100
let clicks = 0
// autoclicker v
let amount = 0


// calling function
donutClicker();

// section 1 donutclicker
function donutClicker () {
    // "span id"
    tracker.innerHTML = clicks  
    autoTracker.innerHTML = donutClickers
    cost.innerHTML = price
    // disables button v
    removeDisable(clicks >= price, autoClicker);

}
// raise clicks (regular donuts)
function donutButtons () {
clicks = clicks + 1 
donutClicker();
}

donuts.addEventListener("click", donutButtons)


// section 2 AutoClicker
function increaseClicks() {
    if (donutClickers >= 0){donutClickers = donutClickers + 1
    setInterval(function() {
        donuts.click()
    },1000);} else {
        end
    }
    donutClicker();
}


// one button will control all below
autoClicker.addEventListener("click",() => {

    increaseClicks();
    subtractAmount();
    updatePrice();
    autoClickerCost();
    donutClicker();
})

function autoClickerCost() {
    price = Math.round(price + (price * 0.1))
}

function subtractAmount() {
    if(clicks >= price) {
        clicks = clicks - price 
     amount++
    //  ^autoclicker price goin up by 1
        autoClickerCost()
    }
}

function updatePrice (price, donutClickers) {
    const upgradeAmount = document.querySelector('autoTracker')
    const updateAutoPrice = document.querySelector('cost')
    updateAutoPrice.innerHTML = price
    upgradeAmount.innerHTML = donutClickers
     donutClickers++
    
}


// Disable button
function removeDisable(allowed,btn){
    if(allowed){
        btn.removeAttribute("disabled", btn)
    }
    else {
        btn.setAttribute("disabled", btn)
    }
}



function reset() {

location.reload()

}

restart.addEventListener("click", reset)



let menu = document.querySelectorAll(".aboutButton, .inspireButton, .contactButton")
let i 

for (i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function() { 
        let infoContent = this.nextElementSibling;
         if (infoContent.style.display === "block") { 
            infoContent.style.display = "none";
        } else { 
        infoContent.style.display = "block";
    }});
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}