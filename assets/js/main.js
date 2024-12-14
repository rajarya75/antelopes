$(document).ready(function () {
  $(".btn-back").click(function () {
    $(".banner").toggleClass("full-banner");
  });

  $(".close-menu").click(function () {
    $(".banner").toggleClass("full-banner");
  });

  $(".humbergure").click(function () {
    $(".banner").toggleClass("full-banner");
  });
});

// Sticky header
// window.addEventListener("scroll", function () {
//   var header = document.querySelector(".desktop-header");
//   var scrollPosition = window.scrollY || window.pageYOffset;

//   if (scrollPosition > window.innerHeight) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// });
