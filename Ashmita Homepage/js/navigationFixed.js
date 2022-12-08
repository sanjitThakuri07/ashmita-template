const navHeader = document.querySelector(".section-nav");

const nav = document.querySelector(".nav-btn");

const navHeight = nav.getBoundingClientRect().height;

const options = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerIntesection = new IntersectionObserver(stickyNav, options);

headerIntesection.observe(navHeader);
