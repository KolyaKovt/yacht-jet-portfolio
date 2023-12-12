(() => {
  const refs = {
    toggleMenuBtn: document.querySelector("#toggle-mobile-menu-btn"),
    menu: document.querySelector("#mobile-menu-container"),
    navLinks: document.querySelectorAll(".page-nav-link"),
    openMenuSvg: document.querySelector("#open-menu-svg"),
    closeMenuSvg: document.querySelector("#close-menu-svg"),
  };

  refs.toggleMenuBtn.addEventListener("click", toggleMenu);
  refs.navLinks.forEach(navLink => {
    navLink.addEventListener("click", closeMenu);
  });

  function closeMenu() {
    refs.menu.classList.add("is-hidden");
    refs.closeMenuSvg.classList.add("is-hidden");
    refs.openMenuSvg.classList.remove("is-hidden");
  }

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.closeMenuSvg.classList.toggle("is-hidden");
    refs.openMenuSvg.classList.toggle("is-hidden");
  }
})();
