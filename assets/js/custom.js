document.addEventListener("DOMContentLoaded", function(){
    // if (window.innerWidth > 992) {
    //     document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    //         everyitem.addEventListener('mouseover', function(e){
    //             let el_link = this.querySelector('a[data-bs-toggle]');
    //             if(el_link != null){
    //                 let nextEl = el_link.nextElementSibling;
    //                 el_link.classList.add('show');
    //                 nextEl.classList.add('show');
    //             }
    //         });
            
    //         everyitem.addEventListener('mouseleave', function(e){
    //             let el_link = this.querySelector('a[data-bs-toggle]');
    //             if(el_link != null){
    //                 let nextEl = el_link.nextElementSibling;
    //                 el_link.classList.remove('show');
    //                 nextEl.classList.remove('show');
    //             }
    //         })
    //     });
    // }

    if (window.innerWidth < 992) {

        // close all inner dropdowns when parent is closed
        document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
            everydropdown.addEventListener('hidden.bs.dropdown', function () {
                // after dropdown is hidden, then find all submenus
                  this.querySelectorAll('.submenu').forEach(function(everysubmenu){
                      // hide every submenu as well
                      everysubmenu.style.display = 'none';
                  });
            })
        });
        
        document.querySelectorAll('.dropdown-menu a').forEach(function(element){
            element.addEventListener('click', function (e) {
    
                  let nextEl = this.nextElementSibling;
                  if(nextEl && nextEl.classList.contains('submenu')) {	
                      // prevent opening link if link needs to open dropdown
                      e.preventDefault();
                      console.log(nextEl);
                      if(nextEl.style.display == 'block'){
                          nextEl.style.display = 'none';
                      } else {
                          nextEl.style.display = 'block';
                      }

                  }
            });
        })
    }
}); 