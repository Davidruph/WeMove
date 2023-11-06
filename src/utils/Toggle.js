export const handleSidebarToggle = () => {
  document.body.classList.toggle("sidebar-toggled");
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    sidebar.classList.toggle("toggled");
  }
};

export const handleResize = () => {
  if (
    window.innerWidth < 768 ||
    (window.innerWidth < 480 &&
      !document.querySelector(".sidebar").classList.contains("toggled"))
  ) {
    document.body.classList.add("sidebar-toggled");
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.classList.add("toggled");
    }
  }
};

export const handleScroll = () => {
  const scrollToTopElem = document.querySelector(".scroll-to-top");
  if (document.documentElement.scrollTop > 100) {
    scrollToTopElem.style.display = "block";
  } else {
    scrollToTopElem.style.display = "none";
  }
};

export const handleScrollToTop = (e) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");
  const targetTop = document.querySelector(href).offsetTop;
  window.scrollTo({
    top: targetTop,
    behavior: "smooth",
  });
};
