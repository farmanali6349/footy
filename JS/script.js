
// FOR MOBILE MENU
// ------------------------------ DECLARATION -------------------------------
// ------------------- (MAIN)
// navbar 
const navbar = document.getElementById('navbar2'); /* Slider 01*/
// link in navbar
const mainLinks = document.querySelectorAll('.menu ul li a');
// Sub Menu
const subMenu = document.querySelectorAll('.sub-menu');
// Main Top of sub menu ^
const mainTop = document.querySelectorAll('.top a');
// ------------------- (SUB)
// sub navbar
const subNavbar = document.querySelectorAll('.inner-menu'); /* Slider 02*/
// links in sub-navbar
const subLinks = document.querySelectorAll('.inner-main-menu .links a');
// inner sub Menu
const innerSubMenu = document.getElementsByClassName('inner-sub-menu');
// Sub Top of innerSubMenu
const subTop = document.querySelectorAll('.inner-top a');

// ------------------------------------- GETTING SCREEN-SIZES ----------------------------
window.addEventListener('resize', ()=> {
    const screen = window.innerWidth;
})
// ---------------------------------------------------------------------------------------

// ------------------------------ IMPLIMENTATION -------------------------------

// --- Making all SUB MENU & inner SUB MENU to 'NONE' ---
// - SUB MENU -
for (let i=0; i<subMenu.length; i++) {
    subMenu[i].style.display = 'none';
}

// logo to home page
const logo = document.getElementsByClassName('logo');

for(let i=0; i<2; i++) {
    logo[i].addEventListener('click', goHome);
}

function goHome() {
    window.location.href = '../index.html';
}

// - inner SUB MENU -
for (let i=0; i<innerSubMenu.length; i++) {
    innerSubMenu[i].style.display = 'none';
}

// --- sliding FARWORD 'navbar' & making SUB MENU to 'block' ---

for (let i=0; i<mainLinks.length; i++) {
    mainLinks[i].addEventListener('click', slideNavbar);
    function slideNavbar() {
        if (innerWidth > 400) {
            navbar.style.transform = 'translateX(-400px)';
        } else {
            navbar.style.transform = 'translateX(-300px)';
        }
        
        subMenu[i].style.display = 'block';
    }
}

// --- sliding BACKWARD 'navbar' & making SUB MENU to 'none' also resetting the subNavbar ---

for (let i=0; i<mainTop.length; i++) {
    mainTop[i].addEventListener('click', slideNavbar);
    function slideNavbar() {
        navbar.style.transform = 'translateX(0px)';
        setTimeout(()=>{
            subMenu[i].style.display = 'none';
            subNavbar[i].style.transform = 'translateX(0px)';
        }, 500)
    }
}


// --- sliding FARWORD 'sub navbar' & making inner SUB MENU to 'block' ---

for (let i=0; i<subLinks.length; i++) {
    subLinks[i].addEventListener('click', slideForwardSubNavbar);
    function slideForwardSubNavbar() {
        
        // creating conditions for subNavbar
        if(i>=0 && i<=3) {
            if (innerWidth > 400) {
                subNavbar[i-i].style.transform = 'translateX(-400px)';
            }
            else {
                subNavbar[i-i].style.transform = 'translateX(-300px)';
            }
        }
        if(i>=4 && i<=7) {
            if (innerWidth > 400) {
                subNavbar[i-(i-1)].style.transform = 'translateX(-400px)';
            } else {
                subNavbar[i-(i-1)].style.transform = 'translateX(-300px)';
                
            }
        }
        if(i>=8 && i<=11) {
            if (innerWidth > 400) {
                subNavbar[i-(i-2)].style.transform = 'translateX(-400px)';
            } else {
                subNavbar[i-(i-2)].style.transform = 'translateX(-300px)';
            }
        }
        if(i>=12 && i<=15) {
            if (innerWidth > 400) {
                subNavbar[i-(i-3)].style.transform = 'translateX(-400px)';
            } else {
                subNavbar[i-(i-3)].style.transform = 'translateX(-300px)';
            }
        }
        innerSubMenu[i].style.display = 'block';
    }
}

// --- sliding BACKWARD 'sub navbar' & making inner SUB MENU to 'none' ---

for (let i=0; i<subTop.length; i++) {
    subTop[i].addEventListener('click', slideBackSubNavbar);
    function slideBackSubNavbar() {
        // creating conditions for subNavbar
        if(i>=0 && i<=3) {
            subNavbar[i-i].style.transform = 'translateX(0px)';
        }
        if(i>=4 && i<=7) {
            subNavbar[i-(i-1)].style.transform = 'translateX(0px)';
        }
        if(i>=8 && i<=11) {
            subNavbar[i-(i-2)].style.transform = 'translateX(0px)';
        }
        if(i>=12 && i<=15) {
            subNavbar[i-(i-3)].style.transform = 'translateX(0px)';
        }
        setTimeout(()=>{
            innerSubMenu[i].style.display = 'none';
        }, 500)
    }
}

// Opening and Closing the Navbar
const tabMobileNav = document.getElementById('tab-mobile-nav');
function openMenu() {
    tabMobileNav.style.right = '0px';
}

function closeMenu() {
    // closing the .sub-sort as well
    subSort.style.display = 'none';
    if (innerWidth > 400) {
        tabMobileNav.style.right = '-400px';
    } else {
        tabMobileNav.style.right = '-300px';
    }
    // resetting the tabs of navbar and sub navbars
    if (navbar.style.transform == 'translateX(-400px)' || navbar.style.transform == 'translateX(-300px)') {
        setTimeout(()=> {
            navbar.style.transform = 'translateX(0px)';
            // making the sub menues to display none
            subMenu.forEach(element => {
                element.style.display = 'none';
            })
        }, 500)
    }
    
       
    for (let i = 0; i < subNavbar.length; i++) {
        if(subNavbar.style.transform == 'translateX(-400px)' || subNavbar.style.transform == 'translateX(-300px)') {
            setTimeout(()=> {
                subNavbar[i].style.transform = 'translateX(0px)';
                innerSubMenu.forEach(element=> {
                    element.style.display = 'none';
                })
               }, 500)
               console.log(`subNavbar${i}`);
        }
    }
    
}

// fixing the position apect of the navbar in the tablet screen
const mainNavbar = document.getElementById('navbar');

window.onscroll = () => {
    if(window.scrollY >= 500) {
        mainNavbar.style.position = 'fixed';
    } else {
        mainNavbar.style.position = 'sticky';
    }
}


// JS for sort icon in the navbar
const sort = document.querySelector('.sort.sub');
const subSort = document.querySelector('.sort.sub div.sub-sort');

subSort.style.display = 'none';

sort.addEventListener('click', ()=> {
    if(subSort.style.display == 'none') {
        subSort.style.display = 'block';
    } else {
        subSort.style.display = 'none';
    }
})

let menu = document.querySelector('div.menu');
menu.addEventListener('click', ()=> {
    subSort.style.display = 'none';
})
