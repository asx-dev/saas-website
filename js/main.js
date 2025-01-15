document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");

  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = group.querySelector("i");

    // Toggle icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // Toggle group body
    groupBody.classList.toggle("open");

    // Close other open groups
    const otherOpenGroups = faqContainer.querySelectorAll(".faq-group");

    otherOpenGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherIcon = otherGroup.querySelector("i");
        // Close body and icon
        otherGroupBody.classList.remove("open");
        otherIcon.classList.remove("fa-plus");
        otherIcon.classList.add("fa-minus");
      }
    });
  });
});

// Mobile menu

const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
menuButton.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
  menuIcon.classList.toggle("fa-bars");
  menuButton.classList.toggle("fa-x");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50 && menu.classList.contains("open-menu")) {
    menu.classList.remove("open-menu");
    menuIcon.classList.toggle("fa-bars");
    menuButton.classList.toggle("fa-x");
  }
});
