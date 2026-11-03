// HUMBURGER MENU
const humburger = document.getElementById("humburger");
const navMenu = document.getElementById("navMenu");

humburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
  humburger.classList.toggle("active");
});

// Tutup menu saat link di klik
document.querySelectorAll(".middle-header a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    humburger.classList.remove("active");
  });
});

// GALERI MODAL
const galleryItems = document.querySelectorAll(".gallery-item");
const galleryModal = document.getElementById("galleryModal");
const galleryImage = document.getElementById("galleryModalImage");
const galleryClose = document.querySelector(".gallery-close");

// MEMBUKA GAMBAR
galleryItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const image = item.dataset.image;
    galleryImage.src = image;
    galleryModal.classList.add("show");
  });
});

// TOMBOL CLOSE
galleryClose.addEventListener("click", () => {
  galleryModal.classList.remove("show");
});

// KLIK AREA GELAP
galleryModal.addEventListener("click", (e) => {
  if (e.target === galleryModal) {
    galleryModal.classList.remove("show");
  }
});

// TOMBOL ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    galleryModal.classList.remove("show");
  }
});

// ----------PPDB PARALLAX
const parallaxSection = document.querySelector(".ppdb-section");
const parallaxBg = document.querySelector(".parallax-bg");

window.addEventListener("scroll", () => {
  const sectionTop = parallaxSection.offsetTop;
  const sectionHeight = parallaxSection.offsetHeight;
  const scrollY = window.pageYOffset;

  if (
    scrollY > sectionTop - window.innerHeight &&
    scrollY < sectionTop + sectionHeight
  ) {
    const speed = (scrollY - sectionTop) * 0.35;
    parallaxBg.style.transform = `translateY(${speed}px)`;
  }
});

// ----------BACKGROUND ZOOM
window.addEventListener("scroll", () => {
  const sectionTop = parallaxSection.offsetTop;
  const scroll = window.scrollY;
  const scale = 1 + (scroll - sectionTop) * 0.00015;
  if (scale >= 1 && scale <= 1.12) {
    parallaxBg.style.scale = scale;
  }
});

// -------------SCROLL REVEAL
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.3,
  },
);

document.querySelectorAll(".ppdb-content").forEach((element) => {
  observer.observe(element);
});
