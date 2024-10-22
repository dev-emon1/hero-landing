const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");

// Toggle the menu when the hamburger is clicked
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close the menu when clicking outside of it
document.addEventListener("click", function (event) {
  const isClickInside =
    hamburger.contains(event.target) || navLinks.contains(event.target);

  if (!isClickInside) {
    navLinks.classList.remove("active");
  }
});

// Active state for clicked menu item
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
    navLinks.classList.remove("active"); // Close the menu after clicking
  });
});
