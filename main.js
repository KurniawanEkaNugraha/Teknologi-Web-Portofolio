window.addEventListener("scroll", function() {
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("bg-slate-800", window.scrollY > 0)
})

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const navbarLinks = document.querySelectorAll(".nav a");
  
    function closeNavbar() {
      navbar.classList.remove("active");
      hamburger.checked = false;
    }
  
    hamburger.addEventListener("click", function () {
      if (hamburger.checked) {
        navbar.classList.add("active");
      } else {
        navbar.classList.remove("active");
      }
    });
  
    navbarLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        closeNavbar();
      });
    });
  
    window.addEventListener("click", function (event) {
      if (!navbar.contains(event.target) && event.target !== hamburger) {
        closeNavbar();
      }
    });
  });
