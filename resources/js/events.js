
/****************************************************************************
*
* The following script hides the top nav bar once the paged is scrolled
* 
***************************************************************************/

const hideTopNavBar = () => {

    const scrolled = window.scrollY;
    // assigns the window object scrollY property to the variable "scrolled"

    if (scrolled >= 33) {
               
        let sticky = document.querySelector('.js--sticky')
        
        sticky.classList.add('sticky');

        document.querySelector('.sticky').style.cssText = "top: 0;";

    } else if (scrolled < 33) {

        let sticky = document.querySelector('.js--sticky')

        document.querySelector('.sticky').style.cssText = "top: 26.78px; transition: top 0.6s;";

        if (scrolled <= 22 ) {

            sticky.classList.remove('sticky');

        }        
    }            
}


window.addEventListener('scroll', hideTopNavBar);