const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', function (){
    navbarLinks.classList.toggle('active');
})


function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

var modalButton = document.querySelector('.Signin');
var modalBG = document.querySelector('.Modal-bg');
var modalClose = document.querySelector('.close-button')

modalButton.addEventListener('click' , function(){
    modalBG.classList.add('bg-active');
});

modalClose.addEventListener('click', function (){
    modalBG.classList.remove('bg-active');
})
window.onclick = function(event) {
  if (event.target == modalBG) {
    modalBG.classList.remove('bg-active');
  }
}


