$(document).ready(function () {
  $(".btn-back").click(function () {
    $(".banner").toggleClass("full-banner");
    $(".right").removeClass("open");
  });

  $(".close-menu").click(function () {
    $(".banner").toggleClass("full-banner");
    $(".right").removeClass("open");
  });

  $(".humbergure").click(function () {
    $(".banner").toggleClass("full-banner");
    $(".right").addClass("open");
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
