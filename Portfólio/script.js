const links = document.querySelectorAll(".menu a");

links.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const section = document.querySelector(link.hash);
    section.scrollIntoView({ behavior: "smooth" });
  });
});
var btn=document.querySelector(".button1");
btn.onmousemove=function(e){
  var x=e.pageX - btn.offsetLeft;
  var y=e.pageY - btn.offsetTop;

  btn.style.setProperty('--eixoX',x + 'px')
  btn.style.setProperty('--eixoY',y + 'px')
}