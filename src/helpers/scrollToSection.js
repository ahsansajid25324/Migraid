// src/helpers/scrollToSection.js

/**
 * Scrolls to a section with offset for navbar and updates the URL hash.
 * If not on home page, navigates to home page with hash.
 * @param {string} href - The hash link (e.g., '#about')
 * @param {object} location - The location object from react-router
 */
export function scrollToSection(href, location) {
  // If we're not on home page, navigate to home page with hash
  if (location.pathname !== "/" && location.pathname !== "/home") {
    window.location.href = `/home${href}`;
    return;
  }

  // Get the target section
  const targetId = href.substring(1); // Remove the # character
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    // Get the navbar height to use as offset
    const navbar = document.querySelector("[data-navbar='true']");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    // Calculate the element's position
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset;

    // Scroll to element with offset for navbar
    window.scrollTo({
      top: elementPosition - navbarHeight - 20, // Adding extra 20px margin
      behavior: "smooth",
    });

    // Update URL hash without page jump
    window.history.pushState(null, "", href);
  }
}
