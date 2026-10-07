document.addEventListener("DOMContentLoaded", function () {
  let menuBtn = document.querySelector(".menu-btn");
  let mobileMenu = document.querySelector(".mobile-menu");
  let navLinks = document.querySelectorAll('a[href^="#"]');

  // Mobile menu toggle
  menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  // Close mobile menu after clicking a link
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      let targetId = this.getAttribute("href");

      if (targetId !== "#" && document.querySelector(targetId)) {
        e.preventDefault();

        let target = document.querySelector(targetId);

        window.scrollTo({
          top: target.offsetTop - 50,
          behavior: "smooth",
        });

        mobileMenu.classList.add("hidden");
      }
    });
  });
  let swiper = new Swiper('.mySwiper', {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
});
