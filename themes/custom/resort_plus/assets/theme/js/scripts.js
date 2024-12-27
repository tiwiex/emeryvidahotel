$(document).ready(function(){

    // PRE-LOADER
    $("#loader").fadeOut(1000);

    AOS.init();

    // MAGNIFIC IMAGE POPUP
    $('.carousel7 .svg-wrapper').magnificPopup({
        type:'image'
    });

    $('.home1-projects-block .svg-wrapper').magnificPopup({
        type:'image'
    });
    $('.home2-project-block .svg-wrapper').magnificPopup({
        type:'image'
    });
    $('.home3-projects-block .svg-wrapper').magnificPopup({
        type:'image'
    });
    $('.portfolio-standard-block .svg-wrapper').magnificPopup({
        type:'image'
    });
    $('.portfolio-grid2-block .svg-wrapper').magnificPopup({
        type:'image'
    });
    $('.portfolio-grid3-block .svg-wrapper').magnificPopup({
        type:'image'
    });
    $('.portfolio-grid4-block .svg-wrapper').magnificPopup({
        type:'image'
    });

    // MAGNIFIC VIDEO POPUP
    $('.video-popup').magnificPopup({
        type:'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>',
          
            patterns: {
              youtube: {
                index: 'youtube.com/',
          
                id: 'v=',
          
                src: '//www.youtube.com/embed/%id%?autoplay=1'
              },
              vimeo: {
                index: 'vimeo.com/',
                id: '/',
                src: '//player.vimeo.com/video/%id%?autoplay=1'
              },
              gmaps: {
                index: '//maps.google.',
                src: '%id%&output=embed'
              }
          
            },
            srcAction: 'iframe_src',
        }
    });
    

    // PAGE SCROLL-TOP
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });
    $('.scroll-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 100);
        return false;
    });

    // navbar-active class
    $( '.nav-sticky .navbar-nav .nav-item > a' ).on( 'click', function () {
        $( '.nav-sticky .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
        $( this ).parent( '.nav-item' ).addClass( 'active' );
    });

    $(".navbar-brand + .navbar-toggler").click(function(){
        // var hambar = $(".navbar-brand + .navbar-toggler").attr("class");
        if($(".navbar-brand + .navbar-toggler").hasClass('collapsed')){
            $(".navbar-brand + .navbar-toggler .close-icon").toggleClass("dnone");
            $(".navbar-brand + .navbar-toggler .hamber-icon").toggleClass("dnone");
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

    var $activeHeader = $(".header.active .nav-sticky");
    
    if($(window).scrollTop() > $activeHeader.height()){
        $(".header.active .nav-sticky").addClass("sticky");
    }
    else{
        $(".header.active .nav-sticky").removeClass("sticky");
    }
    $(window).scroll(function () {
        if($(window).scrollTop() > $activeHeader.height()){
            $(".header.active .nav-sticky").addClass("sticky");
        }
        else{
            $(".header.active .nav-sticky").removeClass("sticky");
        }

        // var activeHeader2 = $("#header2.header.active .nav-sticky")
        // var activeHeader3 = $("#header3.header.active .nav-sticky")
        // if((activeHeader2.hasClass('sticky')) || (activeHeader3.hasClass('sticky'))){
        //     $("body").addClass("top-spacing");
        //     // console.log("True");
        // }else{
        //     $("body").removeClass("top-spacing");
        //     // console.log("False");
        // }
    });

    // ACCORDION COLLAPSE
    $('.accordion-block .collapse').on('shown.bs.collapse', function(){
        $(this).parent().find(".svg-minus").removeClass("d-none").addClass("d-block");
        $(this).parent().find(".svg-plus").removeClass("d-block").addClass("d-none");
    }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".svg-plus").removeClass("d-none").addClass("d-block");
        $(this).parent().find(".svg-minus").removeClass("d-block").addClass("d-none");
    });

    // ALERTS CLOSE
    $(".alerts-block .close").click(function(){
        $(this).parent(".alert-area").fadeOut();
    })

    // TOOLTIPS PAGE
    $(function(){
        $('[data-tooltip]').tooltip();
    })

    // SWIPER JS
    var swiper = new Swiper(".carousel1 .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        centeredSlides: false,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          576: {
              slidesPerView: 2,
              spaceBetween: 30,
              slidesPerGroup: 2,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 2,
            },
        },
    });

    var swiper = new Swiper(".carousel2 .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        centeredSlides: false,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

    var swiper = new Swiper(".carousel4 .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        centeredSlides: false,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          576: {
              slidesPerView: 2,
              spaceBetween: 30,
              slidesPerGroup: 2,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 45,
            slidesPerGroup: 2,
            },
        },
    });

    var swiper = new Swiper(".home1-banner-block .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        centeredSlides: false,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

    var swiper = new Swiper(".home2-banner-block .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        centeredSlides: false,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

    // OWL JS
    var $first_owl =  $(".carousel3 .owl-carousel");
    if($first_owl.hasClass('owl-carousel')){
        $(".carousels-block .carousel3 .owl-carousel").owlCarousel({
            nav: true,
            navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M36.228,1.264a4.458,4.458,0,0,1,.035,6.325L15.144,28.521H95.519a4.468,4.468,0,1,1,0,8.937H15.179L36.3,58.391a4.484,4.484,0,0,1-6.391,6.29L1.285,36.152h0a5.014,5.014,0,0,1-.938-1.409A4.226,4.226,0,0,1,0,33.024,4.456,4.456,0,0,1,1.285,29.9L29.906,1.367A4.457,4.457,0,0,1,36.228,1.264Z" fill="#16161b"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M63.772,1.264a4.458,4.458,0,0,0-.035,6.325L84.856,28.521H4.481a4.468,4.468,0,1,0,0,8.937h80.34L63.7,58.391a4.484,4.484,0,0,0,6.391,6.29L98.715,36.152h0a5.014,5.014,0,0,0,.938-1.409A4.226,4.226,0,0,0,100,33.024,4.456,4.456,0,0,0,98.715,29.9L70.094,1.367A4.457,4.457,0,0,0,63.772,1.264Z" fill="#16161b"/></svg>'],
            margin: 30,
            slideBy: 1,
            dots: false,
            autoplay: true,
            autoplayTimeout: 50000,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                }
            }
        });
    }

    var $second_owl =  $(".carousel5 .owl-carousel");
    if($second_owl.hasClass('owl-carousel')){
        $(".carousels-block .carousel5 .owl-carousel").owlCarousel({
            nav: true,
            navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M36.228,1.264a4.458,4.458,0,0,1,.035,6.325L15.144,28.521H95.519a4.468,4.468,0,1,1,0,8.937H15.179L36.3,58.391a4.484,4.484,0,0,1-6.391,6.29L1.285,36.152h0a5.014,5.014,0,0,1-.938-1.409A4.226,4.226,0,0,1,0,33.024,4.456,4.456,0,0,1,1.285,29.9L29.906,1.367A4.457,4.457,0,0,1,36.228,1.264Z" fill="#16161b"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M63.772,1.264a4.458,4.458,0,0,0-.035,6.325L84.856,28.521H4.481a4.468,4.468,0,1,0,0,8.937h80.34L63.7,58.391a4.484,4.484,0,0,0,6.391,6.29L98.715,36.152h0a5.014,5.014,0,0,0,.938-1.409A4.226,4.226,0,0,0,100,33.024,4.456,4.456,0,0,0,98.715,29.9L70.094,1.367A4.457,4.457,0,0,0,63.772,1.264Z" fill="#16161b"/></svg>'],
            margin: 30,
            slideBy: 1,
            dots: false,
            autoplay: true,
            autoplayTimeout: 50000,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                }
            }
        });
    }

    var $second_owl =  $(".carousel6 .owl-carousel");
    if($second_owl.hasClass('owl-carousel')){
        // console.log("red");
        $(".carousels-block .carousel6 .owl-carousel").owlCarousel({
            nav: true,
            navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M36.228,1.264a4.458,4.458,0,0,1,.035,6.325L15.144,28.521H95.519a4.468,4.468,0,1,1,0,8.937H15.179L36.3,58.391a4.484,4.484,0,0,1-6.391,6.29L1.285,36.152h0a5.014,5.014,0,0,1-.938-1.409A4.226,4.226,0,0,1,0,33.024,4.456,4.456,0,0,1,1.285,29.9L29.906,1.367A4.457,4.457,0,0,1,36.228,1.264Z" fill="#16161b"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M63.772,1.264a4.458,4.458,0,0,0-.035,6.325L84.856,28.521H4.481a4.468,4.468,0,1,0,0,8.937h80.34L63.7,58.391a4.484,4.484,0,0,0,6.391,6.29L98.715,36.152h0a5.014,5.014,0,0,0,.938-1.409A4.226,4.226,0,0,0,100,33.024,4.456,4.456,0,0,0,98.715,29.9L70.094,1.367A4.457,4.457,0,0,0,63.772,1.264Z" fill="#16161b"/></svg>'],
            margin: 30,
            slideBy: 1,
            dots: false,
            autoplay: true,
            autoplayTimeout: 50000,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                }
            }
        });
    }

    var $home3_banner =  $(".home3-banner-block .owl-carousel");
    if($home3_banner.hasClass('owl-carousel')){
        // console.log("red");
        $(".home3-banner-block .owl-carousel").owlCarousel({
            nav: true,
            navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M36.228,1.264a4.458,4.458,0,0,1,.035,6.325L15.144,28.521H95.519a4.468,4.468,0,1,1,0,8.937H15.179L36.3,58.391a4.484,4.484,0,0,1-6.391,6.29L1.285,36.152h0a5.014,5.014,0,0,1-.938-1.409A4.226,4.226,0,0,1,0,33.024,4.456,4.456,0,0,1,1.285,29.9L29.906,1.367A4.457,4.457,0,0,1,36.228,1.264Z" fill="#16161b"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M63.772,1.264a4.458,4.458,0,0,0-.035,6.325L84.856,28.521H4.481a4.468,4.468,0,1,0,0,8.937h80.34L63.7,58.391a4.484,4.484,0,0,0,6.391,6.29L98.715,36.152h0a5.014,5.014,0,0,0,.938-1.409A4.226,4.226,0,0,0,100,33.024,4.456,4.456,0,0,0,98.715,29.9L70.094,1.367A4.457,4.457,0,0,0,63.772,1.264Z" fill="#16161b"/></svg>'],
            margin: 30,
            slideBy: 1,
            dots: true,
            autoplay: true,
            autoplayTimeout: 50000, 
            loop: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                }
            }
        });
    }

    var $fourth_owl =  $(".carousel7 .owl-carousel");
    if($fourth_owl.hasClass('owl-carousel')){
        // console.log("red");
        $(".carousels-block .carousel7 .owl-carousel").owlCarousel({
            nav: true,
            navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M36.228,1.264a4.458,4.458,0,0,1,.035,6.325L15.144,28.521H95.519a4.468,4.468,0,1,1,0,8.937H15.179L36.3,58.391a4.484,4.484,0,0,1-6.391,6.29L1.285,36.152h0a5.014,5.014,0,0,1-.938-1.409A4.226,4.226,0,0,1,0,33.024,4.456,4.456,0,0,1,1.285,29.9L29.906,1.367A4.457,4.457,0,0,1,36.228,1.264Z" fill="#16161b"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M63.772,1.264a4.458,4.458,0,0,0-.035,6.325L84.856,28.521H4.481a4.468,4.468,0,1,0,0,8.937h80.34L63.7,58.391a4.484,4.484,0,0,0,6.391,6.29L98.715,36.152h0a5.014,5.014,0,0,0,.938-1.409A4.226,4.226,0,0,0,100,33.024,4.456,4.456,0,0,0,98.715,29.9L70.094,1.367A4.457,4.457,0,0,0,63.772,1.264Z" fill="#16161b"/></svg>'],
            margin: 30,
            slideBy: 1,
            dots: true,
            autoplay: true,
            autoplayTimeout: 50000,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                567: {
                    items: 2,
                    nav: true,
                    slideBy: 2,
                },
                767: {
                    items: 3,
                    nav: true,
                    slideBy: 3,
                }
            }
        });
    }

    var $fifth_owl =  $(".carousel8 .owl-carousel");
    if($fifth_owl.hasClass('owl-carousel')){
        // console.log("red");
        $(".carousels-block .carousel8 .owl-carousel").owlCarousel({
            nav: true,
            navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M36.228,1.264a4.458,4.458,0,0,1,.035,6.325L15.144,28.521H95.519a4.468,4.468,0,1,1,0,8.937H15.179L36.3,58.391a4.484,4.484,0,0,1-6.391,6.29L1.285,36.152h0a5.014,5.014,0,0,1-.938-1.409A4.226,4.226,0,0,1,0,33.024,4.456,4.456,0,0,1,1.285,29.9L29.906,1.367A4.457,4.457,0,0,1,36.228,1.264Z" fill="#16161b"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M63.772,1.264a4.458,4.458,0,0,0-.035,6.325L84.856,28.521H4.481a4.468,4.468,0,1,0,0,8.937h80.34L63.7,58.391a4.484,4.484,0,0,0,6.391,6.29L98.715,36.152h0a5.014,5.014,0,0,0,.938-1.409A4.226,4.226,0,0,0,100,33.024,4.456,4.456,0,0,0,98.715,29.9L70.094,1.367A4.457,4.457,0,0,0,63.772,1.264Z" fill="#16161b"/></svg>'],
            margin: 30,
            slideBy: 1,
            dots: true,
            autoplay: true,
            autoplayTimeout: 50000,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                567: {
                    items: 1,
                    nav: true,
                }
            }
        });
    }

    var $sixth_owl =  $(".carousel9 .owl-carousel");
    if($sixth_owl.hasClass('owl-carousel')){
        // console.log("red");
        $(".carousels-block .carousel9 .owl-carousel").owlCarousel({
            nav: true,
            navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M36.228,1.264a4.458,4.458,0,0,1,.035,6.325L15.144,28.521H95.519a4.468,4.468,0,1,1,0,8.937H15.179L36.3,58.391a4.484,4.484,0,0,1-6.391,6.29L1.285,36.152h0a5.014,5.014,0,0,1-.938-1.409A4.226,4.226,0,0,1,0,33.024,4.456,4.456,0,0,1,1.285,29.9L29.906,1.367A4.457,4.457,0,0,1,36.228,1.264Z" fill="#16161b"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M63.772,1.264a4.458,4.458,0,0,0-.035,6.325L84.856,28.521H4.481a4.468,4.468,0,1,0,0,8.937h80.34L63.7,58.391a4.484,4.484,0,0,0,6.391,6.29L98.715,36.152h0a5.014,5.014,0,0,0,.938-1.409A4.226,4.226,0,0,0,100,33.024,4.456,4.456,0,0,0,98.715,29.9L70.094,1.367A4.457,4.457,0,0,0,63.772,1.264Z" fill="#16161b"/></svg>'],
            margin: 20,
            slideBy: 1,
            center: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 50000,
            loop: true,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                    margin: 10,
                },
                567: {
                    items: 2,
                    nav: true,
                }
            }
        });
    }

    var $seventh_owl =  $(".carousel10 .owl-carousel");
    if($seventh_owl.hasClass('owl-carousel')){
        // console.log("red");
        $(".carousels-block .carousel10 .owl-carousel").owlCarousel({
            nav: false,
            navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M36.228,1.264a4.458,4.458,0,0,1,.035,6.325L15.144,28.521H95.519a4.468,4.468,0,1,1,0,8.937H15.179L36.3,58.391a4.484,4.484,0,0,1-6.391,6.29L1.285,36.152h0a5.014,5.014,0,0,1-.938-1.409A4.226,4.226,0,0,1,0,33.024,4.456,4.456,0,0,1,1.285,29.9L29.906,1.367A4.457,4.457,0,0,1,36.228,1.264Z" fill="#16161b"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66"><path data-name="Icon ionic-ios-arrow-round-forward" d="M63.772,1.264a4.458,4.458,0,0,0-.035,6.325L84.856,28.521H4.481a4.468,4.468,0,1,0,0,8.937h80.34L63.7,58.391a4.484,4.484,0,0,0,6.391,6.29L98.715,36.152h0a5.014,5.014,0,0,0,.938-1.409A4.226,4.226,0,0,0,100,33.024,4.456,4.456,0,0,0,98.715,29.9L70.094,1.367A4.457,4.457,0,0,0,63.772,1.264Z" fill="#16161b"/></svg>'],
            margin: 11,
            slideBy: 1,
            dots: false,
            autoplay: true,
            autoplayTimeout: 50000,
            loop: true,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                },
                567: {
                    items: 3,
                },
                767: {
                    items: 5,
                }
            }
        });
    }

    // PORTFOLIO 
    $('.home1-projects-block .row').isotope({
        // options
        itemSelector: '.item1',
        masonry: {
            columnWidth: 1
         }
    });

    $('.home2-project-block .row').isotope({
        // options
        itemSelector: '.item1',
        masonry: {
            columnWidth: 1
        }
    });

    $('.portfolio-standard-block .filter-item1').isotope({
        // options
        itemSelector: '.item1',
        layoutMode: 'fitRows',
    });
    $( '.portfolio .menu-link' ).on( 'click', function () {
        $( '.portfolio' ).find( 'li.active' ).removeClass( 'active' );
        $( this ).parent( 'li' ).addClass( 'active' );

        var selector = $(this).attr('data-filter');
        $('.filter-item1').isotope({
            filter: selector
        });
        return false;
    });

    // COMING SOON PAGE
    var $coming_soon =  $(".page-coming-block #timer-wrapper").attr("class");
    if($coming_soon == "timer-wrapper"){
        let dayItem = document.querySelector("#day");
        let hourItem = document.querySelector("#hour");
        let minuteItem = document.querySelector("#minute");
        let secondItem = document.querySelector("#second");

        let countDown = () =>{
            let futureDate = new Date("18 Dec 2022");
            let currentDate = new Date();
            let myDate = futureDate - currentDate;

            let days = Math.floor(myDate / 1000 / 60 / 60 /24);
            let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
            let minutes = Math.floor(myDate / 1000 / 60) % 60;
            let seconds = Math.floor(myDate / 1000) % 60;

            dayItem.innerHTML = days;
            hourItem.innerHTML = hours;
            minuteItem.innerHTML = minutes;
            secondItem.innerHTML = seconds;
        }

        countDown()
        setInterval(countDown, 1000)
    }
})