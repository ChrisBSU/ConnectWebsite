const hamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

hamburger.addEventListener('click', function(){
 
 if(header.classList.contains('open')){ //Close the hamburger menu
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElems.forEach(function(element){
    element.classList.remove('fade-in');
    element.classList.add('fade-out');
    });
 }else{ //Open the hamburger menu
    body.classList.add('noscroll');
     header.classList.add('open');
     fadeElems.forEach(function(element){
     element.classList.remove('fade-out');
     element.classList.add('fade-in');
 });
}
});