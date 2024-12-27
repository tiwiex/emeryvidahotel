/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors. resort_plus = {
    attach: function (context, settings) {
      // $(".dropdown-item").on("click", function (e) {
      //   if (!$(this).hasClass("show")) {
      //     $(this)
      //       .parents(".dropdown-menu")
      //       .first()
      //       .find(".show")
      //       .removeClass("show");
      //   }
      //   var $subMenu = $(this).next(".dropdown-menu");
      //   $subMenu.toggleClass("show");
      //   $(this).parent("li").toggleClass("show");
      //   $(this)
      //     .parents("li.nav-item.submenu-1.show")
      //     .on("hidden.bs.dropdown", function (e) {
      //       $(".dropdown-menu").removeClass("show");
      //     });
      //   return false;
      // });
      // sticky navbar
      $(function () {
        $(document).scroll(function () {
          if($('#Check1').is(":checked")){
            var $nav = $(".nav-sticky");
            var $nav2 = $(".nav-sticky-3");
            $nav.toggleClass("header-fixed", $(this).scrollTop() > 50);
            $nav2.toggleClass("header-fixed", $(this).scrollTop() > 50);
          }
          else if($('#Check1').is(":not(:checked)")){
            var $nav = $(".nav-sticky");
            var $nav2 = $(".nav-sticky-3");
            $nav.removeClass('header-fixed');
            $nav2.removeClass('header-fixed');
          }
        });
      });
      // $('.hamber-btn').click(function(){
      //   $('#headernavbar-1').toggleClass('dnone')
      // })
      // $('.hamber-btn').click(function(){
      //   $('#headernavbar-2').toggleClass('dnone')
      // })
      // $('.hamber-btn').click(function(){
      //   $('#headernavbar-3').toggleClass('dnone')
      // })

      $('.hamber-icon').click(function(){
        $('.hamber-icon').addClass('dnone');
        $('.close-icon ').removeClass('dnone');
        
    });
     $('.close-icon').click(function(){
        $('.close-icon').addClass('dnone');
        $('.hamber-icon').removeClass('dnone');
     });

      // navbar-active class
        $( '.nav-sticky .navbar-nav .nav-item > a' ).on( 'click', function () {
          $( '.nav-sticky .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
          $( this ).parent( '.nav-item' ).addClass( 'active' );
      });

      $(".navbar-brand + .navbar-toggler").click(function(){
          // var hambar = $(".navbar-brand + .navbar-toggler").attr("class");
          if($(".navbar-brand + .navbar-toggler").hasClass('collapsed')){
              $(".navbar-brand + .navbar-toggler ").toggleClass("dnone");
              $(".navbar-brand + .navbar-toggler ").toggleClass("dnone");
          }
      });
      $('#Check1').click(function(){
        if($(this).is(":checked")){
          $('.header_type .nav-sticky').addClass('header-fixed1');
        }
        else if($(this).is(":not(:checked)")){
          $('.header_type .nav-sticky').removeClass('header-fixed');
        }
      });

      // CODE_BLOCK
      var $code_block =  $("pre").attr("class");
      // console.log($code_block);
      if($code_block == "language-markup")
      {
        var elementCopy = document.getElementsByClassName("language-markup");
        if(typeof(elementCopy) != 'undefined' && elementCopy != null){ 
          var clipboard = new ClipboardJS('.clipboard');   
          clipboard.on('success', function (e) {
          e.trigger.textContent = 'Copied';
          window.setTimeout(function() {
              e.trigger.textContent = 'Copy to Clipboard';
          }, 8000);
          console.log(e);
          });
          clipboard.on('error', function (e) {
          console.log(e);
          });
        }
      }

      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
      })

      $(".testimonial-slider-1").owlCarousel({
        slideBy: 1,
        arrows:true,
        navText: ['<div class="slider-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M36.228,1.264a4.458,4.458,0,0,1,.035,6.325L15.144,28.521H95.519a4.468,4.468,0,1,1,0,8.937H15.179L36.3,58.391a4.484,4.484,0,0,1-6.391,6.29L1.285,36.152h0a5.014,5.014,0,0,1-.938-1.409A4.226,4.226,0,0,1,0,33.024,4.456,4.456,0,0,1,1.285,29.9L29.906,1.367A4.457,4.457,0,0,1,36.228,1.264Z" fill="#16161b"/></svg></div>', '<div class="slider-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M63.772,1.264a4.458,4.458,0,0,0-.035,6.325L84.856,28.521H4.481a4.468,4.468,0,1,0,0,8.937h80.34L63.7,58.391a4.484,4.484,0,0,0,6.391,6.29L98.715,36.152h0a5.014,5.014,0,0,0,.938-1.409A4.226,4.226,0,0,0,100,33.024,4.456,4.456,0,0,0,98.715,29.9L70.094,1.367A4.457,4.457,0,0,0,63.772,1.264Z" fill="#16161b"/></svg></div>'],
        margin: 50,
        nav: true,
        dots: true,
        // mouseDrag: true,
        autoHeight:true,
        responsiveClass: true,
        responsive: {
          0:{
            items: 1,
          },
          480:{
            items: 1,
            nav: true,
            dots: false,
          },
          769:{
            items: 1,
          },
          1024:{
            items: 1
          }
        }
      });
      $(".testimonial-slider-2").owlCarousel({
        slideBy: 1,
        margin: 50,
        // nav: true,
        autoHeight:false,
        dots: true,
        responsiveClass: true,
        responsive: {
          0:{
            items: 1,
          },
          480:{
            items: 1
          },
          769:{
            items: 2
          },
          1024:{
            items: 2
          }
        }
      });
      $(".testimonial-slider-3").owlCarousel({
        slideBy: 1,
        margin: 0,
        nav: true,
        dots: true,
        navText: ['<div class="slider-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M36.228,1.264a4.458,4.458,0,0,1,.035,6.325L15.144,28.521H95.519a4.468,4.468,0,1,1,0,8.937H15.179L36.3,58.391a4.484,4.484,0,0,1-6.391,6.29L1.285,36.152h0a5.014,5.014,0,0,1-.938-1.409A4.226,4.226,0,0,1,0,33.024,4.456,4.456,0,0,1,1.285,29.9L29.906,1.367A4.457,4.457,0,0,1,36.228,1.264Z" fill="#16161b"/></svg></div>', '<div class="slider-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M63.772,1.264a4.458,4.458,0,0,0-.035,6.325L84.856,28.521H4.481a4.468,4.468,0,1,0,0,8.937h80.34L63.7,58.391a4.484,4.484,0,0,0,6.391,6.29L98.715,36.152h0a5.014,5.014,0,0,0,.938-1.409A4.226,4.226,0,0,0,100,33.024,4.456,4.456,0,0,0,98.715,29.9L70.094,1.367A4.457,4.457,0,0,0,63.772,1.264Z" fill="#16161b"/></svg></div>'],
        responsiveClass: true,
        responsive: {
          0:{
            items: 1,
          },
          480:{
            items: 1
          },
          769:{
            nav: false,
            items: 1
          },
          1024:{
            items: 1
          }
        }
      });
      // CArousels
      
      $(".carousels-1").owlCarousel({
        slideBy: 1,
        margin: 50,
        // nav: true,
        dots: true,
        // navText: ['<div class="slider-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M36.228,1.264a4.458,4.458,0,0,1,.035,6.325L15.144,28.521H95.519a4.468,4.468,0,1,1,0,8.937H15.179L36.3,58.391a4.484,4.484,0,0,1-6.391,6.29L1.285,36.152h0a5.014,5.014,0,0,1-.938-1.409A4.226,4.226,0,0,1,0,33.024,4.456,4.456,0,0,1,1.285,29.9L29.906,1.367A4.457,4.457,0,0,1,36.228,1.264Z" fill="#16161b"/></svg></div>', '<div class="slider-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M63.772,1.264a4.458,4.458,0,0,0-.035,6.325L84.856,28.521H4.481a4.468,4.468,0,1,0,0,8.937h80.34L63.7,58.391a4.484,4.484,0,0,0,6.391,6.29L98.715,36.152h0a5.014,5.014,0,0,0,.938-1.409A4.226,4.226,0,0,0,100,33.024,4.456,4.456,0,0,0,98.715,29.9L70.094,1.367A4.457,4.457,0,0,0,63.772,1.264Z" fill="#16161b"/></svg></div>'],
        autoHeight:true,
        responsiveClass: true,
        responsive: {
          0:{
            items: 1,
          },
          480:{
            items: 2
          },
          769:{
            items: 2
          },
          1024:{
            items: 3
          }
        }
      });
      $(".carousels-2").owlCarousel({
        slideBy: 1,
        margin: 30,
        dots: true,
        autoHeight:true,
        responsiveClass: true,
        responsive: {
          0:{
            items: 1,
          },
          480:{
            items: 1
          },
          769:{
            items: 2
          },
          1024:{
            items: 3
          }
        }
      });
      $(".carousels-3").owlCarousel({
        slideBy: 1,
        dots: true,
        nav: false,
        // autoHeight:true,
        responsiveClass: true,
        loop:false,
        responsive: {
          0:{
            items: 1,
          },
          480:{
            items: 1,
          },
          769:{
          
            items: 1
          },
          1024:{
            items: 1
          }
        }
      });
      $(".carousels-4").owlCarousel({
        slideBy: 1,
        dots: true,
        margin:30,
        autoHeight:true,
        responsiveClass: true,
        responsive: {
          0:{
            items: 1,
            slideBy: 1,
          },
          480:{
            items: 2,
            slideBy: 2,
          },
          769:{
            items: 3,
            slideBy: 3,
          },
          1024:{
            items: 4
          }
        }
      });
      $(".carousels-5").owlCarousel({
        slideBy: 1,
        margin: 30,
        dots: true,
        autoHeight:true,
        responsiveClass: true,
        responsive: {
          0:{
            items: 1,
          },
          480:{
            items: 1
          },
          769:{
            items: 2
          },
          1024:{
            items: 3
          }
        }
      });
        // TOOLTIPS PAGE
        $(function(){
          $('[data-tooltip]').tooltip();
      })
      // Rooms Carousel 
        $(function(){
        $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          fade: false,
          loop:false,
          infinite: false,
          dots:true,
          adaptiveHeight: true,
          asNavFor: '.slider-nav'
          });
          
        $('.slider-nav').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          dots: false,
          nav:false,
          loop:false,
          focusOnSelect: true,
          variableWidth: true,
          infinite: true,
          autoplay: false,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                
              },
            }
          ]
        });
      })

      // $(".home-slider-1").owlCarousel({
      //   slideBy: 1,
      //   margin: 0,
      //   dots: false,
      //   navText: ['<div class="arrows-left"><p>Prev</p></div>', '<div class="arrows-right"><p>Next</p></div>'],
      //   nav:true,
      //   responsiveClass: true,
      //   loop:false,
      //   responsive: {
      //     0:{
      //       items: 1,
      //       nav:false,
      //       dots:true,
      //     },
      //     480:{
      //       items: 1,
      //       dots:true,
      //       nav: false,
      //     },
      //     769:{
      //       items: 1
      //     },
      //     1024:{
      //       items: 1
      //     }
      //   }
      // });
      // Home slider 1
      $(function(){
        var owl = $('.home-slider-1');
        owl.owlCarousel({
          autoplay: false,
          items:1,
          dots:false,
          nav:true,
          navText: ['<div class="arrows-left"><p><span></span>Prev</p></div>', '<div class="arrows-right"><p><span></span>Next</p></div>'],
          loop: false,
          responsive: {
                0:{
                  items: 1,
                  nav:false,
                  dots:true,
                  margin: 50,
                },
                480:{
                  items: 1,
                  dots:true,
                  nav: false,
                  margin: 50,
                },
                769:{
                  items: 1
                },
                1024:{
                  items: 1
                }
              },
          onInitialized  : counter, //When the plugin has initialized.
          onTranslated : counter //When the translation of the stage has finished.
        });
        
        function counter(event) {
           var element   = event.target;         // DOM element, in this example .owl-carousel
            var items     = event.item.index + 2;     // Number of items
            var item      = event.item.index + 1;     // Position of the current item
            var las = event.item.index.lastChild;
            var pre = event.item.index - 1
          // it loop is true then reset counter from 1
          if(item > items) {
            item = item - items
          }
          
         
          if (item > element) {
            $('.arrows-right span').html("");
          }
           else if (item == 1) {
            $('.arrows-left span').html("00");
            $('.arrows-right span').html('0'+items);
          }
          else if (item == las){
            $('.arrows-right span').html('00');

          }
          else{
            
            $('.arrows-left span').html('0'+item);
            $('.arrows-right span').html('0'+items);
            }
            $('.owl-next.disabled .arrows-right span').html("00")
        }
        $('.owl-next.disabled .arrows-right span').html("00")
        });
        //  //home-banner-1
        //     var count = $('.home-slider-1 .owl-item').length + 1
        //     $(document).ready(function(){
        //       var currentIndex = $('.home-slider-1 .owl-item.active').index();
        //       var currentIndex_next = $('.home-slider-1 .owl-item.active').index();
              
        //         currentIndex = $('.home-slider-1 .owl-item.active').index();
        //         currentIndex_next = $('.home-slider-1 .owl-item.active').index()+2;
        //         if (currentIndex_next == count){
        //           $('.arrows-right span').html('00');
        //         }else{
        //           $('.arrows-right span').html('0'+currentIndex_next);
        //         }
        //         $('.arrows-left span').html('0'+currentIndex);
             
        //     });














      $(".home-slider-2").owlCarousel({
        slideBy: 1,
        margin: 0,
        nav: true,
        dots: false,
        navText: ['<div class="slider-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M36.228,1.264a4.458,4.458,0,0,1,.035,6.325L15.144,28.521H95.519a4.468,4.468,0,1,1,0,8.937H15.179L36.3,58.391a4.484,4.484,0,0,1-6.391,6.29L1.285,36.152h0a5.014,5.014,0,0,1-.938-1.409A4.226,4.226,0,0,1,0,33.024,4.456,4.456,0,0,1,1.285,29.9L29.906,1.367A4.457,4.457,0,0,1,36.228,1.264Z" fill="#16161b"/></svg></div>', '<div class="slider-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M63.772,1.264a4.458,4.458,0,0,0-.035,6.325L84.856,28.521H4.481a4.468,4.468,0,1,0,0,8.937h80.34L63.7,58.391a4.484,4.484,0,0,0,6.391,6.29L98.715,36.152h0a5.014,5.014,0,0,0,.938-1.409A4.226,4.226,0,0,0,100,33.024,4.456,4.456,0,0,0,98.715,29.9L70.094,1.367A4.457,4.457,0,0,0,63.772,1.264Z" fill="#16161b"/></svg></div>'],
        responsiveClass: true,
        responsive: {
          0:{
            items: 1,
            nav:false,
            dots:true,
          },
          480:{
            items: 1,
            nav:false,
            dots:true,
          },
          769:{
            items: 1
          },
          1024:{
            items: 1
          }
        }
      });


    // HOME SLIDER 03
    $(".home-slider-3").owlCarousel({
      slideBy: 1,
      margin: 10,
      nav: false,
      dots: true,
      navText: ['<div class="slider-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M36.228,1.264a4.458,4.458,0,0,1,.035,6.325L15.144,28.521H95.519a4.468,4.468,0,1,1,0,8.937H15.179L36.3,58.391a4.484,4.484,0,0,1-6.391,6.29L1.285,36.152h0a5.014,5.014,0,0,1-.938-1.409A4.226,4.226,0,0,1,0,33.024,4.456,4.456,0,0,1,1.285,29.9L29.906,1.367A4.457,4.457,0,0,1,36.228,1.264Z" fill="#16161b"/></svg></div>', '<div class="slider-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M63.772,1.264a4.458,4.458,0,0,0-.035,6.325L84.856,28.521H4.481a4.468,4.468,0,1,0,0,8.937h80.34L63.7,58.391a4.484,4.484,0,0,0,6.391,6.29L98.715,36.152h0a5.014,5.014,0,0,0,.938-1.409A4.226,4.226,0,0,0,100,33.024,4.456,4.456,0,0,0,98.715,29.9L70.094,1.367A4.457,4.457,0,0,0,63.772,1.264Z" fill="#16161b"/></svg></div>'],
      responsiveClass: true,
      responsive: {
        0:{
          items: 1,
          nav:false,
          dots:true,
        },
        480:{
          items: 1,
          nav:false,
          dots:true,
        },
        769:{
          items: 1
        },
        1024:{
          items: 1
        }
      }
    });
    // Accordian

    $('.accordion-block .collapse').on('shown.bs.collapse', function(){
      $(this).parent().find(".svg-minus").removeClass("d-none").addClass("d-block");
      $(this).parent().find(".svg-plus").removeClass("d-block").addClass("d-none");
  }).on('hidden.bs.collapse', function(){
      $(this).parent().find(".svg-plus").removeClass("d-none").addClass("d-block");
      $(this).parent().find(".svg-minus").removeClass("d-block").addClass("d-none");
  });


  // Magnific popup

      $('.gallery-grid').magnificPopup({
        delegate: '.magnify-popup',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1]
        }
      });
      $('.gallery').magnificPopup({
        delegate: '.magnify-popup',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1]
        }
      });
      // Alerts
      $(".alert-close").click(function(){
        $(this).parent(".alert").removeClass("show");
    })
    $('#edit-check-in-date').click(function(){
        $( "#edit-check-in-date" ).datepicker();
        $( "#edit-check-in-date" ).datepicker("show");
    });
    $('#edit-check-out-date').click(function(){
      $( "#edit-check-out-date" ).datepicker();
      $( "#edit-check-out-date" ).datepicker("show");
    });
    // Events Calendar
   
    // $('.fc-today').html = "Today";
    $('.fc-today').html('Today');

    function validate(){
      var cnv = $('form.comment-form textarea').val();
      if (!$.trim(cnv)) {
        $(once('comment_validate','form.comment-form textarea')).after('<span class="error">This field is required</span>');
          return false;
      } else { return true; }
    }
    $(once('comment-validate','form.comment-form')).submit(validate);
    // GO TO TOP
    $(document).scroll(function(){
      if( $(this).scrollTop() > 100){
       $(".back-to-top").fadeIn()
      }
      else {
       $(".back-to-top").fadeOut()
      }
     })
     $(".back-to-top").click(function(){
       $('html,body').animate({
         scrollTop:0
     },100)
     })
    //  Maintenance

    function getTimeRemaining(endtime) {
      var t = Date.parse(settings.custom_date) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
    function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
      var daysSpan = clock.querySelector('.days');
      var hoursSpan = clock.querySelector('.hours');
      var minutesSpan = clock.querySelector('.minutes');
      var secondsSpan = clock.querySelector('.seconds');
      function updateClock() {
        var t = getTimeRemaining(endtime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
          clearInterval(timeinterval);
          document.getElementById("clockdiv").innerHTML = settings.custom_message_dateExpired;
        }
      }
      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }
    var deadline = new Date(Date.parse(new Date()));
    if ($("#clockdiv").length) {
      initializeClock('clockdiv', deadline);
    }


    //  
    }
    
  };  
})(jQuery, Drupal);
