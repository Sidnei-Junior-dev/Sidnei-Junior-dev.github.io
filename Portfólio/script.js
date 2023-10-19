const links = document.querySelectorAll(".menu a");

links.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const section = document.querySelector(link.hash);
    section.scrollIntoView({ behavior: "smooth" });
  });
});