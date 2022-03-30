/* Nav section */

// Hamburger menu setup
const hamMenu = document.getElementById('hamburger-menu');
const navLinksMobile = document.getElementById('nav-links-mobile');
const topBun = document.getElementById('top-bun');
const bottomBun = document.getElementById('bottom-bun');

const toggleHamMenu = () => {
  hamMenu.className === '' ? hamMenu.className = 'active' : hamMenu.className = '';
  if (hamMenu.className === 'active') {
    topBun.className = 'hamburger top-collapse';
    bottomBun.className = 'hamburger bottom-collapse';
  } else {
    topBun.className = 'hamburger';
    bottomBun.className = 'hamburger';
  }
  navLinksMobile.className === 'inactive' ? navLinksMobile.className = 'active' : navLinksMobile.className = 'inactive';
};

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
