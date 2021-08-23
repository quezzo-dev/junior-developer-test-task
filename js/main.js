$(function () {
  $(".reviews__list").slick({
    infinite: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1319,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  function scrollTo(el) {
    window.scroll({
      left: 0,
      top: el.offsetTop,
      behavior: "smooth",
    });
  }

  let scrollButton = document.querySelector(".header__button");
  let footerForm = document.querySelector("#footerForm");

  scrollButton.addEventListener("click", () => {
    scrollTo(footerForm);
  });
});
