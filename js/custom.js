/* -----| script |-------*



 * 01. Mobile Menu

 * 02. croll back to top

 * 03. Header Sticky

 * 04. Home Main Slider



 

 



 */





$(document).ready(function() {  



  svgConvert('.svgIcon');



  /* Mobile menu */  

  $('.menuIcon').click(function() {

    $(this).toggleClass('menu-close');

    $('.navigationBar').toggleClass('slideMenu');

    $('body').addClass('bodyFixed');

  });



  $('.sidebar-overlay, .closeMenu').click(function() {

    $('.menuIcon').removeClass('menu-close');

    $('.navigationBar').removeClass('slideMenu');

    $('body').removeClass('bodyFixed');

  });


$('.closeSl').click(function() {
    $(".headtopSec").slideToggle('slow');
});





  $('.menuMain li:has(ul)').prepend('<span class="arrow"></span>'); 

  $('.arrow').click(function() {  

    $(this).siblings('ul').slideToggle('slow'); 

    $(this).toggleClass('minus'); 

  });


  $('.counter').countUp();


  /*~~~~~~~ 02. Window Scroll  ~~~~~~~~*/

  $('.scrollTop').click(function() {

      $('html, body').animate({scrollTop: 0}, 800);

      return false;

  });



  $('.reviewsBtn').click(function() {

    $(this).toggleClass('menu-close');

    $('.ReviewBar').toggleClass('slideMenu');

    $('body').addClass('bodyFixed');

  });



  $('.sidebar-overlay, .review-close').click(function() {

    $('.menuIcon').removeClass('menu-close');

    $('.ReviewBar').removeClass('slideMenu');

    $('body').removeClass('bodyFixed');

  });







$(window).scroll(function() {

    if ($(this).scrollTop() > 100) {

      $('.scrollTop').fadeIn();

      $('.headerMain').addClass('has_sticky');

    } else {

      $('.scrollTop').fadeOut();

      $('.headerMain').removeClass('has_sticky'); 

    }

  });

  $(window).scroll(function() {

    if ($(this).scrollTop() > 200) {      

      $('.FilterSec').addClass('fil_sticky');

    } else {
      

      $('.FilterSec').removeClass('fil_sticky'); 

    }

  }); 



  $('.homeSlider').slick({

    infinite: true,

    slidesToShow: 1,

    slidesToScroll: 1,

    dots: false,

    arrows: true,

    appendArrows: '.homeslideArrow',

    prevArrow: '<button type="button" class="slick-prev"><i class="icon-left-arrow"></i> Prev</button>',

    nextArrow: '<button type="button" class="slick-next">Next <i class="icon-right-arrow"></i></button>',

    autoplay: true,

    autoplaySpeed: 6000,

    speed: 600,

    fade: true,

    responsive: [    
    {
      breakpoint:767,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }    
  ]

  });


  $('.collection_slider').slick({
        // infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    appendArrows: '.collectArrow',
    prevArrow: '<button type="button" class="slick-prev"><i class="icon-left-arrow"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="icon-right-arrow"></i></button>',
    responsive: [
    {
      breakpoint: 1100, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1024, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        // infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }    
  ]
  });

  $('.related_slider').slick({
        // infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    appendArrows: '.collectArrow',
    prevArrow: '<button type="button" class="slick-prev"><i class="icon-left-arrow"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="icon-right-arrow"></i></button>',
    responsive: [
    {
      breakpoint: 1100, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1024, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }    
  ]
  });


  $(".viewmorebtn").click(function(){
    $(this).siblings(".workDetails").toggleClass(".workDetailsShow");
      $(this).toggleClass("active");

    if($(this).hasClass('active')){
          $(this).text("View Less Size");
        }else{
          $(this).text("View more Size");
        }
});


  $('.productSlider').slick({
        // infinite: true,    
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    //appendArrows: '.productArrow',
    //prevArrow: '<button type="button" class="slick-prev"><i class="icon-left-arrow"></i></button>',
    //nextArrow: '<button type="button" class="slick-next"><i class="icon-right-arrow"></i></button>',
    responsive: [
    {
      breakpoint: 1100, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1024, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        // infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }    
  ]
  });


  $('.galleryMain').slick({
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
    dots: false,
    autoplay: false,
    asNavFor: '.galleryThumb',
    fade: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 767,
            settings: {              
              dots:true,
              arrows: true,
            }
        }
    ]

});


$('.galleryThumb').slick({
    slidesToShow:5,
    infinite: true,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: false,
   // autoplaySpeed: 5000,
    asNavFor: '.galleryMain',
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
             slidesToShow:4              
            }
        },
        {
            breakpoint: 991,
            settings: {
             slidesToShow:5
            }
        },
        {
            breakpoint: 767,
            settings: {
             slidesToShow:6,
              vertical: false,
              verticalSwiping: false,
              dots:false,
              arrows: false,
            }
        },
        {
            breakpoint: 666,
            settings: {
             slidesToShow:5,
              vertical: false,
              verticalSwiping: false,
              dots:false,
              arrows: false,
            }
        },
    {
      breakpoint: 479, 
      settings: {
        slidesToShow:4,
        vertical: false,
        verticalSwiping: false,
        dots:false,
        arrows: false,
      }
    },
    {
      breakpoint: 350, 
      settings: {
        slidesToShow:3,
        vertical: false,
        verticalSwiping: false,
        dots:false,
        arrows: false,
      }
    }
    ]
});

