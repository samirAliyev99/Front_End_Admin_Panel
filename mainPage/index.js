// var counter = 1;
// setInterval(function() {
//     document.getElementById('radio' + counter).checked = true;
//     counter++;
//     if(counter > 4) {
//         counter = 1;
//     }
// }, 3000);

//Responsive Navbar
const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }
  
// $('.menu').click(function () {
//     $('.links').toggleClass("responsive");
//     return false;
// });


//Login form
$('.dropdown-list-item').on('click', function() {
    $('.dropdown-select span').text($(this).attr('data-course'));
});