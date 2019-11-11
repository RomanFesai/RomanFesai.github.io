$('.sl').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  responsive:[
    {
    breakpoint: 768,
    settings:{
      centerMode: true,
      centerPadding:"40px",
      slidesToShow:2,
      slidesToScroll:2
    }
  },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
        slidesToScroll:2
      }
    },
      {
        breakpoint: 1136,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
          slidesToScroll:2
        }
      },
        {
        breakpoint: 120,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
          slidesToScroll:2
        }
      }
]
});


var filtered = false;

$('.js-filter').on('click', function(){
  if (filtered === false) {
    $('.filtering').slick('slickFilter',':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.filtering').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
  }
});
