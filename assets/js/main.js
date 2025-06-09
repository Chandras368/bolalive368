"user strict";

$(document).ready(function () {


	// video play//
	//banner slider
    var swiper = new Swiper(".bn__sliderwrap", {
		autoplay: 1000,
		speed: 400,
		cssMode: true,
		autoplay: true,
		slidesPerView: 1,
		loop: true,
		smartspeed: 1000,
		nav: true,
		dots: true,
		pagination: {
			el: ".cmn-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: '.cmn-button-next',
			prevEl: '.cmn-button-prev',
		},
	});
	//recent live slider
	var swiper = new Swiper(".recent__livewrap", {
		autoplay: 1000,
		speed: 200,
		spaceBetween: 24,
		autoplay: true,
		slidesPerView: 1,
		loop: false,
		smartspeed: 1000,
		nav: true,
		dots: true,
		breakpoints: {
			320: {
			  slidesPerView: 1,
			  spaceBetween: 20
			},
			575: {
			  slidesPerView: 2,
			  spaceBetween: 20
			},
			900: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			1199: {
			  slidesPerView: 3,
			  spaceBetween: 24
			},
			1600: {
				slidesPerView: 4,
				spaceBetween: 24
			  }
		  },
		  pagination: {
			el: ".cmn-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: '.cmn-button-next2',
			prevEl: '.cmn-button-prev2',
		},
	});
	var swiper = new Swiper(".recent__livewrapthree", {
		autoplay: 1000,
		speed: 200,
		spaceBetween: 24,
		autoplay: false,
		slidesPerView: 1,
		loop: true,
		smartspeed: 1000,
		nav: true,
		dots: true,
		breakpoints: {
			320: {
			  slidesPerView: 1,
			  spaceBetween: 20
			},
			575: {
			  slidesPerView: 2,
			  spaceBetween: 20
			},
			900: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			1199: {
			  slidesPerView: 3,
			  spaceBetween: 24
			},
			1600: {
				slidesPerView: 4,
				spaceBetween: 24
			  }
		  },
		  pagination: {
			el: ".cmn-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: '.cmn-button-next4',
			prevEl: '.cmn-button-prev4',
		},
	});
	//channel slider
	var swiper = new Swiper(".channel__slider", {
		autoplay: 1000,
		speed: 4000,
		spaceBetween: 24,
		autoplay: true,
		slidesPerView: 1,
		loop: false,
		smartspeed: 5000,
		nav: true,
		dots: true,
		breakpoints: {
			320: {
			  slidesPerView: 3,
			  spaceBetween: 10
			},
			380: {
				slidesPerView: 4,
				spaceBetween: 20
			},
			450: {
				slidesPerView: 5,
				spaceBetween: 20
			},
			575: {
			  slidesPerView: 4,
			  spaceBetween: 20
			},
			900: {
				slidesPerView: 5,
				spaceBetween: 20
			},
			1199: {
			  slidesPerView: 6,
			  spaceBetween: 24
			},
			1560: {
				slidesPerView: 6,
				spaceBetween: 24
			},
			1600: {
				slidesPerView: 7,
				spaceBetween: 24
			},
			1700: {
				slidesPerView: 8,
				spaceBetween: 24
			  },
			1800: {
				slidesPerView: 9,
				spaceBetween: 24
			},
			1850: {
				slidesPerView: 9,
				spaceBetween: 24
			}
		  },
		  pagination: {
			el: ".cmn-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: '.cmn-button-next3',
			prevEl: '.cmn-button-prev3',
		},
	});
	//upcoming slider
	var swiper = new Swiper(".upcoming__slider", {
		autoplay: 1000,
		speed: 200,
		spaceBetween: 24,
		autoplay: true,
		slidesPerView: 1,
		loop: true,
		smartspeed: 1000,
		nav: true,
		dots: true,
		breakpoints: {
			320: {
			  slidesPerView: 1,
			  spaceBetween: 20
			},
			575: {
			  slidesPerView: 2,
			  spaceBetween: 20
			},
			900: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			1199: {
			  slidesPerView: 3,
			  spaceBetween: 24
			},
			1600: {
				slidesPerView: 4,
				spaceBetween: 24
			  }
		  },
		  pagination: {
			el: ".cmn-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: '.cmn-button-next',
			prevEl: '.cmn-button-prev',
		},
	});
	//upcoming slider two
	var swiper = new Swiper(".upcoming__slidetwo", {
		autoplay: 1000,
		speed: 200,
		spaceBetween: 24,
		autoplay: false,
		slidesPerView: 1,
		loop: true,
		smartspeed: 1000,
		nav: true,
		dots: true,
		breakpoints: {
			320: {
			  slidesPerView: 1,
			  spaceBetween: 20
			},
			575: {
			  slidesPerView: 2,
			  spaceBetween: 20
			},
			900: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			1199: {
			  slidesPerView: 3,
			  spaceBetween: 24
			},
			1600: {
				slidesPerView: 4,
				spaceBetween: 24
			  }
		  },
		  pagination: {
			el: ".cmn-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: '.cmn-button-next',
			prevEl: '.cmn-button-prev',
		},
	});
	//news two slider
	var swiper = new Swiper(".newstwo__slider", {
		autoplay: 1000,
		speed: 200,
		spaceBetween: 24,
		autoplay: false,
		slidesPerView: 4,
		loop: false,
		smartspeed: 1000,
		nav: true,
		dots: true,
		breakpoints: {
			320: {
			  slidesPerView: 1,
			  spaceBetween: 20
			},
			575: {
			  slidesPerView: 2,
			  spaceBetween: 20
			},
			900: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			1199: {
			  slidesPerView: 3,
			  spaceBetween: 24
			},
			1600: {
				slidesPerView: 3,
				spaceBetween: 24
			  }
		  },
		  pagination: {
			el: ".cmn-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: '.cmn-button-next',
			prevEl: '.cmn-button-prev',
		},
	});
	//company sponsor
	var swiper = new Swiper(".sponsor__slider", {
		autoplay: 1000,
		speed: 200,
		spaceBetween: 24,
		autoplay: true,
		slidesPerView: 4,
		loop: false,
		smartspeed: 1000,
		nav: false,
		dots: false,
		breakpoints: {
			320: {
			  slidesPerView: 2,
			  spaceBetween: 20
			},
			575: {
			  slidesPerView: 4,
			  spaceBetween: 20
			},
			900: {
				slidesPerView: 5,
				spaceBetween: 20
			},
			1199: {
			  slidesPerView: 5,
			  spaceBetween: 24
			},
			1600: {
				slidesPerView: 6,
				spaceBetween: 24
			  }
		  }
	});
	//testimonial slider
	var swiper = new Swiper(".testimonial__slider", {
		autoplay: 1000,
		speed: 200,
		spaceBetween: 24,
		autoplay: false,
		slidesPerView: 1,
		loop: false,
		smartspeed: 1000,
		nav: true,
		dots: true,
		breakpoints: {
			320: {
			  slidesPerView: 1,
			  spaceBetween: 20
			},
			575: {
			  slidesPerView: 2,
			  spaceBetween: 20
			},
			900: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			1199: {
			  slidesPerView: 2,
			  spaceBetween: 24
			},
			1600: {
				slidesPerView: 2,
				spaceBetween: 24
			  }
		  },
		  pagination: {
			el: ".cmn-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: '.cmn-button-next5',
			prevEl: '.cmn-button-prev5',
		}
	});
	//channel slider
	var swiper = new Swiper(".world__leaguesslider", {
		autoplay: 1000,
		speed: 200,
		spaceBetween: 24,
		autoplay: false,
		slidesPerView: 1,
		loop: false,
		smartspeed: 1000,
		nav: true,
		dots: true,
		breakpoints: {
			320: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			380: {
				slidesPerView: 4,
				spaceBetween: 20
			},
			450: {
				slidesPerView: 5,
				spaceBetween: 20
			},
			575: {
				slidesPerView: 4,
				spaceBetween: 20
			},
			900: {
				slidesPerView: 5,
				spaceBetween: 20
			},
			1199: {
				slidesPerView: 6,
				spaceBetween: 24
			},
			1560: {
				slidesPerView: 6,
				spaceBetween: 24
			},
			1600: {
				slidesPerView: 7,
				spaceBetween: 24
			},
			1700: {
				slidesPerView: 8,
				spaceBetween: 24
				},
			1800: {
				slidesPerView: 9,
				spaceBetween: 24
			},
			1850: {
				slidesPerView: 11,
				spaceBetween: 24
			}
			},
			pagination: {
			el: ".cmn-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: '.cmn-button-next7',
			prevEl: '.cmn-button-prev7',
		},
	});
	//world sport main
	var swiper = new Swiper(".world__sportmain", {
		autoplay: 1000,
		speed: 200,
		spaceBetween: 20,
		autoplay: false,
		slidesPerView: 1,
		loop: false,
		smartspeed: 1000,
		nav: true,
		dots: true,
		breakpoints: {
			320: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			380: {
				slidesPerView: 4,
				spaceBetween: 20
			},
			450: {
				slidesPerView: 5,
				spaceBetween: 20
			},
			575: {
				slidesPerView: 4,
				spaceBetween: 20
			},
			900: {
				slidesPerView: 5,
				spaceBetween: 20
			},
			1199: {
				slidesPerView: 6,
				spaceBetween: 24
			},
			1560: {
				slidesPerView: 6,
				spaceBetween: 24
			},
			1600: {
				slidesPerView: 7,
				spaceBetween: 24
			},
			1700: {
				slidesPerView: 8,
				spaceBetween: 24
				},
			1800: {
				slidesPerView: 9,
				spaceBetween: 24
			},
			1850: {
				slidesPerView: 10,
				spaceBetween: 15
			}
			},
			pagination: {
			el: ".cmn-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: '.cmn-button-next8',
			prevEl: '.cmn-button-prev8',
		},
	});
	
	
	// price change--
	$(".custom-switch").each(function(i) {
		var classes = $(this).attr("class"),
			id      = $(this).attr("id"),
			name    = $(this).attr("name");
		
		$(this).wrap('<div class="custom-switch" id="' + name + '"></div>');
		  $(this).after('<label for="custom-switch-' + i + '"></label>');
		$(this).attr("id", "custom-switch-" + i);
		$(this).attr("name", name);
	  });
	  $(".custom-switch input").change(function() {
		$(".pricing-tables").toggleClass("plans--annually");
	  });
	// price change--

	// password hide--
	$(".toggle-password").click(function() {
		console.log('toggle click');
		$(this).toggleClass("fa-eye fa-eye-slash");
		var input = $("#password-field");
		if (input.attr("type") == "password") {
		  input.attr("type", "text");
		} else {
		  input.attr("type", "password");
		}
	  });
	// password hide--

	//--Nice Select--
	$('select').niceSelect();
	//--Nice Select--

	 // User Active
	 $('.header-section .sidebar-icon').on('click', function() {
		$('.sidebar-wrapper').toggleClass('active');
		$(".header-wrapper").toggleClass("body-collapse");
		$(".main__body").toggleClass("body-collapse");
		$(".banner__slide__wrap").toggleClass("body-collapse");
	});

	// Sidebar Wrapper Close
	$(".sidebar-wrapper .closebtn,.closebts__two").on("click", function() {
		$(".sidebar-wrapper").toggleClass("active");
		$(".header-wrapper").toggleClass("body-collapse");
		$(".main__body").toggleClass("body-collapse");
		$(".banner__slide__wrap").toggleClass("body-collapse");
	});

	//menu top fixed bar
	var fixed_top = $(".header-wrapper");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 0) {
			fixed_top.addClass("menu-fixed");
			fixed_top.removeClass("slideInUp");
			$("body").addClass("body-padding");
		} else {
			fixed_top.removeClass("menu-fixed");
			fixed_top.addClass("slideInUp");
			$("body").removeClass("body-padding");
		}
	});
	//menu top fixed bar
  

	//--Header Menu
	// $(".header-bar").on("click", function (e) {
	// 	$(".main-menu, .header-bar").toggleClass("active");
	// });
	// $(".main-menu li a").on("click", function (e) {
	// 	var element = $(this).parent("li");
	// 	if (element.hasClass("open")) {
	// 		element.removeClass("open");
	// 		element.find("li").removeClass("open");
	// 		element.find("ul").slideUp(300, "swing");
	// 	} else {
	// 		element.addClass("open");
	// 		element.children("ul").slideDown(300, "swing");
	// 		element.siblings("li").children("ul").slideUp(300, "swing");
	// 		element.siblings("li").removeClass("open");
	// 		element.siblings("li").find("li").removeClass("open");
	// 		element.siblings("li").find("ul").slideUp(300, "swing");
	// 	}
	// });

	$(".scrollToTop").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			700
		);
		return false;
	});
	//--Header Menu--



	//banner
	// use swipper slider

	//--Magnifiqpopup--
	$('.video-btn').magnificPopup({
		type: 'iframe',
		callbacks: {
			
	  	}
	});

	//--Magnifiqpopup--

	//--Odometer--
	$(".odometer-item").each(function () {
		$(this).isInViewport(function (status) {
			if (status === "entered") {
				for (
					var i = 0;
					i < document.querySelectorAll(".odometer").length;
					i++
				) {
					var el = document.querySelectorAll(".odometer")[i];
					el.innerHTML = el.getAttribute("data-odometer-final");
				}
			}
		});
	});
	//--Odometer--



	//--check menu

	//--check menu

	//--Wow Animation--
	new WOW().init();
	//--Wow Animation--

	//--reply box--
	$(".reply").on("click", function () {
		$(this).toggleClass("reply-active");
		$(this).parent().next(".reply__content").slideToggle();
	});
	//--reply box--

	//--clickable menu--
	$(".mclick").on("click", function () {
		$(this).toggleClass("reply-active");
		$(this).parent().next(".menucontent").slideToggle();
	});
	//--clickable menu--

	//--Preloader--//
	setTimeout(function(){
		$('.preloader__wrap').fadeToggle();
	}, 1000);
	//--Preloader--//

	// --search popup--
	// var openButton = document.getElementById('searchBtn');
	// var popup = document.getElementById('searchPopup');
	// var closeButton = document.getElementById('closeButton');

	// openButton.addEventListener('click', function() {
	// popup.classList.add('open');
	// });

	// closeButton.addEventListener('click', function() {
	// popup.classList.add('close');
	// setTimeout(function() {
	// 	popup.classList.remove('open', 'close');
	// }, 100); 
	// });
	//--search popup--//
	$('.video').playVideo();

	

});


	




				 

