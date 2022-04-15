/* Nav section */

// Hamburger menu setup
const hamMenu = document.getElementById('hamburger-menu');
const navLinksMobile = document.getElementById('nav-links-mobile');
const topBun = document.getElementById('top-bun');
const bottomBun = document.getElementById('bottom-bun');

// Close mobile menu on selection 

const aboutMobile = document.getElementById("about-mobile");
const contactMobile = document.getElementById("contact-mobile");

const toggleMobileNav = () => {
  navLinksMobile.className === 'inactive' ? navLinksMobile.className = 'active' : navLinksMobile.className = 'inactive';
};

// Toggle ham menu styling
const toggleHamMenu = () => {
  hamMenu.className === '' ? hamMenu.className = 'active' : hamMenu.className = '';
  if (hamMenu.className === 'active') {
    topBun.className = 'hamburger top-collapse';
    bottomBun.className = 'hamburger bottom-collapse';
  } else {
    topBun.className = 'hamburger';
    bottomBun.className = 'hamburger';
  }
};

aboutMobile.addEventListener('click', toggleMobileNav);
aboutMobile.addEventListener('click', toggleHamMenu);
contactMobile.addEventListener('click', toggleMobileNav);
contactMobile.addEventListener('click', toggleHamMenu);
hamMenu.addEventListener('click', toggleMobileNav);
hamMenu.addEventListener('click', toggleHamMenu);

// Remove mobile menus on resize

const resetToDesktop = () => {
  if (window.innerWidth >= 850) {
    navLinksMobile.className = 'inactive';
    topBun.className = 'hamburger';
    bottomBun.className = 'hamburger';
    hamMenu.className = '';
  }
};

window.addEventListener('resize', resetToDesktop);
