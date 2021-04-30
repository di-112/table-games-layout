$('.slider').slick({
  arrows: true,
  infinite: true,
  dots: false,
  adaptiveHeight: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  centerMode: true,
  asNavFor: '.slider-big',
  draggable: true,
  responsive: [
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
})

$('.slider-big').slick({
  infinite: true,
  arrows: false,
  fade: true,
  adaptiveHeight: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  asNavFor: '.slider',
  draggable: false,
  responsive: [
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        arrows: true,
      },
    },
  ],
})
