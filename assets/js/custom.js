new WOW().init();

// $(document).ready(function(){
//     $('ul li.dropdown').hover(function() {
//         $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
//     }, function() {
//         $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
//     });
    
//     $(".dropdown").hover(            
//         function() {
//             $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
//             $(this).toggleClass('open');        
//         },
//         function() {
//             $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
//             $(this).toggleClass('open');       
//         }
//     );
// });

window.addEventListener("resize", function() {
	"use strict";
	window.location.reload();
});
document.addEventListener("DOMContentLoaded", function() {
	/////// Prevent closing from click inside dropdown
	document.querySelectorAll('.dropdown-menu').forEach(function(element) {
			element.addEventListener('click', function(e) {
				e.stopPropagation();
			});
		})
		// make it as accordion for smaller screens
	if(window.innerWidth < 992) {
		// close all inner dropdowns when parent is closed
		document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown) {
			everydropdown.addEventListener('hidden.bs.dropdown', function() {
				// after dropdown is hidden, then find all submenus
				this.querySelectorAll('.submenu').forEach(function(everysubmenu) {
					// hide every submenu as well
					everysubmenu.style.display = 'none';
				});
			})
		});
		document.querySelectorAll('.dropdown-menu a').forEach(function(element) {
			element.addEventListener('click', function(e) {
				let nextEl = this.nextElementSibling;
				if(nextEl && nextEl.classList.contains('submenu')) {
					// prevent opening link if link needs to open dropdown
					e.preventDefault();
					console.log(nextEl);
					if(nextEl.style.display == 'block') {
						nextEl.style.display = 'none';
					} else {
						nextEl.style.display = 'block';
					}
				}
			});
		})
	}
});

// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   	if (window.pageYOffset > sticky) {
//     	header.classList.add("sticky");
//   	} else {
//     	header.classList.remove("sticky");
//   	}
// }

// $(window).scroll(function(){
//     if ($(window).scrollTop() >= 100) {
//         $('.main').addClass('fixed-header');
//         $('.main .logo').addClass('visible-title');
//     }
//     else {
//         $('.main').removeClass('fixed-header');
//         $('.main .logo').removeClass('visible-title');
//     }
// });

// $(window).scroll(function() {
//     if ($(this).scrollTop()>10)
//     {
//         $('.top-bar').hide();
// 		$('#logo').removeClass('d-none');
// 		$('#logo').addClass('d-block');
//     }
//     else
//     {
//       	$('.top-bar').show();
// 		$('#logo').removeClass('d-block');
// 		$('#logo').addClass('d-none');
//     }
// });

(function(){

	var doc = document.documentElement;
	var w = window;
  
	var prevScroll = w.scrollY || doc.scrollTop;
	var curScroll;
	var direction = 0;
	var prevDirection = 0;
  
	var header = document.getElementById('site-header');
  
	var checkScroll = function() {
  
		curScroll = w.scrollY || doc.scrollTop;
		if (curScroll > prevScroll) { 
			//scrolled up
			direction = 2;
		}
		else if (curScroll < prevScroll) { 
			direction = 1;
		}
	
		if (direction !== prevDirection) {
			toggleHeader(direction, curScroll);
		}
		
		prevScroll = curScroll;
	};
  
	var toggleHeader = function(direction, curScroll) {
		if (direction === 2 && curScroll > 52) { 
			
			header.classList.add('hide');
			prevDirection = direction;
		}
		else if (direction === 1) {
			header.classList.remove('hide');
			prevDirection = direction;
		}
	};
	
	window.addEventListener('scroll', checkScroll);
  
})();

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
	'use strict'
  
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation')
  
	// Loop over them and prevent submission
	Array.prototype.slice.call(forms)
	.forEach(function (form) {
		form.addEventListener('submit', function (event) {
			if (!form.checkValidity()) {
				event.preventDefault()
				event.stopPropagation()
			}

			form.classList.add('was-validated')
		}, false)
	})
})()

/* Back to Top */

$(document).ready(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 20) {
			$('#toTopBtn').fadeIn();
		} else {
			$('#toTopBtn').fadeOut();
		}
	});
	$('#toTopBtn').click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
});

let captchaText = document.querySelector('#captchatext');

let userText = document.querySelector('#captcha');

let submitButton = document.querySelector('#submit');

let output = document.querySelector('#output');

let alphaNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let emptyArr = [];
for(let i = 1; i <= 6; i++) {
	emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
captchaText.innerHTML = emptyArr.join('');

submitButton.addEventListener('click',  function() {
	if(userText.value === captchaText.innerHTML) {
		output.classList.add("greenText");
		output.innerHTML = "Correct!";
	} else {
		output.classList.add("redText");
		output.innerHTML = "Incorrect, please try again";
	}
});


submitButton.addEventListener('keyup', function(e) {
	if(e.keyCode === 13) {
	if(userText.value === captchaText.innerHTML) {
		console.log("correct!");
		output.classList.add("greenText");
		output.innerHTML = "Correct!";
	} else {
		output.classList.add("redText");
		output.innerHTML = "Incorrect, please try again";
	}
	}
});
