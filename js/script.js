// Preloader
$(window).on("load", function () {
  $(".preloader").delay(1000).fadeOut('slow');
});

$(function () {
  // Header scroll
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });

  // Mobile menu
  $(".header__burger").on("click", function () {
    $(".menu").addClass("active");
    $("body").addClass("lock");
  });

  $(".menu__close").on("click", function () {
    $(".menu").removeClass("active");
    $("body").removeClass("lock");
  });

  $(window).on("resize", function() {
    $(".menu").removeClass("active");
    $("body").removeClass("lock");
  })

  // Testimonials Slider
  const swiperTestimonial = new Swiper(".testimonials__slider", { 
    spaceBetween: 20,
    loop: true,
    autoHeight: true,
    grabCursor: true,
    allowTouchMove: true,
    speed: 500,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {

        // when window width is <= 499px
        499: {
            slidesPerView: 1,
        },
        // when window width is <= 700px
        700: {
            slidesPerView: 1.2,
        },
        // when window width is <= 850px
        850: {
            slidesPerView: 1.4,
        },
        // when window width is <= 950px
        950: {
            slidesPerView: 1.5,
        },
        // when window width is < 1150px
        1150: {
            slidesPerView: 2,
        }
    }    
  });

  // Portfolio Popup
  $(".portfolio__body").magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: false,
    closeBtnInside: false,
    image: {
    verticalFit: true,
    cursor: null,
    },
    gallery: {
    enabled: true,
    },
    zoom: {
    enabled: true,
    duration: 300,
    easing: 'ease-in',
    opener: function (element) {
        return element.find("img");
      },
    },
  });

  // Portfolio Filter
  $("[data-filter]").on("click", function (event) {
    event.preventDefault();

    $(this).addClass("active").siblings().removeClass("active");

    let cat = $(this).data("filter");

    if (cat == "all") {
      $("[data-cat]").removeClass("hide");
    } else {
      $("[data-cat]").each(function () {
        let workCat = $(this).data("cat");

        if (workCat != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });

  // Questions Spoller
  $(".questions__label").on("click", function () {
    if ($(".questions__block").hasClass("single")) {
      $(".questions__label").not($(this)).removeClass("active");
      $(".questions__text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });

});

// Email send
const mailPath = 'mail.php';

document.querySelectorAll('.form').forEach( (e) => {

	e.addEventListener('submit', function(e) {

		let th      = this,
		    params  = new FormData(this),
		    request = new XMLHttpRequest()

		request.open('POST', mailPath, true)
		request.send(params)

		request.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				setTimeout(function() { th.reset() }, 1000)
				alert('Thank you!');
			}
		}
		e.preventDefault();
	})
});