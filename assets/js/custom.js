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