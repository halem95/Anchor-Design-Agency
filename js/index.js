$(document).ready(function () {


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        autoplay: true,
        navText: ['<i class="fas fa-caret-left fa-2x" style="margin:10px"></i>',
             '<i class="fas fa-caret-right fa-2x" style="margin:10px"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });

    $('.counter').counterUp();

    $("body").niceScroll({
		cursorcolor:"#dc3545",
		cursorwidth:"4px",
		cursorborder:false,
		zindex:99999,
		cursorfixedheight: 70,
		smoothscroll: true, 

	});


   $('nav .navbar-toggler').click(function () {

        $('nav .navbar-collapse').fadeIn(500);

   });

   $('nav .close-icon').click(function () {

        $('nav .navbar-collapse').fadeOut(500);

   });


   $(document).keydown(function (e) {

        if( e.keyCode == 27 ) {

            $('nav .navbar-collapse').fadeOut(500);

        }

   });



   $('nav .nav-item .nav-link').click(function () {

        $('nav .nav-item .nav-link').removeClass('active-link');

        $(this).addClass('active-link');

        var secId = $(this).attr('href');

        $('nav .navbar-collapse').fadeOut(300);

        $('body, html').animate({

            scrollTop: $(secId).offset().top,

        }, 1000);


   });


   $(window).scroll(function () {

        if( $(window).scrollTop() >= 2000) {

            $('.scroll-btn').fadeIn(500);


        } else {

            $('.scroll-btn').fadeOut(500);

        }

   });


   $('.scroll-btn').click(function () {

        $('body, html').animate({

            scrollTop: 0,

        }, 1000);

   });


   $('.comp-overview-btn').click(function () {

        $('body, html').animate({

            scrollTop : $('#work').offset().top,

        }, 800);

   });

   var winHeight = $(window).height(),
       winWidth = $(window).width(),
       uppernavHeight = $('.upper-nav').innerHeight(),
       navbarHeight = $('nav').innerHeight(),
       homeHeight = ( winHeight - (navbarHeight + uppernavHeight) ),
       carouselContentHeight = $('#home .carousel-content').innerHeight(),
       carouselContentTop = (homeHeight - carouselContentHeight) / 2;

       $('#home, .carousel-inner, .carousel-item, #particles-js-2').height( homeHeight );
       $('#home .carousel-content').css('top', carouselContentTop);


    
       $(window).resize(function () {

        var winHeight = $(window).height(),
        winWidth = $(window).width(),
        uppernavHeight = $('.upper-nav').innerHeight(),
        navbarHeight = $('nav').innerHeight(),
        homeHeight = ( winHeight - (navbarHeight + uppernavHeight) ),
        carouselContentHeight = $('#home .carousel-content').innerHeight(),
        carouselContentTop = (homeHeight - carouselContentHeight) / 2,
        imagesThumbnailsWidth = $('.gallery .images-thumbnails ').innerWidth(),
        imagesThumbnailsLength = $('.gallery .images-thumbnails img').length,
        imgThumbnailsWidth = (imagesThumbnailsWidth / imagesThumbnailsLength) + 'px';
        

        $('#home, .carousel-inner, .carousel-item, #particles-js-2').height( homeHeight );
        $('#home .carousel-content').css('top', carouselContentTop);
 
        $('.gallery .images-thumbnails img').css('width', imgThumbnailsWidth);



       });




  
    $('#work ul li').click(function () {

        $('#work ul li').removeClass('active-shuffle-li');

        $(this).addClass('active-shuffle-li');

        if ( $(this).data('shuffle') == 'all' ) {

            $('#work .work-item').css('opacity', 1).removeClass('remove-overlay');

        } else {

            $('#work .work-item').css('opacity', '.1').addClass('remove-overlay');

            $('#work .work-item[id="' + $(this).data('shuffle') + '"]').css('opacity', 1).removeClass('remove-overlay');

        }

    });


    $('#work .work-item span').each(function () {
    

        $(this).click(function () {

            $('#work .work-item img').removeClass('active-master-img');

            $(this).parent('.work-item').find('img').addClass('active-master-img');

            var actMasterImgSrc = $('.work-item .active-master-img').attr('src'),

            itemDataSrc = $(this).parent('.work-item').attr('id');
            
            $('#work .work-item[id="' + itemDataSrc + '"]').each(function () {

            var imgSrc = $(this).children('img').attr('src'),

                createImg = '<img src="' + imgSrc + '" alt="img-thumb" draggable="false"/>';

            
            $('.gallery .images-thumbnails').append(createImg);


           });

           $('.gallery .master-img img').attr('src', actMasterImgSrc);

           $('.gallery').fadeIn(500);

           $('.gallery .images-thumbnails img[src="'+ actMasterImgSrc +'"]').addClass('active-master-img');

           var imagesThumbnailsWidth = $('.gallery .images-thumbnails ').innerWidth(),
               imagesThumbnailsLength = $('.gallery .images-thumbnails img').length,
               imgThumbnailsWidth = (imagesThumbnailsWidth / imagesThumbnailsLength) + 'px';

               $('.gallery .images-thumbnails img').css('width', imgThumbnailsWidth);

        });


        

    });


    $('.gallery .images-thumbnails').on('click', 'img', function () {


        $('.gallery .images-thumbnails img').removeClass('active-master-img');

        $(this).addClass('active-master-img');

        $('.gallery .master-img img').fadeOut(200).attr('src', $(this).attr('src')).fadeIn(200);

    });

    $('.gallery .left-arrow').click(function () {

        if (! $('.gallery .images-thumbnails img:eq(0)').hasClass('active-master-img') ) {

            $('.gallery .images-thumbnails img.active-master-img').prev().click();

        } else {

            $('.gallery .images-thumbnails img:last').click();


        }

    });


    $('.gallery .right-arrow').click(function () {

        if ( ! $('.gallery .images-thumbnails img:last').hasClass('active-master-img') ) {

            $('.gallery .images-thumbnails img.active-master-img').next().click();

        } else {

            $('.gallery .images-thumbnails img:eq(0)').click();

        }

    });

   $(document).keydown(function (e) {

        if( e.keyCode == 39 ) {

          if(! $('.gallery .images-thumbnails img:last').hasClass('active-master-img') ) {

            $('.gallery .images-thumbnails .active-master-img').next().click();

          }

          else {

            $('.gallery .images-thumbnails img:eq(0)').click();

          }

        }

   });

   $(document).keydown(function (e) {

        if( e.keyCode == 37 ) {

            if(! $('.gallery .images-thumbnails img:eq(0)').hasClass('active-master-img') ) {

                $('.gallery .images-thumbnails .active-master-img').prev().click();

            }

        else {

                $('.gallery .images-thumbnails img:last').click();

            }

        }

    });


    $('.gallery').click(function () {

        $(this).fadeOut(500);

        $('.gallery .images-thumbnails').empty();


    });


    $('.gallery .gallery-container').click(function (e) {

        e.stopPropagation();

    });


    $(document).keydown(function (e) {

        if (e.keyCode == 27) {

            $('.gallery').fadeOut(500);

            $('.gallery .images-thumbnails').empty();

        }

    });


});