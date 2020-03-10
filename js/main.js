var $toggle = document.querySelector(".toggle"),
    $nav = document.querySelector(".menu");


$toggle.addEventListener("click",function(){
    $toggle.classList.toggle("-active");
    $nav.classList.toggle("-hidden");
})
