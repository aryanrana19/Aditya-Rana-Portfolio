document.addEventListener("DOMContentLoaded", function() {
  const heroText = document.querySelector('.hero-text');
  const heroImg = document.querySelector('.hero-img img');
  const h2 = document.querySelector('h2');
  

  heroText.classList.add('visible');
  heroImg.classList.add('visible');

  setTimeout(() => {
    h2.classList.add('visible');
}, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-menu a");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");

      // If the href is "#" or empty, do nothing
      if (!href || href === "#") {
        console.log("Blank anchor detected. No action taken.");
        return;
      }

      const currentPath = window.location.pathname;
      const currentHref = window.location.href;

      // Resolve the full URL of the link
      const linkUrl = new URL(href, window.location.origin);

      // Compare the link's URL with the current page's URL
      const isSamePage = (
        linkUrl.pathname === currentPath &&
        linkUrl.search === window.location.search &&
        linkUrl.hash === window.location.hash
      );

      if (isSamePage) {
        console.log("Link points to the current page. No transition.");
        return; // Do nothing if the link points to the current page
      }

      console.log("Navigating to a different page.");

      // Add the transition class to the body
      document.body.classList.add("page-transition");

      // Delay the navigation to allow the transition to play
      setTimeout(() => {
        // Navigate to the new page
        window.location.href = href;
      }, 500); // Adjust the timeout duration to match the length of your transition
    });
  });

  // Remove the transition class on page load
  window.addEventListener("load", () => {
    document.body.classList.remove("page-transition");
  });
});

