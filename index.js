const menu = document.querySelector(".hamburgermenu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closemenu");
const menuIcon = document.querySelector(".openmenu");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

// carousel scroll for desktop
var c = 480;
function prev() {
    c -= 480;
    if (c <= 2200) {
        document.getElementById("next").style.display = "flex";
    }
    if (c == 480) {
        document.getElementById("prev").style.display = "none";
    }
    var left = document.getElementById("g-scroll");
    left.scrollBy({
        top: 0,
        left: -480,
        behavior: 'smooth'
    });
}

function next() {
    c += 480;
    if (c >= 2200) {
        document.getElementById("next").style.display = "none";
    }
    if (c > 480) {
        document.getElementById("prev").style.display = "flex";
    }
    var right = document.getElementById("g-scroll");
    right.scrollBy({
        top: 0,
        left: 480,
        behavior: 'smooth'
    });
}

// carousel scroll for mobile view

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carouselcard");
  if (n > slides.length)
   {slideIndex = 1}  
  if (n < 1) {slideIndex = slides.length} 
  if (n==1)
  {
   document.getElementById("carosel").style.display="none";
 }  else{
  document.getElementById("carosel").style.display="block";
 } 
 if(n==6){
  document.getElementById("carosel_1").style.display="none";
 }else{
  document.getElementById("carosel_1").style.display="block";
 }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "flex";  
}


// scrolling in shipment cards

var y = 0;
function prevSearch() {
    var leftS = document.getElementById('tabsscroll');
    leftS.scrollBy({
        top: 0,
        left: -400,
        behavior: 'smooth'
    });
    document.getElementById("nextscrollbutton").style.display = "block";
    document.getElementById("prevscrollbutton").style.display = "none";
}

function nextSearch() {
    var rightS = document.getElementById("tabsscroll");
    rightS.scrollBy({
        top: 0,
        left: 400,
        behavior: 'smooth'
    });
    document.getElementById("nextscrollbutton").style.display = "none";
    document.getElementById("prevscrollbutton").style.display = "block";
}

// search in desktop

function searchshipment() {
  // var nodata=document.getElementsByClassName("nodata");
let input = document.getElementById('searchbar').value
input=input.toLowerCase();
let x = document.getElementsByClassName('card');

for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display="none";
        // nodata.style.display="block";
    }
    else {
        x[i].style.display="bottomcards";             
    }
}
}


// search in mobile view

function searchshipmentmobile() {
  let input = document.getElementById('searchmobile').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('card');
  
  for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="bottomcards";             
      }
  }
  }