// $('.top-bar').scrollFix({
//     side: 'top'
// });

  $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
  $('.productSlider').slick('setPosition');
});

  jQuery(".footBox h3").click(function(e){
    if(jQuery(window).width() <= 767){
      jQuery(this).toggleClass("open");
      jQuery(this).next().addClass("toggler").slideToggle();
    }

  });


  jQuery(".stepbox .stepTitle").click(function(e){
    if(jQuery(window).width() <= 767){
      jQuery(this).toggleClass("open");
      jQuery(this).next().addClass("toggler").slideToggle();
    }

  });


  jQuery(".sidebar-account .AccountTitle").click(function(e){
    if(jQuery(window).width() <= 767){
      jQuery(this).toggleClass("open");
      jQuery(this).next().addClass("toggler").slideToggle();
    }

  });


$('.testimonial_slider').slick({
        // infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    appendArrows: '.tastimonailArrow',
    prevArrow: '<button type="button" class="slick-prev"><i class="icon-left-arrow"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="icon-right-arrow"></i></button>',
    responsive: [
    {
      breakpoint: 1100, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1024, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        // infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        adaptiveHeight: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        adaptiveHeight: true
      }
    }    
  ]
  });


//$('.write_review').click(function() {
  //$('.write_box').slideToggle('slow');
  //$('.write_box').toggleClass('slideSearch');
  //$(this).addClass('tt');
//});


// $('.closesearch').click(function() {
//   $('.search_box').removeClass('slideSearch');
//   $('.search_box').slideToggle('slow');
//   $('.searchIcon').removeClass('tt');
// });


$('.apply_discount').click(function() {
  $(this).toggleClass('active');
  $('.applybox').slideToggle('slow');
  $('.applybox').toggleClass('slideSearch');  
});


  $(document).ready(function() {
  var $slider = $('.corevalues_slider');
  var $progressBar = $('.progress');
  var $progressBarLabel = $( '.slider__label' );
  
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    
    $progressBarLabel.text( calc + '% completed' );
  });
  
  $slider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 400
  });  
});



  $('.corevalues_slider').slick({

  infinite: true,

  swipe: true,

  swipeToSlide: true,

  appendArrows: '.slideArrows',

  //appendDots:'.sliderDots',

  arrows: true,

  slidesToShow: 4,

  slidesToScroll: 1,

  dots: false,

  autoplay: true,  

  responsive: [

    {

      breakpoint: 991, 

      settings: {

        slidesToShow: 3,

        slidesToScroll: 1,

        infinite: true,

        dots: true,

        centerMode: false

      }

    },



    {



      breakpoint: 768, 

      settings: {

        slidesToShow: 2,

        slidesToScroll: 1,

        infinite: true,

        dots: true,

        centerMode: false

      }

    },



    {

      breakpoint: 480,

      settings: {

        slidesToShow: 1,

        slidesToScroll: 1,

        dots: true,

        centerMode: false,

        adaptiveHeight: true

      }



    }

  ]



});


});





/* ------| A. Svg Rendering In Browser |--------- */

function svgConvert(svgClass) {



    $(svgClass).each(function() {        



        var $img = $(this);



        var imgID = $img.attr('id');



        var imgClass = $img.attr('class');



        var imgURL = $img.attr('src');



        $.get(imgURL, function(data) {



          /* Get the SVG tag, ignore the rest */



          var $svg = $(data).find('svg');



          /* Add replaced image's ID to the new SVG */



          if (typeof imgID !== 'undefined') {



              $svg = $svg.attr('id', imgID);



          }



          /* Add replaced image's classes to the new SVG */



          if (typeof imgClass !== 'undefined') {



              $svg = $svg.attr('class', imgClass + ' svgIcon');



          }



          $svg = $svg.attr('fill', 'currentColor');



          /* Remove any invalid XML tags as per http://validator.w3.org */



          $svg = $svg.removeAttr('xmlns:a');



          /* Replace image with new SVG*/



          $img.replaceWith($svg);



      }, 'xml');







    });







}



