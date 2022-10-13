window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const animateText = () => {
    const txts = document.querySelector(".banner__animate-words").children,
      txtsLen = txts.length;
    let index = 0;
    const textInTimer = 3000,
      textOutTimer = 2800;
    function startAnimation() {
      for (let i = 0; i < txtsLen; i++) {
        txts[i].classList.remove("text-in", "text-out");
      }
      txts[index].classList.add("text-in");

      setTimeout(function () {
        txts[index].classList.add("text-out");
      }, textOutTimer);

      setTimeout(function () {
        if (index == txtsLen - 1) {
          index = 0;
        } else {
          index++;
        }
        startAnimation();
      }, textInTimer);
    }

    startAnimation();
  };
  const hideMenu = () => {
    var lastScrollTop; // This Varibale will store the top position
    const navbar = $(".header__content")[0]; // Get The NavBar
    window.addEventListener("scroll", function () {
      //on every scroll this funtion will be called

      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      //This line will get the location on scroll

      if (scrollTop > lastScrollTop && lastScrollTop > navbar.offsetHeight) {
        //if it will be greater than the previous
        navbar.style.position = "fixed";
        navbar.style.top = -navbar.offsetHeight + "px";
        //set the value to the negetive of height of navbar
      } else {
        navbar.style.top = "0";
      }

      lastScrollTop = scrollTop; //New Position Stored
    });
  };

  $(".copy").click(function () {
    navigator.clipboard
      .writeText(
        "https://api.swapgate.io/trading/ethusd?sellAmount=100000000&buyToken=DAI&sellToken=USDC"
      )
      .then(function () {
        $(".copy").html("Copied!");

        setTimeout(() => {
          $(".copy").html("Copy to clipboard");
        }, 1000);
      });
  });

  $(".tabs").on("click", ".tab:not(.active)", function () {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest("div.tabs");

    $(".slider__slide").removeClass("fade-out");

    $(".slider__slide.active").addClass("fade-out");

    $(".slider__slide")
      .removeClass("fade-in active")
      .eq($(this).index())
      .addClass("fade-in active");
  });

  animateText();
  hideMenu();
});
