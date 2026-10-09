// Argonaut Motor Co. — small interactions for the static site
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Tutup navigasi" : "Buka navigasi");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Buka navigasi");
      });
    });
  }

  // Filter collection cards by category.
  const filterButtons = document.querySelectorAll(".filter-btn");
  const bikeCards = document.querySelectorAll(".bike-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));

      bikeCards.forEach((card) => {
        const shouldShow = selected === "all" || card.dataset.category === selected;
        card.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });

  // Keep the footer year current.
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  // Replace this placeholder with the dealer's WhatsApp number, e.g. 6281234567890.
  const whatsappNumber = "";
  const contactLink = document.querySelector("#contact-link");
  if (contactLink && whatsappNumber) {
    contactLink.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo Argonaut Motor, saya ingin bertanya tentang koleksi motor.")}`;
  }
});
